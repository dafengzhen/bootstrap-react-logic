import { Trans, useTranslation } from 'react-i18next';
import ExamplePropsCard from '@components/example-props-card.tsx';
import { kebabToCamelCase, kebabToCamelCaseLowerFirst } from '@src/tools';

export default function ExampleGeneralPropsCard(props: any) {
  const { t } = useTranslation(['commonComponentProps']);
  const hash = props.hash;
  const _hash = kebabToCamelCase(hash.endsWith('ComponentProps') ? hash.split('ComponentProps')[0] : hash);
  const _tHash = t(`${kebabToCamelCaseLowerFirst(_hash)}.name`) || _hash;

  return (
    <ExamplePropsCard
      title={_tHash}
      hash={hash}
      customBody
      items={[
        {
          attr: 'as',
          type: <span className="badge text-bg-secondary">ElementType</span>,
          desc: t('common.desc.as'),
          default: '',
        },
        {
          attr: 'dropOldClass',
          type: <span className="badge text-bg-secondary">boolean</span>,
          desc: t('common.desc.dropOldClass'),
          default: '',
        },
        {
          attr: 'variables',
          type: <span className="badge text-bg-secondary">CSSProperties</span>,
          desc: t('common.desc.variables'),
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
