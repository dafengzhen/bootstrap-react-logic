import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import { CloseButton } from '@lib/button';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/close-button/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    query: '?raw',
    import: 'default',
  }),
);

export default function CloseButtonPage() {
  const navigation = useNavigation();
  const { t: tCloseButtonComponentProps } = useTranslation(['closeButtonComponentProps']);
  const { t: tCloseButtonPage } = useTranslation(['closeButtonPage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tCloseButtonPage}>
        <div>
          <CloseButton />
        </div>
      </Example>

      <Example hash="disabledState" state={state} t={tCloseButtonPage}>
        <div>
          <CloseButton disabled />
        </div>
      </Example>

      <Example hash="darkVariant" state={state} t={tCloseButtonPage} dark>
        <div data-bs-theme="dark">
          <CloseButton />
          <CloseButton disabled />
        </div>
      </Example>

      <PropsIndicator />

      <Example
        props
        hash="closeButtonComponentProps"
        state={state}
        t={tCloseButtonComponentProps}
        items={[
          {
            attr: 'disabled',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCloseButtonComponentProps('closeButton.desc.disabled'),
            default: '',
          },
          {
            attr: 'aria-label',
            type: <span className="badge text-bg-secondary">string</span>,
            desc: tCloseButtonComponentProps('closeButton.desc.ariaLabel'),
            default: 'Close',
          },
        ]}
      />

      <Example props hash="commonComponentProps" state={state} />

      <About />
    </div>
  );
}
