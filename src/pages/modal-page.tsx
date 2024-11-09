import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import { Modal } from '@lib/modal';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/modal/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    query: '?raw',
    import: 'default',
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

  const [value, setValue] = useState<'@mdo' | '@fat' | '@getbootstrap'>();
  const [toggle, setToggle] = useState(true);
  const [size, setSize] = useState<'sm' | 'lg' | 'xl'>();
  const [fullscreen, setFullscreen] = useState<boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>();

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
      <Example hash="basic" state={state} t={tModalPage} contentId="custom-container" bg>
        <Modal
          container="#custom-container"
          tabIndex={-1}
          className="position-static d-block z-0"
          title="Modal title"
          header={<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>}
          body={<p>Modal body text goes here.</p>}
          footer={
            <>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </>
          }
        />
      </Example>

      <Example hash="liveDemo" state={state} t={tModalPage} row>
        <button type="button" className="btn btn-primary" onClick={onClickVisible}>
          Launch demo modal
        </button>

        <Modal
          visible={visible}
          onVisibleChange={setVisible}
          fade
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          title="Modal title"
          header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible}></button>}
          body
          footer={
            <>
              <button type="button" className="btn btn-secondary" onClick={onClickVisible}>
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </>
          }
        />
      </Example>

      <Example hash="staticBackdrop" state={state} t={tModalPage} row>
        <button type="button" className="btn btn-primary" onClick={onClickVisible2}>
          Launch static backdrop modal
        </button>

        <Modal
          visible={visible2}
          onVisibleChange={setVisible2}
          static
          fade
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          title="Modal title"
          titleProps={{
            as: 'h1',
            className: 'fs-5',
          }}
          header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible2}></button>}
          body
          footer={
            <>
              <button type="button" className="btn btn-secondary" onClick={onClickVisible2}>
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </>
          }
        />
      </Example>

      <Example hash="scrollingLongContent" state={state} t={tModalPage}>
        <div>
          <button type="button" className="btn btn-primary" onClick={onClickVisible3}>
            Launch demo modal
          </button>

          <Modal
            visible={visible3}
            onVisibleChange={setVisible3}
            fade
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            title="Modal title"
            header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible3}></button>}
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
                <button type="button" className="btn btn-secondary" onClick={onClickVisible3}>
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </>
            }
          />
        </div>

        <div>
          <button type="button" className="btn btn-primary" onClick={onClickVisible4}>
            Launch demo modal
          </button>

          <Modal
            scrollable
            visible={visible4}
            onVisibleChange={setVisible4}
            fade
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            title="Modal title"
            header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible4}></button>}
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
                <button type="button" className="btn btn-secondary" onClick={onClickVisible4}>
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </>
            }
          />
        </div>
      </Example>

      <Example hash="verticallyCentered" state={state} t={tModalPage}>
        <div>
          <button type="button" className="btn btn-primary" onClick={onClickVisible5}>
            Launch demo modal
          </button>

          <Modal
            centered
            visible={visible5}
            onVisibleChange={setVisible5}
            fade
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            title="Modal title"
            header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible5}></button>}
            body={<p>This is a vertically centered modal.</p>}
            footer={
              <>
                <button type="button" className="btn btn-secondary" onClick={onClickVisible5}>
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </>
            }
          />
        </div>

        <div>
          <button type="button" className="btn btn-primary" onClick={onClickVisible6}>
            Launch demo modal
          </button>

          <Modal
            centered
            scrollable
            visible={visible6}
            onVisibleChange={setVisible6}
            fade
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            title="Modal title"
            header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible6}></button>}
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
            footer={
              <>
                <button type="button" className="btn btn-secondary" onClick={onClickVisible6}>
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </>
            }
          />
        </div>
      </Example>

      <Example hash="tooltipsAndPopovers" state={state} t={tModalPage} row>
        <button type="button" className="btn btn-primary" onClick={onClickVisible7}>
          Launch demo modal
        </button>

        <Modal
          visible={visible7}
          onVisibleChange={setVisible7}
          fade
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          title="Modal title"
          header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible7}></button>}
          body={
            <>
              <h2 className="fs-5">Popover in a modal</h2>
              <p>
                This{' '}
                <button
                  className="btn btn-secondary"
                  data-bs-toggle="popover"
                  title="Popover title"
                  data-bs-content="Popover body content is set in this attribute."
                >
                  button
                </button>{' '}
                triggers a popover on click.
              </p>
              <hr />
              <h2 className="fs-5">Tooltips in a modal</h2>
              <p>
                <a href="#" data-bs-toggle="tooltip" title="Tooltip">
                  This link
                </a>{' '}
                and{' '}
                <a href="#" data-bs-toggle="tooltip" title="Tooltip">
                  that link
                </a>{' '}
                have tooltips on hover.
              </p>
            </>
          }
          footer={
            <>
              <button type="button" className="btn btn-secondary" onClick={onClickVisible7}>
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </>
          }
        />
      </Example>

      <Example hash="usingTheGrid" state={state} t={tModalPage} row>
        <button type="button" className="btn btn-primary" onClick={onClickVisible8}>
          Launch demo modal
        </button>

        <Modal
          visible={visible8}
          onVisibleChange={setVisible8}
          fade
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          title="Modal title"
          header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible8}></button>}
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
              <button type="button" className="btn btn-secondary" onClick={onClickVisible8}>
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </>
          }
        />
      </Example>

      <Example hash="varyingModalContent" state={state} t={tModalPage} row>
        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setValue('@mdo');
              onClickVisible9();
            }}
          >
            Open modal for @mdo
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setValue('@fat');
              onClickVisible9();
            }}
          >
            OOpen modal for @fat
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setValue('@getbootstrap');
              onClickVisible9();
            }}
          >
            Open modal for @getbootstrap
          </button>
        </div>

        <Modal
          visible={visible9}
          onVisibleChange={setVisible9}
          fade
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          title={`New message to ${value}`}
          titleProps={{
            as: 'h1',
            className: 'fs-5',
          }}
          header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible9}></button>}
          body={
            <form>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Recipient:
                </label>
                <input type="text" className="form-control" id="recipient-name" defaultValue={value} />
              </div>
              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">
                  Message:
                </label>
                <textarea className="form-control" id="message-text"></textarea>
              </div>
            </form>
          }
          footer={
            <>
              <button type="button" className="btn btn-secondary" onClick={onClickVisible9}>
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </>
          }
        />
      </Example>

      <Example hash="toggleBetweenModals" state={state} t={tModalPage} row>
        <button type="button" className="btn btn-primary" onClick={onClickVisible10}>
          Open first modal
        </button>

        <Modal
          toggle={toggle}
          centered
          visible={visible10}
          onVisibleChange={setVisible10}
          fade
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          title="Modal 1"
          titleProps={{
            as: 'h1',
            className: 'fs-5',
          }}
          header={
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => {
                setToggle(false);
                onClickVisible10();
              }}
            ></button>
          }
          body="Show a second modal and hide this one with the button below."
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
        />

        <Modal
          toggle={toggle}
          centered
          visible={visible11}
          onVisibleChange={setVisible11}
          fade
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          title="Modal 2"
          titleProps={{
            as: 'h1',
            className: 'fs-5',
          }}
          header={
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => {
                setToggle(false);
                onClickVisible11();
              }}
            ></button>
          }
          body="Hide this modal and show the first with the button below."
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
        />
      </Example>

      <Example hash="optionalSizes" state={state} t={tModalPage} row>
        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setSize('xl');
              onClickVisible12();
            }}
          >
            Extra large modal
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setSize('lg');
              onClickVisible12();
            }}
          >
            Large modal
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setSize('sm');
              onClickVisible12();
            }}
          >
            Small modal
          </button>
        </div>

        <Modal
          size={size}
          visible={visible12}
          onVisibleChange={setVisible12}
          fade
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          title={
            size === 'xl'
              ? 'Extra large modal'
              : size === 'lg'
                ? 'Large modal'
                : size === 'sm'
                  ? 'Small modal'
                  : 'Modal title'
          }
          header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible12}></button>}
          body
          footer={
            <>
              <button type="button" className="btn btn-secondary" onClick={onClickVisible12}>
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </>
          }
        />
      </Example>

      <Example hash="fullscreenModal" state={state} t={tModalPage} row>
        <div className="d-flex flex-wrap gap-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setFullscreen(true);
              onClickVisible13();
            }}
          >
            Full screen
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setFullscreen('sm');
              onClickVisible13();
            }}
          >
            Full screen below sm
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setFullscreen('md');
              onClickVisible13();
            }}
          >
            Full screen below md
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setFullscreen('lg');
              onClickVisible13();
            }}
          >
            Full screen below lg
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setFullscreen('xl');
              onClickVisible13();
            }}
          >
            Full screen below xl
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setFullscreen('xxl');
              onClickVisible13();
            }}
          >
            Full screen below xxl
          </button>
        </div>

        <Modal
          fullscreen={fullscreen}
          visible={visible13}
          onVisibleChange={setVisible13}
          fade
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
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
          header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible13}></button>}
          body
          footer={
            <button type="button" className="btn btn-secondary" onClick={onClickVisible13}>
              Close
            </button>
          }
        />
      </Example>

      <PropsIndicator />

      <Example
        props
        hash="modalComponentProps"
        state={state}
        t={tModalComponentProps}
        items={[
          {
            attr: 'header',
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tModalComponentProps('modal.desc.header'),
            default: '',
          },
          {
            attr: 'footer',
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tModalComponentProps('modal.desc.footer'),
            default: '',
          },
          {
            attr: 'title',
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tModalComponentProps('modal.desc.title'),
            default: '',
          },
          {
            attr: 'body',
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tModalComponentProps('modal.desc.body'),
            default: '',
          },
          {
            attr: 'fade',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tModalComponentProps('modal.desc.fade'),
            default: 'true',
          },
          {
            attr: 'visible',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tModalComponentProps('modal.desc.visible'),
            default: 'false',
          },
          {
            attr: 'container',
            type: <span className="badge text-bg-secondary">HTMLElement | string</span>,
            desc: tModalComponentProps('modal.desc.container'),
            default: '',
          },
          {
            attr: 'static',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tModalComponentProps('modal.desc.static'),
            default: '',
          },
          {
            attr: 'onVisibleChange',
            type: <span className="badge text-bg-secondary">(visible: boolean) =&gt; void</span>,
            desc: tModalComponentProps('modal.desc.onVisibleChange'),
            default: '',
          },
          {
            attr: 'titleProps',
            type: <span className="badge text-bg-secondary">ModalTitleProps&lt;div&gt;</span>,
            desc: tModalComponentProps('modal.desc.titleProps'),
            default: '',
          },
          {
            attr: 'bodyProps',
            type: <span className="badge text-bg-secondary">ModalBodyProps&lt;div&gt;</span>,
            desc: tModalComponentProps('modal.desc.bodyProps'),
            default: '',
          },
          {
            attr: 'contentProps',
            type: <span className="badge text-bg-secondary">ModalContentProps&lt;div&gt;</span>,
            desc: tModalComponentProps('modal.desc.contentProps'),
            default: '',
          },
          {
            attr: 'backdropProps',
            type: <span className="badge text-bg-secondary">BackdropProps&lt;div&gt;</span>,
            desc: tModalComponentProps('modal.desc.backdropProps'),
            default: '',
          },
          {
            attr: 'headerProps',
            type: <span className="badge text-bg-secondary">ModalHeaderProps&lt;div&gt;</span>,
            desc: tModalComponentProps('modal.desc.headerProps'),
            default: '',
          },
          {
            attr: 'footerProps',
            type: <span className="badge text-bg-secondary">ModalFooterProps&lt;div&gt;</span>,
            desc: tModalComponentProps('modal.desc.footerProps'),
            default: '',
          },
          {
            attr: 'dialogProps',
            type: <span className="badge text-bg-secondary">ModalDialogProps&lt;div&gt;</span>,
            desc: tModalComponentProps('modal.desc.dialogProps'),
            default: '',
          },
          {
            attr: 'scrollable',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tModalComponentProps('modal.desc.scrollable'),
            default: '',
          },
          {
            attr: 'centered',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tModalComponentProps('modal.desc.centered'),
            default: '',
          },
          {
            attr: 'toggle',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tModalComponentProps('modal.desc.toggle'),
            default: '',
          },
          {
            attr: 'size',
            type: <span className="badge text-bg-secondary">sm | lg | xl</span>,
            desc: tModalComponentProps('modal.desc.size'),
            default: '',
          },
          {
            attr: 'fullscreen',
            type: <span className="badge text-bg-secondary">boolean | sm | md | lg | xl | xxl</span>,
            desc: tModalComponentProps('modal.desc.fullscreen'),
            default: '',
          },
        ]}
      />

      <Example props hash="commonComponentProps" state={state} />

      <About />
    </div>
  );
}
