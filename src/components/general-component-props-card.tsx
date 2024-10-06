import CustomSimpleCard from '@components/custom-simple-card.tsx';
import { Trans, useTranslation } from 'react-i18next';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function GeneralComponentPropsCard(props: any) {
  const { t } = useTranslation(['genericComponentProps']);

  return (
    <CustomSimpleCard.ComponentProps
      title={t('genericComponentProps')}
      hash="generalComponentProps"
      customBody
      codeLanguage="typescript"
      codeDisplayMode="direct"
      items={[
        {
          attr: 'render',
          type: (
            <span className="badge text-bg-secondary">
              (renderOptions) =&gt; ReactNode
            </span>
          ),
          desc: t('desc.render'),
          default: '',
        },
        {
          attr: 'skipCompWrap',
          type: <span className="badge text-bg-secondary">boolean</span>,
          desc: t('desc.skipCompWrap'),
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
          type: <span className="badge text-bg-secondary">object</span>,
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
                <Trans t={t} i18nKey="p1"></Trans>
              </div>
              <div>
                <Trans t={t} i18nKey="p2"></Trans>
              </div>
            </div>

            <hr className="w-50" />

            <div className="d-flex flex-column gap-2">
              <div>
                <Trans t={t} i18nKey="p3"></Trans>
              </div>
              <div>
                <Trans t={t} i18nKey="p4"></Trans>
              </div>
              <div>
                <Trans t={t} i18nKey="p5"></Trans>
              </div>
            </div>
          </div>
        </div>
      }
      {...props}
    ></CustomSimpleCard.ComponentProps>
  );
}
