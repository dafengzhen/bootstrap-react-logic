import PropsIndicator from '@components/props-indicator.tsx';
import { useNavigation } from 'react-router-dom';
import { Placeholder } from '@lib/placeholder';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/placeholder/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
  }),
);

const ExampleCardImg = ({ fill }: { fill?: string }) => {
  return (
    <svg
      className="bd-placeholder-img card-img-top"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Placeholder"
      focusable="false"
      height="180"
      width="100%"
      role="img"
    >
      <title>Placeholder</title>
      <rect height="100%" width="100%" fill={fill}></rect>
    </svg>
  );
};

export default function PlaceholderPage() {
  const navigation = useNavigation();
  const { t: tPlaceholderComponentProps } = useTranslation(['placeholderComponentProps']);
  const { t: tPlaceholderPage } = useTranslation(['placeholderPage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example
        parentClassName="d-flex bd-example-placeholder-cards justify-content-around"
        t={tPlaceholderPage}
        state={state}
        hash="basic"
        row
      >
        <div className="card">
          <ExampleCardImg fill="#20c997" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a className="btn btn-primary" href="#">
              Go somewhere
            </a>
          </div>
        </div>

        <div aria-hidden="true" className="card">
          <ExampleCardImg fill="#868e96" />
          <div className="card-body">
            <h5 className="card-title">
              <Placeholder animation="glow" col={6} />
            </h5>

            <p className="card-text placeholder-glow">
              <Placeholder className="me-1" col={7} />
              <Placeholder col={4} />
              <Placeholder className="me-1" col={4} />
              <Placeholder col={6} />
              <Placeholder col={8} />
            </p>

            <Placeholder className="btn btn-primary disabled" ria-disabled="true" col={6} as="a" />
          </div>
        </div>
      </Example>

      <Example t={tPlaceholderPage} hash="howItWorks" state={state}>
        <p aria-hidden="true">
          <Placeholder col={6} />
        </p>

        <Placeholder className="btn btn-primary disabled" col={4} as="a" />
      </Example>

      <Example t={tPlaceholderPage} state={state} hash="width">
        <Placeholder col={6} />
        <Placeholder className="w-75" />
        <Placeholder style={{ width: '25%' }} />
      </Example>

      <Example t={tPlaceholderPage} state={state} hash="color">
        <Placeholder col={12} />
        <Placeholder bg="primary" col={12} />
        <Placeholder bg="secondary" col={12} />
        <Placeholder bg="success" col={12} />
        <Placeholder bg="danger" col={12} />
        <Placeholder bg="warning" col={12} />
        <Placeholder bg="info" col={12} />
        <Placeholder bg="light" col={12} />
        <Placeholder bg="dark" col={12} />
      </Example>

      <Example t={tPlaceholderPage} hash="sizing" state={state}>
        <Placeholder size="lg" col={12} />
        <Placeholder col={12} />
        <Placeholder size="sm" col={12} />
        <Placeholder size="xs" col={12} />
      </Example>

      <Example t={tPlaceholderPage} hash="animation" state={state}>
        <Placeholder animation="glow" col={12} as="p" />
        <Placeholder animation="wave" col={12} as="p" />
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">glow | wave</span>,
            desc: tPlaceholderComponentProps('placeholder.desc.animation'),
            attr: 'animation',
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
            desc: tPlaceholderComponentProps('placeholder.desc.bg'),
            default: '',
            attr: 'bg',
          },
          {
            type: <span className="badge text-bg-secondary">number</span>,
            desc: tPlaceholderComponentProps('placeholder.desc.col'),
            attr: 'col',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">lg | sm | xs</span>,
            desc: tPlaceholderComponentProps('placeholder.desc.size'),
            attr: 'size',
            default: '',
          },
        ]}
        hash="placeholderComponentProps"
        t={tPlaceholderComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
