import About from '@components/about.tsx';
import EventsIndicator from '@components/events-indicator.tsx';
import Example from '@components/example.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { CloseButton } from '@lib/button';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/close-button/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
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
      <Example hash="basic" row state={state} t={tCloseButtonPage}>
        <CloseButton />
      </Example>

      <Example hash="disabledState" row state={state} t={tCloseButtonPage}>
        <CloseButton disabled />
      </Example>

      <Example dark hash="darkVariant" state={state} t={tCloseButtonPage}>
        <div className="d-flex gap-2" data-bs-theme="dark">
          <CloseButton />
          <CloseButton disabled />
        </div>
      </Example>

      <PropsIndicator />

      <Example
        hash="closeButtonComponentProps"
        items={[
          {
            attr: 'disabled',
            default: '',
            desc: tCloseButtonComponentProps('closeButton.desc.disabled'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tCloseButtonComponentProps}
      />

      <EventsIndicator />

      <Example
        events
        hash="closeButtonComponentProps"
        items={[
          {
            attr: 'onClick',
            default: '',
            desc: tCloseButtonComponentProps('closeButton.desc.onClick'),
            type: <span className="badge text-bg-secondary">Function</span>,
          },
        ]}
        state={state}
        t={tCloseButtonComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
