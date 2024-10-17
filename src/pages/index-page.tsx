import useHighlightCode from '@hooks/use-highlight-code.ts';
import clsx from 'clsx';
import { Trans, useTranslation } from 'react-i18next';

const onClickLanguage = (i18n: any) => {
  const language = i18n.language;
  i18n.changeLanguage(language === 'en' ? 'zh' : 'en');
};

export default function IndexPage() {
  const { t: tIndexPage } = useTranslation(['indexPage']);

  useHighlightCode();

  const { i18n } = useTranslation();
  const language = i18n.language;

  return (
    <div className="d-flex flex-column gap-3">
      <div className="card">
        <div className="card-header">
          <div className="d-flex align-items-center justify-content-between">
            <div>Getting started</div>
            <div className="d-flex gap-2">
              <a href="https://github.com/dafengzhen/bootstrap-react-logic" target="_blank" className="link-dark">
                <i className="bi bi-github tw-cursor-pointer"></i>
              </a>

              <i
                title="En / Zh"
                className={clsx(
                  'bi tw-cursor-pointer',
                  language !== 'en' ? 'bi-translate text-primary' : 'bi-translate',
                )}
                onClick={() => onClickLanguage(i18n)}
              ></i>
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="mb-4 display-6">
            <Trans t={tIndexPage} i18nKey="p0" />
          </div>

          <div className="mb-4">
            <div className="card-title">
              <Trans
                t={tIndexPage}
                i18nKey="p1"
                components={[
                  <a href="https://react.dev" target="_blank">
                    &nbsp;React&nbsp;
                  </a>,
                  <a href="https://getbootstrap.com" target="_blank">
                    &nbsp;Bootstrap&nbsp;
                  </a>,
                ]}
              />
            </div>

            <div className="card-text">
              <Trans t={tIndexPage} i18nKey="p2" />
            </div>
          </div>

          <div className="h5 mb-4">
            <Trans t={tIndexPage} i18nKey="p3" />
          </div>
          <div className="mb-4">
            <div className="mb-4">
              <Trans t={tIndexPage} i18nKey="p4" />
            </div>

            <div className="mb-2">
              <Trans t={tIndexPage} i18nKey="p5" />
            </div>
            <div className="d-flex gap-2">
              <div className="user-select-none">#</div>
              <pre>
                <code className="nohighlight">
                  npm <span className="text-danger">install&nbsp;</span>
                  bootstrap-react-logic
                </code>
              </pre>
            </div>
          </div>

          <div className="h5 mb-4">
            <Trans t={tIndexPage} i18nKey="p6" />
          </div>
          <div className="mb-4">
            <div className="mb-2">
              <Trans t={tIndexPage} i18nKey="p7.2" />
            </div>
            <div className="mb-4">
              <Trans t={tIndexPage} i18nKey="p7" />
            </div>

            <div className="mb-2">
              <Trans t={tIndexPage} i18nKey="p8" />
            </div>
            <div className="d-flex gap-2">
              <div className="user-select-none">#</div>
              <pre>
                <code className="nohighlight">
                  <span className="text-danger">&lt;Button variant="primary"&gt;Primary&lt;/Button&gt;</span>
                </code>
              </pre>
            </div>
          </div>

          <div className="h5 mb-4">
            <Trans t={tIndexPage} i18nKey="p9" />
          </div>
          <div className="mb-4">
            <div className="mb-2">
              <Trans t={tIndexPage} i18nKey="p10" />
            </div>
            <div>
              <div>
                <Trans t={tIndexPage} i18nKey="p11" />
              </div>
              <div>
                <Trans t={tIndexPage} i18nKey="p12" />
              </div>
              <div>
                <Trans t={tIndexPage} i18nKey="p13" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
