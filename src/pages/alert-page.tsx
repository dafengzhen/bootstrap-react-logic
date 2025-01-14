import About from '@components/about.tsx';
import EventsIndicator from '@components/events-indicator.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import TypesIndicator from '@components/types-indicator.tsx';
import { Alert } from '@lib/alert';
import AlertHeading from '@lib/alert/alert-heading.tsx';
import AlertLink from '@lib/alert/alert-link.tsx';
import { Button } from '@lib/button';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/alert/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

export default function AlertPage() {
  const navigation = useNavigation();
  const { t: tAlertComponentProps } = useTranslation(['alertComponentProps']);
  const { t: tAlertPage } = useTranslation(['alertPage']);
  const state = useState(codes);
  const [visible, setVisible] = useState(true);
  const [alerts, setAlerts] = useState<
    {
      id: number;
      visible: boolean;
    }[]
  >([]);

  function onClickShowLiveAlertTest() {
    setAlerts((prevAlerts) => [...prevAlerts, { id: (prevAlerts.at(-1)?.id ?? 0) + 1, visible: true }]);
  }

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tAlertPage}>
        <Alert role="alert" variant="primary">
          A simple primary alert—check it out!
        </Alert>

        <Alert role="alert" variant="secondary">
          A simple secondary alert—check it out!
        </Alert>

        <Alert role="alert" variant="success">
          A simple success alert—check it out!
        </Alert>

        <Alert role="alert" variant="danger">
          A simple danger alert—check it out!
        </Alert>

        <Alert role="alert" variant="warning">
          A simple warning alert—check it out!
        </Alert>

        <Alert role="alert" variant="info">
          A simple info alert—check it out!
        </Alert>

        <Alert role="alert" variant="light">
          A simple light alert—check it out!
        </Alert>

        <Alert role="alert" variant="dark">
          A simple dark alert—check it out!
        </Alert>
      </Example>

      <Example hash="liveExample" state={state} t={tAlertPage}>
        {alerts.map((item, index) => {
          return (
            <Alert
              clickToClose={false}
              dismissible
              key={item.id}
              onVisibleChange={(visible) =>
                setAlerts((prevState) => [
                  ...prevState.slice(0, index),
                  { ...prevState[index], visible },
                  ...prevState.slice(index + 1),
                ])
              }
              role="alert"
              variant="success"
              visible={item.visible}
            >
              <div>A simple primary alert—check it out!</div>
            </Alert>
          );
        })}

        <div>
          <Button onClick={onClickShowLiveAlertTest} variant="primary">
            Show live alert
          </Button>
        </div>
      </Example>

      <Example hash="linkColor" state={state} t={tAlertPage}>
        <Alert role="alert" variant="primary">
          A simple primary alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
        </Alert>

        <Alert role="alert" variant="secondary">
          A simple secondary alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
        </Alert>

        <Alert role="alert" variant="success">
          A simple success alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
        </Alert>

        <Alert role="alert" variant="danger">
          A simple danger alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
        </Alert>

        <Alert role="alert" variant="warning">
          A simple warning alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
        </Alert>

        <Alert role="alert" variant="info">
          A simple info alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
        </Alert>

        <Alert role="alert" variant="light">
          A simple light alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
        </Alert>

        <Alert role="alert" variant="dark">
          A simple dark alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
        </Alert>
      </Example>

      <Example hash="additionalContent" state={state} t={tAlertPage}>
        <Alert role="alert" variant="success">
          <AlertHeading>Well done!</AlertHeading>
          <p>
            Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer
            so that you can see how spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </Alert>
      </Example>

      <Example hash="icons" state={state} t={tAlertPage}>
        <Alert className="d-flex align-items-center" role="alert" variant="primary">
          <i className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"></i>
          <div>An example alert with an icon</div>
        </Alert>

        <Alert className="d-flex align-items-center" role="alert" variant="primary">
          <i className="bi bi-exclamation-circle-fill flex-shrink-0 me-2"></i>
          <div>An example alert with an icon</div>
        </Alert>

        <Alert className="d-flex align-items-center" role="alert" variant="success">
          <i className="bi bi-check-circle-fill flex-shrink-0 me-2"></i>
          <div>An example success alert with an icon</div>
        </Alert>

        <Alert className="d-flex align-items-center" role="alert" variant="warning">
          <i className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"></i>
          <div>An example warning alert with an icon</div>
        </Alert>

        <Alert className="d-flex align-items-center" role="alert" variant="danger">
          <i className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"></i>
          <div>An example danger alert with an icon</div>
        </Alert>
      </Example>

      <Example hash="dismissing" state={state} t={tAlertPage}>
        <Alert dismissible role="alert" variant="warning">
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        </Alert>

        <Alert
          closeButton={
            <button
              aria-label="Close"
              className="btn-close"
              data-bs-dismiss="alert"
              onClick={() => setVisible(!visible)}
              type="button"
            />
          }
          dismissible
          role="alert"
          variant="warning"
          visible={visible}
        >
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        </Alert>
      </Example>

      <PropsIndicator />

      <Example
        hash="alertComponentProps"
        items={[
          {
            attr: 'variant',
            default: '',
            desc: tAlertComponentProps('alert.desc.variant'),
            type: (
              <Link to="#alertComponentTypes">
                <span className="badge text-bg-secondary d-inline">
                  Variant
                  <i className="bi bi-link ms-1"></i>
                </span>
              </Link>
            ),
          },
          {
            attr: 'clickToClose',
            default: 'true',
            desc: tAlertComponentProps('alert.desc.clickToClose'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'dismissible',
            default: '',
            desc: tAlertComponentProps('alert.desc.dismissible'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'closeButton',
            default: '',
            desc: tAlertComponentProps('alert.desc.closeButton'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'closeButtonProps',
            default: '',
            desc: tAlertComponentProps('alert.desc.closeButtonProps'),
            type: (
              <Link to="#alertComponentTypes">
                <span className="badge text-bg-secondary d-inline">
                  ButtonProps
                  <i className="bi bi-link ms-1"></i>
                </span>
              </Link>
            ),
          },
          {
            attr: 'visible',
            default: '',
            desc: tAlertComponentProps('alert.desc.visible'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tAlertComponentProps}
      />

      <Example
        hash="alertLinkComponentProps"
        items={[
          {
            attr: '-',
            default: '-',
            desc: '-',
            type: '-',
          },
        ]}
        props
        state={state}
        t={tAlertComponentProps}
      />

      <Example
        hash="alertHeadingComponentProps"
        items={[
          {
            attr: '-',
            default: '-',
            desc: '-',
            type: '-',
          },
        ]}
        props
        state={state}
        t={tAlertComponentProps}
      />

      <EventsIndicator />

      <Example
        events
        hash="alertComponentProps"
        items={[
          {
            attr: 'onVisibleChange',
            default: '',
            desc: tAlertComponentProps('alert.desc.onVisibleChange'),
            type: <span className="badge text-bg-secondary">{'onVisibleChange: (visible: boolean) => void'}</span>,
          },
        ]}
        state={state}
        t={tAlertComponentProps}
      />

      <TypesIndicator />

      <Example
        hash="alertComponentProps"
        items={[
          {
            attr: 'Variant',
            default: '',
            desc: tAlertComponentProps('alert.desc.variant'),
            type: (
              <div className="row row-cols-auto g-1">
                <div className="col">
                  <span className="badge text-bg-secondary">secondary</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">primary</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">success</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">warning</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">danger</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">light</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">dark</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">info</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">link</span>
                </div>
              </div>
            ),
          },
          {
            attr: 'ButtonProps',
            default: '',
            desc: tAlertComponentProps('alert.desc.buttonProps'),
            type: <span className="badge text-bg-secondary">{'{ className: string, style: CSSProperties }'}</span>,
          },
        ]}
        state={state}
        t={tAlertComponentProps}
        types
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
