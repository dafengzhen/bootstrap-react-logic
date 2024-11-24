import EventsIndicator from '@components/events-indicator.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import TypesIndicator from '@components/types-indicator.tsx';
import { useNavigation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { Button } from '@lib/button';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/button/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
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
      <Example t={tButtonPage} state={state} hash="basic" row>
        <Button>Base class</Button>
      </Example>

      <Example t={tButtonPage} hash="variant" state={state} wrap row>
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

      <Example t={tButtonPage} hash="outline" state={state} wrap row>
        <Button outline="primary">Primary</Button>
        <Button outline="secondary">Secondary</Button>
        <Button outline="success">Success</Button>
        <Button outline="danger">Danger</Button>
        <Button outline="warning">Warning</Button>
        <Button outline="info">Info</Button>
        <Button outline="light">Light</Button>
        <Button outline="dark">Dark</Button>
      </Example>

      <Example t={tButtonPage} hash="rounded" state={state} wrap row>
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
        <Button rounded="circle" outline="info">
          C
        </Button>
        <Button outline="info" rounded="pill">
          Pill
        </Button>
      </Example>

      <Example alignItemsCenter t={tButtonPage} state={state} hash="size" wrap row>
        <Button variant="primary" size="lg">
          Large
        </Button>
        <Button variant="secondary" size="sm">
          Small
        </Button>
        <Button
          variables={{
            bsBtnFontSize: '0.75rem',
            bsBtnPaddingY: '0.25rem',
            bsBtnPaddingX: '0.5rem',
          }}
          variant="secondary"
        >
          Custom
        </Button>
      </Example>

      <Example hash="disabledState" t={tButtonPage} state={state} wrap row>
        <Button variant="primary" disabled>
          Primary
        </Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
        <Button variant="success" disabled as="a">
          Link
        </Button>
      </Example>

      <Example hash="blockButton" t={tButtonPage} state={state}>
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

      <Example hash="toggleState" t={tButtonPage} state={state}>
        <div className="d-flex flex-wrap gap-2">
          <div>
            <Button active>Button</Button>
          </div>
          <div>
            <Button disabled active>
              Button
            </Button>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-2">
          <div>
            <Button variant="primary" active>
              Primary
            </Button>
          </div>
          <div>
            <Button variant="primary" disabled active>
              Primary
            </Button>
          </div>
        </div>
      </Example>

      <Example hash="isLoading" t={tButtonPage} state={state} wrap row>
        <Button variant="primary" isLoading>
          Primary
        </Button>
        <Button variant="secondary" isLoading>
          Secondary
        </Button>
      </Example>

      <Example t={tButtonPage} state={state} hash="icon" wrap row>
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

      <Example hash="customStyle" t={tButtonPage} state={state} wrap row>
        <Button className="border-0 tw-bg-gradient-to-r tw-from-amber-500 tw-to-pink-500 tw-text-white">Custom</Button>
      </Example>

      <Example t={tButtonPage} hash="example" overflowXAuto state={state} textNowrap wrap row>
        <Button onClick={onClickChangeSizeTest} variant="primary" size={mySize}>
          Click Change Button Size ({mySize})
        </Button>
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">button | a</span>,
            desc: tButtonComponentProps('button.desc.as'),
            default: 'button',
            attr: 'as',
          },
          {
            type: (
              <Link to="#buttonComponentTypes">
                <span className="badge text-bg-secondary d-inline">
                  Variant
                  <i className="bi bi-link ms-1"></i>
                </span>
              </Link>
            ),
            desc: tButtonComponentProps('button.desc.variant'),
            attr: 'variant',
            default: '',
          },
          {
            type: (
              <Link to="#buttonComponentTypes">
                <span className="badge text-bg-secondary d-inline">
                  Outline
                  <i className="bi bi-link ms-1"></i>
                </span>
              </Link>
            ),
            desc: tButtonComponentProps('button.desc.outline'),
            attr: 'outline',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tButtonComponentProps('button.desc.disabled'),
            attr: 'disabled',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tButtonComponentProps('button.desc.active'),
            attr: 'active',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tButtonComponentProps('button.desc.show'),
            attr: 'show',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tButtonComponentProps('button.desc.isLoading'),
            attr: 'isLoading',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">lg | sm</span>,
            desc: tButtonComponentProps('button.desc.size'),
            attr: 'size',
            default: '',
          },
          {
            type: (
              <Link to="#buttonComponentTypes">
                <span className="badge text-bg-secondary d-inline">
                  Rounded
                  <i className="bi bi-link ms-1"></i>
                </span>
                <span className="badge text-bg-secondary d-inline ms-1">boolean</span>
              </Link>
            ),
            desc: tButtonComponentProps('button.desc.rounded'),
            attr: 'rounded',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tButtonComponentProps('button.desc.startContent'),
            attr: 'startContent',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tButtonComponentProps('button.desc.endContent'),
            attr: 'endContent',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tButtonComponentProps('button.desc.btnClose'),
            attr: 'btnClose',
            default: '',
          },
        ]}
        hash="buttonComponentProps"
        t={tButtonComponentProps}
        state={state}
        props
      />

      <EventsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">RefCallback</span>,
            desc: tButtonComponentProps('button.desc.onRef'),
            attr: 'onRef',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">Function</span>,
            desc: tButtonComponentProps('button.desc.onClick'),
            attr: 'onClick',
            default: '',
          },
        ]}
        hash="buttonComponentProps"
        t={tButtonComponentProps}
        state={state}
        events
      />

      <TypesIndicator />

      <Example
        items={[
          {
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
            desc: tButtonComponentProps('button.desc.rounded'),
            attr: 'Rounded',
            default: '',
          },
          {
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
            desc: tButtonComponentProps('button.desc.outline'),
            attr: 'Outline',
            default: '',
          },
          {
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
            desc: tButtonComponentProps('button.desc.variant'),
            attr: 'Variant',
            default: '',
          },
        ]}
        hash="buttonComponentProps"
        t={tButtonComponentProps}
        state={state}
        types
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
