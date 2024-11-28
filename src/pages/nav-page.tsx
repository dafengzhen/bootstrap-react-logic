import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import OptionRow from '@components/option-row.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Nav } from '@lib/nav';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/nav/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
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
      <Example hash="basic" state={state} t={tNavPage}>
        <Nav
          options={[
            {
              active: true,
              href: '#',
              link: 'Active',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              disabled: true,
              href: '#',
              link: 'Disabled',
            },
          ]}
        />

        <Nav
          as="nav"
          options={[
            {
              active: true,
              href: '#',
              link: 'Active',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              disabled: true,
              href: '#',
              link: 'Disabled',
            },
          ]}
          skipItem
        />
      </Example>

      <Example hash="horizontalAlignment" state={state} t={tNavPage}>
        <Nav
          horizontal="center"
          options={[
            {
              active: true,
              href: '#',
              link: 'Active',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              disabled: true,
              href: '#',
              link: 'Disabled',
            },
          ]}
        />

        <Nav
          horizontal="end"
          options={[
            {
              active: true,
              href: '#',
              link: 'Active',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              disabled: true,
              href: '#',
              link: 'Disabled',
            },
          ]}
        />
      </Example>

      <Example hash="vertical" row state={state} t={tNavPage}>
        <Nav
          options={[
            {
              active: true,
              href: '#',
              link: 'Active',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              disabled: true,
              href: '#',
              link: 'Disabled',
            },
          ]}
          vertical
        />

        <Nav
          as="nav"
          options={[
            {
              active: true,
              href: '#',
              link: 'Active',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              disabled: true,
              href: '#',
              link: 'Disabled',
            },
          ]}
          skipItem
          vertical
        />
      </Example>

      <Example hash="tabs" row state={state} t={tNavPage}>
        <Nav
          options={[
            {
              active: true,
              href: '#',
              link: 'Active',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              disabled: true,
              href: '#',
              link: 'Disabled',
            },
          ]}
          tabs
        />
      </Example>

      <Example hash="pills" row state={state} t={tNavPage}>
        <Nav
          options={[
            {
              active: true,
              href: '#',
              link: 'Active',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              disabled: true,
              href: '#',
              link: 'Disabled',
            },
          ]}
          pills
        />
      </Example>

      <Example hash="underline" state={state} t={tNavPage}>
        <Nav
          options={[
            {
              active: true,
              href: '#',
              link: 'Active',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              disabled: true,
              href: '#',
              link: 'Disabled',
            },
          ]}
          underline
        />
      </Example>

      <Example hash="fillAndJustify" state={state} t={tNavPage}>
        <Nav
          fill
          options={[
            {
              active: true,
              href: '#',
              link: 'Active',
            },
            {
              href: '#',
              link: 'Much longer nav link',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              disabled: true,
              href: '#',
              link: 'Disabled',
            },
          ]}
          pills
        />

        <Nav
          as="nav"
          fill
          options={[
            {
              active: true,
              href: '#',
              link: 'Active',
            },
            {
              href: '#',
              link: 'Much longer nav link',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              disabled: true,
              href: '#',
              link: 'Disabled',
            },
          ]}
          pills
          skipItem
        />

        <Nav
          justified
          options={[
            {
              active: true,
              href: '#',
              link: 'Active',
            },
            {
              href: '#',
              link: 'Much longer nav link',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              disabled: true,
              href: '#',
              link: 'Disabled',
            },
          ]}
          pills
        />

        <Nav
          as="nav"
          justified
          options={[
            {
              active: true,
              href: '#',
              link: 'Active',
            },
            {
              href: '#',
              link: 'Much longer nav link',
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              disabled: true,
              href: '#',
              link: 'Disabled',
            },
          ]}
          pills
          skipItem
        />
      </Example>

      <Example hash="workingWithFlexUtilities" state={state} t={tNavPage}>
        <Nav
          as="nav"
          className="flex-sm-row"
          options={[
            {
              active: true,
              href: '#',
              link: 'Active',
              linkProps: {
                className: 'flex-sm-fill text-sm-center',
              },
            },
            {
              href: '#',
              link: 'Longer nav link',
              linkProps: {
                className: 'flex-sm-fill text-sm-center',
              },
            },
            {
              href: '#',
              link: 'Link',
              linkProps: {
                className: 'flex-sm-fill text-sm-center',
              },
            },
            {
              disabled: true,
              href: '#',
              link: 'Disabled',
              linkProps: {
                className: 'flex-sm-fill text-sm-center',
              },
            },
          ]}
          pills
          skipItem
          vertical
        />
      </Example>

      <Example hash="tabsWithDropdowns" state={state} t={tNavPage}>
        <Nav
          options={[
            {
              active: true,
              href: '#',
              link: 'Active',
            },
            {
              href: '#',
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
              itemProps: {
                className: 'dropdown',
              },
              link: 'Dropdown',
              linkProps: {
                className: 'dropdown-toggle',
              },
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              disabled: true,
              href: '#',
              link: 'Disabled',
            },
          ]}
          tabs
        />
      </Example>

      <Example hash="pillsWithDropdowns" state={state} t={tNavPage}>
        <Nav
          options={[
            {
              active: true,
              href: '#',
              link: 'Active',
            },
            {
              href: '#',
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
              itemProps: {
                className: 'dropdown',
              },
              link: 'Dropdown',
              linkProps: {
                className: 'dropdown-toggle',
              },
            },
            {
              href: '#',
              link: 'Link',
            },
            {
              disabled: true,
              href: '#',
              link: 'Disabled',
            },
          ]}
          pills
        />
      </Example>

      <Example hash="javaScriptBehavior" state={state} t={tNavPage}>
        <Nav
          options={[
            {
              active: true,
              link: 'Home',
              linkProps: {
                as: 'button',
              },
              pane: (
                <p>
                  This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking another
                  tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
                  the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>
                  -powered navigation.
                </p>
              ),
            },
            {
              link: 'Profile',
              linkProps: {
                as: 'button',
              },
              pane: (
                <p>
                  This is some placeholder content the <strong>Profile tab's</strong> associated content. Clicking
                  another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                  control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
                  <code>.nav</code>-powered navigation.
                </p>
              ),
            },
            {
              link: 'Contact',
              linkProps: {
                as: 'button',
              },
              pane: (
                <p>
                  This is some placeholder content the <strong>Contact tab's</strong> associated content. Clicking
                  another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                  control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
                  <code>.nav</code>-powered navigation.
                </p>
              ),
            },
            {
              disabled: true,
              link: 'Disabled',
              linkProps: {
                as: 'button',
              },
            },
          ]}
          tabs
        />

        <Nav
          as="nav"
          options={[
            {
              active: true,
              link: 'Home',
              linkProps: {
                as: 'button',
              },
              pane: (
                <p>
                  This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking another
                  tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
                  the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>
                  -powered navigation.
                </p>
              ),
            },
            {
              link: 'Profile',
              linkProps: {
                as: 'button',
              },
              pane: (
                <p>
                  This is some placeholder content the <strong>Profile tab's</strong> associated content. Clicking
                  another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                  control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
                  <code>.nav</code>-powered navigation.
                </p>
              ),
            },
            {
              link: 'Contact',
              linkProps: {
                as: 'button',
              },
              pane: (
                <p>
                  This is some placeholder content the <strong>Contact tab's</strong> associated content. Clicking
                  another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                  control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
                  <code>.nav</code>-powered navigation.
                </p>
              ),
            },
            {
              disabled: true,
              link: 'Disabled',
              linkProps: {
                as: 'button',
              },
            },
          ]}
          skipItem
          tabs
        />

        <Nav
          options={[
            {
              active: true,
              link: 'Home',
              linkProps: {
                as: 'button',
              },
              pane: (
                <p>
                  This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking another
                  tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
                  the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>
                  -powered navigation.
                </p>
              ),
            },
            {
              link: 'Profile',
              linkProps: {
                as: 'button',
              },
              pane: (
                <p>
                  This is some placeholder content the <strong>Profile tab's</strong> associated content. Clicking
                  another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                  control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
                  <code>.nav</code>-powered navigation.
                </p>
              ),
            },
            {
              link: 'Contact',
              linkProps: {
                as: 'button',
              },
              pane: (
                <p>
                  This is some placeholder content the <strong>Contact tab's</strong> associated content. Clicking
                  another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                  control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
                  <code>.nav</code>-powered navigation.
                </p>
              ),
            },
            {
              disabled: true,
              link: 'Disabled',
              linkProps: {
                as: 'button',
              },
            },
          ]}
          pills
        />

        <div className="d-flex align-items-start">
          <Nav
            as="nav"
            className="me-3"
            options={[
              {
                active: true,
                link: 'Home',
                linkProps: {
                  as: 'button',
                },
                pane: (
                  <p>
                    This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking
                    another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
                    <code>.nav</code>
                    -powered navigation.
                  </p>
                ),
              },
              {
                link: 'Profile',
                linkProps: {
                  as: 'button',
                },
                pane: (
                  <p>
                    This is some placeholder content the <strong>Profile tab's</strong> associated content. Clicking
                    another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
                    <code>.nav</code>-powered navigation.
                  </p>
                ),
              },
              {
                link: 'Contact',
                linkProps: {
                  as: 'button',
                },
                pane: (
                  <p>
                    This is some placeholder content the <strong>Contact tab's</strong> associated content. Clicking
                    another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling. You can use it with tabs, pills, and any other{' '}
                    <code>.nav</code>-powered navigation.
                  </p>
                ),
              },
              {
                disabled: true,
                link: 'Disabled',
                linkProps: {
                  as: 'button',
                },
              },
            ]}
            pills
            skipItem
            vertical
          />
        </div>
      </Example>

      <PropsIndicator />

      <Example
        hash="navComponentProps"
        items={[
          {
            attr: 'contentProps',
            default: '',
            desc: tNavComponentProps('nav.desc.contentProps'),
            type: <span className="badge text-bg-secondary">NavTabContentProps&lt;div&gt;</span>,
          },
          {
            attr: 'fill',
            default: '',
            desc: tNavComponentProps('nav.desc.fill'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'horizontal',
            default: '',
            desc: tNavComponentProps('nav.desc.horizontal'),
            type: <span className="badge text-bg-secondary">center | end | start</span>,
          },
          {
            attr: 'justified',
            default: '',
            desc: tNavComponentProps('nav.desc.justified'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'onChange',
            default: '',
            desc: tNavComponentProps('nav.desc.onChange'),
            type: (
              <span className="badge text-bg-secondary">
                (id: number | string, event: MouseEvent&lt;HTMLElement&gt;) =&gt; void
              </span>
            ),
          },
          {
            attr: 'options',
            default: '',
            desc: tNavComponentProps('nav.desc.options'),
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="active?: boolean" value={tNavComponentProps('nav.options.active')} />
                <OptionRow label="disabled?: boolean" value={tNavComponentProps('nav.options.disabled')} />
                <OptionRow label="fade?: boolean" value={tNavComponentProps('nav.options.fade')} />
                <OptionRow label="href?: string" value={tNavComponentProps('nav.options.href')} />
                <OptionRow label="id?: number | string" value={tNavComponentProps('nav.options.id')} />
                <OptionRow label="item?: ReactNode" value={tNavComponentProps('nav.options.item')} />
                <OptionRow label="itemProps?: NavItemProps<li>" value={tNavComponentProps('nav.options.itemProps')} />
                <OptionRow label="link?: ReactNode" value={tNavComponentProps('nav.options.link')} />
                <OptionRow label="linkProps?: NavLinkProps<a>" value={tNavComponentProps('nav.options.linkProps')} />
                <OptionRow label="pane?: ReactNode" value={tNavComponentProps('nav.options.pane')} />
                <OptionRow label="paneProps?: NavTabPaneProps<a>" value={tNavComponentProps('nav.options.paneProps')} />
              </div>
            ),
          },
          {
            attr: 'pills',
            default: '',
            desc: tNavComponentProps('nav.desc.pills'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'skipItem',
            default: '',
            desc: tNavComponentProps('nav.desc.skipItem'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'tabs',
            default: '',
            desc: tNavComponentProps('nav.desc.tabs'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'underline',
            default: '',
            desc: tNavComponentProps('nav.desc.underline'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'vertical',
            default: '',
            desc: tNavComponentProps('nav.desc.vertical'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tNavComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
