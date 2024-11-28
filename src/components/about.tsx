import ExampleLink from '@components/example-link.tsx';
import { Trans, useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation(['about']);

  return (
    <div className="card">
      <div className="card-header">
        <ExampleLink hash="other" title={t('other')} />
      </div>
      <div className="card-body">
        <div>
          <p className="small">
            <Trans i18nKey="p1" t={t}></Trans>
          </p>
          <p className="small">
            <Trans i18nKey="p2" t={t}></Trans>
          </p>
          <p className="small">
            <Trans
              components={[<code>className</code>, <code>style</code>, <code>slot</code>]}
              i18nKey="p3"
              t={t}
            ></Trans>
          </p>
          <p className="small">
            <Trans i18nKey="p4" t={t}></Trans>
          </p>
          <p className="small">
            <Trans
              components={[
                <a className="small" href="https://github.com/dafengzhen/bootstrap-react-logic/issues" target="_blank">
                  issue
                </a>,
              ]}
              i18nKey="p5"
              t={t}
            ></Trans>
          </p>
        </div>
      </div>
    </div>
  );
}
