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
      <script type="text/javascript">
        (function() {
          const baseUrl = ${appPublicBaseHref};
          const current = baseUrl.slice(-1) === '/' ? baseUrl.slice(0, -1) : baseUrl;
          const updateUrlIfValid = (baseUrl, search) => {
            if (/^\\?\\/.+/.test(search)) {
              history.replaceState(null, '', baseUrl + search.replace('?', ''));
            }
          };
          updateUrlIfValid(current, location.search);
        })();
      </script>
    `;
  }

  if (filename.endsWith('/404.html')) {
    return `
      <script type="text/javascript">
        (function() {
          const baseUrl = ${appPublicBaseHref};
          const current = baseUrl.slice(-1) === '/' ? baseUrl.slice(0, -1) : baseUrl;
          const generateNewUrl = (baseUrl) => baseUrl + "/?" + location.pathname;
          location.replace(generateNewUrl(current));
        })();
      </script>
    `;
  }
};

export default addScriptPlugin;
