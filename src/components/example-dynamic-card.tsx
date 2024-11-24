import { GlobalContext } from '@contexts/global-context.ts';
import useHighlightCode from '@hooks/use-highlight-code.ts';
import { ActionIcons } from '@components/action-icons.tsx';
import ExampleLink from '@components/example-link.tsx';
import { type ReactNode, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

export default function ExampleDynamicCard({
  bodyClassName,
  codeLanguage,
  toggleCode,
  children,
  isOpen,
  title,
  code,
  dark,
  hash,
  bg,
}: {
  bodyClassName?: string;
  toggleCode: () => void;
  bg?: boolean | string;
  codeLanguage?: string;
  children: ReactNode;
  isOpen: boolean;
  dark?: boolean;
  code?: string;
  title: string;
  hash: string;
}) {
  const globalContext = useContext(GlobalContext);
  const { fullscreen, layout, theme } = globalContext;
  const { i18n } = useTranslation();
  const [setElement] = useHighlightCode({ codeLanguage, isOpen, code });
  const isDark = (theme as any)[0] as 'light' | 'dark';

  if (dark) {
    return (
      <div className="card">
        <div className="card-header">
          <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
            <ExampleLink title={title} hash={hash} />
            <ActionIcons
              center={layout?.[0] === 'center'}
              dark={theme?.[0] === 'dark'}
              fullscreen={fullscreen?.[0]}
              fullscreenState={fullscreen}
              onClickCode={toggleCode}
              layoutState={layout}
              themeState={theme}
              isOpen={isOpen}
              code={code}
              i18n={i18n}
            />
          </div>
        </div>
        <div className={clsx('card-body', dark && (isDark === 'dark' ? 'p-0' : 'p-1'), bg && 'bg-body-tertiary')}>
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
            center={layout?.[0] === 'center'}
            dark={theme?.[0] === 'dark'}
            fullscreen={fullscreen?.[0]}
            fullscreenState={fullscreen}
            onClickCode={toggleCode}
            layoutState={layout}
            themeState={theme}
            isOpen={isOpen}
            code={code}
            i18n={i18n}
          />
        </div>
      </div>
      <div
        className={clsx('card-body', bg && (typeof bg === 'boolean' ? 'bg-body-tertiary' : `bg-${bg}`), bodyClassName)}
      >
        {children}
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
