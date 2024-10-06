import CustomSimpleCardLink from '@components/custom-simple-card-link.tsx';
import { Trans, useTranslation } from 'react-i18next';

export default function AboutComponent() {
  const { t } = useTranslation(['about']);

  return (
    <div className="card">
      <div className="card-header">
        <CustomSimpleCardLink title={t('other')} hash="other" />
      </div>
      <div className="card-body">
        <div>
          <p className="small">
            <Trans t={t} i18nKey="p1"></Trans>
          </p>
          <p className="small">
            <Trans t={t} i18nKey="p2"></Trans>
          </p>
          <p className="small">
            <Trans
              t={t}
              i18nKey="p3"
              components={[
                <code>className</code>,
                <code>style</code>,
                <code>slot</code>,
              ]}
            ></Trans>
          </p>
          <p className="small">
            <Trans t={t} i18nKey="p4"></Trans>
          </p>
          <p className="small">
            <Trans
              t={t}
              i18nKey="p5"
              components={[
                <a
                  href="https://github.com/dafengzhen/bootstrap-react-logic/issues"
                  target="_blank"
                  className="small"
                >
                  issue
                </a>,
              ]}
            ></Trans>
          </p>
        </div>
      </div>
    </div>
  );
}
