import { Button } from '@lib/button';
import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/button/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    query: '?raw',
    import: 'default',
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
      <Example hash="basic" state={state} t={tButtonPage}>
        <div>
          <Button>Base class</Button>
        </div>
      </Example>

      <Example hash="variant" state={state} t={tButtonPage}>
        <div className="d-flex flex-wrap gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </div>
      </Example>

      <Example hash="outline" state={state} t={tButtonPage}>
        <div className="d-flex flex-wrap gap-2">
          <Button outline="primary">Primary</Button>
          <Button outline="secondary">Secondary</Button>
          <Button outline="success">Success</Button>
          <Button outline="danger">Danger</Button>
          <Button outline="warning">Warning</Button>
          <Button outline="info">Info</Button>
          <Button outline="light">Light</Button>
          <Button outline="dark">Dark</Button>
        </div>
      </Example>

      <Example hash="rounded" state={state} t={tButtonPage}>
        <div className="d-flex flex-wrap gap-2">
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
        </div>
      </Example>

      <Example hash="size" state={state} t={tButtonPage}>
        <div className="d-flex align-items-center flex-wrap gap-2">
          <div>
            <Button variant="primary" size="lg">
              Large
            </Button>
          </div>
          <div>
            <Button variant="secondary" size="sm">
              Small
            </Button>
          </div>
          <div>
            <Button
              variant="secondary"
              size={{
                paddingY: '0.25rem',
                paddingX: '0.5rem',
                fontSize: '0.75rem',
              }}
            >
              Custom
            </Button>
          </div>
        </div>
      </Example>

      <Example hash="disabledState" state={state} t={tButtonPage}>
        <div className="d-flex align-items-center flex-wrap gap-2">
          <div>
            <Button variant="primary" disabled>
              Primary
            </Button>
          </div>
          <div>
            <Button variant="secondary" disabled>
              Secondary
            </Button>
          </div>
          <div>
            <Button as="a" href="#" variant="success" disabled>
              Link
            </Button>
          </div>
        </div>
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
        <div className="d-flex flex-wrap gap-2 mt-2">
          <div>
            <Button variant="primary" active>
              Primary
            </Button>
          </div>
          <div>
            <Button variant="primary" active disabled>
              Primary
            </Button>
          </div>
        </div>
      </Example>

      <Example hash="isLoading" state={state} t={tButtonPage}>
        <div className="d-flex flex-wrap gap-2">
          <Button variant="primary" isLoading>
            Primary
          </Button>
          <Button variant="secondary" isLoading>
            Secondary
          </Button>
        </div>
      </Example>

      <Example hash="icon" state={state} t={tButtonPage}>
        <div className="d-flex flex-wrap gap-2">
          <Button variant="primary" startContent={<i className="bi bi-arrow-up me-1"></i>}>
            Up
          </Button>
          <Button variant="secondary" endContent={<i className="bi bi-arrow-down ms-1"></i>}>
            Down
          </Button>
          <Button variant="success">
            <i className="bi bi-arrow-left"></i>
          </Button>
        </div>
      </Example>

      <Example hash="customStyle" state={state} t={tButtonPage}>
        <div className="d-flex flex-wrap gap-2">
          <Button className="border-0 tw-bg-gradient-to-r tw-from-amber-500 tw-to-pink-500 tw-text-white">
            Custom
          </Button>
        </div>
      </Example>

      <Example hash="example" state={state} t={tButtonPage}>
        <div className="overflow-x-auto text-nowrap">
          <Button size={mySize} variant="primary" onClick={onClickChangeSizeTest}>
            Click Change Button Size ({mySize})
          </Button>
        </div>
      </Example>

      <PropsIndicator />

      <Example
        props
        hash="buttonComponentProps"
        state={state}
        t={tButtonComponentProps}
        items={[
          {
            attr: 'as',
            type: <span className="badge text-bg-secondary">button | a</span>,
            desc: tButtonComponentProps('button.desc.as'),
            default: 'button',
          },
          {
            attr: 'variant',
            type: (
              <div className="d-flex flex-column">
                {['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'link'].map(
                  (item) => {
                    return (
                      <div key={item}>
                        <span className="badge text-bg-secondary">{item}</span>
                      </div>
                    );
                  },
                )}
              </div>
            ),
            desc: tButtonComponentProps('button.desc.variant'),
            default: '',
          },
          {
            attr: 'outline',
            type: (
              <span>
                Reference <span className="fw-bold">variant</span>
              </span>
            ),
            desc: tButtonComponentProps('button.desc.outline'),
            default: '',
          },
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tButtonComponentProps('button.desc.disabled'),
            default: '',
          },
          {
            attr: 'active',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tButtonComponentProps('button.desc.active'),
            default: '',
          },
          {
            attr: 'isLoading',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tButtonComponentProps('button.desc.isLoading'),
            default: '',
          },
          {
            attr: 'size',
            type: <span className="badge text-bg-secondary">lg | sm</span>,
            desc: tButtonComponentProps('button.desc.size'),
            default: '',
          },
          {
            attr: 'rounded',
            type: (
              <>
                <span className="badge text-bg-secondary">xs | sm | md | lg | xl | xxl | circle | pill</span>
                <span className="badge text-bg-secondary ms-1">boolean</span>
              </>
            ),
            desc: tButtonComponentProps('button.desc.rounded'),
            default: '',
          },
          {
            attr: 'startContent',
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tButtonComponentProps('button.desc.startContent'),
            default: '',
          },
          {
            attr: 'endContent',
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tButtonComponentProps('button.desc.endContent'),
            default: '',
          },
        ]}
      />

      <Example props hash="commonComponentProps" state={state} />

      <About />
    </div>
  );
}
