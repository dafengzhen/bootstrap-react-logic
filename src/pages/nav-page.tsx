import PropsIndicator from '@components/props-indicator.tsx';
import OptionRow from '@components/option-row.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { useState } from 'react';
import { Nav } from '@lib/nav';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/nav/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
  }),
);

export default function NavPage() {
  const navigation = useNavigation();
  const { t: tNavComponentProps } = useTranslation(['navComponentProps']);
  const { t: tNavPage } = useTranslation(['navPage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example state={state} hash="basic" t={tNavPage}>
        <Nav
          options={[
            {
              link: 'Active',
              active: true,
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Disabled',
              disabled: true,
              href: '#',
            },
          ]}
        />

        <Nav
          options={[
            {
              link: 'Active',
              active: true,
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Disabled',
              disabled: true,
              href: '#',
            },
          ]}
          as="nav"
          skipItem
        />
      </Example>

      <Example hash="horizontalAlignment" state={state} t={tNavPage}>
        <Nav
          options={[
            {
              link: 'Active',
              active: true,
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Disabled',
              disabled: true,
              href: '#',
            },
          ]}
          horizontal="center"
        />

        <Nav
          options={[
            {
              link: 'Active',
              active: true,
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Disabled',
              disabled: true,
              href: '#',
            },
          ]}
          horizontal="end"
        />
      </Example>

      <Example hash="vertical" state={state} t={tNavPage} row>
        <Nav
          options={[
            {
              link: 'Active',
              active: true,
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Disabled',
              disabled: true,
              href: '#',
            },
          ]}
          vertical
        />

        <Nav
          options={[
            {
              link: 'Active',
              active: true,
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Disabled',
              disabled: true,
              href: '#',
            },
          ]}
          as="nav"
          skipItem
          vertical
        />
      </Example>

      <Example state={state} t={tNavPage} hash="tabs" row>
        <Nav
          options={[
            {
              link: 'Active',
              active: true,
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Disabled',
              disabled: true,
              href: '#',
            },
          ]}
          tabs
        />
      </Example>

      <Example state={state} hash="pills" t={tNavPage} row>
        <Nav
          options={[
            {
              link: 'Active',
              active: true,
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Disabled',
              disabled: true,
              href: '#',
            },
          ]}
          pills
        />
      </Example>

      <Example hash="underline" state={state} t={tNavPage}>
        <Nav
          options={[
            {
              link: 'Active',
              active: true,
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Disabled',
              disabled: true,
              href: '#',
            },
          ]}
          underline
        />
      </Example>

      <Example hash="fillAndJustify" state={state} t={tNavPage}>
        <Nav
          options={[
            {
              link: 'Active',
              active: true,
              href: '#',
            },
            {
              link: 'Much longer nav link',
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Disabled',
              disabled: true,
              href: '#',
            },
          ]}
          pills
          fill
        />

        <Nav
          options={[
            {
              link: 'Active',
              active: true,
              href: '#',
            },
            {
              link: 'Much longer nav link',
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Disabled',
              disabled: true,
              href: '#',
            },
          ]}
          as="nav"
          skipItem
          pills
          fill
        />

        <Nav
          options={[
            {
              link: 'Active',
              active: true,
              href: '#',
            },
            {
              link: 'Much longer nav link',
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Disabled',
              disabled: true,
              href: '#',
            },
          ]}
          justified
          pills
        />

        <Nav
          options={[
            {
              link: 'Active',
              active: true,
              href: '#',
            },
            {
              link: 'Much longer nav link',
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Disabled',
              disabled: true,
              href: '#',
            },
          ]}
          justified
          as="nav"
          skipItem
          pills
        />
      </Example>

      <Example hash="workingWithFlexUtilities" state={state} t={tNavPage}>
        <Nav
          options={[
            {
              linkProps: {
                className: 'flex-sm-fill text-sm-center',
              },
              link: 'Active',
              active: true,
              href: '#',
            },
            {
              linkProps: {
                className: 'flex-sm-fill text-sm-center',
              },
              link: 'Longer nav link',
              href: '#',
            },
            {
              linkProps: {
                className: 'flex-sm-fill text-sm-center',
              },
              link: 'Link',
              href: '#',
            },
            {
              linkProps: {
                className: 'flex-sm-fill text-sm-center',
              },
              link: 'Disabled',
              disabled: true,
              href: '#',
            },
          ]}
          className="flex-sm-row"
          as="nav"
          skipItem
          vertical
          pills
        />
      </Example>

      <Example hash="tabsWithDropdowns" state={state} t={tNavPage}>
        <Nav
          options={[
            {
              link: 'Active',
              active: true,
              href: '#',
            },
            {
              item: (
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              ),
              linkProps: {
                className: 'dropdown-toggle',
              },
              itemProps: {
                className: 'dropdown',
              },
              link: 'Dropdown',
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Disabled',
              disabled: true,
              href: '#',
            },
          ]}
          tabs
        />
      </Example>

      <Example hash="pillsWithDropdowns" state={state} t={tNavPage}>
        <Nav
          options={[
            {
              link: 'Active',
              active: true,
              href: '#',
            },
            {
              item: (
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              ),
              linkProps: {
                className: 'dropdown-toggle',
              },
              itemProps: {
                className: 'dropdown',
              },
              link: 'Dropdown',
              href: '#',
            },
            {
              link: 'Link',
              href: '#',
            },
            {
              link: 'Disabled',
              disabled: true,
              href: '#',
            },
          ]}
          pills
        />
      </Example>

      <Example hash="javaScriptBehavior" state={state} t={tNavPage}>
        <Nav
          options={[
            {
              pane: (
                <p>
                  This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking another
                  tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
                  the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>
                  -powered navigation.
                </p>
              ),
              linkProps: {
                as: 'button',
              },
              active: true,
              link: 'Home',
            },
            {
              pane: (
                <p>
                  This is some placeholder content the <strong>Profile tab's</strong> associated content. Clicking
                  another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                  control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
                  <code>.nav</code>-powered navigation.
                </p>
              ),
              linkProps: {
                as: 'button',
              },
              link: 'Profile',
            },
            {
              pane: (
                <p>
                  This is some placeholder content the <strong>Contact tab's</strong> associated content. Clicking
                  another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                  control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
                  <code>.nav</code>-powered navigation.
                </p>
              ),
              linkProps: {
                as: 'button',
              },
              link: 'Contact',
            },
            {
              linkProps: {
                as: 'button',
              },
              link: 'Disabled',
              disabled: true,
            },
          ]}
          tabs
        />

        <Nav
          options={[
            {
              pane: (
                <p>
                  This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking another
                  tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
                  the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>
                  -powered navigation.
                </p>
              ),
              linkProps: {
                as: 'button',
              },
              active: true,
              link: 'Home',
            },
            {
              pane: (
                <p>
                  This is some placeholder content the <strong>Profile tab's</strong> associated content. Clicking
                  another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                  control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
                  <code>.nav</code>-powered navigation.
                </p>
              ),
              linkProps: {
                as: 'button',
              },
              link: 'Profile',
            },
            {
              pane: (
                <p>
                  This is some placeholder content the <strong>Contact tab's</strong> associated content. Clicking
                  another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                  control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
                  <code>.nav</code>-powered navigation.
                </p>
              ),
              linkProps: {
                as: 'button',
              },
              link: 'Contact',
            },
            {
              linkProps: {
                as: 'button',
              },
              link: 'Disabled',
              disabled: true,
            },
          ]}
          as="nav"
          skipItem
          tabs
        />

        <Nav
          options={[
            {
              pane: (
                <p>
                  This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking another
                  tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
                  the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>
                  -powered navigation.
                </p>
              ),
              linkProps: {
                as: 'button',
              },
              active: true,
              link: 'Home',
            },
            {
              pane: (
                <p>
                  This is some placeholder content the <strong>Profile tab's</strong> associated content. Clicking
                  another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                  control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
                  <code>.nav</code>-powered navigation.
                </p>
              ),
              linkProps: {
                as: 'button',
              },
              link: 'Profile',
            },
            {
              pane: (
                <p>
                  This is some placeholder content the <strong>Contact tab's</strong> associated content. Clicking
                  another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                  control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
                  <code>.nav</code>-powered navigation.
                </p>
              ),
              linkProps: {
                as: 'button',
              },
              link: 'Contact',
            },
            {
              linkProps: {
                as: 'button',
              },
              link: 'Disabled',
              disabled: true,
            },
          ]}
          pills
        />

        <div className="d-flex align-items-start">
          <Nav
            options={[
              {
                pane: (
                  <p>
                    This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking
                    another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
                    <code>.nav</code>
                    -powered navigation.
                  </p>
                ),
                linkProps: {
                  as: 'button',
                },
                active: true,
                link: 'Home',
              },
              {
                pane: (
                  <p>
                    This is some placeholder content the <strong>Profile tab's</strong> associated content. Clicking
                    another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
                    <code>.nav</code>-powered navigation.
                  </p>
                ),
                linkProps: {
                  as: 'button',
                },
                link: 'Profile',
              },
              {
                pane: (
                  <p>
                    This is some placeholder content the <strong>Contact tab's</strong> associated content. Clicking
                    another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
                    <code>.nav</code>-powered navigation.
                  </p>
                ),
                linkProps: {
                  as: 'button',
                },
                link: 'Contact',
              },
              {
                linkProps: {
                  as: 'button',
                },
                link: 'Disabled',
                disabled: true,
              },
            ]}
            className="me-3"
            as="nav"
            skipItem
            vertical
            pills
          />
        </div>
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">NavTabContentProps&lt;div&gt;</span>,
            desc: tNavComponentProps('nav.desc.contentProps'),
            attr: 'contentProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tNavComponentProps('nav.desc.fill'),
            attr: 'fill',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">center | end | start</span>,
            desc: tNavComponentProps('nav.desc.horizontal'),
            attr: 'horizontal',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tNavComponentProps('nav.desc.justified'),
            attr: 'justified',
            default: '',
          },
          {
            type: (
              <span className="badge text-bg-secondary">
                (id: number | string, event: MouseEvent&lt;HTMLElement&gt;) =&gt; void
              </span>
            ),
            desc: tNavComponentProps('nav.desc.onChange'),
            attr: 'onChange',
            default: '',
          },
          {
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow value={tNavComponentProps('nav.options.active')} label="active?: boolean" />
                <OptionRow value={tNavComponentProps('nav.options.disabled')} label="disabled?: boolean" />
                <OptionRow value={tNavComponentProps('nav.options.fade')} label="fade?: boolean" />
                <OptionRow value={tNavComponentProps('nav.options.href')} label="href?: string" />
                <OptionRow value={tNavComponentProps('nav.options.id')} label="id?: number | string" />
                <OptionRow value={tNavComponentProps('nav.options.item')} label="item?: ReactNode" />
                <OptionRow value={tNavComponentProps('nav.options.itemProps')} label="itemProps?: NavItemProps<li>" />
                <OptionRow value={tNavComponentProps('nav.options.link')} label="link?: ReactNode" />
                <OptionRow value={tNavComponentProps('nav.options.linkProps')} label="linkProps?: NavLinkProps<a>" />
                <OptionRow value={tNavComponentProps('nav.options.pane')} label="pane?: ReactNode" />
                <OptionRow value={tNavComponentProps('nav.options.paneProps')} label="paneProps?: NavTabPaneProps<a>" />
              </div>
            ),
            desc: tNavComponentProps('nav.desc.options'),
            attr: 'options',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tNavComponentProps('nav.desc.pills'),
            attr: 'pills',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tNavComponentProps('nav.desc.skipItem'),
            attr: 'skipItem',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tNavComponentProps('nav.desc.tabs'),
            attr: 'tabs',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tNavComponentProps('nav.desc.underline'),
            attr: 'underline',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tNavComponentProps('nav.desc.vertical'),
            attr: 'vertical',
            default: '',
          },
        ]}
        hash="navComponentProps"
        t={tNavComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
