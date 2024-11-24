import PropsIndicator from '@components/props-indicator.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { CloseButton } from '@lib/button';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/close-button/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
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
      <Example t={tCloseButtonPage} state={state} hash="basic">
        <div>
          <CloseButton />
        </div>
      </Example>

      <Example hash="disabledState" t={tCloseButtonPage} state={state}>
        <div>
          <CloseButton disabled />
        </div>
      </Example>

      <Example t={tCloseButtonPage} hash="darkVariant" state={state} dark>
        <div data-bs-theme="dark">
          <CloseButton />
          <CloseButton disabled />
        </div>
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCloseButtonComponentProps('closeButton.desc.disabled'),
            attr: 'disabled',
            default: '',
          },
          {
            desc: tCloseButtonComponentProps('closeButton.desc.ariaLabel'),
            type: <span className="badge text-bg-secondary">string</span>,
            attr: 'aria-label',
            default: 'Close',
          },
        ]}
        hash="closeButtonComponentProps"
        t={tCloseButtonComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
