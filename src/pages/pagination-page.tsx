import About from '@components/about.tsx';
import EventsIndicator from '@components/events-indicator.tsx';
import Example from '@components/example.tsx';
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
          nextOption={{
            href: '#',
            link: 'Next',
          }}
          page={0}
          previousOption={{
            href: '#',
            link: 'Previous',
          }}
          total={3}
        />
      </Example>

      <Example hash="workingWithIcons" state={state} t={tPaginationPage}>
        <Pagination
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          nextOption={{
            href: '#',
            link: <span aria-hidden="true">&raquo;</span>,
          }}
          page={0}
          previousOption={{
            href: '#',
            link: <span aria-hidden="true">&laquo;</span>,
          }}
          total={3}
        />
      </Example>

      <Example hash="disabledAndActiveStates" state={state} t={tPaginationPage}>
        <Pagination
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          nextOption={{
            href: '#',
            link: 'Next',
          }}
          option={{
            clickableActive: true,
          }}
          page={2}
          previousOption={{
            disabled: true,
            href: '#',
            link: 'Previous',
          }}
          total={3}
        />

        <Pagination
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          nextOption={{
            href: '#',
            link: 'Next',
          }}
          page={2}
          previousOption={{
            disabled: true,
            href: '#',
            link: 'Previous',
          }}
          total={3}
        />
      </Example>

      <Example hash="sizing" state={state} t={tPaginationPage}>
        <Pagination
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          next={false}
          page={1}
          previous={false}
          size="lg"
          total={3}
        />

        <Pagination
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          next={false}
          page={1}
          previous={false}
          size="sm"
          total={3}
        />
      </Example>

      <Example hash="alignment" state={state} t={tPaginationPage}>
        <Pagination
          alignment="center"
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          nextOption={{
            href: '#',
            link: 'Next',
          }}
          page={0}
          previousOption={{
            disabled: true,
            href: '#',
            link: 'Previous',
          }}
          total={3}
        />

        <Pagination
          alignment="end"
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          nextOption={{
            href: '#',
            link: 'Next',
          }}
          page={0}
          previousOption={{
            disabled: true,
            href: '#',
            link: 'Previous',
          }}
          total={3}
        />
      </Example>

      <Example hash="example" state={state} t={tPaginationPage}>
        <Pagination
          onChange={(page, type) => {
            console.log(page, type);
          }}
          page={0}
          total={10}
        />
      </Example>

      <PropsIndicator />

      <Example
        hash="paginationComponentProps"
        items={[
          {
            attr: 'option',
            default: '',
            desc: tPaginationComponentProps('pagination.desc.option'),
            type: <span className="badge text-bg-secondary">IOption</span>,
          },
          {
            attr: 'previousOption',
            default: '',
            desc: tPaginationComponentProps('pagination.desc.previousOption'),
            type: <span className="badge text-bg-secondary">IPreviousOption</span>,
          },
          {
            attr: 'nextOption',
            default: '',
            desc: tPaginationComponentProps('pagination.desc.nextOption'),
            type: <span className="badge text-bg-secondary">INextOption</span>,
          },
          {
            attr: 'navProps',
            default: '',
            desc: tPaginationComponentProps('pagination.desc.navProps'),
            type: <span className="badge text-bg-secondary">PaginationNavProps</span>,
          },
          {
            attr: 'alignment',
            default: '',
            desc: tPaginationComponentProps('pagination.desc.alignment'),
            type: <span className="badge text-bg-secondary">center | end | start</span>,
          },
          {
            attr: 'alwaysShowEllipsis',
            default: 'false',
            desc: tPaginationComponentProps('pagination.desc.alwaysShowEllipsis'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'maxVisible',
            default: '4',
            desc: tPaginationComponentProps('pagination.desc.maxVisible'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'previous',
            default: 'true',
            desc: tPaginationComponentProps('pagination.desc.previous'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'size',
            default: '',
            desc: tPaginationComponentProps('pagination.desc.size'),
            type: <span className="badge text-bg-secondary">lg | sm</span>,
          },
          {
            attr: 'next',
            default: 'true',
            desc: tPaginationComponentProps('pagination.desc.next'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'total',
            default: '',
            desc: tPaginationComponentProps('pagination.desc.total'),
            type: <span className="badge text-bg-secondary">number</span>,
          },
          {
            attr: 'page',
            default: '',
            desc: tPaginationComponentProps('pagination.desc.page'),
            type: <span className="badge text-bg-secondary">number</span>,
          },
        ]}
        props
        state={state}
        t={tPaginationComponentProps}
      />

      <EventsIndicator />

      <Example
        events
        hash="paginationComponentProps"
        items={[
          {
            attr: 'onChange',
            default: '',
            desc: tPaginationComponentProps('pagination.desc.onChange'),
            type: <span className="badge text-bg-secondary">Function</span>,
          },
        ]}
        state={state}
        t={tPaginationComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
