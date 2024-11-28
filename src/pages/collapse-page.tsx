import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Collapse } from '@lib/collapse';
import { transformCodeObj } from '@src/tools';
import { MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/collapse/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

export default function CollapsePage() {
  const navigation = useNavigation();
  const { t: tCollapseComponentProps } = useTranslation(['collapseComponentProps']);
  const { t: tCollapsePage } = useTranslation(['collapsePage']);
  const state = useState(codes);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  function onClickVisible(e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) {
    e.preventDefault();
    setVisible(!visible);
  }

  function onClickVisible2(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setVisible2(!visible2);
  }

  function onClickVisible3(e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) {
    e.preventDefault();
    setVisible3(!visible3);
  }

  function onClickVisible4(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setVisible4(!visible4);
  }

  function onClickVisible5(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    onClickVisible3(e);
    onClickVisible4(e);
  }

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tCollapsePage}>
        <div>
          <p className="d-inline-flex gap-1">
            <a className="btn btn-primary" href="" onClick={onClickVisible} role="button">
              Link with href
            </a>
            <button className="btn btn-primary" onClick={onClickVisible} type="button">
              Button with data-bs-target
            </button>
          </p>

          <Collapse visible={visible}>
            <div className="card card-body">
              Some placeholder content for the collapse component. This panel is hidden by default but revealed when the
              user activates the relevant trigger.
            </div>
          </Collapse>
        </div>
      </Example>

      <Example hash="horizontal" state={state} t={tCollapsePage}>
        <div>
          <p>
            <button className="btn btn-primary" onClick={onClickVisible2} type="button">
              Toggle width collapse
            </button>
          </p>

          <div style={{ minHeight: 130 }}>
            <Collapse horizontal visible={visible2}>
              <div className="card card-body" style={{ width: 300 }}>
                This is some placeholder content for a horizontal collapse. It's hidden by default and shown when
                triggered.
              </div>
            </Collapse>
          </div>
        </div>
      </Example>

      <Example hash="multipleTogglesAndTargets" state={state} t={tCollapsePage}>
        <div>
          <p className="d-inline-flex gap-1">
            <a className="btn btn-primary" href="" onClick={onClickVisible3} role="button">
              Toggle first element
            </a>
            <button className="btn btn-primary" onClick={onClickVisible4} type="button">
              Toggle second element
            </button>
            <button className="btn btn-primary" onClick={onClickVisible5} type="button">
              Toggle both elements
            </button>
          </p>

          <div className="row">
            <div className="col">
              <Collapse visible={visible3}>
                <div className="card card-body">
                  Some placeholder content for the first collapse component of this multi-collapse example. This panel
                  is hidden by default but revealed when the user activates the relevant trigger.
                </div>
              </Collapse>
            </div>
            <div className="col">
              <Collapse visible={visible4}>
                <div className="card card-body">
                  Some placeholder content for the second collapse component of this multi-collapse example. This panel
                  is hidden by default but revealed when the user activates the relevant trigger.
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </Example>

      <PropsIndicator />

      <Example
        hash="collapseComponentProps"
        items={[
          {
            attr: 'collapsing',
            default: 'true',
            desc: tCollapseComponentProps('collapse.desc.collapsing'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'visible',
            default: '',
            desc: tCollapseComponentProps('collapse.desc.visible'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'horizontal',
            default: '',
            desc: tCollapseComponentProps('collapse.desc.horizontal'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tCollapseComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
