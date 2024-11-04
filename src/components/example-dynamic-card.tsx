import { type ReactNode, useContext } from 'react';
import { GlobalContext } from '@contexts/global-context.ts';
import { useTranslation } from 'react-i18next';
import ExampleLink from '@components/example-link.tsx';
import { ActionIcons } from '@components/action-icons.tsx';
import useHighlightCode from '@hooks/use-highlight-code.ts';
import clsx from 'clsx';

export default function ExampleDynamicCard({
  title,
  hash,
  isOpen,
  toggleCode,
  children,
  code,
  codeLanguage,
  dark,
}: {
  title: string;
  hash: string;
  isOpen: boolean;
  toggleCode: () => void;
  children: ReactNode;
  code?: string;
  codeLanguage?: string;
  dark?: boolean;
}) {
  const globalContext = useContext(GlobalContext);
  const { fullscreen, layout, theme } = globalContext;
  const { i18n } = useTranslation();
  const [setElement] = useHighlightCode({ isOpen, code, codeLanguage });
  const isDark = (theme as any)[0] as 'dark' | 'light';

  if (dark) {
    return (
      <div className="card">
        <div className="card-header">
          <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
            <ExampleLink title={title} hash={hash} />
            <ActionIcons
              isOpen={isOpen}
              code={code}
              fullscreen={fullscreen?.[0]}
              fullscreenState={fullscreen}
              layoutState={layout}
              center={layout?.[0] === 'center'}
              themeState={theme}
              dark={theme?.[0] === 'dark'}
              i18n={i18n}
              onClickCode={toggleCode}
            />
          </div>
        </div>
        <div className={clsx('card-body', dark && (isDark === 'dark' ? 'p-0' : 'p-1'))}>
          {dark ? (
            <div className={clsx(isDark !== 'dark' && 'card')} data-bs-theme="dark">
              <div className="card-body">{children}</div>
            </div>
          ) : (
            children
          )}
        </div>
        {isOpen && (
          <div className="card-footer">
            <pre>
              <code ref={setElement}>{code}</code>
            </pre>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
          <ExampleLink title={title} hash={hash} />
          <ActionIcons
            isOpen={isOpen}
            code={code}
            fullscreen={fullscreen?.[0]}
            fullscreenState={fullscreen}
            layoutState={layout}
            center={layout?.[0] === 'center'}
            themeState={theme}
            dark={theme?.[0] === 'dark'}
            i18n={i18n}
            onClickCode={toggleCode}
          />
        </div>
      </div>
      <div className="card-body">{children}</div>
      {isOpen && (
        <div className="card-footer">
          <pre>
            <code ref={setElement}>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
