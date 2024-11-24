import PropsIndicator from '@components/props-indicator.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import { Offcanvas } from '@lib/offcanvas';
import About from '@components/about.tsx';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/offcanvas/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
  }),
);

export default function OffcanvasPage() {
  const navigation = useNavigation();
  const { t: tOffcanvasComponentProps } = useTranslation(['offcanvasComponentProps']);
  const { t: tOffcanvasPage } = useTranslation(['offcanvasPage']);
  const state = useState(codes);

  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [visible8, setVisible8] = useState(false);

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

  function onClickVisible8() {
    setVisible8(!visible8);
  }

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example parentClassName="bd-example-offcanvas" bodyClassName="p-0" t={tOffcanvasPage} state={state} hash="basic">
        <Offcanvas
          body="Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here."
          placement="start"
          title="Offcanvas"
          className="show"
        />
      </Example>

      <Example t={tOffcanvasPage} hash="liveDemo" state={state}>
        <div className="d-flex gap-2">
          <a
            onClick={(e) => {
              e.preventDefault();
              onClickVisible();
            }}
            className="btn btn-primary"
            role="button"
            href="#"
          >
            Link with href
          </a>
          <button className="btn btn-primary" onClick={onClickVisible} type="button">
            Button with data-bs-target
          </button>
        </div>

        <Offcanvas
          body={
            <>
              <div>
                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images,
                lists, etc.
              </div>
              <div className="dropdown mt-3">
                <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button">
                  Dropdown button
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </>
          }
          onChange={setVisible}
          placement="start"
          title="Offcanvas"
          visible={visible}
        />
      </Example>

      <Example hash="bodyScrolling" t={tOffcanvasPage} state={state}>
        <div>
          <button className="btn btn-primary" onClick={onClickVisible2} type="button">
            Enable body scrolling
          </button>
        </div>

        <Offcanvas
          body={<p>Try scrolling the rest of the page to see this option in action.</p>}
          title="Offcanvas with body scrolling"
          onChange={setVisible2}
          visible={visible2}
          placement="start"
          backdrop={false}
          scroll
        />
      </Example>

      <Example hash="bodyScrollingAndBackdrop" t={tOffcanvasPage} state={state}>
        <div>
          <button className="btn btn-primary" onClick={onClickVisible3} type="button">
            Enable both scrolling & backdrop
          </button>
        </div>

        <Offcanvas
          body={<p>Try scrolling the rest of the page to see this option in action.</p>}
          title="Backdrop with scrolling"
          onChange={setVisible3}
          visible={visible3}
          placement="start"
          scroll
        />
      </Example>

      <Example hash="staticBackdrop" t={tOffcanvasPage} state={state}>
        <div>
          <button className="btn btn-primary" onClick={onClickVisible4} type="button">
            Toggle static offcanvas
          </button>
        </div>

        <Offcanvas
          body={<div>I will not close if you click outside of me.</div>}
          onChange={setVisible4}
          visible={visible4}
          backdrop="static"
          placement="start"
          title="Offcanvas"
        />
      </Example>

      <Example
        parentClassName="bd-example-offcanvas"
        hash="darkOffcanvas"
        bodyClassName="p-0"
        t={tOffcanvasPage}
        state={state}
      >
        <Offcanvas
          body={<p>Place offcanvas content here.</p>}
          className="show rounded-start"
          data-bs-theme="dark"
          placement="start"
          title="Offcanvas"
        />
      </Example>

      <Example t={tOffcanvasPage} hash="responsive" state={state}>
        <div>
          <button className="btn btn-primary d-lg-none" onClick={onClickVisible5} type="button">
            Toggle offcanvas
          </button>

          <div className="alert alert-info d-none d-lg-block">
            Resize your browser to show the responsive offcanvas toggle.
          </div>

          <Offcanvas
            body={
              <p className="mb-0">
                This is content within an <code>.offcanvas-lg</code>.
              </p>
            }
            title="Responsive offcanvas"
            onChange={setVisible5}
            visible={visible5}
            placement="end"
            responsive="lg"
          />
        </div>
      </Example>

      <Example t={tOffcanvasPage} hash="placement" state={state}>
        <div>
          <button className="btn btn-primary" onClick={onClickVisible6} type="button">
            Toggle top offcanvas
          </button>

          <Offcanvas onChange={setVisible6} title="Offcanvas top" visible={visible6} placement="top" body="..." />
        </div>

        <div>
          <button className="btn btn-primary" onClick={onClickVisible7} type="button">
            Toggle right offcanvas
          </button>

          <Offcanvas title="Offcanvas right" onChange={setVisible7} visible={visible7} placement="end" body="..." />
        </div>

        <div>
          <button className="btn btn-primary" onClick={onClickVisible8} type="button">
            Toggle bottom offcanvas
          </button>

          <Offcanvas title="Offcanvas bottom" onChange={setVisible8} placement="bottom" visible={visible8} body="..." />
        </div>
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">static | boolean</span>,
            desc: tOffcanvasComponentProps('offcanvas.desc.backdrop'),
            attr: 'backdrop',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tOffcanvasComponentProps('offcanvas.desc.body'),
            attr: 'body',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">OffcanvasBodyProps&lt;div&gt;</span>,
            desc: tOffcanvasComponentProps('offcanvas.desc.bodyProps'),
            attr: 'bodyProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tOffcanvasComponentProps('offcanvas.desc.fade'),
            attr: 'fade',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tOffcanvasComponentProps('offcanvas.desc.header'),
            attr: 'header',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">OffcanvasHeaderProps&lt;div&gt;</span>,
            desc: tOffcanvasComponentProps('offcanvas.desc.headerProps'),
            attr: 'headerProps',
            default: '',
          },
          {
            type: (
              <span className="badge text-bg-secondary">
                (visible: boolean, event: MouseEvent&lt;HTMLElement&gt;) =&gt; void
              </span>
            ),
            desc: tOffcanvasComponentProps('offcanvas.desc.onChange'),
            attr: 'onChange',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">bottom | end | start | top</span>,
            desc: tOffcanvasComponentProps('offcanvas.desc.placement'),
            attr: 'placement',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">lg | md | sm | xl | xxl</span>,
            desc: tOffcanvasComponentProps('offcanvas.desc.responsive'),
            attr: 'responsive',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tOffcanvasComponentProps('offcanvas.desc.scroll'),
            attr: 'scroll',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tOffcanvasComponentProps('offcanvas.desc.title'),
            attr: 'title',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">OffcanvasTitleProps&lt;div&gt;</span>,
            desc: tOffcanvasComponentProps('offcanvas.desc.titleProps'),
            attr: 'titleProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tOffcanvasComponentProps('offcanvas.desc.visible'),
            attr: 'visible',
            default: '',
          },
        ]}
        hash="offcanvasComponentProps"
        t={tOffcanvasComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
