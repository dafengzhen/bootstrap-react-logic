import PropsIndicator from '@components/props-indicator.tsx';
import OptionRow from '@components/option-row.tsx';
import { type ChangeEvent, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { Toast } from '@lib/toast';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/toast/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
  }),
);

const SquareIcon = ({ fill = '#007aff', className = '', height = 20, width = 20 }) => {
  return (
    <svg
      className={`bd-placeholder-img rounded me-2 ${className}`}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      height={height}
      width={width}
    >
      <rect height="100%" width="100%" fill={fill} />
    </svg>
  );
};

export default function BadgePage() {
  const navigation = useNavigation();
  const { t: tToastComponentProps } = useTranslation(['toastComponentProps']);
  const { t: tToastPage } = useTranslation(['toastPage']);
  const state = useState(codes);

  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(true);
  const [visible4, setVisible4] = useState(true);
  const [visible5, setVisible5] = useState(true);
  const [visible6, setVisible6] = useState(true);
  const [visible7, setVisible7] = useState(true);
  const [visible8, setVisible8] = useState(true);
  const [visible9, setVisible9] = useState(true);
  const [visible10, setVisible10] = useState(true);
  const [visible11, setVisible11] = useState(true);
  const [visible12, setVisible12] = useState(true);
  const [visible13, setVisible13] = useState(true);

  const [placement, setPlacement] = useState<any>();

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

  function onChangeSelect(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    switch (value) {
      case 'bottom-0 start-50 translate-middle-x':
        setPlacement('bottom-center');
        break;
      case 'top-0 start-50 translate-middle-x':
        setPlacement('top-center');
        break;
      case 'top-50 start-0 translate-middle-y':
        setPlacement('middle-left');
        break;
      case 'top-50 start-50 translate-middle':
        setPlacement('middle-center');
        break;
      case 'top-50 end-0 translate-middle-y':
        setPlacement('middle-right');
        break;
      case 'bottom-0 start-0':
        setPlacement('bottom-start');
        break;
      case 'bottom-0 end-0':
        setPlacement('bottom-end');
        break;
      case 'top-0 start-0':
        setPlacement('top-start');
        break;
      case 'top-0 end-0':
        setPlacement('top-end');
        break;
    }
  }

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example t={tToastPage} state={state} hash="basic">
        <Toast
          header={
            <>
              <SquareIcon />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
              <button
                onClick={onClickVisible}
                data-bs-dismiss="toast"
                className="btn-close"
                aria-label="Close"
                type="button"
              ></button>
            </>
          }
          body="Hello, world! This is a toast message."
          aria-live="assertive"
          aria-atomic="true"
          visible={visible}
          autohide={false}
          role="alert"
        />
      </Example>

      <Example hash="liveExample" t={tToastPage} state={state}>
        <div>
          <button className="btn btn-primary" onClick={onClickVisible2} type="button">
            Show live toast
          </button>
        </div>

        <Toast
          options={[
            {
              header: (
                <>
                  <SquareIcon />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                  <button
                    onClick={onClickVisible2}
                    data-bs-dismiss="toast"
                    className="btn-close"
                    aria-label="Close"
                    type="button"
                  ></button>
                </>
              ),
              body: 'Hello, world! This is a toast message.',
              'aria-live': 'assertive',
              'aria-atomic': 'true',
              onChange: setVisible2,
              visible: visible2,
              role: 'alert',
            },
          ]}
          containerProps={{
            className: 'bottom-0 end-0 p-3',
          }}
          position="fixed"
          container
        />
      </Example>

      <Example hash="translucent" t={tToastPage} state={state} bg="dark">
        <Toast
          header={
            <>
              <SquareIcon />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
              <button
                onClick={onClickVisible3}
                data-bs-dismiss="toast"
                className="btn-close"
                aria-label="Close"
                type="button"
              ></button>
            </>
          }
          body="Hello, world! This is a toast message."
          aria-live="assertive"
          aria-atomic="true"
          visible={visible3}
          autohide={false}
          role="alert"
        />
      </Example>

      <Example hash="stacking" t={tToastPage} state={state}>
        <Toast
          options={[
            {
              header: (
                <>
                  <SquareIcon />
                  <strong className="me-auto">Bootstrap</strong>
                  <small className="text-body-secondary">just now</small>
                  <button
                    onClick={onClickVisible4}
                    data-bs-dismiss="toast"
                    className="btn-close"
                    aria-label="Close"
                    type="button"
                  ></button>
                </>
              ),
              body: 'See? Just like this.',
              'aria-live': 'assertive',
              'aria-atomic': 'true',
              visible: visible4,
              autohide: false,
              role: 'alert',
            },
            {
              header: (
                <>
                  <SquareIcon />
                  <strong className="me-auto">Bootstrap</strong>
                  <small className="text-body-secondary">2 seconds ago</small>
                  <button
                    onClick={onClickVisible5}
                    data-bs-dismiss="toast"
                    className="btn-close"
                    aria-label="Close"
                    type="button"
                  ></button>
                </>
              ),
              body: 'Heads up, toasts will stack automatically',
              'aria-live': 'assertive',
              'aria-atomic': 'true',
              visible: visible5,
              role: 'alert',
            },
          ]}
          position="static"
          container
        />
      </Example>

      <Example hash="customContent" t={tToastPage} state={state} gap3>
        <Toast
          customContent={
            <div className="d-flex">
              <div className="toast-body">Hello, world! This is a toast message.</div>
              <button
                className="btn-close me-2 m-auto"
                onClick={onClickVisible6}
                data-bs-dismiss="toast"
                aria-label="Close"
                type="button"
              ></button>
            </div>
          }
          className="align-items-center"
          aria-live="assertive"
          aria-atomic="true"
          visible={visible6}
          autohide={false}
          role="alert"
        />

        <Toast
          customContent={
            <div className="toast-body">
              Hello, world! This is a toast message.
              <div className="mt-2 pt-2 border-top d-flex gap-2">
                <button className="btn btn-primary btn-sm" type="button">
                  Take action
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={onClickVisible7}
                  data-bs-dismiss="toast"
                  type="button"
                >
                  Close
                </button>
              </div>
            </div>
          }
          aria-live="assertive"
          aria-atomic="true"
          visible={visible7}
          autohide={false}
          role="alert"
        />
      </Example>

      <Example hash="colorSchemes" t={tToastPage} state={state}>
        <Toast
          customContent={
            <div className="d-flex">
              <div className="toast-body">Hello, world! This is a toast message.</div>
              <button
                className="btn-close btn-close-white me-2 m-auto"
                onClick={onClickVisible8}
                data-bs-dismiss="toast"
                aria-label="Close"
                type="button"
              ></button>
            </div>
          }
          className="align-items-center text-bg-primary border-0"
          aria-live="assertive"
          aria-atomic="true"
          visible={visible8}
          autohide={false}
          role="alert"
        />
      </Example>

      <Example hash="placement" t={tToastPage} state={state} gap3>
        <form>
          <div className="mb-3">
            <label htmlFor="selectToastPlacement">Toast placement</label>
            <select className="form-select mt-2" id="selectToastPlacement" onChange={onChangeSelect}>
              <option defaultChecked value="">
                Select a position...
              </option>
              <option value="top-0 start-0">Top left</option>
              <option value="top-0 start-50 translate-middle-x">Top center</option>
              <option value="top-0 end-0">Top right</option>
              <option value="top-50 start-0 translate-middle-y">Middle left</option>
              <option value="top-50 start-50 translate-middle">Middle center</option>
              <option value="top-50 end-0 translate-middle-y">Middle right</option>
              <option value="bottom-0 start-0">Bottom left</option>
              <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
              <option value="bottom-0 end-0">Bottom right</option>
            </select>
          </div>
        </form>

        <div
          className="bg-body-secondary position-relative bd-example-toasts rounded-3"
          aria-atomic="true"
          aria-live="polite"
        >
          <Toast
            options={[
              {
                header: (
                  <>
                    <SquareIcon />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button
                      onClick={onClickVisible9}
                      data-bs-dismiss="toast"
                      className="btn-close"
                      aria-label="Close"
                      type="button"
                    ></button>
                  </>
                ),
                body: 'Hello, world! This is a toast message.',
                'aria-live': 'assertive',
                'aria-atomic': 'true',
                visible: visible9,
                autohide: false,
                role: 'alert',
              },
            ]}
            containerProps={{
              className: 'p-3',
            }}
            placement={placement}
            container
          />
        </div>

        <div className="bd-example-toasts">
          <div className="position-relative" aria-atomic="true" aria-live="polite">
            <Toast
              options={[
                {
                  header: (
                    <>
                      <SquareIcon />
                      <strong className="me-auto">Bootstrap</strong>
                      <small className="text-body-secondary">just now</small>
                      <button
                        onClick={onClickVisible10}
                        data-bs-dismiss="toast"
                        className="btn-close"
                        aria-label="Close"
                        type="button"
                      ></button>
                    </>
                  ),
                  body: 'See? Just like this.',
                  'aria-live': 'assertive',
                  'aria-atomic': 'true',
                  visible: visible10,
                  autohide: false,
                  role: 'alert',
                },
                {
                  header: (
                    <>
                      <SquareIcon />
                      <strong className="me-auto">Bootstrap</strong>
                      <small className="text-body-secondary">2 seconds ago</small>
                      <button
                        onClick={onClickVisible11}
                        data-bs-dismiss="toast"
                        className="btn-close"
                        aria-label="Close"
                        type="button"
                      ></button>
                    </>
                  ),
                  body: 'Heads up, toasts will stack automatically',
                  'aria-live': 'assertive',
                  'aria-atomic': 'true',
                  visible: visible11,
                  autohide: false,
                  role: 'alert',
                },
              ]}
              containerProps={{
                className: 'top-0 end-0 p-3',
              }}
              container
            />
          </div>
        </div>

        <div className="bd-example-toasts">
          <div className="d-flex justify-content-center align-items-center w-100" aria-atomic="true" aria-live="polite">
            <Toast
              header={
                <>
                  <SquareIcon />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                  <button
                    onClick={onClickVisible12}
                    data-bs-dismiss="toast"
                    className="btn-close"
                    aria-label="Close"
                    type="button"
                  ></button>
                </>
              }
              body="Hello, world! This is a toast message."
              aria-live="assertive"
              visible={visible12}
              aria-atomic="true"
              autohide={false}
              role="alert"
            />
          </div>
        </div>
      </Example>

      <Example hash="accessibility" t={tToastPage} state={state}>
        <Toast
          header={
            <>
              <SquareIcon />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
              <button
                onClick={onClickVisible13}
                data-bs-dismiss="toast"
                className="btn-close"
                aria-label="Close"
                type="button"
              ></button>
            </>
          }
          body="Hello, world! This is a toast message."
          aria-live="assertive"
          visible={visible13}
          aria-atomic="true"
          autohide={false}
          role="alert"
        />
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
            desc: tToastComponentProps('toast.desc.autohide'),
            attr: 'autohide',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">ReactNode</span>,
            desc: tToastComponentProps('toast.desc.body'),
            attr: 'body',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">ToastBodyProps</span>,
            desc: tToastComponentProps('toast.desc.bodyProps'),
            attr: 'bodyProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
            desc: tToastComponentProps('toast.desc.container'),
            attr: 'container',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">ToastContainerProps</span>,
            desc: tToastComponentProps('toast.desc.containerProps'),
            attr: 'containerProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">ReactNode</span>,
            desc: tToastComponentProps('toast.desc.customContent'),
            attr: 'customContent',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">number</span>,
            desc: tToastComponentProps('toast.desc.delay'),
            attr: 'delay',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
            desc: tToastComponentProps('toast.desc.fade'),
            attr: 'fade',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">ReactNode</span>,
            desc: tToastComponentProps('toast.desc.header'),
            attr: 'header',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">ToastHeaderProps</span>,
            desc: tToastComponentProps('toast.desc.headerProps'),
            attr: 'headerProps',
            default: '',
          },
          {
            type: (
              <span className="badge text-bg-secondary ms-1">(visible: boolean, event?: MouseEvent) =&gt; void</span>
            ),
            desc: tToastComponentProps('toast.desc.onChange'),
            attr: 'onChange',
            default: '',
          },
          {
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow value={tToastComponentProps('toast.options.id')} label="id?: number | string" />
                <OptionRow value={tToastComponentProps('toast.options.autohide')} label="autohide?: boolean" />
                <OptionRow value={tToastComponentProps('toast.options.body')} label="body?: ReactNode" />
                <OptionRow value={tToastComponentProps('toast.options.bodyProps')} label="bodyProps?: ToastBodyProps" />
                <OptionRow value={tToastComponentProps('toast.options.delay')} label="delay?: number" />
                <OptionRow value={tToastComponentProps('toast.options.fade')} label="fade?: boolean" />
                <OptionRow value={tToastComponentProps('toast.options.header')} label="header?: ReactNode" />
                <OptionRow
                  value={tToastComponentProps('toast.options.headerProps')}
                  label="headerProps?: ToastHeaderProps"
                />
                <OptionRow
                  value={tToastComponentProps('toast.options.onChange')}
                  label="onChange?: (visible: boolean) => void"
                />
                <OptionRow value={tToastComponentProps('toast.options.visible')} label="visible?: boolean" />
              </div>
            ),
            desc: tToastComponentProps('toast.desc.options'),
            attr: 'options',
            default: '',
          },
          {
            type: (
              <div className="row">
                <div className="col-auto">
                  <span className="badge text-bg-secondary">bottom-center</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">bottom-end</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">bottom-start</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">middle-center</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">middle-left</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">middle-right</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">top-center</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">top-end</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">top-start</span>
                </div>
              </div>
            ),
            desc: tToastComponentProps('toast.desc.placement'),
            attr: 'placement',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">fixed | static</span>,
            desc: tToastComponentProps('toast.desc.position'),
            attr: 'position',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
            desc: tToastComponentProps('toast.desc.visible'),
            attr: 'visible',
            default: '',
          },
        ]}
        hash="toastComponentProps"
        t={tToastComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
