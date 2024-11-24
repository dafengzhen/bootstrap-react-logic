import PropsIndicator from '@components/props-indicator.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { Popover } from '@lib/popover';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/popover/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
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
      <Example t={tPopoverPage} state={state} hash="basic">
        <div>
          <Popover
            trigger={(setRef) => (
              <button className="btn btn-lg btn-danger" onClick={onClickVisible} type="button" ref={setRef}>
                Click to toggle popover
              </button>
            )}
            body="And here's some amazing content. It's very engaging. Right?"
            header="Popover title"
            visible={visible}
          />
        </div>
      </Example>

      <Example hash="fourDirections" t={tPopoverPage} state={state} row>
        <div>
          <Popover
            trigger={(setRef) => (
              <button className="btn btn-secondary" onClick={onClickVisible2} type="button" ref={setRef}>
                Popover on top
              </button>
            )}
            body="Top popover"
            visible={visible2}
            placement="top"
          />
        </div>

        <div>
          <Popover
            trigger={(setRef) => (
              <button className="btn btn-secondary" onClick={onClickVisible3} type="button" ref={setRef}>
                Popover on right
              </button>
            )}
            body="Right popover"
            visible={visible3}
            placement="right"
          />
        </div>

        <div>
          <Popover
            trigger={(setRef) => (
              <button className="btn btn-secondary" onClick={onClickVisible4} type="button" ref={setRef}>
                Popover on bottom
              </button>
            )}
            body="Bottom popover"
            placement="bottom"
            visible={visible4}
          />
        </div>

        <div>
          <Popover
            trigger={(setRef) => (
              <button className="btn btn-secondary" onClick={onClickVisible5} type="button" ref={setRef}>
                Popover on left
              </button>
            )}
            body="Left popover"
            visible={visible5}
            placement="left"
          />
        </div>
      </Example>

      <Example hash="customContainer" t={tPopoverPage} state={state}>
        <div id="custom-popover-ontainer">
          <Popover
            trigger={(setRef) => (
              <button className="btn btn-secondary" onClick={onClickVisible6} type="button" ref={setRef}>
                Custom container
              </button>
            )}
            body="And here's some amazing content. It's very engaging. Right?"
            container="#custom-popover-ontainer"
            header="Popover title"
            visible={visible6}
          />
        </div>
      </Example>

      <Example hash="customPopovers" t={tPopoverPage} state={state}>
        <div>
          <Popover
            variables={{
              bsPopoverBorderColor: 'var(--bd-violet-bg)',
              bsPopoverHeaderBg: 'var(--bd-violet-bg)',
              bsPopoverHeaderColor: 'var(--bs-white)',
              bsPopoverBodyPaddingY: '.5rem',
              bsPopoverBodyPaddingX: '1rem',
              bsPopoverMaxWidth: '200px',
            }}
            trigger={(setRef) => (
              <button className="btn btn-secondary" onClick={onClickVisible7} type="button" ref={setRef}>
                Custom popover
              </button>
            )}
            body="This popover is themed via CSS variables."
            header="Custom popover"
            visible={visible7}
          />
        </div>
      </Example>

      <Example hash="dismissOnNextClick" t={tPopoverPage} state={state}>
        <div>
          <Popover
            trigger={(setRef) => (
              <a className="btn btn-lg btn-danger" role="button" ref={setRef} tabIndex={0}>
                Dismissible popover
              </a>
            )}
            body="And here's some amazing content. It's very engaging. Right?"
            header="Dismissible popover"
            onChange={setVisible8}
            triggerType="focus"
            visible={visible8}
          />
        </div>
      </Example>

      <Example hash="disabledElements" t={tPopoverPage} state={state}>
        <div>
          <Popover
            trigger={(setRef) => (
              <button className="btn btn-primary" type="button" ref={setRef} disabled>
                Disabled button
              </button>
            )}
            triggerType={['focus', 'hover']}
            body="Disabled popover"
            onChange={setVisible9}
            visible={visible9}
            triggerWrapper
          />
        </div>
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary ms-1">PopoverArrowProps&lt;div&gt;</span>,
            desc: tPopoverComponentProps('popover.desc.arrowProps'),
            attr: 'arrowProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">ReactNode</span>,
            desc: tPopoverComponentProps('popover.desc.body'),
            attr: 'body',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">PopoverBodyProps&lt;div&gt;</span>,
            desc: tPopoverComponentProps('popover.desc.bodyProps'),
            attr: 'bodyProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">HTMLElement | string</span>,
            desc: tPopoverComponentProps('popover.desc.container'),
            attr: 'container',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
            desc: tPopoverComponentProps('popover.desc.body'),
            default: 'true',
            attr: 'fade',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">ReactNode</span>,
            desc: tPopoverComponentProps('popover.desc.header'),
            attr: 'header',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">PopoverHeaderProps&lt;div&gt;</span>,
            desc: tPopoverComponentProps('popover.desc.headerProps'),
            attr: 'headerProps',
            default: '',
          },
          {
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
            desc: tPopoverComponentProps('popover.desc.offset'),
            attr: 'offset',
            default: '',
          },
          {
            type: (
              <span className="badge text-bg-secondary ms-1">
                (visible: boolean, event?: MouseEvent&lt;HTMLElement&gt;) =&gt; void
              </span>
            ),
            desc: tPopoverComponentProps('popover.desc.onChange'),
            attr: 'onChange',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">bottom | end | left | right | start | top</span>,
            desc: tPopoverComponentProps('popover.desc.placement'),
            attr: 'placement',
            default: 'end',
          },
          {
            type: (
              <span className="badge text-bg-secondary ms-1">
                ( setRef, getProps) =&gt; Record&lt;string, unknown&gt;, ) =&gt; ReactNode
              </span>
            ),
            desc: tPopoverComponentProps('popover.desc.placement'),
            attr: 'trigger',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">focus | hover | (focus | hover)[]</span>,
            desc: tPopoverComponentProps('popover.desc.placement'),
            attr: 'triggerType',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
            desc: tPopoverComponentProps('popover.desc.visible'),
            attr: 'visible',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
            desc: tPopoverComponentProps('popover.desc.triggerWrapper'),
            attr: 'triggerWrapper',
            default: '',
          },
        ]}
        hash="popoverComponentProps"
        t={tPopoverComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
