import PropsIndicator from '@components/props-indicator.tsx';
import OptionRow from '@components/option-row.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import { Pagination } from '@lib/pagination';
import About from '@components/about.tsx';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/pagination/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
  }),
);

export default function BadgePage() {
  const navigation = useNavigation();
  const { t: tPaginationComponentProps } = useTranslation(['paginationComponentProps']);
  const { t: tPaginationPage } = useTranslation(['paginationPage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example t={tPaginationPage} state={state} hash="basic">
        <Pagination
          options={[
            {
              link: 'Previous',
              href: '#',
            },
            {
              href: '#',
              link: '1',
            },
            {
              href: '#',
              link: '2',
            },
            {
              href: '#',
              link: '3',
            },
            {
              link: 'Next',
              href: '#',
            },
          ]}
          navProps={{
            'aria-label': 'Page navigation example',
          }}
        />
      </Example>

      <Example hash="workingWithIcons" t={tPaginationPage} state={state}>
        <Pagination
          options={[
            {
              link: <span aria-hidden="true">&laquo;</span>,
              href: '#',
            },
            {
              href: '#',
              link: '1',
            },
            {
              href: '#',
              link: '2',
            },
            {
              href: '#',
              link: '3',
            },
            {
              link: <span aria-hidden="true">&raquo;</span>,
              href: '#',
            },
          ]}
          navProps={{
            'aria-label': 'Page navigation example',
          }}
        />
      </Example>

      <Example hash="disabledAndActiveStates" t={tPaginationPage} state={state}>
        <Pagination
          options={[
            {
              link: 'Previous',
              disabled: true,
              href: '#',
            },
            {
              href: '#',
              link: '1',
            },
            {
              href: '#',
              link: '2',
            },
            {
              href: '#',
              link: '3',
            },
            {
              link: 'Next',
              href: '#',
            },
          ]}
          navProps={{
            'aria-label': 'Page navigation example',
          }}
        />

        <Pagination
          options={[
            {
              link: 'Previous',
              disabled: true,
              href: '#',
            },
            {
              href: '#',
              link: '1',
            },
            {
              active: true,
              href: '#',
              link: '2',
            },
            {
              href: '#',
              link: '3',
            },
            {
              link: 'Next',
              href: '#',
            },
          ]}
          navProps={{
            'aria-label': 'Page navigation example',
          }}
        />
      </Example>

      <Example t={tPaginationPage} hash="sizing" state={state}>
        <Pagination
          options={[
            {
              active: true,
              href: '#',
              link: '1',
            },
            {
              href: '#',
              link: '2',
            },
            {
              href: '#',
              link: '3',
            },
          ]}
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          size="lg"
        />

        <Pagination
          options={[
            {
              active: true,
              href: '#',
              link: '1',
            },
            {
              href: '#',
              link: '2',
            },
            {
              href: '#',
              link: '3',
            },
          ]}
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          size="sm"
        />
      </Example>

      <Example t={tPaginationPage} hash="alignment" state={state}>
        <Pagination
          options={[
            {
              link: 'Previous',
              disabled: true,
              href: '#',
            },
            {
              href: '#',
              link: '1',
            },
            {
              href: '#',
              link: '2',
            },
            {
              href: '#',
              link: '3',
            },
            {
              link: 'Next',
              href: '#',
            },
          ]}
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          alignment="center"
        />

        <Pagination
          options={[
            {
              link: 'Previous',
              disabled: true,
              href: '#',
            },
            {
              href: '#',
              link: '1',
            },
            {
              href: '#',
              link: '2',
            },
            {
              href: '#',
              link: '3',
            },
            {
              link: 'Next',
              href: '#',
            },
          ]}
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          alignment="end"
        />
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">center | end | start</span>,
            desc: tPaginationComponentProps('pagination.desc.alignment'),
            attr: 'alignment',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">PaginationNavProps&lt;nav&gt;</span>,
            desc: tPaginationComponentProps('pagination.desc.navProps'),
            attr: 'navProps',
            default: '',
          },
          {
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow value={tPaginationComponentProps('pagination.options.active')} label="active?: boolean" />
                <OptionRow
                  value={tPaginationComponentProps('pagination.options.disabled')}
                  label="disabled?: boolean"
                />
                <OptionRow value={tPaginationComponentProps('pagination.options.href')} label="href?: string" />
                <OptionRow value={tPaginationComponentProps('pagination.options.id')} label="id?: number | string" />
                <OptionRow
                  value={tPaginationComponentProps('pagination.options.itemProps')}
                  label="itemProps?: NavItemProps<li>"
                />
                <OptionRow value={tPaginationComponentProps('pagination.options.link')} label="link?: ReactNode" />
                <OptionRow
                  value={tPaginationComponentProps('pagination.options.linkProps')}
                  label="linkProps?: NavLinkProps<a>"
                />
              </div>
            ),
            desc: tPaginationComponentProps('pagination.desc.options'),
            attr: 'options',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">lg | sm</span>,
            desc: tPaginationComponentProps('pagination.desc.size'),
            attr: 'size',
            default: '',
          },
        ]}
        hash="paginationComponentProps"
        t={tPaginationComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
