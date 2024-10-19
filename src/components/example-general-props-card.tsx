import { Trans, useTranslation } from 'react-i18next';
import ExamplePropsCard from '@components/example-props-card.tsx';

export default function ExampleGeneralPropsCard(props: any) {
  const { t } = useTranslation(['genericComponentProps']);

  return (
    <ExamplePropsCard
      customBody
      items={[
        {
          attr: 'as',
          type: <span className="badge text-bg-secondary">ElementType</span>,
          desc: t('desc.as'),
          default: '',
        },
        {
          attr: 'dropOldClass',
          type: <span className="badge text-bg-secondary">boolean</span>,
          desc: t('desc.dropOldClass'),
          default: '',
        },
        {
          attr: 'variables',
          type: <span className="badge text-bg-secondary">CSSProperties</span>,
          desc: t('desc.variables'),
          default: '',
        },
      ]}
      customCaption={
        <div className="d-flex gap-2">
          <div>
            <i className="bi bi-info-circle text-info"></i>
          </div>
          <div className="d-flex flex-column gap-2">
            <div className="d-flex flex-column gap-2">
              <div>
                <Trans t={t} i18nKey="p0"></Trans>
              </div>
              <div>
                <Trans t={t} i18nKey="p1"></Trans>
              </div>
            </div>

            <hr className="w-50" />

            <div className="d-flex flex-column gap-2">
              <div>
                <Trans t={t} i18nKey="p4"></Trans>
              </div>
              <div>
                <Trans t={t} i18nKey="p5"></Trans>
              </div>
              <div>
                <Trans t={t} i18nKey="p6"></Trans>
              </div>
            </div>
          </div>
        </div>
      }
      {...props}
    ></ExamplePropsCard>
  );
}
