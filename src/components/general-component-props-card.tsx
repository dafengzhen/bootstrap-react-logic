import CustomSimpleCard from '@components/custom-simple-card.tsx';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function GeneralComponentPropsCard(props: any) {
  return (
    <CustomSimpleCard.ComponentProps
      title="Generic Component Props"
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
          desc: 'Customize rendering logic',
          default: '',
        },
        {
          attr: 'skipCompWrap',
          type: <span className="badge text-bg-secondary">boolean</span>,
          desc: 'Skip component wrapper',
          default: '',
        },
        {
          attr: 'dropOldClass',
          type: <span className="badge text-bg-secondary">boolean</span>,
          desc: 'Clear original class names',
          default: '',
        },
        {
          attr: 'variables',
          type: <span className="badge text-bg-secondary">object</span>,
          desc: 'Style variables',
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
                The use of the render and skipCompWrap properties isn't very
                meaningful.
              </div>
              <div>
                Just think about it, the purpose of using a component library is
                to simplify development, not to rewrite components.
              </div>
            </div>

            <hr className="w-50" />

            <div className="d-flex flex-column gap-2">
              <div>
                On the other hand, the dropOldClass and variables properties are
                more practical.
              </div>
              <div>
                The dropOldClass property can remove the base class names. For
                example, &lt;Button className="btn btn-info"&gt; would be
                modified to &lt;Button className="btn-info"&gt;.
              </div>
              <div>
                Meanwhile, the variables property allows us to customize CSS
                variables, enhancing the flexibility of styles.
              </div>
            </div>
          </div>
        </div>
      }
      {...props}
    ></CustomSimpleCard.ComponentProps>
  );
}
