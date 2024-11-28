import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Popover } from '@lib/popover';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/popover/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

export default function BadgePage() {
  const navigation = useNavigation();
  const { t: tPopoverComponentProps } = useTranslation(['popoverComponentProps']);
  const { t: tPopoverPage } = useTranslation(['popoverPage']);
  const state = useState(codes);

  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [visible8, setVisible8] = useState(false);
  const [visible9, setVisible9] = useState(false);

  function onClickVisible() {
    setVisible(!visible);
  }

  function onClickVisible2() {
    setVisible2(!visible2);
  }

  function onClickVisible3() {
    setVisible3(!visible3);
  }

  function onClickVisible4() {
    setVisible4(!visible4);
  }

  function onClickVisible5() {
    setVisible5(!visible5);
  }

  function onClickVisible6() {
    setVisible6(!visible6);
  }

  function onClickVisible7() {
    setVisible7(!visible7);
  }

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tPopoverPage}>
        <div>
          <Popover
            body="And here's some amazing content. It's very engaging. Right?"
            header="Popover title"
            trigger={(setRef) => (
              <button className="btn btn-lg btn-danger" onClick={onClickVisible} ref={setRef} type="button">
                Click to toggle popover
              </button>
            )}
            visible={visible}
          />
        </div>
      </Example>

      <Example hash="fourDirections" row state={state} t={tPopoverPage}>
        <div>
          <Popover
            body="Top popover"
            placement="top"
            trigger={(setRef) => (
              <button className="btn btn-secondary" onClick={onClickVisible2} ref={setRef} type="button">
                Popover on top
              </button>
            )}
            visible={visible2}
          />
        </div>

        <div>
          <Popover
            body="Right popover"
            placement="right"
            trigger={(setRef) => (
              <button className="btn btn-secondary" onClick={onClickVisible3} ref={setRef} type="button">
                Popover on right
              </button>
            )}
            visible={visible3}
          />
        </div>

        <div>
          <Popover
            body="Bottom popover"
            placement="bottom"
            trigger={(setRef) => (
              <button className="btn btn-secondary" onClick={onClickVisible4} ref={setRef} type="button">
                Popover on bottom
              </button>
            )}
            visible={visible4}
          />
        </div>

        <div>
          <Popover
            body="Left popover"
            placement="left"
            trigger={(setRef) => (
              <button className="btn btn-secondary" onClick={onClickVisible5} ref={setRef} type="button">
                Popover on left
              </button>
            )}
            visible={visible5}
          />
        </div>
      </Example>

      <Example hash="customContainer" state={state} t={tPopoverPage}>
        <div id="custom-popover-ontainer">
          <Popover
            body="And here's some amazing content. It's very engaging. Right?"
            container="#custom-popover-ontainer"
            header="Popover title"
            trigger={(setRef) => (
              <button className="btn btn-secondary" onClick={onClickVisible6} ref={setRef} type="button">
                Custom container
              </button>
            )}
            visible={visible6}
          />
        </div>
      </Example>

      <Example hash="customPopovers" state={state} t={tPopoverPage}>
        <div>
          <Popover
            body="This popover is themed via CSS variables."
            header="Custom popover"
            trigger={(setRef) => (
              <button className="btn btn-secondary" onClick={onClickVisible7} ref={setRef} type="button">
                Custom popover
              </button>
            )}
            variables={{
              bsPopoverBodyPaddingX: '1rem',
              bsPopoverBodyPaddingY: '.5rem',
              bsPopoverBorderColor: 'var(--bd-violet-bg)',
              bsPopoverHeaderBg: 'var(--bd-violet-bg)',
              bsPopoverHeaderColor: 'var(--bs-white)',
              bsPopoverMaxWidth: '200px',
            }}
            visible={visible7}
          />
        </div>
      </Example>

      <Example hash="dismissOnNextClick" state={state} t={tPopoverPage}>
        <div>
          <Popover
            body="And here's some amazing content. It's very engaging. Right?"
            header="Dismissible popover"
            onChange={setVisible8}
            trigger={(setRef) => (
              <a className="btn btn-lg btn-danger" ref={setRef} role="button" tabIndex={0}>
                Dismissible popover
              </a>
            )}
            triggerType="focus"
            visible={visible8}
          />
        </div>
      </Example>

      <Example hash="disabledElements" state={state} t={tPopoverPage}>
        <div>
          <Popover
            body="Disabled popover"
            onChange={setVisible9}
            trigger={(setRef) => (
              <button className="btn btn-primary" disabled ref={setRef} type="button">
                Disabled button
              </button>
            )}
            triggerType={['focus', 'hover']}
            triggerWrapper
            visible={visible9}
          />
        </div>
      </Example>

      <PropsIndicator />

      <Example
        hash="popoverComponentProps"
        items={[
          {
            attr: 'arrowProps',
            default: '',
            desc: tPopoverComponentProps('popover.desc.arrowProps'),
            type: <span className="badge text-bg-secondary ms-1">PopoverArrowProps&lt;div&gt;</span>,
          },
          {
            attr: 'body',
            default: '',
            desc: tPopoverComponentProps('popover.desc.body'),
            type: <span className="badge text-bg-secondary ms-1">ReactNode</span>,
          },
          {
            attr: 'bodyProps',
            default: '',
            desc: tPopoverComponentProps('popover.desc.bodyProps'),
            type: <span className="badge text-bg-secondary ms-1">PopoverBodyProps&lt;div&gt;</span>,
          },
          {
            attr: 'container',
            default: '',
            desc: tPopoverComponentProps('popover.desc.container'),
            type: <span className="badge text-bg-secondary ms-1">HTMLElement | string</span>,
          },
          {
            attr: 'fade',
            default: 'true',
            desc: tPopoverComponentProps('popover.desc.body'),
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
          },
          {
            attr: 'header',
            default: '',
            desc: tPopoverComponentProps('popover.desc.header'),
            type: <span className="badge text-bg-secondary ms-1">ReactNode</span>,
          },
          {
            attr: 'headerProps',
            default: '',
            desc: tPopoverComponentProps('popover.desc.headerProps'),
            type: <span className="badge text-bg-secondary ms-1">PopoverHeaderProps&lt;div&gt;</span>,
          },
          {
            attr: 'offset',
            default: '',
            desc: tPopoverComponentProps('popover.desc.offset'),
            type: (
              <div className="d-flex gap-2">
                <div>
                  <span className="badge text-bg-secondary">number</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    <pre className="mb-0 text-start p-1">{`{
  mainAxis?: number
  crossAxis?: number
  alignmentAxis?: number | null
}`}</pre>
                  </span>
                </div>
              </div>
            ),
          },
          {
            attr: 'onChange',
            default: '',
            desc: tPopoverComponentProps('popover.desc.onChange'),
            type: (
              <span className="badge text-bg-secondary ms-1">
                (visible: boolean, event?: MouseEvent&lt;HTMLElement&gt;) =&gt; void
              </span>
            ),
          },
          {
            attr: 'placement',
            default: 'end',
            desc: tPopoverComponentProps('popover.desc.placement'),
            type: <span className="badge text-bg-secondary ms-1">bottom | end | left | right | start | top</span>,
          },
          {
            attr: 'trigger',
            default: '',
            desc: tPopoverComponentProps('popover.desc.placement'),
            type: (
              <span className="badge text-bg-secondary ms-1">
                ( setRef, getProps) =&gt; Record&lt;string, unknown&gt;, ) =&gt; ReactNode
              </span>
            ),
          },
          {
            attr: 'triggerType',
            default: '',
            desc: tPopoverComponentProps('popover.desc.placement'),
            type: <span className="badge text-bg-secondary ms-1">focus | hover | (focus | hover)[]</span>,
          },
          {
            attr: 'visible',
            default: '',
            desc: tPopoverComponentProps('popover.desc.visible'),
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
          },
          {
            attr: 'triggerWrapper',
            default: '',
            desc: tPopoverComponentProps('popover.desc.triggerWrapper'),
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tPopoverComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
