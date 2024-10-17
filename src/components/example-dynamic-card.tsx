import { type ReactNode, useContext } from 'react';
import { GlobalContext } from '@contexts/global-context.ts';
import { useTranslation } from 'react-i18next';
import ExampleLink from '@components/example-link.tsx';
import clsx from 'clsx';
import { ActionIcons } from '@components/action-icons.tsx';

export default function ExampleDynamicCard({
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
  const { fullscreen, layout, theme } = globalContext;
  const { i18n } = useTranslation();

  return (
    <div className="card">
      <div className="card-header">
        <div className="d-flex align-items-center justify-content-between">
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
            <code className={clsx(codeLanguage ? `language-${codeLanguage}` : 'language-html')}>{code ?? 'TODO'}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
