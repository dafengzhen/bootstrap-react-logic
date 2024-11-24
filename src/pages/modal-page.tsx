import PropsIndicator from '@components/props-indicator.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { Modal } from '@lib/modal';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/modal/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
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

  const [value, setValue] = useState<'@getbootstrap' | '@fat' | '@mdo'>();
  const [toggle, setToggle] = useState(true);
  const [size, setSize] = useState<'lg' | 'sm' | 'xl'>();
  const [fullscreen, setFullscreen] = useState<boolean | 'xxl' | 'lg' | 'md' | 'sm' | 'xl'>();

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
      <Example contentId="custom-container" t={tModalPage} state={state} hash="basic" bg>
        <Modal
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
          header={<button data-bs-dismiss="modal" className="btn-close" aria-label="Close" type="button"></button>}
          body={<p>Modal body text goes here.</p>}
          className="position-static d-block z-0"
          container="#custom-container"
          title="Modal title"
          tabIndex={-1}
        />
      </Example>

      <Example hash="liveDemo" t={tModalPage} state={state} row>
        <button className="btn btn-primary" onClick={onClickVisible} type="button">
          Launch demo modal
        </button>

        <Modal
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
          header={<button onClick={onClickVisible} className="btn-close" aria-label="Close" type="button"></button>}
          aria-labelledby="exampleModalLabel"
          onVisibleChange={setVisible}
          title="Modal title"
          visible={visible}
          tabIndex={-1}
          body
          fade
        />
      </Example>

      <Example hash="staticBackdrop" t={tModalPage} state={state} row>
        <button className="btn btn-primary" onClick={onClickVisible2} type="button">
          Launch static backdrop modal
        </button>

        <Modal
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
          header={<button onClick={onClickVisible2} className="btn-close" aria-label="Close" type="button"></button>}
          titleProps={{
            className: 'fs-5',
            as: 'h1',
          }}
          aria-labelledby="exampleModalLabel"
          onVisibleChange={setVisible2}
          title="Modal title"
          visible={visible2}
          tabIndex={-1}
          static
          body
          fade
        />
      </Example>

      <Example hash="scrollingLongContent" t={tModalPage} state={state}>
        <div>
          <button className="btn btn-primary" onClick={onClickVisible3} type="button">
            Launch demo modal
          </button>

          <Modal
            body={
              <p>
                This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the
                text in the modal, we use an inline style to set a minimum height, thereby extending the length of the
                overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of
                the viewport, scrolling will move the modal as needed.
              </p>
            }
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
            header={<button onClick={onClickVisible3} className="btn-close" aria-label="Close" type="button"></button>}
            bodyProps={{
              style: { minHeight: 1500 },
            }}
            aria-labelledby="exampleModalLabel"
            onVisibleChange={setVisible3}
            title="Modal title"
            visible={visible3}
            tabIndex={-1}
            fade
          />
        </div>

        <div>
          <button className="btn btn-primary" onClick={onClickVisible4} type="button">
            Launch demo modal
          </button>

          <Modal
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
            header={<button onClick={onClickVisible4} className="btn-close" aria-label="Close" type="button"></button>}
            aria-labelledby="exampleModalLabel"
            onVisibleChange={setVisible4}
            title="Modal title"
            visible={visible4}
            tabIndex={-1}
            scrollable
            fade
          />
        </div>
      </Example>

      <Example hash="verticallyCentered" t={tModalPage} state={state}>
        <div>
          <button className="btn btn-primary" onClick={onClickVisible5} type="button">
            Launch demo modal
          </button>

          <Modal
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
            header={<button onClick={onClickVisible5} className="btn-close" aria-label="Close" type="button"></button>}
            body={<p>This is a vertically centered modal.</p>}
            aria-labelledby="exampleModalLabel"
            onVisibleChange={setVisible5}
            title="Modal title"
            visible={visible5}
            tabIndex={-1}
            centered
            fade
          />
        </div>

        <div>
          <button className="btn btn-primary" onClick={onClickVisible6} type="button">
            Launch demo modal
          </button>

          <Modal
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
                <button className="btn btn-secondary" onClick={onClickVisible6} type="button">
                  Close
                </button>
                <button className="btn btn-primary" type="button">
                  Save changes
                </button>
              </>
            }
            header={<button onClick={onClickVisible6} className="btn-close" aria-label="Close" type="button"></button>}
            aria-labelledby="exampleModalLabel"
            onVisibleChange={setVisible6}
            title="Modal title"
            visible={visible6}
            tabIndex={-1}
            scrollable
            centered
            fade
          />
        </div>
      </Example>

      <Example hash="tooltipsAndPopovers" t={tModalPage} state={state} row>
        <button className="btn btn-primary" onClick={onClickVisible7} type="button">
          Launch demo modal
        </button>

        <Modal
          body={
            <>
              <h2 className="fs-5">Popover in a modal</h2>
              <p>
                This{' '}
                <button
                  data-bs-content="Popover body content is set in this attribute."
                  className="btn btn-secondary"
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
                <a data-bs-toggle="tooltip" title="Tooltip" href="#">
                  This link
                </a>{' '}
                and{' '}
                <a data-bs-toggle="tooltip" title="Tooltip" href="#">
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
          header={<button onClick={onClickVisible7} className="btn-close" aria-label="Close" type="button"></button>}
          aria-labelledby="exampleModalLabel"
          onVisibleChange={setVisible7}
          title="Modal title"
          visible={visible7}
          tabIndex={-1}
          fade
        />
      </Example>

      <Example hash="usingTheGrid" t={tModalPage} state={state} row>
        <button className="btn btn-primary" onClick={onClickVisible8} type="button">
          Launch demo modal
        </button>

        <Modal
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
          header={<button onClick={onClickVisible8} className="btn-close" aria-label="Close" type="button"></button>}
          aria-labelledby="exampleModalLabel"
          onVisibleChange={setVisible8}
          title="Modal title"
          visible={visible8}
          tabIndex={-1}
          fade
        />
      </Example>

      <Example hash="varyingModalContent" t={tModalPage} state={state} row>
        <div className="d-flex gap-2">
          <button
            onClick={() => {
              setValue('@mdo');
              onClickVisible9();
            }}
            className="btn btn-primary"
            type="button"
          >
            Open modal for @mdo
          </button>
          <button
            onClick={() => {
              setValue('@fat');
              onClickVisible9();
            }}
            className="btn btn-primary"
            type="button"
          >
            OOpen modal for @fat
          </button>
          <button
            onClick={() => {
              setValue('@getbootstrap');
              onClickVisible9();
            }}
            className="btn btn-primary"
            type="button"
          >
            Open modal for @getbootstrap
          </button>
        </div>

        <Modal
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
          header={<button onClick={onClickVisible9} className="btn-close" aria-label="Close" type="button"></button>}
          titleProps={{
            className: 'fs-5',
            as: 'h1',
          }}
          aria-labelledby="exampleModalLabel"
          title={`New message to ${value}`}
          onVisibleChange={setVisible9}
          visible={visible9}
          tabIndex={-1}
          fade
        />
      </Example>

      <Example hash="toggleBetweenModals" t={tModalPage} state={state} row>
        <button className="btn btn-primary" onClick={onClickVisible10} type="button">
          Open first modal
        </button>

        <Modal
          footer={
            <button
              onClick={() => {
                setToggle(true);
                onClickVisible10();
                onClickVisible11();
              }}
              className="btn btn-primary"
            >
              Open second modal
            </button>
          }
          header={
            <button
              onClick={() => {
                setToggle(false);
                onClickVisible10();
              }}
              className="btn-close"
              aria-label="Close"
              type="button"
            ></button>
          }
          titleProps={{
            className: 'fs-5',
            as: 'h1',
          }}
          body="Show a second modal and hide this one with the button below."
          aria-labelledby="exampleModalLabel"
          onVisibleChange={setVisible10}
          visible={visible10}
          title="Modal 1"
          toggle={toggle}
          tabIndex={-1}
          centered
          fade
        />

        <Modal
          footer={
            <button
              onClick={() => {
                setToggle(true);
                onClickVisible10();
                onClickVisible11();
              }}
              className="btn btn-primary"
            >
              Back to first
            </button>
          }
          header={
            <button
              onClick={() => {
                setToggle(false);
                onClickVisible11();
              }}
              className="btn-close"
              aria-label="Close"
              type="button"
            ></button>
          }
          titleProps={{
            className: 'fs-5',
            as: 'h1',
          }}
          body="Hide this modal and show the first with the button below."
          aria-labelledby="exampleModalLabel"
          onVisibleChange={setVisible11}
          visible={visible11}
          title="Modal 2"
          toggle={toggle}
          tabIndex={-1}
          centered
          fade
        />
      </Example>

      <Example hash="optionalSizes" t={tModalPage} state={state} row>
        <div className="d-flex gap-2">
          <button
            onClick={() => {
              setSize('xl');
              onClickVisible12();
            }}
            className="btn btn-primary"
            type="button"
          >
            Extra large modal
          </button>
          <button
            onClick={() => {
              setSize('lg');
              onClickVisible12();
            }}
            className="btn btn-primary"
            type="button"
          >
            Large modal
          </button>
          <button
            onClick={() => {
              setSize('sm');
              onClickVisible12();
            }}
            className="btn btn-primary"
            type="button"
          >
            Small modal
          </button>
        </div>

        <Modal
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
          title={
            size === 'xl'
              ? 'Extra large modal'
              : size === 'lg'
                ? 'Large modal'
                : size === 'sm'
                  ? 'Small modal'
                  : 'Modal title'
          }
          header={<button onClick={onClickVisible12} className="btn-close" aria-label="Close" type="button"></button>}
          aria-labelledby="exampleModalLabel"
          onVisibleChange={setVisible12}
          visible={visible12}
          tabIndex={-1}
          size={size}
          body
          fade
        />
      </Example>

      <Example hash="fullscreenModal" t={tModalPage} state={state} row>
        <div className="d-flex flex-wrap gap-2">
          <button
            onClick={() => {
              setFullscreen(true);
              onClickVisible13();
            }}
            className="btn btn-primary"
            type="button"
          >
            Full screen
          </button>
          <button
            onClick={() => {
              setFullscreen('sm');
              onClickVisible13();
            }}
            className="btn btn-primary"
            type="button"
          >
            Full screen below sm
          </button>
          <button
            onClick={() => {
              setFullscreen('md');
              onClickVisible13();
            }}
            className="btn btn-primary"
            type="button"
          >
            Full screen below md
          </button>
          <button
            onClick={() => {
              setFullscreen('lg');
              onClickVisible13();
            }}
            className="btn btn-primary"
            type="button"
          >
            Full screen below lg
          </button>
          <button
            onClick={() => {
              setFullscreen('xl');
              onClickVisible13();
            }}
            className="btn btn-primary"
            type="button"
          >
            Full screen below xl
          </button>
          <button
            onClick={() => {
              setFullscreen('xxl');
              onClickVisible13();
            }}
            className="btn btn-primary"
            type="button"
          >
            Full screen below xxl
          </button>
        </div>

        <Modal
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
          footer={
            <button className="btn btn-secondary" onClick={onClickVisible13} type="button">
              Close
            </button>
          }
          header={<button onClick={onClickVisible13} className="btn-close" aria-label="Close" type="button"></button>}
          aria-labelledby="exampleModalLabel"
          onVisibleChange={setVisible13}
          fullscreen={fullscreen}
          visible={visible13}
          tabIndex={-1}
          body
          fade
        />
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tModalComponentProps('modal.desc.header'),
            attr: 'header',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tModalComponentProps('modal.desc.footer'),
            attr: 'footer',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tModalComponentProps('modal.desc.title'),
            attr: 'title',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tModalComponentProps('modal.desc.body'),
            attr: 'body',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tModalComponentProps('modal.desc.fade'),
            default: 'true',
            attr: 'fade',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tModalComponentProps('modal.desc.visible'),
            default: 'false',
            attr: 'visible',
          },
          {
            type: <span className="badge text-bg-secondary">HTMLElement | string</span>,
            desc: tModalComponentProps('modal.desc.container'),
            attr: 'container',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tModalComponentProps('modal.desc.static'),
            attr: 'static',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">(visible: boolean) =&gt; void</span>,
            desc: tModalComponentProps('modal.desc.onVisibleChange'),
            attr: 'onVisibleChange',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ModalTitleProps&lt;div&gt;</span>,
            desc: tModalComponentProps('modal.desc.titleProps'),
            attr: 'titleProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ModalBodyProps&lt;div&gt;</span>,
            desc: tModalComponentProps('modal.desc.bodyProps'),
            attr: 'bodyProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ModalContentProps&lt;div&gt;</span>,
            desc: tModalComponentProps('modal.desc.contentProps'),
            attr: 'contentProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">BackdropProps&lt;div&gt;</span>,
            desc: tModalComponentProps('modal.desc.backdropProps'),
            attr: 'backdropProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ModalHeaderProps&lt;div&gt;</span>,
            desc: tModalComponentProps('modal.desc.headerProps'),
            attr: 'headerProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ModalFooterProps&lt;div&gt;</span>,
            desc: tModalComponentProps('modal.desc.footerProps'),
            attr: 'footerProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ModalDialogProps&lt;div&gt;</span>,
            desc: tModalComponentProps('modal.desc.dialogProps'),
            attr: 'dialogProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tModalComponentProps('modal.desc.scrollable'),
            attr: 'scrollable',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tModalComponentProps('modal.desc.centered'),
            attr: 'centered',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tModalComponentProps('modal.desc.toggle'),
            attr: 'toggle',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">sm | lg | xl</span>,
            desc: tModalComponentProps('modal.desc.size'),
            attr: 'size',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean | sm | md | lg | xl | xxl</span>,
            desc: tModalComponentProps('modal.desc.fullscreen'),
            attr: 'fullscreen',
            default: '',
          },
        ]}
        hash="modalComponentProps"
        t={tModalComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
