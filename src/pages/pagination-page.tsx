import EventsIndicator from '@components/events-indicator.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
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
          previousOption={{
            link: 'Previous',
            href: '#',
          }}
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          nextOption={{
            link: 'Next',
            href: '#',
          }}
          total={3}
          page={0}
        />
      </Example>

      <Example hash="workingWithIcons" t={tPaginationPage} state={state}>
        <Pagination
          previousOption={{
            link: <span aria-hidden="true">&laquo;</span>,
            href: '#',
          }}
          nextOption={{
            link: <span aria-hidden="true">&raquo;</span>,
            href: '#',
          }}
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          total={3}
          page={0}
        />
      </Example>

      <Example hash="disabledAndActiveStates" t={tPaginationPage} state={state}>
        <Pagination
          previousOption={{
            link: 'Previous',
            disabled: true,
            href: '#',
          }}
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          nextOption={{
            link: 'Next',
            href: '#',
          }}
          option={{
            clickableActive: true,
          }}
          total={3}
          page={2}
        />

        <Pagination
          previousOption={{
            link: 'Previous',
            disabled: true,
            href: '#',
          }}
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          nextOption={{
            link: 'Next',
            href: '#',
          }}
          total={3}
          page={2}
        />
      </Example>

      <Example t={tPaginationPage} hash="sizing" state={state}>
        <Pagination
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          previous={false}
          next={false}
          total={3}
          size="lg"
          page={1}
        />

        <Pagination
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          previous={false}
          next={false}
          total={3}
          size="sm"
          page={1}
        />
      </Example>

      <Example t={tPaginationPage} hash="alignment" state={state}>
        <Pagination
          previousOption={{
            link: 'Previous',
            disabled: true,
            href: '#',
          }}
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          nextOption={{
            link: 'Next',
            href: '#',
          }}
          alignment="center"
          total={3}
          page={0}
        />

        <Pagination
          previousOption={{
            link: 'Previous',
            disabled: true,
            href: '#',
          }}
          navProps={{
            'aria-label': 'Page navigation example',
          }}
          nextOption={{
            link: 'Next',
            href: '#',
          }}
          alignment="end"
          total={3}
          page={0}
        />
      </Example>

      <Example t={tPaginationPage} hash="example" state={state}>
        <Pagination
          onChange={(page, type) => {
            console.log(page, type);
          }}
          total={10}
          page={0}
        />
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">IOption</span>,
            desc: tPaginationComponentProps('pagination.desc.option'),
            attr: 'option',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">IPreviousOption</span>,
            desc: tPaginationComponentProps('pagination.desc.previousOption'),
            attr: 'previousOption',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">INextOption</span>,
            desc: tPaginationComponentProps('pagination.desc.nextOption'),
            attr: 'nextOption',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">PaginationNavProps</span>,
            desc: tPaginationComponentProps('pagination.desc.navProps'),
            attr: 'navProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">center | end | start</span>,
            desc: tPaginationComponentProps('pagination.desc.alignment'),
            attr: 'alignment',
            default: '',
          },
          {
            desc: tPaginationComponentProps('pagination.desc.alwaysShowEllipsis'),
            type: <span className="badge text-bg-secondary">boolean</span>,
            attr: 'alwaysShowEllipsis',
            default: 'false',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tPaginationComponentProps('pagination.desc.maxVisible'),
            attr: 'maxVisible',
            default: '4',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tPaginationComponentProps('pagination.desc.previous'),
            attr: 'previous',
            default: 'true',
          },
          {
            type: <span className="badge text-bg-secondary">lg | sm</span>,
            desc: tPaginationComponentProps('pagination.desc.size'),
            attr: 'size',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tPaginationComponentProps('pagination.desc.next'),
            default: 'true',
            attr: 'next',
          },
          {
            type: <span className="badge text-bg-secondary">number</span>,
            desc: tPaginationComponentProps('pagination.desc.total'),
            attr: 'total',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">number</span>,
            desc: tPaginationComponentProps('pagination.desc.page'),
            attr: 'page',
            default: '',
          },
        ]}
        hash="paginationComponentProps"
        t={tPaginationComponentProps}
        state={state}
        props
      />

      <EventsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">Function</span>,
            desc: tPaginationComponentProps('pagination.desc.onChange'),
            attr: 'onChange',
            default: '',
          },
        ]}
        hash="paginationComponentProps"
        t={tPaginationComponentProps}
        state={state}
        events
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
