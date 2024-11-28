import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Spinner } from '@lib/spinner';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/spinner/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
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
      <Example hash="basic" state={state} t={tSpinnerPage}>
        <Spinner role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Example>

      <Example hash="colors" row state={state} t={tSpinnerPage}>
        <Spinner role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>

        <Spinner role="status" variant="secondary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>

        <Spinner role="status" variant="success">
          <span className="visually-hidden">Loading...</span>
        </Spinner>

        <Spinner role="status" variant="danger">
          <span className="visually-hidden">Loading...</span>
        </Spinner>

        <Spinner role="status" variant="warning">
          <span className="visually-hidden">Loading...</span>
        </Spinner>

        <Spinner role="status" variant="info">
          <span className="visually-hidden">Loading...</span>
        </Spinner>

        <Spinner role="status" variant="light">
          <span className="visually-hidden">Loading...</span>
        </Spinner>

        <Spinner role="status" variant="dark">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Example>

      <Example hash="growingSpinner" state={state} t={tSpinnerPage}>
        <div>
          <Spinner grow role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>

        <div className="d-flex flex-wrap gap-2">
          <Spinner grow role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          <Spinner grow role="status" variant="secondary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          <Spinner grow role="status" variant="success">
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          <Spinner grow role="status" variant="danger">
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          <Spinner grow role="status" variant="warning">
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          <Spinner grow role="status" variant="info">
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          <Spinner grow role="status" variant="light">
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          <Spinner grow role="status" variant="dark">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </Example>

      <Example hash="margin" state={state} t={tSpinnerPage}>
        <Spinner className="m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Example>

      <Example hash="flex" state={state} t={tSpinnerPage}>
        <div className="d-flex justify-content-center">
          <Spinner role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>

        <div className="d-flex align-items-center">
          <strong role="status">Loading...</strong>
          <Spinner aria-hidden="true" className="ms-auto" />
        </div>
      </Example>

      <Example hash="floats" state={state} t={tSpinnerPage}>
        <div className="clearfix">
          <Spinner className="float-end" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </Example>

      <Example hash="textAlign" state={state} t={tSpinnerPage}>
        <div className="text-center">
          <Spinner role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </Example>

      <Example hash="size" state={state} t={tSpinnerPage}>
        <div className="d-flex gap-2">
          <Spinner role="status" size="sm">
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          <Spinner grow role="status" size="sm">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>

        <div className="d-flex gap-2">
          <Spinner role="status" style={{ height: '3rem', width: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </Spinner>

          <Spinner grow role="status" style={{ height: '3rem', width: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </Example>

      <Example hash="buttons" state={state} t={tSpinnerPage}>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" disabled type="button">
            <Spinner aria-hidden="true" as="span" size="sm" />
            <span className="visually-hidden" role="status">
              Loading...
            </span>
          </button>
          <button className="btn btn-primary" disabled type="button">
            <Spinner aria-hidden="true" as="span" className="me-1" size="sm" />
            <span role="status">Loading...</span>
          </button>
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-primary" disabled type="button">
            <Spinner aria-hidden="true" as="span" grow size="sm" />
            <span className="visually-hidden" role="status">
              Loading...
            </span>
          </button>
          <button className="btn btn-primary" disabled type="button">
            <Spinner aria-hidden="true" as="span" className="me-1" grow size="sm" />
            <span role="status">Loading...</span>
          </button>
        </div>
      </Example>

      <PropsIndicator />

      <Example
        hash="spinnerComponentProps"
        items={[
          {
            attr: 'grow',
            default: '',
            desc: tSpinnerComponentProps('spinner.desc.grow'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'size',
            default: '',
            desc: tSpinnerComponentProps('spinner.desc.size'),
            type: <span className="badge text-bg-secondary">sm</span>,
          },
          {
            attr: 'variant',
            default: '',
            desc: tSpinnerComponentProps('spinner.desc.variant'),
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
          },
        ]}
        props
        state={state}
        t={tSpinnerComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
