import { ActionIcons } from '@components/action-icons.tsx';
import ExampleLink from '@components/example-link.tsx';
import { GlobalContext } from '@contexts/global-context.ts';
import useHighlightCode from '@hooks/use-highlight-code.ts';
import clsx from 'clsx';
import { type ReactNode, useContext } from 'react';
import { useTranslation } from 'react-i18next';

export default function ExampleDynamicCard({
  bg,
  children,
  code,
  codeLanguage,
  dark,
  hash,
  isOpen,
  title,
  toggleCode,
}: {
  bg?: boolean;
  children: ReactNode;
  code?: string;
  codeLanguage?: string;
  dark?: boolean;
  hash: string;
  isOpen: boolean;
  title: string;
  toggleCode: () => void;
}) {
  const globalContext = useContext(GlobalContext);
  const { fullscreen, layout, theme } = globalContext;
  const { i18n } = useTranslation();
  const [setElement] = useHighlightCode({ code, codeLanguage, isOpen });
  const isDark = (theme as any)[0] as 'dark' | 'light';

  if (dark) {
    return (
      <div className="card">
        <div className="card-header">
          <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
            <ExampleLink hash={hash} title={title} />
            <ActionIcons
              center={layout?.[0] === 'center'}
              code={code}
              dark={theme?.[0] === 'dark'}
              fullscreen={fullscreen?.[0]}
              fullscreenState={fullscreen}
              i18n={i18n}
              isOpen={isOpen}
              layoutState={layout}
              onClickCode={toggleCode}
              themeState={theme}
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
          <ExampleLink hash={hash} title={title} />
          <ActionIcons
            center={layout?.[0] === 'center'}
            code={code}
            dark={theme?.[0] === 'dark'}
            fullscreen={fullscreen?.[0]}
            fullscreenState={fullscreen}
            i18n={i18n}
            isOpen={isOpen}
            layoutState={layout}
            onClickCode={toggleCode}
            themeState={theme}
          />
        </div>
      </div>
      <div className={clsx('card-body', bg && 'bg-body-tertiary')}>{children}</div>
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
