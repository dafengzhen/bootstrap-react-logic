import { type ReactNode, useContext } from 'react';
import clsx from 'clsx';
import CustomSimpleCardLink from '@components/custom-simple-card-link.tsx';
import { GlobalContext } from '@contexts/global-context.ts';

export default function CustomSimpleCard({
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
}) {
  const globalContext = useContext(GlobalContext);
  const fullscreen = globalContext.fullscreen?.[0];
  const dark = globalContext.theme?.[0] === 'dark';

  function onClickClipboard() {
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
    }
  }

  function onClickFullscreen() {
    const { fullscreen: fullscreenState } = globalContext;

    if (fullscreenState !== undefined) {
      const setFullscreen = fullscreenState[1];
      setFullscreen(!fullscreen);
    }
  }

  function onClickTheme() {
    const { theme: themeState } = globalContext;

    if (themeState !== undefined) {
      const setTheme = themeState[1];
      const value = dark ? 'light' : 'dark';
      setTheme(value);
      document.documentElement.setAttribute('data-bs-theme', value);
    }
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <CustomSimpleCardLink title={title} hash={hash} />
          </div>
          <div className="d-flex gap-2">
            <i
              className="bi bi-code tw-cursor-pointer"
              onClick={toggleCode}
            ></i>
            <i
              className="bi bi-clipboard2 tw-cursor-pointer"
              onClick={onClickClipboard}
            ></i>
            <i
              className={clsx(
                'bi tw-cursor-pointer',
                fullscreen
                  ? 'bi-fullscreen-exit text-primary'
                  : 'bi-fullscreen',
              )}
              onClick={onClickFullscreen}
            ></i>

            <i
              className={clsx(
                'bi tw-cursor-pointer',
                dark ? 'bi-moon-stars-fill text-primary' : 'bi-brightness-high',
              )}
              onClick={onClickTheme}
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
}
