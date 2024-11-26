import PropsIndicator from '@components/props-indicator.tsx';
import AlertHeading from '@lib/alert/alert-heading.tsx';
import AlertLink from '@lib/alert/alert-link.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { Button } from '@lib/button';
import { Alert } from '@lib/alert';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/alert/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
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
      visible: boolean;
      id: number;
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
      <Example t={tAlertPage} state={state} hash="basic">
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

      <Example hash="liveExample" t={tAlertPage} state={state}>
        {alerts.map((item, index) => {
          return (
            <Alert
              onVisibleChange={(visible) =>
                setAlerts((prevState) => [
                  ...prevState.slice(0, index),
                  { ...prevState[index], visible },
                  ...prevState.slice(index + 1),
                ])
              }
              visible={item.visible}
              clickToClose={false}
              variant="success"
              key={item.id}
              role="alert"
              dismissible
              fade
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

      <Example hash="linkColor" t={tAlertPage} state={state}>
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

      <Example hash="additionalContent" t={tAlertPage} state={state}>
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

      <Example t={tAlertPage} state={state} hash="icons">
        <Alert className="d-flex align-items-center" variant="primary" role="alert">
          <i className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"></i>
          <div>An example alert with an icon</div>
        </Alert>

        <Alert className="d-flex align-items-center" variant="primary" role="alert">
          <i className="bi bi-exclamation-circle-fill flex-shrink-0 me-2"></i>
          <div>An example alert with an icon</div>
        </Alert>

        <Alert className="d-flex align-items-center" variant="success" role="alert">
          <i className="bi bi-check-circle-fill flex-shrink-0 me-2"></i>
          <div>An example success alert with an icon</div>
        </Alert>

        <Alert className="d-flex align-items-center" variant="warning" role="alert">
          <i className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"></i>
          <div>An example warning alert with an icon</div>
        </Alert>

        <Alert className="d-flex align-items-center" variant="danger" role="alert">
          <i className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"></i>
          <div>An example danger alert with an icon</div>
        </Alert>
      </Example>

      <Example hash="dismissing" t={tAlertPage} state={state}>
        <Alert variant="warning" role="alert" dismissible fade>
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        </Alert>

        <Alert
          closeButton={
            <button
              onClick={() => setVisible(!visible)}
              data-bs-dismiss="alert"
              className="btn-close"
              aria-label="Close"
              type="button"
            />
          }
          visible={visible}
          variant="warning"
          role="alert"
          dismissible
          fade
        >
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        </Alert>
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
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
            attr: 'variant',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">{'onVisibleChange: (visible: boolean) => void'}</span>,
            desc: tAlertComponentProps('alert.desc.onVisibleChange'),
            attr: 'onVisibleChange',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tAlertComponentProps('alert.desc.clickToClose'),
            attr: 'clickToClose',
            default: 'true',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tAlertComponentProps('alert.desc.dismissible'),
            attr: 'dismissible',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tAlertComponentProps('alert.desc.fade'),
            attr: 'fade',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tAlertComponentProps('alert.desc.closeButton'),
            attr: 'closeButton',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ButtonProps</span>,
            desc: tAlertComponentProps('alert.desc.closeButtonProps'),
            attr: 'closeButtonProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tAlertComponentProps('alert.desc.visible'),
            attr: 'visible',
            default: '',
          },
        ]}
        hash="alertComponentProps"
        t={tAlertComponentProps}
        state={state}
        props
      />

      <Example
        items={[
          {
            default: '-',
            attr: '-',
            desc: '-',
            type: '-',
          },
        ]}
        hash="alertLinkComponentProps"
        t={tAlertComponentProps}
        state={state}
        props
      />

      <Example
        items={[
          {
            default: '-',
            attr: '-',
            desc: '-',
            type: '-',
          },
        ]}
        hash="alertHeadingComponentProps"
        t={tAlertComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
