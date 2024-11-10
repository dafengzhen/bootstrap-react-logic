import ExamplePropsCard from '@components/example-props-card.tsx';
import { kebabToCamelCase, kebabToCamelCaseLowerFirst } from '@src/tools';
import { Trans, useTranslation } from 'react-i18next';

export default function ExampleGeneralPropsCard(props: any) {
  const { t } = useTranslation(['commonComponentProps']);
  const hash = props.hash;
  const _hash = kebabToCamelCase(hash.endsWith('ComponentProps') ? hash.split('ComponentProps')[0] : hash);
  const _tHash = t(`${kebabToCamelCaseLowerFirst(_hash)}.name`) || _hash;

  return (
    <ExamplePropsCard
      customBody
      customCaption={
        <div className="d-flex gap-2">
          <div>
            <i className="bi bi-info-circle text-info"></i>
          </div>
          <div className="d-flex flex-column gap-2">
            <div className="d-flex flex-column gap-2">
              <div>
                <Trans i18nKey="p0" t={t}></Trans>
              </div>
              <div>
                <Trans i18nKey="p1" t={t}></Trans>
              </div>
            </div>

            <hr className="w-50" />

            <div className="d-flex flex-column gap-2">
              <div>
                <Trans i18nKey="p4" t={t}></Trans>
              </div>
              <div>
                <Trans i18nKey="p5" t={t}></Trans>
              </div>
              <div>
                <Trans i18nKey="p6" t={t}></Trans>
              </div>
            </div>
          </div>
        </div>
      }
      hash={hash}
      items={[
        {
          attr: 'as',
          default: '',
          desc: t('common.desc.as'),
          type: <span className="badge text-bg-secondary">ElementType</span>,
        },
        {
          attr: 'dropOldClass',
          default: '',
          desc: t('common.desc.dropOldClass'),
          type: <span className="badge text-bg-secondary">boolean</span>,
        },
        {
          attr: 'variables',
          default: '',
          desc: t('common.desc.variables'),
          type: <span className="badge text-bg-secondary">CSSProperties</span>,
        },
      ]}
      title={_tHash}
      {...props}
    ></ExamplePropsCard>
  );
}
