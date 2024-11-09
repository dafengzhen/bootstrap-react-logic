import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/navbar/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    query: '?raw',
    import: 'default',
  }),
);

export default function NavbarPage() {
  const navigation = useNavigation();
  const { t: tNavbarComponentProps } = useTranslation(['navbarComponentProps']);
  const { t: tNavbarPage } = useTranslation(['navbarPage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tNavbarPage}></Example>

      <PropsIndicator />

      <Example props hash="navbarComponentProps" state={state} t={tNavbarComponentProps} items={[]} />

      <Example props hash="commonComponentProps" state={state} />

      <About />
    </div>
  );
}
