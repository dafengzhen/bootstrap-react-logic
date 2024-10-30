import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import { Breadcrumb } from '@lib/breadcrumb';
import OptionRow from '@components/option-row.tsx';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/breadcrumb/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    query: '?raw',
    import: 'default',
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
      <Example hash="basic" state={state} t={tBreadcrumbPage}>
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

      <Example hash="dividers" state={state} t={tBreadcrumbPage}>
        <Breadcrumb
          variables={{
            bsBreadcrumbDivider: `'>'`,
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
          variables={{
            bsBreadcrumbDivider: `''`,
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
      </Example>

      <PropsIndicator />

      <Example
        props
        hash="breadcrumbComponentProps"
        state={state}
        t={tBreadcrumbComponentProps}
        items={[
          {
            attr: 'options',
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="id?: string | number" value={tBreadcrumbComponentProps('breadcrumb.options.id')} />
                <OptionRow label="title?: ReactNode" value={tBreadcrumbComponentProps('breadcrumb.options.title')} />
                <OptionRow label="active?: boolean" value={tBreadcrumbComponentProps('breadcrumb.options.active')} />
              </div>
            ),
            desc: tBreadcrumbComponentProps('breadcrumb.desc.options'),
            default: '',
          },
          {
            attr: 'onClick',
            type: (
              <span className="badge text-bg-secondary">(id: string | number, event: HTMLLIElement) =&gt; void</span>
            ),
            desc: tBreadcrumbComponentProps('breadcrumb.desc.onClick'),
            default: '',
          },
        ]}
      />

      <Example props hash="commonComponentProps" state={state} />

      <About />
    </div>
  );
}
