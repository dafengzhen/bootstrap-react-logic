import PropsIndicator from '@components/props-indicator.tsx';
import OptionRow from '@components/option-row.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import { Breadcrumb } from '@lib/breadcrumb';
import About from '@components/about.tsx';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/breadcrumb/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
  }),
);

export default function BreadcrumbPage() {
  const navigation = useNavigation();
  const { t: tBreadcrumbComponentProps } = useTranslation(['breadcrumbComponentProps']);
  const { t: tBreadcrumbPage } = useTranslation(['breadcrumbPage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example t={tBreadcrumbPage} state={state} hash="basic">
        <Breadcrumb
          options={[
            {
              title: 'Home',
            },
          ]}
        />

        <Breadcrumb
          options={[
            {
              title: <a href="#">Home</a>,
            },
            {
              title: 'Library',
              active: true,
            },
          ]}
        />

        <Breadcrumb
          options={[
            {
              title: <a href="#">Home</a>,
            },
            {
              title: <a href="#">Library</a>,
            },
            {
              title: 'Data',
              active: true,
            },
          ]}
        />
      </Example>

      <Example t={tBreadcrumbPage} hash="dividers" state={state}>
        <Breadcrumb
          options={[
            {
              title: <a href="#">Home</a>,
            },
            {
              title: 'Library',
              active: true,
            },
          ]}
          variables={{
            bsBreadcrumbDivider: `'>'`,
          }}
        />

        <Breadcrumb
          variables={{
            bsBreadcrumbDivider: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`,
          }}
          options={[
            {
              title: <a href="#">Home</a>,
            },
            {
              title: 'Library',
              active: true,
            },
          ]}
        />

        <Breadcrumb
          options={[
            {
              title: <a href="#">Home</a>,
            },
            {
              title: 'Library',
              active: true,
            },
          ]}
          variables={{
            bsBreadcrumbDivider: `''`,
          }}
        />
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow value={tBreadcrumbComponentProps('breadcrumb.options.id')} label="id?: string | number" />
                <OptionRow value={tBreadcrumbComponentProps('breadcrumb.options.title')} label="title?: ReactNode" />
                <OptionRow value={tBreadcrumbComponentProps('breadcrumb.options.active')} label="active?: boolean" />
              </div>
            ),
            desc: tBreadcrumbComponentProps('breadcrumb.desc.options'),
            attr: 'options',
            default: '',
          },
          {
            type: (
              <span className="badge text-bg-secondary">(id: string | number, event: HTMLLIElement) =&gt; void</span>
            ),
            desc: tBreadcrumbComponentProps('breadcrumb.desc.onClick'),
            attr: 'onClick',
            default: '',
          },
        ]}
        hash="breadcrumbComponentProps"
        t={tBreadcrumbComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
