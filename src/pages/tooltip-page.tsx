import PropsIndicator from '@components/props-indicator.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { Tooltip } from '@lib/tooltip';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/tooltip/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
  }),
);

export default function BadgePage() {
  const navigation = useNavigation();
  const { t: tTooltipComponentProps } = useTranslation(['tooltipComponentProps']);
  const { t: tTooltipPage } = useTranslation(['tooltipPage']);
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
  const [visible10, setVisible10] = useState(false);
  const [visible11, setVisible11] = useState(false);
  const [visible12, setVisible12] = useState(false);

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

  function onClickVisible11() {
    setVisible11(!visible11);
  }

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example t={tTooltipPage} state={state} hash="basic">
        <p className="muted">
          Placeholder text to demonstrate some{' '}
          <Tooltip
            trigger={(setRef) => (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  if (!visible) {
                    onClickVisible();
                  }
                }}
                ref={setRef}
                href="#"
              >
                inline links
              </a>
            )}
            inner="Default tooltip"
            onChange={setVisible}
            visible={visible}
            role="tooltip"
          />{' '}
          with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of{' '}
          <Tooltip
            trigger={(setRef) => (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  if (!visible2) {
                    onClickVisible2();
                  }
                }}
                ref={setRef}
                href="#"
              >
                real text
              </a>
            )}
            inner="Another tooltip"
            onChange={setVisible2}
            visible={visible2}
            role="tooltip"
          />
          . And all that just to give you an idea of how tooltips would look when used in real-world situations. So
          hopefully you've now seen how{' '}
          <Tooltip
            trigger={(setRef) => (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  if (!visible3) {
                    onClickVisible3();
                  }
                }}
                ref={setRef}
                href="#"
              >
                these tooltips on links
              </a>
            )}
            inner="Another one here too"
            onChange={setVisible3}
            visible={visible3}
            role="tooltip"
          />{' '}
          can work in practice, once you use them on{' '}
          <Tooltip
            trigger={(setRef) => (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  if (!visible4) {
                    onClickVisible4();
                  }
                }}
                ref={setRef}
                href="#"
              >
                your own
              </a>
            )}
            onChange={setVisible4}
            inner="The last tip!"
            visible={visible4}
            role="tooltip"
          />{' '}
          site or project.
        </p>
      </Example>

      <Example hash="customTooltips" t={tTooltipPage} state={state}>
        <div>
          <Tooltip
            trigger={(setRef) => (
              <button className="btn btn-secondary" type="button" ref={setRef}>
                Custom tooltip
              </button>
            )}
            inner="This top tooltip is themed via CSS variables."
            className="custom-tooltip"
            onChange={setVisible5}
            visible={visible5}
            role="tooltip"
          />
        </div>
      </Example>

      <Example hash="directions" t={tTooltipPage} state={state} gap3>
        <div className="d-flex flex-wrap gap-2">
          <Tooltip
            trigger={(setRef) => (
              <button className="btn btn-secondary" type="button" ref={setRef}>
                Tooltip on top
              </button>
            )}
            inner="Tooltip on top"
            onChange={setVisible6}
            visible={visible6}
            role="tooltip"
          />

          <Tooltip
            trigger={(setRef) => (
              <button className="btn btn-secondary" type="button" ref={setRef}>
                Tooltip on right
              </button>
            )}
            inner="Tooltip on right"
            onChange={setVisible7}
            visible={visible7}
            placement="right"
            role="tooltip"
          />

          <Tooltip
            trigger={(setRef) => (
              <button className="btn btn-secondary" type="button" ref={setRef}>
                Tooltip on bottom
              </button>
            )}
            inner="Tooltip on bottom"
            onChange={setVisible8}
            placement="bottom"
            visible={visible8}
            role="tooltip"
          />

          <Tooltip
            trigger={(setRef) => (
              <button className="btn btn-secondary" type="button" ref={setRef}>
                Tooltip on left
              </button>
            )}
            inner="Tooltip on left"
            onChange={setVisible9}
            visible={visible9}
            placement="left"
            role="tooltip"
          />

          <Tooltip
            trigger={(setRef) => (
              <button className="btn btn-secondary" type="button" ref={setRef}>
                Tooltip with HTML
              </button>
            )}
            html="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
            onChange={setVisible10}
            visible={visible10}
            role="tooltip"
          />
        </div>

        <div>
          <Tooltip
            trigger={(setRef) => (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  if (!visible11) {
                    onClickVisible11();
                  }
                }}
                className="d-inline-block"
                ref={setRef}
                href="#"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="50" width="50">
                  <rect fill="#563d7c" height="100%" width="100%"></rect>
                  <circle fill="#007bff" cx="50" cy="50" r="30"></circle>
                </svg>
              </a>
            )}
            inner="Default tooltip"
            onChange={setVisible11}
            visible={visible11}
            role="tooltip"
          />
        </div>
      </Example>

      <Example hash="disabledElements" t={tTooltipPage} state={state}>
        <Tooltip
          trigger={(setRef) => (
            <button className="btn btn-primary" type="button" ref={setRef} disabled>
              Disabled button
            </button>
          )}
          inner="Disabled tooltip"
          onChange={setVisible12}
          visible={visible12}
          role="tooltip"
          triggerWrapper
        />
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary ms-1">PopoverArrowProps&lt;div&gt;</span>,
            desc: tTooltipComponentProps('tooltip.desc.arrowProps'),
            attr: 'arrowProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">string</span>,
            desc: tTooltipComponentProps('tooltip.desc.html'),
            attr: 'html',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">ReactNode</span>,
            desc: tTooltipComponentProps('tooltip.desc.inner'),
            attr: 'inner',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">TooltipInnerProps&lt;div&gt;</span>,
            desc: tTooltipComponentProps('tooltip.desc.innerProps'),
            attr: 'innerProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">HTMLElement | string</span>,
            desc: tTooltipComponentProps('tooltip.desc.container'),
            attr: 'container',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
            desc: tTooltipComponentProps('tooltip.desc.body'),
            default: 'true',
            attr: 'fade',
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
            desc: tTooltipComponentProps('tooltip.desc.offset'),
            attr: 'offset',
            default: '',
          },
          {
            type: (
              <span className="badge text-bg-secondary ms-1">
                (visible: boolean, event?: MouseEvent&lt;HTMLElement&gt;) =&gt; void
              </span>
            ),
            desc: tTooltipComponentProps('tooltip.desc.onChange'),
            attr: 'onChange',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">bottom | end | left | right | start | top</span>,
            desc: tTooltipComponentProps('tooltip.desc.placement'),
            attr: 'placement',
            default: 'top',
          },
          {
            type: (
              <span className="badge text-bg-secondary ms-1">
                ( setRef, getProps) =&gt; Record&lt;string, unknown&gt;, ) =&gt; ReactNode
              </span>
            ),
            desc: tTooltipComponentProps('tooltip.desc.placement'),
            attr: 'trigger',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">focus | hover | (focus | hover)[]</span>,
            desc: tTooltipComponentProps('tooltip.desc.placement'),
            attr: 'triggerType',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
            desc: tTooltipComponentProps('tooltip.desc.visible'),
            attr: 'visible',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
            desc: tTooltipComponentProps('tooltip.desc.triggerWrapper'),
            attr: 'triggerWrapper',
            default: '',
          },
        ]}
        hash="tooltipComponentProps"
        t={tTooltipComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
