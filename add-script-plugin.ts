import type { Plugin, ResolvedConfig } from 'vite';
import htmlnano from 'htmlnano';

const addScriptPlugin = (): Plugin => {
  let config: ResolvedConfig;

  return {
    name: 'add-script',

    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },

    async transformIndexHtml(html, { filename }) {
      const appPublicBaseHref = (config.define as { __APP_PUBLIC_BASE_HREF__: string })['__APP_PUBLIC_BASE_HREF__'];
      if (!appPublicBaseHref) {
        return html;
      }

      const content = processHtml({ appPublicBaseHref, html, filename });
      if (content) {
        try {
          return (await htmlnano.process(content)).html;
        } catch (error) {
          console.error('Error processing HTML with htmlnano:', error);
        }
      }

      return html;
    },
  };
};

const processHtml = ({
  appPublicBaseHref,
  html,
  filename,
}: {
  appPublicBaseHref: string;
  html: string;
  filename: string;
}) => {
  const scriptContent = getScript(appPublicBaseHref, filename);
  if (scriptContent) {
    return html.replace(/(<title>.*?<\/title>)/, `$1${scriptContent}`);
  }
};

const getScript = (appPublicBaseHref: string, filename: string): string | undefined => {
  if (filename.endsWith('/index.html')) {
    return `
      <script>
        (function() {
          const publicBaseHref = ${appPublicBaseHref};
          const sanitizedBaseHref = publicBaseHref.slice(-1) === '/' ? publicBaseHref.slice(0, -1) : publicBaseHref;

          const replaceUrlIfValid = (baseHref, queryString) => {
            if (/^\\?\\/.+/.test(queryString)) {
              history.replaceState(null, '', baseHref + queryString.replace('?', ''));
            }
          };

          replaceUrlIfValid(sanitizedBaseHref, location.search);
        })();
      </script>
    `;
  }

  if (filename.endsWith('/404.html')) {
    return `
      <script>
        (function() {
          const publicBaseHref = ${appPublicBaseHref};
          const sanitizedBaseHref = publicBaseHref.slice(-1) === '/' ? publicBaseHref.slice(0, -1) : publicBaseHref;

          const removeDuplicateBaseInPath = (baseHref, currentPath) => {
            const baseHrefUrl = new URL(baseHref);
            const baseHrefPath = baseHrefUrl.pathname;
            const duplicateBaseIndex = currentPath.indexOf('/?/');
            if (duplicateBaseIndex === -1) {
              return currentPath;
            }

            const pathBeforeQuery = currentPath.slice(0, duplicateBaseIndex + 2);
            const pathAfterQuery = currentPath.slice(duplicateBaseIndex + 2);

            if (pathAfterQuery.startsWith(baseHrefPath)) {
              const cleanedPathAfterQuery = pathAfterQuery.slice(baseHrefPath.length);
              return pathBeforeQuery + (cleanedPathAfterQuery.startsWith('/') ? cleanedPathAfterQuery : "/" + cleanedPathAfterQuery);
            }

            return currentPath;
          };

          const buildNewUrl = (baseHref) => baseHref + "/?" + location.pathname;

          location.replace(removeDuplicateBaseInPath(publicBaseHref, buildNewUrl(sanitizedBaseHref)));
        })();
      </script>
    `;
  }
};

export default addScriptPlugin;
