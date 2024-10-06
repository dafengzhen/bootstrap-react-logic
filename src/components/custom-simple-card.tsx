import { CSSProperties, type ReactNode, useContext } from 'react';
import clsx from 'clsx';
import CustomSimpleCardLink from '@components/custom-simple-card-link.tsx';
import { GlobalContext } from '@contexts/global-context.ts';

/* eslint-disable @typescript-eslint/no-explicit-any */
const onClickClipboard = (code?: string) => {
  if (code !== undefined && code !== null && code !== '') {
    const _code = code.trim();
    if (
      _code === 'Nodata' ||
      _code === 'nodata' ||
      _code === 'TODO' ||
      _code === 'todo'
    ) {
      alert(_code);
      return;
    }

    navigator.clipboard
      .writeText(_code)
      .then(() => {
        alert('Code copied to clipboard');
      })
      .catch((e) => {
        console.error('Failed to copy code: ', e);
        alert('Failed to copy code: ' + e?.message);
      });
  } else {
    alert('TODO');
  }
};

const onClickFullscreen = (fullscreenState: any) => {
  if (fullscreenState !== undefined) {
    fullscreenState[1](!fullscreenState[0]);
  }
};

const onClickTheme = (themeState: any) => {
  if (themeState !== undefined) {
    const setTheme = themeState[1];
    const value = themeState[0] === 'dark' ? 'light' : 'dark';
    setTheme(value);
    document.documentElement.setAttribute('data-bs-theme', value);
  }
};

const CustomSimpleCard = ({
  title,
  hash,
  isOpen,
  toggleCode,
  children,
  code,
  codeLanguage,
}: {
  title: string;
  hash: string;
  isOpen: boolean;
  toggleCode: () => void;
  children: ReactNode;
  code?: string;
  codeLanguage?: 'html' | 'javascript' | 'typescript' | string;
}) => {
  const globalContext = useContext(GlobalContext);
  const fullscreenState = globalContext.fullscreen;
  const fullscreen = fullscreenState?.[0];
  const themeState = globalContext.theme;
  const dark = themeState?.[0] === 'dark';

  return (
    <div className="card">
      <div className="card-header">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <CustomSimpleCardLink title={title} hash={hash} />
          </div>
          <div className="d-flex gap-2">
            <i
              className={clsx(
                'bi tw-cursor-pointer',
                isOpen ? 'bi-code-slash text-primary' : 'bi-code',
              )}
              onClick={toggleCode}
            ></i>
            <i
              className="bi bi-clipboard2 tw-cursor-pointer"
              onClick={() => onClickClipboard(code)}
            ></i>
            <i
              className={clsx(
                'bi tw-cursor-pointer',
                fullscreen
                  ? 'bi-fullscreen-exit text-primary'
                  : 'bi-fullscreen',
              )}
              onClick={() => onClickFullscreen(fullscreenState)}
            ></i>

            <i
              className={clsx(
                'bi tw-cursor-pointer',
                dark ? 'bi-moon-stars-fill text-primary' : 'bi-brightness-high',
              )}
              onClick={() => onClickTheme(themeState)}
            ></i>
          </div>
        </div>
      </div>
      <div className="card-body">{children}</div>
      <div className={clsx('card-footer', { 'd-none': !isOpen })}>
        <pre>
          <code
            className={clsx(
              codeLanguage ? `language-${codeLanguage}` : 'language-html',
            )}
          >
            {code ?? 'TODO'}
          </code>
        </pre>
      </div>
    </div>
  );
};

const ComponentProps = ({
  title,
  hash,
  children,
  headerClassName,
  customBody,
  colgroup,
  items = [],
  isOpen,
  toggleCode,
  code,
  codeLanguage,
  codeDisplayMode,
  customCaption,
}: {
  title: string;
  hash: string;
  children?: ReactNode;
  customBody?: boolean;
  headerClassName?: string;
  colgroup: {
    attr: CSSProperties;
    type: CSSProperties;
    desc: CSSProperties;
    default: CSSProperties;
  };
  items?: {
    attr: string | ReactNode;
    type?: ReactNode;
    desc?: ReactNode;
    default?: ReactNode;
  }[];
  isOpen: boolean;
  toggleCode: () => void;
  code?: string;
  codeLanguage?: 'html' | 'javascript' | 'typescript' | string;
  codeDisplayMode?: 'direct' | 'indirectly';
  customCaption?: ReactNode;
}) => {
  const globalContext = useContext(GlobalContext);
  const fullscreenState = globalContext.fullscreen;
  const fullscreen = fullscreenState?.[0];
  const themeState = globalContext.theme;
  const dark = themeState?.[0] === 'dark';

  return (
    <div className="card">
      {customBody && children ? (
        children
      ) : (
        <>
          <div className={clsx('card-header', headerClassName)}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <CustomSimpleCardLink title={title} hash={hash} />
              </div>
              <div className="d-flex gap-2">
                <i
                  className={clsx(
                    'bi tw-cursor-pointer',
                    isOpen ? 'bi-code-slash text-primary' : 'bi-code',
                  )}
                  onClick={toggleCode}
                ></i>
                <i
                  className="bi bi-clipboard2 tw-cursor-pointer"
                  onClick={() => onClickClipboard(code)}
                ></i>
                <i
                  className={clsx(
                    'bi tw-cursor-pointer',
                    fullscreen
                      ? 'bi-fullscreen-exit text-primary'
                      : 'bi-fullscreen',
                  )}
                  onClick={() => onClickFullscreen(fullscreenState)}
                ></i>

                <i
                  className={clsx(
                    'bi tw-cursor-pointer',
                    dark
                      ? 'bi-moon-stars-fill text-primary'
                      : 'bi-brightness-high',
                  )}
                  onClick={() => onClickTheme(themeState)}
                ></i>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              'card-body',
              codeDisplayMode === 'direct' && isOpen && 'd-none',
            )}
          >
            <div className="table-responsive">
              <table className="table tw-table-fixed">
                <colgroup>
                  <col style={colgroup.attr} />
                  <col style={colgroup.type} />
                  <col style={colgroup.desc} />
                  <col style={colgroup.default} />
                </colgroup>
                {customCaption && <caption>{customCaption}</caption>}
                <thead>
                  <tr>
                    <th scope="col">Attr</th>
                    <th scope="col">Type</th>
                    <th scope="col">Desc</th>
                    <th scope="col">Default</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => {
                    return (
                      <tr
                        key={typeof item.attr === 'string' ? item.attr : index}
                      >
                        <td>{item.attr}</td>
                        <td>{item.type}</td>
                        <td>{item.desc}</td>
                        <td>{item.default || '-'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      <div
        className={clsx(
          'card-footer',
          codeDisplayMode === 'direct' && isOpen && 'border-top-0',
          {
            'd-none': !isOpen,
          },
        )}
      >
        <pre>
          <code
            className={clsx(
              codeLanguage ? `language-${codeLanguage}` : 'language-html',
            )}
          >
            {code ?? 'TODO'}
          </code>
        </pre>
      </div>
    </div>
  );
};

CustomSimpleCard.ComponentProps = ComponentProps;

export default CustomSimpleCard;
