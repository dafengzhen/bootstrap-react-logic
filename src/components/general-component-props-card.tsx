import CustomSimpleCard from '@components/custom-simple-card.tsx';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function GeneralComponentPropsCard(props: any) {
  return (
    <CustomSimpleCard.ComponentProps
      title="通用组件属性"
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
        <div className="card mt-4">
          <div className="card-footer border-top-0 text-secondary">
            <div className="px-2 py-2 lh-lg">
              <div className="d-flex gap-2">
                <div>
                  <i className="bi bi-info-circle"></i>
                </div>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex flex-column gap-2">
                    <div>render 和 skipCompWrap 这两个属性的使用意义不大</div>
                    <div>
                      想象一下，我们使用组件库的目的是为了简化开发，而不是重新编写组件
                    </div>
                  </div>

                  <hr className="w-50" />

                  <div className="d-flex flex-column gap-2">
                    <div>dropOldClass 和 variables 属性则更加实用</div>
                    <div>
                      dropOldClass 属性可以移除基础类名，例如 &lt;Button
                      className="btn btn-info"&gt; 会修改为 &lt;Button
                      className="btn-info"&gt;
                    </div>
                    <div>
                      而 variables 属性允许我们自定义 CSS 变量，提升样式的灵活性
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {...props}
    ></CustomSimpleCard.ComponentProps>
  );
}
