import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import OptionRow from '@components/option-row.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Toast } from '@lib/toast';
import { transformCodeObj } from '@src/tools';
import { type ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/toast/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

const SquareIcon = ({ className = '', fill = '#007aff', height = 20, width = 20 }) => {
  return (
    <svg
      aria-hidden="true"
      className={`bd-placeholder-img rounded me-2 ${className}`}
      focusable="false"
      height={height}
      preserveAspectRatio="xMidYMid slice"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill={fill} height="100%" width="100%" />
    </svg>
  );
};

export default function BadgePage() {
  const navigation = useNavigation();
  const { t: tToastComponentProps } = useTranslation(['toastComponentProps']);
  const { t: tToastPage } = useTranslation(['toastPage']);
  const state = useState(codes);

  const [visible, setVisible] = useState(true);
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

  const [toasts, setToasts] = useState<
    {
      id: number;
      visible: boolean;
    }[]
  >([]);

  function onClickVisible() {
    setVisible(!visible);
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
      case 'bottom-0 end-0':
        setPlacement('bottom-end');
        break;
      case 'bottom-0 start-0':
        setPlacement('bottom-start');
        break;
      case 'bottom-0 start-50 translate-middle-x':
        setPlacement('bottom-center');
        break;
      case 'top-0 end-0':
        setPlacement('top-end');
        break;
      case 'top-0 start-0':
        setPlacement('top-start');
        break;
      case 'top-0 start-50 translate-middle-x':
        setPlacement('top-center');
        break;
      case 'top-50 end-0 translate-middle-y':
        setPlacement('middle-right');
        break;
      case 'top-50 start-0 translate-middle-y':
        setPlacement('middle-left');
        break;
      case 'top-50 start-50 translate-middle':
        setPlacement('middle-center');
        break;
    }
  }

  function onClickShowLiveToastTest() {
    setToasts((prevState) => [...prevState, { id: (prevState.at(-1)?.id ?? 0) + 1, visible: true }]);
  }

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tToastPage}>
        <Toast
          aria-atomic="true"
          aria-live="assertive"
          autohide={false}
          body="Hello, world! This is a toast message."
          header={
            <>
              <SquareIcon />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
              <button
                aria-label="Close"
                className="btn-close"
                data-bs-dismiss="toast"
                onClick={onClickVisible}
                type="button"
              ></button>
            </>
          }
          role="alert"
          visible={visible}
        />
      </Example>

      <Example hash="liveExample" state={state} t={tToastPage}>
        <div>
          <button className="btn btn-primary" onClick={onClickShowLiveToastTest} type="button">
            Show live toast
          </button>
        </div>

        <Toast
          container
          containerProps={{
            className: 'bottom-0 end-0 p-3 overflow-y-auto tw-max-h-screen tw-pointer-events-auto',
          }}
          options={toasts.map((item, index) => {
            const onVisibleChange = (visible: boolean) => {
              setToasts((prevState) => [
                ...prevState.slice(0, index),
                { ...prevState[index], visible },
                ...prevState.slice(index + 1),
              ]);
            };

            return {
              'aria-atomic': 'true',
              'aria-live': 'assertive',
              body: 'Hello, world! This is a toast message.',
              header: (
                <>
                  <SquareIcon />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                  <button
                    aria-label="Close"
                    className="btn-close tw-pointer-events-auto"
                    data-bs-dismiss="toast"
                    onClick={() => onVisibleChange(!item.visible)}
                    type="button"
                  ></button>
                </>
              ),
              id: item.id,
              onVisibleChange,
              role: 'alert',
              visible: item.visible,
            };
          })}
          position="fixed"
        />
      </Example>

      <Example bg="dark" hash="translucent" state={state} t={tToastPage}>
        <Toast
          aria-atomic="true"
          aria-live="assertive"
          autohide={false}
          body="Hello, world! This is a toast message."
          header={
            <>
              <SquareIcon />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
              <button
                aria-label="Close"
                className="btn-close"
                data-bs-dismiss="toast"
                onClick={onClickVisible3}
                type="button"
              ></button>
            </>
          }
          role="alert"
          visible={visible3}
        />
      </Example>

      <Example hash="stacking" state={state} t={tToastPage}>
        <Toast
          container
          options={[
            {
              'aria-atomic': 'true',
              'aria-live': 'assertive',
              autohide: false,
              body: 'See? Just like this.',
              header: (
                <>
                  <SquareIcon />
                  <strong className="me-auto">Bootstrap</strong>
                  <small className="text-body-secondary">just now</small>
                  <button
                    aria-label="Close"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    onClick={onClickVisible4}
                    type="button"
                  ></button>
                </>
              ),
              role: 'alert',
              visible: visible4,
            },
            {
              'aria-atomic': 'true',
              'aria-live': 'assertive',
              autohide: false,
              body: 'Heads up, toasts will stack automatically',
              header: (
                <>
                  <SquareIcon />
                  <strong className="me-auto">Bootstrap</strong>
                  <small className="text-body-secondary">2 seconds ago</small>
                  <button
                    aria-label="Close"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    onClick={onClickVisible5}
                    type="button"
                  ></button>
                </>
              ),
              role: 'alert',
              visible: visible5,
            },
          ]}
          position="static"
        />
      </Example>

      <Example gap3 hash="customContent" state={state} t={tToastPage}>
        <Toast
          aria-atomic="true"
          aria-live="assertive"
          autohide={false}
          className="align-items-center"
          customContent={
            <div className="d-flex">
              <div className="toast-body">Hello, world! This is a toast message.</div>
              <button
                aria-label="Close"
                className="btn-close me-2 m-auto"
                data-bs-dismiss="toast"
                onClick={onClickVisible6}
                type="button"
              ></button>
            </div>
          }
          role="alert"
          visible={visible6}
        />

        <Toast
          aria-atomic="true"
          aria-live="assertive"
          autohide={false}
          customContent={
            <div className="toast-body">
              Hello, world! This is a toast message.
              <div className="mt-2 pt-2 border-top d-flex gap-2">
                <button className="btn btn-primary btn-sm" type="button">
                  Take action
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  data-bs-dismiss="toast"
                  onClick={onClickVisible7}
                  type="button"
                >
                  Close
                </button>
              </div>
            </div>
          }
          role="alert"
          visible={visible7}
        />
      </Example>

      <Example hash="colorSchemes" state={state} t={tToastPage}>
        <Toast
          aria-atomic="true"
          aria-live="assertive"
          autohide={false}
          className="align-items-center text-bg-primary border-0"
          customContent={
            <div className="d-flex">
              <div className="toast-body">Hello, world! This is a toast message.</div>
              <button
                aria-label="Close"
                className="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast"
                onClick={onClickVisible8}
                type="button"
              ></button>
            </div>
          }
          role="alert"
          visible={visible8}
        />
      </Example>

      <Example gap3 hash="placement" state={state} t={tToastPage}>
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
          aria-atomic="true"
          aria-live="polite"
          className="bg-body-secondary position-relative bd-example-toasts rounded-3"
        >
          <Toast
            container
            containerProps={{
              className: 'p-3',
            }}
            options={[
              {
                'aria-atomic': 'true',
                'aria-live': 'assertive',
                autohide: false,
                body: 'Hello, world! This is a toast message.',
                header: (
                  <>
                    <SquareIcon />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button
                      aria-label="Close"
                      className="btn-close"
                      data-bs-dismiss="toast"
                      onClick={onClickVisible9}
                      type="button"
                    ></button>
                  </>
                ),
                role: 'alert',
                visible: visible9,
              },
            ]}
            placement={placement}
          />
        </div>

        <div className="bd-example-toasts">
          <div aria-atomic="true" aria-live="polite" className="position-relative">
            <Toast
              container
              containerProps={{
                className: 'top-0 end-0 p-3',
              }}
              options={[
                {
                  'aria-atomic': 'true',
                  'aria-live': 'assertive',
                  autohide: false,
                  body: 'See? Just like this.',
                  header: (
                    <>
                      <SquareIcon />
                      <strong className="me-auto">Bootstrap</strong>
                      <small className="text-body-secondary">just now</small>
                      <button
                        aria-label="Close"
                        className="btn-close"
                        data-bs-dismiss="toast"
                        onClick={onClickVisible10}
                        type="button"
                      ></button>
                    </>
                  ),
                  role: 'alert',
                  visible: visible10,
                },
                {
                  'aria-atomic': 'true',
                  'aria-live': 'assertive',
                  autohide: false,
                  body: 'Heads up, toasts will stack automatically',
                  header: (
                    <>
                      <SquareIcon />
                      <strong className="me-auto">Bootstrap</strong>
                      <small className="text-body-secondary">2 seconds ago</small>
                      <button
                        aria-label="Close"
                        className="btn-close"
                        data-bs-dismiss="toast"
                        onClick={onClickVisible11}
                        type="button"
                      ></button>
                    </>
                  ),
                  role: 'alert',
                  visible: visible11,
                },
              ]}
            />
          </div>
        </div>

        <div className="bd-example-toasts">
          <div aria-atomic="true" aria-live="polite" className="d-flex justify-content-center align-items-center w-100">
            <Toast
              aria-atomic="true"
              aria-live="assertive"
              autohide={false}
              body="Hello, world! This is a toast message."
              header={
                <>
                  <SquareIcon />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                  <button
                    aria-label="Close"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    onClick={onClickVisible12}
                    type="button"
                  ></button>
                </>
              }
              role="alert"
              visible={visible12}
            />
          </div>
        </div>
      </Example>

      <Example hash="accessibility" state={state} t={tToastPage}>
        <Toast
          aria-atomic="true"
          aria-live="assertive"
          autohide={false}
          body="Hello, world! This is a toast message."
          header={
            <>
              <SquareIcon />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
              <button
                aria-label="Close"
                className="btn-close"
                data-bs-dismiss="toast"
                onClick={onClickVisible13}
                type="button"
              ></button>
            </>
          }
          role="alert"
          visible={visible13}
        />
      </Example>

      <PropsIndicator />

      <Example
        hash="toastComponentProps"
        items={[
          {
            attr: 'autohide',
            default: '',
            desc: tToastComponentProps('toast.desc.autohide'),
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
          },
          {
            attr: 'body',
            default: '',
            desc: tToastComponentProps('toast.desc.body'),
            type: <span className="badge text-bg-secondary ms-1">ReactNode</span>,
          },
          {
            attr: 'bodyProps',
            default: '',
            desc: tToastComponentProps('toast.desc.bodyProps'),
            type: <span className="badge text-bg-secondary ms-1">ToastBodyProps</span>,
          },
          {
            attr: 'container',
            default: '',
            desc: tToastComponentProps('toast.desc.container'),
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
          },
          {
            attr: 'containerProps',
            default: '',
            desc: tToastComponentProps('toast.desc.containerProps'),
            type: <span className="badge text-bg-secondary ms-1">ToastContainerProps</span>,
          },
          {
            attr: 'customContent',
            default: '',
            desc: tToastComponentProps('toast.desc.customContent'),
            type: <span className="badge text-bg-secondary ms-1">ReactNode</span>,
          },
          {
            attr: 'delay',
            default: '',
            desc: tToastComponentProps('toast.desc.delay'),
            type: <span className="badge text-bg-secondary ms-1">number</span>,
          },
          {
            attr: 'header',
            default: '',
            desc: tToastComponentProps('toast.desc.header'),
            type: <span className="badge text-bg-secondary ms-1">ReactNode</span>,
          },
          {
            attr: 'headerProps',
            default: '',
            desc: tToastComponentProps('toast.desc.headerProps'),
            type: <span className="badge text-bg-secondary ms-1">ToastHeaderProps</span>,
          },
          {
            attr: 'onVisibleChange',
            default: '',
            desc: tToastComponentProps('toast.desc.onVisibleChange'),
            type: <span className="badge text-bg-secondary ms-1">(visible: boolean) =&gt; void</span>,
          },
          {
            attr: 'options',
            default: '',
            desc: tToastComponentProps('toast.desc.options'),
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="id?: number | string" value={tToastComponentProps('toast.options.id')} />
                <OptionRow label="autohide?: boolean" value={tToastComponentProps('toast.options.autohide')} />
                <OptionRow label="body?: ReactNode" value={tToastComponentProps('toast.options.body')} />
                <OptionRow label="bodyProps?: ToastBodyProps" value={tToastComponentProps('toast.options.bodyProps')} />
                <OptionRow label="delay?: number" value={tToastComponentProps('toast.options.delay')} />
                <OptionRow label="header?: ReactNode" value={tToastComponentProps('toast.options.header')} />
                <OptionRow
                  label="headerProps?: ToastHeaderProps"
                  value={tToastComponentProps('toast.options.headerProps')}
                />
                <OptionRow
                  label="onVisibleChange?: (visible: boolean) => void"
                  value={tToastComponentProps('toast.options.onVisibleChange')}
                />
                <OptionRow label="visible?: boolean" value={tToastComponentProps('toast.options.visible')} />
              </div>
            ),
          },
          {
            attr: 'placement',
            default: '',
            desc: tToastComponentProps('toast.desc.placement'),
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
          },
          {
            attr: 'position',
            default: '',
            desc: tToastComponentProps('toast.desc.position'),
            type: <span className="badge text-bg-secondary ms-1">fixed | static</span>,
          },
          {
            attr: 'visible',
            default: 'true',
            desc: tToastComponentProps('toast.desc.visible'),
            type: <span className="badge text-bg-secondary ms-1">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tToastComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
