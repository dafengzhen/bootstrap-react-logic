import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Offcanvas } from '@lib/offcanvas';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/offcanvas/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
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
      <Example bodyClassName="p-0" hash="basic" parentClassName="bd-example-offcanvas" state={state} t={tOffcanvasPage}>
        <Offcanvas
          body="Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here."
          className="show"
          placement="start"
          title="Offcanvas"
        />
      </Example>

      <Example hash="liveDemo" state={state} t={tOffcanvasPage}>
        <div className="d-flex gap-2">
          <a
            className="btn btn-primary"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onClickVisible();
            }}
            role="button"
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

      <Example hash="bodyScrolling" state={state} t={tOffcanvasPage}>
        <div>
          <button className="btn btn-primary" onClick={onClickVisible2} type="button">
            Enable body scrolling
          </button>
        </div>

        <Offcanvas
          backdrop={false}
          body={<p>Try scrolling the rest of the page to see this option in action.</p>}
          onChange={setVisible2}
          placement="start"
          scroll
          title="Offcanvas with body scrolling"
          visible={visible2}
        />
      </Example>

      <Example hash="bodyScrollingAndBackdrop" state={state} t={tOffcanvasPage}>
        <div>
          <button className="btn btn-primary" onClick={onClickVisible3} type="button">
            Enable both scrolling & backdrop
          </button>
        </div>

        <Offcanvas
          body={<p>Try scrolling the rest of the page to see this option in action.</p>}
          onChange={setVisible3}
          placement="start"
          scroll
          title="Backdrop with scrolling"
          visible={visible3}
        />
      </Example>

      <Example hash="staticBackdrop" state={state} t={tOffcanvasPage}>
        <div>
          <button className="btn btn-primary" onClick={onClickVisible4} type="button">
            Toggle static offcanvas
          </button>
        </div>

        <Offcanvas
          backdrop="static"
          body={<div>I will not close if you click outside of me.</div>}
          onChange={setVisible4}
          placement="start"
          title="Offcanvas"
          visible={visible4}
        />
      </Example>

      <Example
        bodyClassName="p-0"
        hash="darkOffcanvas"
        parentClassName="bd-example-offcanvas"
        state={state}
        t={tOffcanvasPage}
      >
        <Offcanvas
          body={<p>Place offcanvas content here.</p>}
          className="show rounded-start"
          data-bs-theme="dark"
          placement="start"
          title="Offcanvas"
        />
      </Example>

      <Example hash="responsive" state={state} t={tOffcanvasPage}>
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
            onChange={setVisible5}
            placement="end"
            responsive="lg"
            title="Responsive offcanvas"
            visible={visible5}
          />
        </div>
      </Example>

      <Example hash="placement" state={state} t={tOffcanvasPage}>
        <div>
          <button className="btn btn-primary" onClick={onClickVisible6} type="button">
            Toggle top offcanvas
          </button>

          <Offcanvas body="..." onChange={setVisible6} placement="top" title="Offcanvas top" visible={visible6} />
        </div>

        <div>
          <button className="btn btn-primary" onClick={onClickVisible7} type="button">
            Toggle right offcanvas
          </button>

          <Offcanvas body="..." onChange={setVisible7} placement="end" title="Offcanvas right" visible={visible7} />
        </div>

        <div>
          <button className="btn btn-primary" onClick={onClickVisible8} type="button">
            Toggle bottom offcanvas
          </button>

          <Offcanvas body="..." onChange={setVisible8} placement="bottom" title="Offcanvas bottom" visible={visible8} />
        </div>
      </Example>

      <PropsIndicator />

      <Example
        hash="offcanvasComponentProps"
        items={[
          {
            attr: 'backdrop',
            default: '',
            desc: tOffcanvasComponentProps('offcanvas.desc.backdrop'),
            type: <span className="badge text-bg-secondary">static | boolean</span>,
          },
          {
            attr: 'body',
            default: '',
            desc: tOffcanvasComponentProps('offcanvas.desc.body'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'bodyProps',
            default: '',
            desc: tOffcanvasComponentProps('offcanvas.desc.bodyProps'),
            type: <span className="badge text-bg-secondary">OffcanvasBodyProps&lt;div&gt;</span>,
          },
          {
            attr: 'fade',
            default: '',
            desc: tOffcanvasComponentProps('offcanvas.desc.fade'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'header',
            default: '',
            desc: tOffcanvasComponentProps('offcanvas.desc.header'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'headerProps',
            default: '',
            desc: tOffcanvasComponentProps('offcanvas.desc.headerProps'),
            type: <span className="badge text-bg-secondary">OffcanvasHeaderProps&lt;div&gt;</span>,
          },
          {
            attr: 'onChange',
            default: '',
            desc: tOffcanvasComponentProps('offcanvas.desc.onChange'),
            type: (
              <span className="badge text-bg-secondary">
                (visible: boolean, event: MouseEvent&lt;HTMLElement&gt;) =&gt; void
              </span>
            ),
          },
          {
            attr: 'placement',
            default: '',
            desc: tOffcanvasComponentProps('offcanvas.desc.placement'),
            type: <span className="badge text-bg-secondary">bottom | end | start | top</span>,
          },
          {
            attr: 'responsive',
            default: '',
            desc: tOffcanvasComponentProps('offcanvas.desc.responsive'),
            type: <span className="badge text-bg-secondary">lg | md | sm | xl | xxl</span>,
          },
          {
            attr: 'scroll',
            default: '',
            desc: tOffcanvasComponentProps('offcanvas.desc.scroll'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'title',
            default: '',
            desc: tOffcanvasComponentProps('offcanvas.desc.title'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'titleProps',
            default: '',
            desc: tOffcanvasComponentProps('offcanvas.desc.titleProps'),
            type: <span className="badge text-bg-secondary">OffcanvasTitleProps&lt;div&gt;</span>,
          },
          {
            attr: 'visible',
            default: '',
            desc: tOffcanvasComponentProps('offcanvas.desc.visible'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tOffcanvasComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
