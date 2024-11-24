import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useTranslation, Trans } from 'react-i18next';
import Markdown from 'react-markdown';

import readmeZh from '../../README.zh.md?raw';
import readme from '../../README.md?raw';

export default function IndexPage() {
  const { t: tIndexPage } = useTranslation(['indexPage']);

  const { i18n } = useTranslation();
  const language = i18n.language;

  return (
    <div className="d-flex flex-column gap-3">
      <div className="card">
        <div className="card-header">
          <div className="d-flex align-items-center justify-content-between">
            <div>Getting started</div>
            <div className="d-flex align-items-center gap-2">
              <a href="https://github.com/dafengzhen/bootstrap-react-logic" className="link-dark" target="_blank">
                <i className="bi bi-github tw-cursor-pointer"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="mb-4 display-6">
            <Trans t={tIndexPage} i18nKey="p0" />
          </div>

          <Markdown
            components={{
              code(props) {
                const { className, children, ...rest } = props;
                const match = /language-(\w+)/.exec(className || '');
                return match ? (
                  <SyntaxHighlighter
                    {...(rest as any)}
                    children={String(children).replace(/\n$/, '')}
                    style={stackoverflowDark}
                    language={match[1]}
                    PreTag="div"
                  />
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
            }}
            children={language === 'en' ? readme : readmeZh}
          />
        </div>
      </div>
    </div>
  );
}
