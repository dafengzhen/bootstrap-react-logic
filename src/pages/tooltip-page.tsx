import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Tooltip } from '@lib/tooltip';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/tooltip/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
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
      <Example hash="basic" state={state} t={tTooltipPage}>
        <p className="muted">
          Placeholder text to demonstrate some{' '}
          <Tooltip
            inner="Default tooltip"
            onChange={setVisible}
            role="tooltip"
            trigger={(setRef) => (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (!visible) {
                    onClickVisible();
                  }
                }}
                ref={setRef}
              >
                inline links
              </a>
            )}
            visible={visible}
          />{' '}
          with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of{' '}
          <Tooltip
            inner="Another tooltip"
            onChange={setVisible2}
            role="tooltip"
            trigger={(setRef) => (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (!visible2) {
                    onClickVisible2();
                  }
                }}
                ref={setRef}
              >
                real text
              </a>
            )}
            visible={visible2}
          />
          . And all that just to give you an idea of how tooltips would look when used in real-world situations. So
          hopefully you've now seen how{' '}
          <Tooltip
            inner="Another one here too"
            onChange={setVisible3}
            role="tooltip"
            trigger={(setRef) => (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (!visible3) {
                    onClickVisible3();
                  }
                }}
                ref={setRef}
              >
                these tooltips on links
              </a>
            )}
            visible={visible3}
          />{' '}
          can work in practice, once you use them on{' '}
          <Tooltip
            inner="The last tip!"
            onChange={setVisible4}
            role="tooltip"
            trigger={(setRef) => (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (!visible4) {
                    onClickVisible4();
                  }
                }}
                ref={setRef}
              >
                your own
              </a>
            )}
            visible={visible4}
          />{' '}
          site or project.
        </p>
      </Example>

      <Example hash="customTooltips" state={state} t={tTooltipPage}>
        <div>
          <Tooltip
            className="custom-tooltip"
            inner="This top tooltip is themed via CSS variables."
            onChange={setVisible5}
            role="tooltip"
            trigger={(setRef) => (
              <button className="btn btn-secondary" ref={setRef} type="button">
                Custom tooltip
              </button>
            )}
            visible={visible5}
          />
        </div>
      </Example>

      <Example gap3 hash="directions" state={state} t={tTooltipPage}>
        <div className="d-flex flex-wrap gap-2">
          <Tooltip
            inner="Tooltip on top"
            onChange={setVisible6}
            role="tooltip"
            trigger={(setRef) => (
              <button className="btn btn-secondary" ref={setRef} type="button">
                Tooltip on top
              </button>
            )}
            visible={visible6}
          />

          <Tooltip
            inner="Tooltip on right"
            onChange={setVisible7}
            placement="right"
            role="tooltip"
            trigger={(setRef) => (
              <button className="btn btn-secondary" ref={setRef} type="button">
                Tooltip on right
              </button>
            )}
            visible={visible7}
          />

          <Tooltip
            inner="Tooltip on bottom"
            onChange={setVisible8}
            placement="bottom"
            role="tooltip"
            trigger={(setRef) => (
              <button className="btn btn-secondary" ref={setRef} type="button">
                Tooltip on bottom
              </button>
            )}
            visible={visible8}
          />

          <Tooltip
            inner="Tooltip on left"
            onChange={setVisible9}
            placement="left"
            role="tooltip"
            trigger={(setRef) => (
              <button className="btn btn-secondary" ref={setRef} type="button">
                Tooltip on left
              </button>
            )}
            visible={visible9}
          />

          <Tooltip
            html="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
            onChange={setVisible10}
            role="tooltip"
            trigger={(setRef) => (
              <button className="btn btn-secondary" ref={setRef} type="button">
                Tooltip with HTML
              </button>
            )}
            visible={visible10}
          />
        </div>

        <div>
          <Tooltip
            inner="Default tooltip"
            onChange={setVisible11}
            role="tooltip"
            trigger={(setRef) => (
              <a
                className="d-inline-block"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (!visible11) {
                    onClickVisible11();
                  }
                }}
                ref={setRef}
              >
                <svg height="50" viewBox="0 0 100 100" width="50" xmlns="http://www.w3.org/2000/svg">
                  <rect fill="#563d7c" height="100%" width="100%"></rect>
                  <circle cx="50" cy="50" fill="#007bff" r="30"></circle>
                </svg>
              </a>
            )}
            visible={visible11}
          />
        </div>
      </Example>

      <Example hash="disabledElements" state={state} t={tTooltipPage}>
        <Tooltip
          inner="Disabled tooltip"
          onChange={setVisible12}
          role="tooltip"
          trigger={(setRef) => (
            <button className="btn btn-primary" disabled ref={setRef} type="button">
              Disabled button
            </button>
          )}
          triggerWrapper
          visible={visible12}
        />
      </Example>

      <PropsIndicator />

      <Example
        hash="tooltipComponentProps"
        items={[
          {
            attr: 'arrowProps',
            default: '',
            desc: tTooltipComponentProps('tooltip.desc.arrowProps'),
            type: <span className="badge text-bg-secondary ms-1">PopoverArrowProps&lt;div&gt;</span>,
          },
          {
            attr: 'html',
            default: '',
            desc: tTooltipComponentProps('tooltip.desc.html'),
            type: <span className="badge text-bg-secondary ms-1">string</span>,
          },
          {
            attr: 'inner',
            default: '',
            desc: tTooltipComponentProps('tooltip.desc.inner'),
            type: <span className="badge text-bg-secondary ms-1">ReactNode</span>,
          },
          {
            attr: 'innerProps',
            default: '',
            desc: tTooltipComponentProps('tooltip.desc.innerProps'),
            type: <span className="badge text-bg-secondary ms-1">TooltipInnerProps&lt;div&gt;</span>,
          },
          {
            attr: 'container',
            default: '',
            desc: tTooltipComponentProps('tooltip.desc.container'),
            type: <span className="badge text-bg-secondary ms-1">HTMLElement | string</span>,
          },
          {
            attr: 'fade',
            default: 'true',
            desc: tTooltipComponentProps('tooltip.desc.body'),
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
          },
          {
            attr: 'offset',
            default: '',
            desc: tTooltipComponentProps('tooltip.desc.offset'),
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
            desc: tTooltipComponentProps('tooltip.desc.onChange'),
            type: (
              <span className="badge text-bg-secondary ms-1">
                (visible: boolean, event?: MouseEvent&lt;HTMLElement&gt;) =&gt; void
              </span>
            ),
          },
          {
            attr: 'placement',
            default: 'top',
            desc: tTooltipComponentProps('tooltip.desc.placement'),
            type: <span className="badge text-bg-secondary ms-1">bottom | end | left | right | start | top</span>,
          },
          {
            attr: 'trigger',
            default: '',
            desc: tTooltipComponentProps('tooltip.desc.placement'),
            type: (
              <span className="badge text-bg-secondary ms-1">
                ( setRef, getProps) =&gt; Record&lt;string, unknown&gt;, ) =&gt; ReactNode
              </span>
            ),
          },
          {
            attr: 'triggerType',
            default: '',
            desc: tTooltipComponentProps('tooltip.desc.placement'),
            type: <span className="badge text-bg-secondary ms-1">focus | hover | (focus | hover)[]</span>,
          },
          {
            attr: 'visible',
            default: '',
            desc: tTooltipComponentProps('tooltip.desc.visible'),
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
          },
          {
            attr: 'triggerWrapper',
            default: '',
            desc: tTooltipComponentProps('tooltip.desc.triggerWrapper'),
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tTooltipComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
