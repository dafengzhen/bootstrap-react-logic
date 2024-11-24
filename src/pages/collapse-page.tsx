import PropsIndicator from '@components/props-indicator.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import { MouseEvent, useState } from 'react';
import About from '@components/about.tsx';
import { Collapse } from '@lib/collapse';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/collapse/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
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
      <Example t={tCollapsePage} state={state} hash="basic">
        <div>
          <p className="d-inline-flex gap-1">
            <a className="btn btn-primary" onClick={onClickVisible} role="button" href="">
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

      <Example hash="horizontal" t={tCollapsePage} state={state}>
        <div>
          <p>
            <button className="btn btn-primary" onClick={onClickVisible2} type="button">
              Toggle width collapse
            </button>
          </p>

          <div style={{ minHeight: 130 }}>
            <Collapse visible={visible2} horizontal>
              <div className="card card-body" style={{ width: 300 }}>
                This is some placeholder content for a horizontal collapse. It's hidden by default and shown when
                triggered.
              </div>
            </Collapse>
          </div>
        </div>
      </Example>

      <Example hash="multipleTogglesAndTargets" t={tCollapsePage} state={state}>
        <div>
          <p className="d-inline-flex gap-1">
            <a className="btn btn-primary" onClick={onClickVisible3} role="button" href="">
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
        items={[
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCollapseComponentProps('collapse.desc.collapsing'),
            attr: 'collapsing',
            default: 'true',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCollapseComponentProps('collapse.desc.visible'),
            attr: 'visible',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCollapseComponentProps('collapse.desc.horizontal'),
            attr: 'horizontal',
            default: '',
          },
        ]}
        hash="collapseComponentProps"
        t={tCollapseComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
