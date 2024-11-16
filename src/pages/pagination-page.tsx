import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import OptionRow from '@components/option-row.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Pagination } from '@lib/pagination';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/pagination/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
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
      <Example hash="basic" state={state} t={tPaginationPage}>
        <Pagination
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          options={[
            {
              href: '#',
              link: 'Previous',
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
              href: '#',
              link: 'Next',
            },
          ]}
        />
      </Example>

      <Example hash="workingWithIcons" state={state} t={tPaginationPage}>
        <Pagination
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          options={[
            {
              href: '#',
              link: <span aria-hidden="true">&laquo;</span>,
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
              href: '#',
              link: <span aria-hidden="true">&raquo;</span>,
            },
          ]}
        />
      </Example>

      <Example hash="disabledAndActiveStates" state={state} t={tPaginationPage}>
        <Pagination
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          options={[
            {
              disabled: true,
              href: '#',
              link: 'Previous',
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
              href: '#',
              link: 'Next',
            },
          ]}
        />

        <Pagination
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          options={[
            {
              disabled: true,
              href: '#',
              link: 'Previous',
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
              href: '#',
              link: 'Next',
            },
          ]}
        />
      </Example>

      <Example hash="sizing" state={state} t={tPaginationPage}>
        <Pagination
          navProps={{
            'aria-label': 'Page navigation example',
          }}
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
          size="lg"
        />

        <Pagination
          navProps={{
            'aria-label': 'Page navigation example',
          }}
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
          size="sm"
        />
      </Example>

      <Example hash="alignment" state={state} t={tPaginationPage}>
        <Pagination
          alignment="center"
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          options={[
            {
              disabled: true,
              href: '#',
              link: 'Previous',
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
              href: '#',
              link: 'Next',
            },
          ]}
        />

        <Pagination
          alignment="end"
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          options={[
            {
              disabled: true,
              href: '#',
              link: 'Previous',
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
              href: '#',
              link: 'Next',
            },
          ]}
        />
      </Example>

      <PropsIndicator />

      <Example
        hash="paginationComponentProps"
        items={[
          {
            attr: 'alignment',
            default: '',
            desc: tPaginationComponentProps('pagination.desc.alignment'),
            type: <span className="badge text-bg-secondary">center | end | start</span>,
          },
          {
            attr: 'navProps',
            default: '',
            desc: tPaginationComponentProps('pagination.desc.navProps'),
            type: <span className="badge text-bg-secondary">PaginationNavProps&lt;nav&gt;</span>,
          },
          {
            attr: 'options',
            default: '',
            desc: tPaginationComponentProps('pagination.desc.options'),
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="active?: boolean" value={tPaginationComponentProps('pagination.options.active')} />
                <OptionRow
                  label="disabled?: boolean"
                  value={tPaginationComponentProps('pagination.options.disabled')}
                />
                <OptionRow label="href?: string" value={tPaginationComponentProps('pagination.options.href')} />
                <OptionRow label="id?: number | string" value={tPaginationComponentProps('pagination.options.id')} />
                <OptionRow
                  label="itemProps?: NavItemProps<li>"
                  value={tPaginationComponentProps('pagination.options.itemProps')}
                />
                <OptionRow label="link?: ReactNode" value={tPaginationComponentProps('pagination.options.link')} />
                <OptionRow
                  label="linkProps?: NavLinkProps<a>"
                  value={tPaginationComponentProps('pagination.options.linkProps')}
                />
              </div>
            ),
          },
          {
            attr: 'size',
            default: '',
            desc: tPaginationComponentProps('pagination.desc.size'),
            type: <span className="badge text-bg-secondary">lg | sm</span>,
          },
        ]}
        props
        state={state}
        t={tPaginationComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
