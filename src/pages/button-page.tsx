import About from '@components/about.tsx';
import EventsIndicator from '@components/events-indicator.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import TypesIndicator from '@components/types-indicator.tsx';
import { Button } from '@lib/button';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/button/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

export default function ButtonPage() {
  const navigation = useNavigation();
  const { t: tButtonComponentProps } = useTranslation(['buttonComponentProps']);
  const { t: tButtonPage } = useTranslation(['buttonPage']);
  const state = useState(codes);
  const [mySize, setMySize] = useState<'lg' | 'sm'>('sm');

  function onClickChangeSizeTest() {
    setMySize(mySize === 'sm' ? 'lg' : 'sm');
  }

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" row state={state} t={tButtonPage}>
        <Button>Base class</Button>
      </Example>

      <Example hash="variant" row state={state} t={tButtonPage} wrap>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </Example>

      <Example hash="outline" row state={state} t={tButtonPage} wrap>
        <Button outline="primary">Primary</Button>
        <Button outline="secondary">Secondary</Button>
        <Button outline="success">Success</Button>
        <Button outline="danger">Danger</Button>
        <Button outline="warning">Warning</Button>
        <Button outline="info">Info</Button>
        <Button outline="light">Light</Button>
        <Button outline="dark">Dark</Button>
      </Example>

      <Example hash="rounded" row state={state} t={tButtonPage} wrap>
        <Button outline="primary" rounded>
          Primary
        </Button>
        <Button outline="secondary" rounded="sm">
          Secondary
        </Button>
        <Button outline="success" rounded="md">
          Success
        </Button>
        <Button outline="danger" rounded="lg">
          Danger
        </Button>
        <Button outline="warning" rounded="xl">
          Warning
        </Button>
        <Button outline="info" rounded="xxl">
          Info
        </Button>
        <Button outline="info" rounded="circle">
          C
        </Button>
        <Button outline="info" rounded="pill">
          Pill
        </Button>
      </Example>

      <Example alignItemsCenter hash="size" row state={state} t={tButtonPage} wrap>
        <Button size="lg" variant="primary">
          Large
        </Button>
        <Button size="sm" variant="secondary">
          Small
        </Button>
        <Button
          variables={{
            bsBtnFontSize: '0.75rem',
            bsBtnPaddingX: '0.5rem',
            bsBtnPaddingY: '0.25rem',
          }}
          variant="secondary"
        >
          Custom
        </Button>
      </Example>

      <Example hash="disabledState" row state={state} t={tButtonPage} wrap>
        <Button disabled variant="primary">
          Primary
        </Button>
        <Button disabled variant="secondary">
          Secondary
        </Button>
        <Button as="a" disabled variant="success">
          Link
        </Button>
      </Example>

      <Example hash="blockButton" state={state} t={tButtonPage}>
        <div className="d-grid gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="primary">Primary</Button>
        </div>

        <div className="d-grid gap-2 d-md-flex">
          <Button variant="primary">Primary</Button>
          <Button variant="primary">Primary</Button>
        </div>

        <div className="d-grid gap-2 col-6 mx-auto">
          <Button variant="primary">Primary</Button>
          <Button variant="primary">Primary</Button>
        </div>
      </Example>

      <Example hash="toggleState" state={state} t={tButtonPage}>
        <div className="d-flex flex-wrap gap-2">
          <div>
            <Button active>Button</Button>
          </div>
          <div>
            <Button active disabled>
              Button
            </Button>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-2">
          <div>
            <Button active variant="primary">
              Primary
            </Button>
          </div>
          <div>
            <Button active disabled variant="primary">
              Primary
            </Button>
          </div>
        </div>
      </Example>

      <Example hash="isLoading" row state={state} t={tButtonPage} wrap>
        <Button isLoading variant="primary">
          Primary
        </Button>
        <Button isLoading variant="secondary">
          Secondary
        </Button>
      </Example>

      <Example hash="icon" row state={state} t={tButtonPage} wrap>
        <Button startContent={<i className="bi bi-arrow-up me-1"></i>} variant="primary">
          Up
        </Button>
        <Button endContent={<i className="bi bi-arrow-down ms-1"></i>} variant="secondary">
          Down
        </Button>
        <Button variant="success">
          <i className="bi bi-arrow-left"></i>
        </Button>
      </Example>

      <Example hash="example" overflowXAuto row state={state} t={tButtonPage} textNowrap wrap>
        <Button onClick={onClickChangeSizeTest} size={mySize} variant="primary">
          Click Change Button Size ({mySize})
        </Button>
      </Example>

      <PropsIndicator />

      <Example
        hash="buttonComponentProps"
        items={[
          {
            attr: 'as',
            default: 'button',
            desc: tButtonComponentProps('button.desc.as'),
            type: <span className="badge text-bg-secondary">button | a</span>,
          },
          {
            attr: 'variant',
            default: '',
            desc: tButtonComponentProps('button.desc.variant'),
            type: (
              <Link to="#buttonComponentTypes">
                <span className="badge text-bg-secondary d-inline">
                  Variant
                  <i className="bi bi-link ms-1"></i>
                </span>
              </Link>
            ),
          },
          {
            attr: 'outline',
            default: '',
            desc: tButtonComponentProps('button.desc.outline'),
            type: (
              <Link to="#buttonComponentTypes">
                <span className="badge text-bg-secondary d-inline">
                  Outline
                  <i className="bi bi-link ms-1"></i>
                </span>
              </Link>
            ),
          },
          {
            attr: 'disabled',
            default: '',
            desc: tButtonComponentProps('button.desc.disabled'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'active',
            default: '',
            desc: tButtonComponentProps('button.desc.active'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'show',
            default: '',
            desc: tButtonComponentProps('button.desc.show'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'isLoading',
            default: '',
            desc: tButtonComponentProps('button.desc.isLoading'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'size',
            default: '',
            desc: tButtonComponentProps('button.desc.size'),
            type: <span className="badge text-bg-secondary">lg | sm</span>,
          },
          {
            attr: 'rounded',
            default: '',
            desc: tButtonComponentProps('button.desc.rounded'),
            type: (
              <Link to="#buttonComponentTypes">
                <span className="badge text-bg-secondary d-inline">
                  Rounded
                  <i className="bi bi-link ms-1"></i>
                </span>
                <span className="badge text-bg-secondary d-inline ms-1">boolean</span>
              </Link>
            ),
          },
          {
            attr: 'startContent',
            default: '',
            desc: tButtonComponentProps('button.desc.startContent'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'endContent',
            default: '',
            desc: tButtonComponentProps('button.desc.endContent'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'btnClose',
            default: '',
            desc: tButtonComponentProps('button.desc.btnClose'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tButtonComponentProps}
      />

      <EventsIndicator />

      <Example
        events
        hash="buttonComponentProps"
        items={[
          {
            attr: 'onRef',
            default: '',
            desc: tButtonComponentProps('button.desc.onRef'),
            type: <span className="badge text-bg-secondary">RefCallback</span>,
          },
          {
            attr: 'onClick',
            default: '',
            desc: tButtonComponentProps('button.desc.onClick'),
            type: <span className="badge text-bg-secondary">Function</span>,
          },
        ]}
        state={state}
        t={tButtonComponentProps}
      />

      <TypesIndicator />

      <Example
        hash="buttonComponentProps"
        items={[
          {
            attr: 'Rounded',
            default: '',
            desc: tButtonComponentProps('button.desc.rounded'),
            type: (
              <div className="row row-cols-auto g-1">
                <div className="col">
                  <span className="badge text-bg-secondary">circle</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">pill</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">xxl</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">lg</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">md</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">sm</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">xl</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">xs</span>
                </div>
              </div>
            ),
          },
          {
            attr: 'Outline',
            default: '',
            desc: tButtonComponentProps('button.desc.outline'),
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
              </div>
            ),
          },
          {
            attr: 'Variant',
            default: '',
            desc: tButtonComponentProps('button.desc.variant'),
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
        ]}
        state={state}
        t={tButtonComponentProps}
        types
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
