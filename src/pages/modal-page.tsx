import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Modal } from '@lib/modal';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/modal/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

export default function ModalPage() {
  const navigation = useNavigation();
  const { t: tModalComponentProps } = useTranslation(['modalComponentProps']);
  const { t: tModalPage } = useTranslation(['modalPage']);
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
  const [visible13, setVisible13] = useState(false);

  const [value, setValue] = useState<'@fat' | '@getbootstrap' | '@mdo'>();
  const [toggle, setToggle] = useState(true);
  const [size, setSize] = useState<'lg' | 'sm' | 'xl'>();
  const [fullscreen, setFullscreen] = useState<'lg' | 'md' | 'sm' | 'xl' | 'xxl' | boolean>();

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

  function onClickVisible9() {
    setVisible9(!visible9);
  }

  function onClickVisible10() {
    setVisible10(!visible10);
  }

  function onClickVisible11() {
    setVisible11(!visible11);
  }

  function onClickVisible12() {
    setVisible12(!visible12);
  }

  function onClickVisible13() {
    setVisible13(!visible13);
  }

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example bg contentId="custom-container" hash="basic" state={state} t={tModalPage}>
        <Modal
          backdrop={false}
          body={<p>Modal body text goes here.</p>}
          className="position-static z-0"
          container="#custom-container"
          footer={
            <>
              <button className="btn btn-secondary" data-bs-dismiss="modal" type="button">
                Close
              </button>
              <button className="btn btn-primary" type="button">
                Save changes
              </button>
            </>
          }
          header={<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>}
          tabIndex={-1}
          title="Modal title"
          visible
        />
      </Example>

      <Example hash="liveDemo" row state={state} t={tModalPage}>
        <button className="btn btn-primary" onClick={onClickVisible} type="button">
          Launch demo modal
        </button>

        <Modal
          aria-labelledby="exampleModalLabel"
          body
          footer={
            <>
              <button className="btn btn-secondary" onClick={onClickVisible} type="button">
                Close
              </button>
              <button className="btn btn-primary" type="button">
                Save changes
              </button>
            </>
          }
          header={<button aria-label="Close" className="btn-close" onClick={onClickVisible} type="button"></button>}
          onVisibleChange={setVisible}
          tabIndex={-1}
          title="Modal title"
          visible={visible}
        />
      </Example>

      <Example hash="staticBackdrop" row state={state} t={tModalPage}>
        <button className="btn btn-primary" onClick={onClickVisible2} type="button">
          Launch static backdrop modal
        </button>

        <Modal
          aria-labelledby="exampleModalLabel"
          body
          footer={
            <>
              <button className="btn btn-secondary" onClick={onClickVisible2} type="button">
                Close
              </button>
              <button className="btn btn-primary" type="button">
                Understood
              </button>
            </>
          }
          header={<button aria-label="Close" className="btn-close" onClick={onClickVisible2} type="button"></button>}
          onVisibleChange={setVisible2}
          static
          tabIndex={-1}
          title="Modal title"
          titleProps={{
            as: 'h1',
            className: 'fs-5',
          }}
          visible={visible2}
        />
      </Example>

      <Example hash="scrollingLongContent" state={state} t={tModalPage}>
        <div>
          <button className="btn btn-primary" onClick={onClickVisible3} type="button">
            Launch demo modal
          </button>

          <Modal
            aria-labelledby="exampleModalLabel"
            body={
              <p>
                This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the
                text in the modal, we use an inline style to set a minimum height, thereby extending the length of the
                overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of
                the viewport, scrolling will move the modal as needed.
              </p>
            }
            bodyProps={{
              style: { minHeight: 1500 },
            }}
            footer={
              <>
                <button className="btn btn-secondary" onClick={onClickVisible3} type="button">
                  Close
                </button>
                <button className="btn btn-primary" type="button">
                  Save changes
                </button>
              </>
            }
            header={<button aria-label="Close" className="btn-close" onClick={onClickVisible3} type="button"></button>}
            onVisibleChange={setVisible3}
            tabIndex={-1}
            title="Modal title"
            visible={visible3}
          />
        </div>

        <div>
          <button className="btn btn-primary" onClick={onClickVisible4} type="button">
            Launch demo modal
          </button>

          <Modal
            aria-labelledby="exampleModalLabel"
            body={
              <>
                <div className="modal-body">
                  <p>
                    This is some placeholder content to show the scrolling behavior for modals. We use repeated line
                    breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling.
                    When content becomes longer than the predefined max-height of modal, content will be cropped and
                    scrollable within the modal.
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <p>This content should appear at the bottom after you scroll.</p>
                </div>
              </>
            }
            footer={
              <>
                <button className="btn btn-secondary" onClick={onClickVisible4} type="button">
                  Close
                </button>
                <button className="btn btn-primary" type="button">
                  Save changes
                </button>
              </>
            }
            header={<button aria-label="Close" className="btn-close" onClick={onClickVisible4} type="button"></button>}
            onVisibleChange={setVisible4}
            scrollable
            tabIndex={-1}
            title="Modal title"
            visible={visible4}
          />
        </div>
      </Example>

      <Example hash="verticallyCentered" state={state} t={tModalPage}>
        <div>
          <button className="btn btn-primary" onClick={onClickVisible5} type="button">
            Launch demo modal
          </button>

          <Modal
            aria-labelledby="exampleModalLabel"
            body={<p>This is a vertically centered modal.</p>}
            centered
            footer={
              <>
                <button className="btn btn-secondary" onClick={onClickVisible5} type="button">
                  Close
                </button>
                <button className="btn btn-primary" type="button">
                  Save changes
                </button>
              </>
            }
            header={<button aria-label="Close" className="btn-close" onClick={onClickVisible5} type="button"></button>}
            onVisibleChange={setVisible5}
            tabIndex={-1}
            title="Modal title"
            visible={visible5}
          />
        </div>

        <div>
          <button className="btn btn-primary" onClick={onClickVisible6} type="button">
            Launch demo modal
          </button>

          <Modal
            aria-labelledby="exampleModalLabel"
            body={
              <>
                <p>
                  This is some placeholder content to show a vertically centered modal. We've added some extra copy here
                  to show how vertically centering the modal works when combined with scrollable modals. We also use
                  some repeated line breaks to quickly extend the height of the content, thereby triggering the
                  scrolling. When content becomes longer than the predefined max-height of modal, content will be
                  cropped and scrollable within the modal.
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>Just like that.</p>
              </>
            }
            centered
            footer={
              <>
                <button className="btn btn-secondary" onClick={onClickVisible6} type="button">
                  Close
                </button>
                <button className="btn btn-primary" type="button">
                  Save changes
                </button>
              </>
            }
            header={<button aria-label="Close" className="btn-close" onClick={onClickVisible6} type="button"></button>}
            onVisibleChange={setVisible6}
            scrollable
            tabIndex={-1}
            title="Modal title"
            visible={visible6}
          />
        </div>
      </Example>

      <Example hash="tooltipsAndPopovers" row state={state} t={tModalPage}>
        <button className="btn btn-primary" onClick={onClickVisible7} type="button">
          Launch demo modal
        </button>

        <Modal
          aria-labelledby="exampleModalLabel"
          body={
            <>
              <h2 className="fs-5">Popover in a modal</h2>
              <p>
                This{' '}
                <button
                  className="btn btn-secondary"
                  data-bs-content="Popover body content is set in this attribute."
                  data-bs-toggle="popover"
                  title="Popover title"
                >
                  button
                </button>{' '}
                triggers a popover on click.
              </p>
              <hr />
              <h2 className="fs-5">Tooltips in a modal</h2>
              <p>
                <a data-bs-toggle="tooltip" href="#" title="Tooltip">
                  This link
                </a>{' '}
                and{' '}
                <a data-bs-toggle="tooltip" href="#" title="Tooltip">
                  that link
                </a>{' '}
                have tooltips on hover.
              </p>
            </>
          }
          footer={
            <>
              <button className="btn btn-secondary" onClick={onClickVisible7} type="button">
                Close
              </button>
              <button className="btn btn-primary" type="button">
                Save changes
              </button>
            </>
          }
          header={<button aria-label="Close" className="btn-close" onClick={onClickVisible7} type="button"></button>}
          onVisibleChange={setVisible7}
          tabIndex={-1}
          title="Modal title"
          visible={visible7}
        />
      </Example>

      <Example hash="usingTheGrid" row state={state} t={tModalPage}>
        <button className="btn btn-primary" onClick={onClickVisible8} type="button">
          Launch demo modal
        </button>

        <Modal
          aria-labelledby="exampleModalLabel"
          body={
            <div className="container-fluid bd-example-row">
              <div className="row">
                <div className="col-md-4">.col-md-4</div>
                <div className="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
              </div>
              <div className="row">
                <div className="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
                <div className="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
              </div>
              <div className="row">
                <div className="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
              </div>
              <div className="row">
                <div className="col-sm-9">
                  Level 1: .col-sm-9
                  <div className="row">
                    <div className="col-8 col-sm-6">Level 2: .col-8 .col-sm-6</div>
                    <div className="col-4 col-sm-6">Level 2: .col-4 .col-sm-6</div>
                  </div>
                </div>
              </div>
            </div>
          }
          footer={
            <>
              <button className="btn btn-secondary" onClick={onClickVisible8} type="button">
                Close
              </button>
              <button className="btn btn-primary" type="button">
                Save changes
              </button>
            </>
          }
          header={<button aria-label="Close" className="btn-close" onClick={onClickVisible8} type="button"></button>}
          onVisibleChange={setVisible8}
          tabIndex={-1}
          title="Modal title"
          visible={visible8}
        />
      </Example>

      <Example hash="varyingModalContent" row state={state} t={tModalPage}>
        <div className="d-flex gap-2">
          <button
            className="btn btn-primary"
            onClick={() => {
              setValue('@mdo');
              onClickVisible9();
            }}
            type="button"
          >
            Open modal for @mdo
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setValue('@fat');
              onClickVisible9();
            }}
            type="button"
          >
            OOpen modal for @fat
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setValue('@getbootstrap');
              onClickVisible9();
            }}
            type="button"
          >
            Open modal for @getbootstrap
          </button>
        </div>

        <Modal
          aria-labelledby="exampleModalLabel"
          body={
            <form>
              <div className="mb-3">
                <label className="col-form-label" htmlFor="recipient-name">
                  Recipient:
                </label>
                <input className="form-control" defaultValue={value} id="recipient-name" type="text" />
              </div>
              <div className="mb-3">
                <label className="col-form-label" htmlFor="message-text">
                  Message:
                </label>
                <textarea className="form-control" id="message-text"></textarea>
              </div>
            </form>
          }
          footer={
            <>
              <button className="btn btn-secondary" onClick={onClickVisible9} type="button">
                Close
              </button>
              <button className="btn btn-primary" type="button">
                Save changes
              </button>
            </>
          }
          header={<button aria-label="Close" className="btn-close" onClick={onClickVisible9} type="button"></button>}
          onVisibleChange={setVisible9}
          tabIndex={-1}
          title={`New message to ${value}`}
          titleProps={{
            as: 'h1',
            className: 'fs-5',
          }}
          visible={visible9}
        />
      </Example>

      <Example hash="toggleBetweenModals" row state={state} t={tModalPage}>
        <button className="btn btn-primary" onClick={onClickVisible10} type="button">
          Open first modal
        </button>

        <Modal
          aria-labelledby="exampleModalLabel"
          body="Show a second modal and hide this one with the button below."
          centered
          footer={
            <button
              className="btn btn-primary"
              onClick={() => {
                setToggle(true);
                onClickVisible10();
                onClickVisible11();
              }}
            >
              Open second modal
            </button>
          }
          header={
            <button
              aria-label="Close"
              className="btn-close"
              onClick={() => {
                setToggle(false);
                onClickVisible10();
              }}
              type="button"
            ></button>
          }
          onVisibleChange={setVisible10}
          tabIndex={-1}
          title="Modal 1"
          titleProps={{
            as: 'h1',
            className: 'fs-5',
          }}
          toggle={toggle}
          visible={visible10}
        />

        <Modal
          aria-labelledby="exampleModalLabel"
          body="Hide this modal and show the first with the button below."
          centered
          footer={
            <button
              className="btn btn-primary"
              onClick={() => {
                setToggle(true);
                onClickVisible10();
                onClickVisible11();
              }}
            >
              Back to first
            </button>
          }
          header={
            <button
              aria-label="Close"
              className="btn-close"
              onClick={() => {
                setToggle(false);
                onClickVisible11();
              }}
              type="button"
            ></button>
          }
          onVisibleChange={setVisible11}
          tabIndex={-1}
          title="Modal 2"
          titleProps={{
            as: 'h1',
            className: 'fs-5',
          }}
          toggle={toggle}
          visible={visible11}
        />
      </Example>

      <Example hash="optionalSizes" row state={state} t={tModalPage}>
        <div className="d-flex gap-2">
          <button
            className="btn btn-primary"
            onClick={() => {
              setSize('xl');
              onClickVisible12();
            }}
            type="button"
          >
            Extra large modal
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setSize('lg');
              onClickVisible12();
            }}
            type="button"
          >
            Large modal
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setSize('sm');
              onClickVisible12();
            }}
            type="button"
          >
            Small modal
          </button>
        </div>

        <Modal
          aria-labelledby="exampleModalLabel"
          body
          footer={
            <>
              <button className="btn btn-secondary" onClick={onClickVisible12} type="button">
                Close
              </button>
              <button className="btn btn-primary" type="button">
                Save changes
              </button>
            </>
          }
          header={<button aria-label="Close" className="btn-close" onClick={onClickVisible12} type="button"></button>}
          onVisibleChange={setVisible12}
          size={size}
          tabIndex={-1}
          title={
            size === 'xl'
              ? 'Extra large modal'
              : size === 'lg'
                ? 'Large modal'
                : size === 'sm'
                  ? 'Small modal'
                  : 'Modal title'
          }
          visible={visible12}
        />
      </Example>

      <Example hash="fullscreenModal" row state={state} t={tModalPage}>
        <div className="d-flex flex-wrap gap-2">
          <button
            className="btn btn-primary"
            onClick={() => {
              setFullscreen(true);
              onClickVisible13();
            }}
            type="button"
          >
            Full screen
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setFullscreen('sm');
              onClickVisible13();
            }}
            type="button"
          >
            Full screen below sm
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setFullscreen('md');
              onClickVisible13();
            }}
            type="button"
          >
            Full screen below md
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setFullscreen('lg');
              onClickVisible13();
            }}
            type="button"
          >
            Full screen below lg
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setFullscreen('xl');
              onClickVisible13();
            }}
            type="button"
          >
            Full screen below xl
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setFullscreen('xxl');
              onClickVisible13();
            }}
            type="button"
          >
            Full screen below xxl
          </button>
        </div>

        <Modal
          aria-labelledby="exampleModalLabel"
          body
          footer={
            <button className="btn btn-secondary" onClick={onClickVisible13} type="button">
              Close
            </button>
          }
          fullscreen={fullscreen}
          header={<button aria-label="Close" className="btn-close" onClick={onClickVisible13} type="button"></button>}
          onVisibleChange={setVisible13}
          tabIndex={-1}
          title={
            fullscreen === 'sm'
              ? 'Full screen below sm'
              : fullscreen === 'md'
                ? 'Full screen below md'
                : fullscreen === 'lg'
                  ? 'Full screen below lg'
                  : fullscreen === 'xl'
                    ? 'Full screen below xl'
                    : fullscreen === 'xxl'
                      ? 'Full screen below xxl'
                      : 'Full screen modal'
          }
          visible={visible13}
        />
      </Example>

      <PropsIndicator />

      <Example
        hash="modalComponentProps"
        items={[
          {
            attr: 'header',
            default: '',
            desc: tModalComponentProps('modal.desc.header'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'footer',
            default: '',
            desc: tModalComponentProps('modal.desc.footer'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'title',
            default: '',
            desc: tModalComponentProps('modal.desc.title'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'body',
            default: '',
            desc: tModalComponentProps('modal.desc.body'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'backdrop',
            default: 'true',
            desc: tModalComponentProps('modal.desc.backdrop'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'visible',
            default: 'false',
            desc: tModalComponentProps('modal.desc.visible'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'container',
            default: '',
            desc: tModalComponentProps('modal.desc.container'),
            type: <span className="badge text-bg-secondary">HTMLElement | string</span>,
          },
          {
            attr: 'static',
            default: '',
            desc: tModalComponentProps('modal.desc.static'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'onVisibleChange',
            default: '',
            desc: tModalComponentProps('modal.desc.onVisibleChange'),
            type: <span className="badge text-bg-secondary">(visible: boolean) =&gt; void</span>,
          },
          {
            attr: 'titleProps',
            default: '',
            desc: tModalComponentProps('modal.desc.titleProps'),
            type: <span className="badge text-bg-secondary">ModalTitleProps&lt;div&gt;</span>,
          },
          {
            attr: 'bodyProps',
            default: '',
            desc: tModalComponentProps('modal.desc.bodyProps'),
            type: <span className="badge text-bg-secondary">ModalBodyProps&lt;div&gt;</span>,
          },
          {
            attr: 'contentProps',
            default: '',
            desc: tModalComponentProps('modal.desc.contentProps'),
            type: <span className="badge text-bg-secondary">ModalContentProps&lt;div&gt;</span>,
          },
          {
            attr: 'backdropProps',
            default: '',
            desc: tModalComponentProps('modal.desc.backdropProps'),
            type: <span className="badge text-bg-secondary">BackdropProps&lt;div&gt;</span>,
          },
          {
            attr: 'headerProps',
            default: '',
            desc: tModalComponentProps('modal.desc.headerProps'),
            type: <span className="badge text-bg-secondary">ModalHeaderProps&lt;div&gt;</span>,
          },
          {
            attr: 'footerProps',
            default: '',
            desc: tModalComponentProps('modal.desc.footerProps'),
            type: <span className="badge text-bg-secondary">ModalFooterProps&lt;div&gt;</span>,
          },
          {
            attr: 'dialogProps',
            default: '',
            desc: tModalComponentProps('modal.desc.dialogProps'),
            type: <span className="badge text-bg-secondary">ModalDialogProps&lt;div&gt;</span>,
          },
          {
            attr: 'scrollable',
            default: '',
            desc: tModalComponentProps('modal.desc.scrollable'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'centered',
            default: '',
            desc: tModalComponentProps('modal.desc.centered'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'toggle',
            default: '',
            desc: tModalComponentProps('modal.desc.toggle'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'size',
            default: '',
            desc: tModalComponentProps('modal.desc.size'),
            type: <span className="badge text-bg-secondary">sm | lg | xl</span>,
          },
          {
            attr: 'fullscreen',
            default: '',
            desc: tModalComponentProps('modal.desc.fullscreen'),
            type: <span className="badge text-bg-secondary">boolean | sm | md | lg | xl | xxl</span>,
          },
        ]}
        props
        state={state}
        t={tModalComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
