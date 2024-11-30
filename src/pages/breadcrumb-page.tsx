import About from '@components/about.tsx';
import EventsIndicator from '@components/events-indicator.tsx';
import Example from '@components/example.tsx';
import OptionRow from '@components/option-row.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import TypesIndicator from '@components/types-indicator.tsx';
import { Breadcrumb } from '@lib/breadcrumb';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/breadcrumb/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
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
              active: true,
              title: 'Library',
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
              active: true,
              title: 'Data',
            },
          ]}
        />
      </Example>

      <Example hash="dividers" state={state} t={tBreadcrumbPage}>
        <Breadcrumb
          options={[
            {
              title: <a href="#">Home</a>,
            },
            {
              active: true,
              title: 'Library',
            },
          ]}
          variables={{
            bsBreadcrumbDivider: `'>'`,
          }}
        />

        <Breadcrumb
          options={[
            {
              title: <a href="#">Home</a>,
            },
            {
              active: true,
              title: 'Library',
            },
          ]}
          variables={{
            bsBreadcrumbDivider: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`,
          }}
        />

        <Breadcrumb
          options={[
            {
              title: <a href="#">Home</a>,
            },
            {
              active: true,
              title: 'Library',
            },
          ]}
          variables={{
            bsBreadcrumbDivider: `''`,
          }}
        />
      </Example>

      <PropsIndicator />

      <Example
        hash="breadcrumbComponentProps"
        items={[
          {
            attr: 'options',
            default: '',
            desc: tBreadcrumbComponentProps('breadcrumb.desc.options'),
            type: (
              <Link to="#breadcrumbComponentTypes">
                <span className="badge text-bg-secondary d-inline">
                  IOption[]
                  <i className="bi bi-link ms-1"></i>
                </span>
              </Link>
            ),
          },
        ]}
        props
        state={state}
        t={tBreadcrumbComponentProps}
      />

      <EventsIndicator />

      <Example
        events
        hash="breadcrumbComponentProps"
        items={[
          {
            attr: 'onClick',
            default: '',
            desc: tBreadcrumbComponentProps('breadcrumb.desc.onClick'),
            type: <span className="badge text-bg-secondary">{'onClick?: (id: number | string) => void'}</span>,
          },
        ]}
        state={state}
        t={tBreadcrumbComponentProps}
      />

      <TypesIndicator />

      <Example
        hash="breadcrumbComponentProps"
        items={[
          {
            attr: 'IOption',
            default: '',
            desc: tBreadcrumbComponentProps('breadcrumb.desc.iOption'),
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="id?: string | number" value={tBreadcrumbComponentProps('breadcrumb.options.id')} />
                <OptionRow label="title?: ReactNode" value={tBreadcrumbComponentProps('breadcrumb.options.title')} />
                <OptionRow label="active?: boolean" value={tBreadcrumbComponentProps('breadcrumb.options.active')} />
              </div>
            ),
          },
        ]}
        state={state}
        t={tBreadcrumbComponentProps}
        types
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
