import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Placeholder } from '@lib/placeholder';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/placeholder/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

const ExampleCardImg = ({ fill }: { fill?: string }) => {
  return (
    <svg
      aria-label="Placeholder"
      className="bd-placeholder-img card-img-top"
      focusable="false"
      height="180"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Placeholder</title>
      <rect fill={fill} height="100%" width="100%"></rect>
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
        hash="basic"
        parentClassName="d-flex bd-example-placeholder-cards justify-content-around"
        row
        state={state}
        t={tPlaceholderPage}
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

            <Placeholder as="a" className="btn btn-primary disabled" col={6} ria-disabled="true" />
          </div>
        </div>
      </Example>

      <Example hash="howItWorks" state={state} t={tPlaceholderPage}>
        <p aria-hidden="true">
          <Placeholder col={6} />
        </p>

        <Placeholder as="a" className="btn btn-primary disabled" col={4} />
      </Example>

      <Example hash="width" state={state} t={tPlaceholderPage}>
        <Placeholder col={6} />
        <Placeholder className="w-75" />
        <Placeholder style={{ width: '25%' }} />
      </Example>

      <Example hash="color" state={state} t={tPlaceholderPage}>
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

      <Example hash="sizing" state={state} t={tPlaceholderPage}>
        <Placeholder col={12} size="lg" />
        <Placeholder col={12} />
        <Placeholder col={12} size="sm" />
        <Placeholder col={12} size="xs" />
      </Example>

      <Example hash="animation" state={state} t={tPlaceholderPage}>
        <Placeholder animation="glow" as="p" col={12} />
        <Placeholder animation="wave" as="p" col={12} />
      </Example>

      <PropsIndicator />

      <Example
        hash="placeholderComponentProps"
        items={[
          {
            attr: 'animation',
            default: '',
            desc: tPlaceholderComponentProps('placeholder.desc.animation'),
            type: <span className="badge text-bg-secondary">glow | wave</span>,
          },
          {
            attr: 'bg',
            default: '',
            desc: tPlaceholderComponentProps('placeholder.desc.bg'),
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
          {
            attr: 'col',
            default: '',
            desc: tPlaceholderComponentProps('placeholder.desc.col'),
            type: <span className="badge text-bg-secondary">number</span>,
          },
          {
            attr: 'size',
            default: '',
            desc: tPlaceholderComponentProps('placeholder.desc.size'),
            type: <span className="badge text-bg-secondary">lg | sm | xs</span>,
          },
        ]}
        props
        state={state}
        t={tPlaceholderComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
