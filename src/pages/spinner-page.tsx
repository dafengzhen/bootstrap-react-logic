import PropsIndicator from '@components/props-indicator.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { Spinner } from '@lib/spinner';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/spinner/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
  }),
);

export default function SpinnerPage() {
  const navigation = useNavigation();
  const { t: tSpinnerComponentProps } = useTranslation(['spinnerComponentProps']);
  const { t: tSpinnerPage } = useTranslation(['spinnerPage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example t={tSpinnerPage} state={state} hash="basic">
        <Spinner role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Example>

      <Example t={tSpinnerPage} hash="colors" state={state} row>
        <Spinner variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>

        <Spinner variant="secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>

        <Spinner variant="success" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>

        <Spinner variant="danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>

        <Spinner variant="warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>

        <Spinner variant="info" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>

        <Spinner variant="light" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>

        <Spinner variant="dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Example>

      <Example hash="growingSpinner" t={tSpinnerPage} state={state}>
        <div>
          <Spinner role="status" grow>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>

        <div className="d-flex flex-wrap gap-2">
          <Spinner variant="primary" role="status" grow>
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          <Spinner variant="secondary" role="status" grow>
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          <Spinner variant="success" role="status" grow>
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          <Spinner variant="danger" role="status" grow>
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          <Spinner variant="warning" role="status" grow>
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          <Spinner variant="info" role="status" grow>
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          <Spinner variant="light" role="status" grow>
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          <Spinner variant="dark" role="status" grow>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </Example>

      <Example t={tSpinnerPage} hash="margin" state={state}>
        <Spinner className="m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Example>

      <Example t={tSpinnerPage} state={state} hash="flex">
        <div className="d-flex justify-content-center">
          <Spinner role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>

        <div className="d-flex align-items-center">
          <strong role="status">Loading...</strong>
          <Spinner className="ms-auto" aria-hidden="true" />
        </div>
      </Example>

      <Example t={tSpinnerPage} hash="floats" state={state}>
        <div className="clearfix">
          <Spinner className="float-end" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </Example>

      <Example hash="textAlign" t={tSpinnerPage} state={state}>
        <div className="text-center">
          <Spinner role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </Example>

      <Example t={tSpinnerPage} state={state} hash="size">
        <div className="d-flex gap-2">
          <Spinner role="status" size="sm">
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          <Spinner role="status" size="sm" grow>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>

        <div className="d-flex gap-2">
          <Spinner style={{ height: '3rem', width: '3rem' }} role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          <Spinner style={{ height: '3rem', width: '3rem' }} role="status" grow>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </Example>

      <Example t={tSpinnerPage} hash="buttons" state={state}>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" type="button" disabled>
            <Spinner aria-hidden="true" as="span" size="sm" />
            <span className="visually-hidden" role="status">
              Loading...
            </span>
          </button>
          <button className="btn btn-primary" type="button" disabled>
            <Spinner aria-hidden="true" className="me-1" as="span" size="sm" />
            <span role="status">Loading...</span>
          </button>
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-primary" type="button" disabled>
            <Spinner aria-hidden="true" as="span" size="sm" grow />
            <span className="visually-hidden" role="status">
              Loading...
            </span>
          </button>
          <button className="btn btn-primary" type="button" disabled>
            <Spinner aria-hidden="true" className="me-1" as="span" size="sm" grow />
            <span role="status">Loading...</span>
          </button>
        </div>
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tSpinnerComponentProps('spinner.desc.grow'),
            attr: 'grow',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">sm</span>,
            desc: tSpinnerComponentProps('spinner.desc.size'),
            attr: 'size',
            default: '',
          },
          {
            type: (
              <div className="row">
                <div className="col-auto">
                  <span className="badge text-bg-secondary">danger</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">dark</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">info</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">light</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">primary</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">secondary</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">success</span>
                </div>
                <div className="col-auto">
                  <span className="badge text-bg-secondary">warning</span>
                </div>
              </div>
            ),
            desc: tSpinnerComponentProps('spinner.desc.variant'),
            attr: 'variant',
            default: '',
          },
        ]}
        hash="spinnerComponentProps"
        t={tSpinnerComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
