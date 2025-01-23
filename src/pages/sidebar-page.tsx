import About from '@components/about.tsx';
import EventsIndicator from '@components/events-indicator.tsx';
import Example from '@components/example.tsx';
import OptionRow from '@components/option-row.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import TypesIndicator from '@components/types-indicator.tsx';
import { Sidebar, type SidebarOption } from '@lib/sidebar';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/sidebar/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

const header = {
  icon: <i className="bi bi-layout-sidebar d-inline-flex fs-3"></i>,
  name: <span className="fs-5">Sidebar</span>,
};

const Footer = () => {
  return (
    <div className="d-flex align-items-center gap-2">
      <span className="me-3">Is this useful?</span>
      <button aria-label="Like" className="btn btn-secondary py-1 rounded-3 border-0" type="button">
        <i className="bi bi-hand-thumbs-up"></i>
      </button>
      <button aria-label="Dislike" className="btn btn-secondary py-1 rounded-3 border-0" type="button">
        <i className="bi bi-hand-thumbs-down"></i>
      </button>
    </div>
  );
};

export default function SidebarPage() {
  const navigation = useNavigation();
  const { t: tSidebarComponentProps } = useTranslation(['sidebarComponentProps']);
  const { t: tSidebarPage } = useTranslation(['sidebarPage']);
  const state = useState(codes);

  const [collapsible, setCollapsible] = useState(true);
  const [collapsible2, setCollapsible2] = useState(true);
  const [collapsible3, setCollapsible3] = useState(true);

  const [options, setOptions] = useState<SidebarOption[]>([
    {
      active: true,
      icon: <i className="bi bi-house-door"></i>,
      name: 'Home',
    },
    {
      icon: <i className="bi bi-speedometer2"></i>,
      name: 'Dashboard',
    },
    {
      icon: <i className="bi bi-table"></i>,
      name: 'Orders',
    },
    {
      icon: <i className="bi bi-grid"></i>,
      name: 'Products',
    },
    {
      icon: <i className="bi bi-person-circle"></i>,
      name: 'Customers',
    },
  ]);
  const [options2, setOptions2] = useState<SidebarOption[]>([
    {
      active: true,
      icon: <i className="bi bi-house-door"></i>,
      name: 'Home',
    },
    {
      children: [
        {
          icon: <i className="bi bi-bar-chart"></i>,
          name: 'Analytics',
        },
        {
          icon: <i className="bi bi-graph-up"></i>,
          name: 'Performance',
        },
      ],
      icon: <i className="bi bi-speedometer2"></i>,
      name: 'Dashboard',
    },
    {
      children: [
        {
          icon: <i className="bi bi-clock"></i>,
          name: 'Pending Orders',
        },
      ],
      icon: <i className="bi bi-table"></i>,
      name: 'Orders',
    },
    {
      icon: <i className="bi bi-grid"></i>,
      name: 'Products',
    },
    {
      icon: <i className="bi bi-person-circle"></i>,
      name: 'Customers',
    },
  ]);
  const [options3, setOptions3] = useState<SidebarOption[]>([
    {
      active: true,
      icon: <i className="bi bi-house-door"></i>,
      name: 'Home',
    },
    {
      children: [
        {
          name: 'Analytics',
        },
        {
          name: 'Performance',
        },
      ],
      icon: <i className="bi bi-speedometer2"></i>,
      name: 'Dashboard',
    },
    {
      children: [
        {
          name: 'Pending Orders',
        },
      ],
      icon: <i className="bi bi-table"></i>,
      name: 'Orders',
    },
    {
      icon: <i className="bi bi-grid"></i>,
      name: 'Products',
    },
    {
      icon: <i className="bi bi-person-circle"></i>,
      name: 'Customers',
    },
  ]);
  const [options4, setOptions4] = useState<SidebarOption[]>([
    {
      active: true,
      icon: <i className="bi bi-house-door"></i>,
      name: 'Home',
    },
    {
      children: [
        {
          icon: <i className="bi bi-bar-chart"></i>,
          name: 'Analytics',
        },
        {
          icon: <i className="bi bi-graph-up"></i>,
          name: 'Performance',
        },
      ],
      icon: <i className="bi bi-speedometer2"></i>,
      name: 'Dashboard',
    },
    {
      children: [
        {
          icon: <i className="bi bi-clock"></i>,
          name: 'Pending Orders',
        },
        {
          icon: <i className="bi bi-check-circle"></i>,
          name: 'Completed Orders',
        },
      ],
      icon: <i className="bi bi-table"></i>,
      name: 'Orders',
    },
    {
      children: [
        {
          icon: <i className="bi bi-tags"></i>,
          name: 'Categories',
        },
        {
          icon: <i className="bi bi-box-seam"></i>,
          name: 'Inventory',
        },
      ],
      icon: <i className="bi bi-grid"></i>,
      name: 'Products',
    },
    {
      children: [
        {
          icon: <i className="bi bi-person-plus"></i>,
          name: 'New Customers',
        },
        {
          icon: <i className="bi bi-people"></i>,
          name: 'Loyal Customers',
        },
      ],
      icon: <i className="bi bi-person-circle"></i>,
      name: 'Customers',
    },
  ]);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tSidebarPage}>
        <div className="d-flex gap-4">
          <Sidebar
            className="shadow"
            dark
            footer={<Footer />}
            header={header}
            onOptionChange={setOptions}
            options={options}
            style={{ height: 512 }}
          />

          <Sidebar
            className="shadow"
            footer={<Footer />}
            header={header}
            onOptionChange={setOptions}
            options={options}
            style={{ height: 512 }}
          />

          <Sidebar
            className="shadow"
            collapsible={collapsible}
            footer={<Footer />}
            header={{
              ...header,
              end: (
                <i
                  className="bi bi-chevron-left d-inline-flex cursor-pointer"
                  onClick={() => setCollapsible(!collapsible)}
                ></i>
              ),
            }}
            onCollapse={() => {
              setCollapsible(!collapsible);
            }}
            onOptionChange={setOptions}
            options={options}
            style={{ height: 512 }}
          />
        </div>
      </Example>

      <Example hash="children" state={state} t={tSidebarPage}>
        <div className="d-flex gap-4">
          <Sidebar
            className="shadow"
            dark
            footer={<Footer />}
            header={header}
            onOptionChange={setOptions2}
            options={options2}
            style={{ height: 512 }}
          />

          <Sidebar
            className="shadow"
            footer={<Footer />}
            header={header}
            onOptionChange={setOptions3}
            options={options3}
            style={{ height: 512 }}
          />

          <Sidebar
            className="shadow"
            collapsible={collapsible2}
            footer={<Footer />}
            header={{
              ...header,
              end: (
                <i
                  className="bi bi-chevron-left d-inline-flex cursor-pointer"
                  onClick={() => setCollapsible2(!collapsible2)}
                ></i>
              ),
            }}
            onCollapse={() => {
              setCollapsible2(!collapsible2);
            }}
            onOptionChange={setOptions2}
            options={options2}
            style={{ height: 512 }}
          />
        </div>
      </Example>

      <Example hash="more" state={state} t={tSidebarPage}>
        <div className="d-flex gap-4">
          <Sidebar
            className="shadow"
            dark
            footer={<Footer />}
            header={header}
            onOptionChange={setOptions4}
            options={options4}
            style={{ height: 512 }}
          />

          <Sidebar
            className="shadow"
            footer={<Footer />}
            header={header}
            onOptionChange={setOptions4}
            options={options4}
            style={{ height: 512 }}
          />

          <Sidebar
            className="shadow"
            collapsible={collapsible3}
            footer={<Footer />}
            header={{
              ...header,
              end: (
                <i
                  className="bi bi-chevron-left d-inline-flex cursor-pointer"
                  onClick={() => setCollapsible3(!collapsible3)}
                ></i>
              ),
            }}
            onCollapse={() => {
              setCollapsible3(!collapsible3);
            }}
            onOptionChange={setOptions4}
            options={options4}
            style={{ height: 512 }}
          />
        </div>
      </Example>

      <Example hash="body" state={state} t={tSidebarPage}>
        <div className="d-flex gap-4">
          <Sidebar
            body={
              <div className="list-group list-group-flush border-bottom overflow-y-auto">
                <a aria-current="true" className="list-group-item list-group-item-action active" href="#">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>Wed</small>
                  </div>
                  <p className="mb-1">Some placeholder content in a paragraph.</p>
                  <small>And some small print.</small>
                </a>
                <a className="list-group-item list-group-item-action" href="#">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-body-secondary">Tues</small>
                  </div>
                  <p className="mb-1">Some placeholder content in a paragraph.</p>
                  <small className="text-body-secondary">And some muted small print.</small>
                </a>
                <a className="list-group-item list-group-item-action" href="#">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-body-secondary">Mon</small>
                  </div>
                  <p className="mb-1">Some placeholder content in a paragraph.</p>
                  <small className="text-body-secondary">And some muted small print.</small>
                </a>
                <a aria-current="true" className="list-group-item list-group-item-action" href="#">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>Wed</small>
                  </div>
                  <p className="mb-1">Some placeholder content in a paragraph.</p>
                  <small>And some small print.</small>
                </a>
              </div>
            }
            className="shadow"
            header={header}
            style={{ height: 512 }}
          />
        </div>
      </Example>

      <PropsIndicator />

      <Example
        hash="sidebarComponentProps"
        items={[
          {
            attr: 'body',
            default: '',
            desc: tSidebarComponentProps('sidebar.desc.body'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'collapsible',
            default: '',
            desc: tSidebarComponentProps('sidebar.desc.collapsible'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'dark',
            default: '',
            desc: tSidebarComponentProps('sidebar.desc.dark'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'footer',
            default: '',
            desc: tSidebarComponentProps('sidebar.desc.footer'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'header',
            default: '',
            desc: tSidebarComponentProps('sidebar.desc.header'),
            type: (
              <Link to="#sidebarComponentTypes">
                <span className="badge text-bg-secondary d-inline">
                  SidebarHeader
                  <i className="bi bi-link ms-1"></i>
                </span>
              </Link>
            ),
          },
          {
            attr: 'options',
            default: '',
            desc: tSidebarComponentProps('sidebar.desc.options'),
            type: (
              <Link to="#sidebarComponentTypes">
                <span className="badge text-bg-secondary d-inline">
                  IOption[]
                  <i className="bi bi-link ms-1"></i>
                </span>
              </Link>
            ),
          },
          {
            attr: 'preventToggleActive',
            default: '',
            desc: tSidebarComponentProps('sidebar.desc.preventToggleActive'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tSidebarComponentProps}
      />

      <EventsIndicator />

      <Example
        events
        hash="sidebarComponentProps"
        items={[
          {
            attr: 'onCollapse',
            default: '',
            desc: tSidebarComponentProps('sidebar.desc.onCollapse'),
            type: <span className="badge text-bg-secondary">{'() => void'}</span>,
          },
          {
            attr: 'onOptionChange',
            default: '',
            desc: tSidebarComponentProps('sidebar.desc.onOptionChange'),
            type: <span className="badge text-bg-secondary">{'(options: IOption[]) => void'}</span>,
          },
        ]}
        state={state}
        t={tSidebarComponentProps}
      />

      <TypesIndicator />

      <Example
        hash="sidebarComponentProps"
        items={[
          {
            attr: 'IOption',
            default: '',
            desc: tSidebarComponentProps('sidebar.desc.iOption'),
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="active?: boolean" value={tSidebarComponentProps('sidebar.options.active')} />
                <OptionRow label="children?: IOption[]" value={tSidebarComponentProps('sidebar.options.children')} />
                <OptionRow label="disabled?: boolean" value={tSidebarComponentProps('sidebar.options.disabled')} />
                <OptionRow label="href?: string" value={tSidebarComponentProps('sidebar.options.href')} />
                <OptionRow label="icon?: ReactNode" value={tSidebarComponentProps('sidebar.options.icon')} />
                <OptionRow label="id?: string | number" value={tSidebarComponentProps('sidebar.options.id')} />
                <OptionRow label="isLeaf?: boolean" value={tSidebarComponentProps('sidebar.options.isLeaf')} />
                <OptionRow label="name?: boolean" value={tSidebarComponentProps('sidebar.options.name')} />
                <OptionRow
                  label="onClick?: (event) => void"
                  value={tSidebarComponentProps('sidebar.options.onClick')}
                />
                <OptionRow label="parentId?: boolean" value={tSidebarComponentProps('sidebar.options.parentId')} />
              </div>
            ),
          },
          {
            attr: 'SidebarHeader',
            default: '',
            desc: tSidebarComponentProps('sidebar.desc.sidebarHeader'),
            type: (
              <div className="row row-cols-auto g-1">
                <div className="col">
                  <span className="badge text-bg-secondary">ReactNode</span>
                </div>
                <div className="col">
                  <span className="badge text-bg-secondary">
                    {'{ end?: ReactNode; icon?: ReactNode; name?: ReactNode; }'}
                  </span>
                </div>
              </div>
            ),
          },
        ]}
        state={state}
        t={tSidebarComponentProps}
        types
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
