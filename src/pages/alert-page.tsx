import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import { Alert } from '@lib/alert';
import { Button } from '@lib/button';
import AlertLink from '@lib/alert/alert-link.tsx';
import AlertHeading from '@lib/alert/alert-heading.tsx';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/alert/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    query: '?raw',
    import: 'default',
  }),
);

export default function AlertPage() {
  const navigation = useNavigation();
  const { t: tAlertComponentProps } = useTranslation(['alertComponentProps']);
  const { t: tAlertPage } = useTranslation(['alertPage']);
  const state = useState(codes);
  const [alerts, setAlerts] = useState<number[]>([]);

  function onClickShowLiveAlertTest() {
    setAlerts([...alerts, alerts.length + 1]);
  }

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tAlertPage}>
        <Alert variant="primary" role="alert">
          A simple primary alert—check it out!
        </Alert>

        <Alert variant="secondary" role="alert">
          A simple secondary alert—check it out!
        </Alert>

        <Alert variant="success" role="alert">
          A simple success alert—check it out!
        </Alert>

        <Alert variant="danger" role="alert">
          A simple danger alert—check it out!
        </Alert>

        <Alert variant="warning" role="alert">
          A simple warning alert—check it out!
        </Alert>

        <Alert variant="info" role="alert">
          A simple info alert—check it out!
        </Alert>

        <Alert variant="light" role="alert">
          A simple light alert—check it out!
        </Alert>

        <Alert variant="dark" role="alert">
          A simple dark alert—check it out!
        </Alert>
      </Example>

      <Example hash="liveExample" state={state} t={tAlertPage}>
        {alerts.map((item) => {
          return (
            <Alert
              key={item}
              variant="success"
              role="alert"
              fade
              dismissible
              clickToClose={false}
              onClose={(close) => {
                close?.();
              }}
            >
              <div>A simple primary alert—check it out!</div>
            </Alert>
          );
        })}

        <div>
          <Button variant="primary" onClick={onClickShowLiveAlertTest}>
            Show live alert
          </Button>
        </div>
      </Example>

      <Example hash="linkColor" state={state} t={tAlertPage}>
        <Alert variant="primary" role="alert">
          A simple primary alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
        </Alert>

        <Alert variant="secondary" role="alert">
          A simple secondary alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
        </Alert>

        <Alert variant="success" role="alert">
          A simple success alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
        </Alert>

        <Alert variant="danger" role="alert">
          A simple danger alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
        </Alert>

        <Alert variant="warning" role="alert">
          A simple warning alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
        </Alert>

        <Alert variant="info" role="alert">
          A simple info alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
        </Alert>

        <Alert variant="light" role="alert">
          A simple light alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
        </Alert>

        <Alert variant="dark" role="alert">
          A simple dark alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
        </Alert>
      </Example>

      <Example hash="additionalContent" state={state} t={tAlertPage}>
        <Alert variant="success" role="alert">
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
        <Alert variant="primary" className="d-flex align-items-center" role="alert">
          <i className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"></i>
          <div>An example alert with an icon</div>
        </Alert>

        <Alert variant="primary" className="d-flex align-items-center" role="alert">
          <i className="bi bi-exclamation-circle-fill flex-shrink-0 me-2"></i>
          <div>An example alert with an icon</div>
        </Alert>

        <Alert variant="success" className="d-flex align-items-center" role="alert">
          <i className="bi bi-check-circle-fill flex-shrink-0 me-2"></i>
          <div>An example success alert with an icon</div>
        </Alert>

        <Alert variant="warning" className="d-flex align-items-center" role="alert">
          <i className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"></i>
          <div>An example warning alert with an icon</div>
        </Alert>

        <Alert variant="danger" className="d-flex align-items-center" role="alert">
          <i className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"></i>
          <div>An example danger alert with an icon</div>
        </Alert>
      </Example>

      <Example hash="dismissing" state={state} t={tAlertPage}>
        <Alert variant="warning" fade dismissible role="alert">
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        </Alert>

        <Alert
          variant="warning"
          fade
          dismissible
          closeButton={({ close }) => {
            return (
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={close}
              ></button>
            );
          }}
          role="alert"
        >
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        </Alert>
      </Example>

      <PropsIndicator />

      <Example
        props
        hash="alertComponentProps"
        state={state}
        t={tAlertComponentProps}
        items={[
          {
            attr: 'variant',
            type: (
              <div className="d-flex flex-column">
                {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((item) => {
                  return (
                    <div key={item}>
                      <span className="badge text-bg-secondary">{item}</span>
                    </div>
                  );
                })}
              </div>
            ),
            desc: tAlertComponentProps('alert.desc.variant'),
            default: '',
          },
          {
            attr: 'onClose',
            type: <span className="badge text-bg-secondary">(close?: () =&gt; void) =&gt; void</span>,
            desc: tAlertComponentProps('alert.desc.onClose'),
            default: '',
          },
          {
            attr: 'clickToClose',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tAlertComponentProps('alert.desc.clickToClose'),
            default: 'true',
          },
          {
            attr: 'dismissible',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tAlertComponentProps('alert.desc.dismissible'),
            default: '',
          },
          {
            attr: 'fade',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tAlertComponentProps('alert.desc.fade'),
            default: '',
          },
          {
            attr: 'closeButton',
            type: <span className="badge text-bg-secondary">{'({ close }: { close: () => void }) => ReactNode'}</span>,
            desc: tAlertComponentProps('alert.desc.closeButton'),
            default: '',
          },
          {
            attr: 'closeButtonProps',
            type: <span className="badge text-bg-secondary">ButtonProps&lt;button&gt;</span>,
            desc: tAlertComponentProps('alert.desc.closeButtonProps'),
            default: '',
          },
          {
            attr: 'visible',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tAlertComponentProps('alert.desc.visible'),
            default: '',
          },
        ]}
      />

      <Example
        props
        hash="alertLinkComponentProps"
        state={state}
        t={tAlertComponentProps}
        items={[
          {
            attr: '-',
            type: '-',
            desc: '-',
            default: '-',
          },
        ]}
      />

      <Example
        props
        hash="alertHeadingComponentProps"
        state={state}
        t={tAlertComponentProps}
        items={[
          {
            attr: '-',
            type: '-',
            desc: '-',
            default: '-',
          },
        ]}
      />

      <Example props hash="commonComponentProps" state={state} />

      <About />
    </div>
  );
}
