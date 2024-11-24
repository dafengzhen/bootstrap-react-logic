import type { ButtonProps } from '@lib/button';

import PropsIndicator from '@components/props-indicator.tsx';
import OptionRow from '@components/option-row.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { Dropdown } from '@lib/dropdown';
import { useState } from 'react';

type Type = 'secondary' | 'primary' | 'success' | 'warning' | 'danger' | 'info';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/dropdown/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
  }),
);

const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export default function DropdownPage() {
  const navigation = useNavigation();
  const { t: tDropdownComponentProps } = useTranslation(['dropdownComponentProps']);
  const { t: tDropdownPage } = useTranslation(['dropdownPage']);
  const state = useState(codes);
  const [visible, setVisible] = useState(false);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example t={tDropdownPage} state={state} hash="basic" inline>
        <Dropdown
          options={[
            {
              item: 'Action',
              href: '#',
            },
            {
              item: 'Another action',
              href: '#',
            },
            {
              item: 'Something else here',
              href: '#',
            },
          ]}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Dropdown button"
        />

        <Dropdown
          options={[
            {
              item: 'Action',
              href: '#',
            },
            {
              item: 'Another action',
              href: '#',
            },
            {
              item: 'Something else here',
              href: '#',
            },
          ]}
          toggleProps={
            {
              variant: 'secondary',
              href: '#',
              as: 'a',
            } as ButtonProps<'a'>
          }
          toggle="Dropdown button"
        />

        <div className="d-inline-flex flex-wrap gap-2">
          {(['primary', 'secondary', 'success', 'info', 'warning', 'danger'] as Type[]).map((type) => {
            return (
              <Dropdown
                options={[
                  {
                    item: 'Action',
                    href: '#',
                  },
                  {
                    item: 'Another action',
                    href: '#',
                  },
                  {
                    item: 'Something else here',
                    href: '#',
                  },
                  {
                    divider: true,
                  },
                  {
                    item: 'Separated link',
                    href: '#',
                  },
                ]}
                toggleProps={{
                  variant: type,
                }}
                toggle={capitalizeFirstLetter(type)}
                key={type}
                btnGroup
              />
            );
          })}
        </div>
      </Example>

      <Example hash="splitButton" t={tDropdownPage} state={state} inline>
        <div className="d-flex flex-wrap gap-2">
          {(['primary', 'secondary', 'success', 'info', 'warning', 'danger'] as Type[]).map((type) => {
            return (
              <Dropdown
                options={[
                  {
                    item: 'Action',
                    href: '#',
                  },
                  {
                    item: 'Another action',
                    href: '#',
                  },
                  {
                    item: 'Something else here',
                    href: '#',
                  },
                  {
                    divider: true,
                  },
                  {
                    item: 'Separated link',
                    href: '#',
                  },
                ]}
                buttonProps={{
                  variant: type,
                }}
                toggleProps={{
                  variant: type,
                }}
                toggle={capitalizeFirstLetter(type)}
                key={type}
                split
              />
            );
          })}
        </div>
      </Example>

      <Example t={tDropdownPage} hash="sizing" state={state} inline>
        <div className="d-flex flex-wrap gap-2">
          <Dropdown
            options={[
              {
                item: 'Action',
                href: '#',
              },
              {
                item: 'Another action',
                href: '#',
              },
              {
                item: 'Something else here',
                href: '#',
              },
              {
                divider: true,
              },
              {
                item: 'Separated link',
                href: '#',
              },
            ]}
            toggleProps={{
              variant: 'secondary',
              className: 'btn-lg',
            }}
            toggle="Large button"
            btnGroup
          />

          <Dropdown
            options={[
              {
                item: 'Action',
                href: '#',
              },
              {
                item: 'Another action',
                href: '#',
              },
              {
                item: 'Something else here',
                href: '#',
              },
              {
                divider: true,
              },
              {
                item: 'Separated link',
                href: '#',
              },
            ]}
            buttonProps={{
              variant: 'secondary',
              className: 'btn-lg',
            }}
            toggleProps={{
              variant: 'secondary',
              className: 'btn-lg',
            }}
            toggle="Large split button"
            split
          />
        </div>

        <div className="d-flex flex-wrap gap-2">
          <Dropdown
            options={[
              {
                item: 'Action',
                href: '#',
              },
              {
                item: 'Another action',
                href: '#',
              },
              {
                item: 'Something else here',
                href: '#',
              },
              {
                divider: true,
              },
              {
                item: 'Separated link',
                href: '#',
              },
            ]}
            toggleProps={{
              variant: 'secondary',
              className: 'btn-sm',
            }}
            toggle="Small button"
            btnGroup
          />

          <Dropdown
            options={[
              {
                item: 'Action',
                href: '#',
              },
              {
                item: 'Another action',
                href: '#',
              },
              {
                item: 'Something else here',
                href: '#',
              },
              {
                divider: true,
              },
              {
                item: 'Separated link',
                href: '#',
              },
            ]}
            buttonProps={{
              variant: 'secondary',
              className: 'btn-sm',
            }}
            toggleProps={{
              variant: 'secondary',
              className: 'btn-sm',
            }}
            toggle="Small split button"
            split
          />
        </div>
      </Example>

      <Example hash="darkDropdowns" t={tDropdownPage} state={state}>
        <Dropdown
          options={[
            {
              item: 'Action',
              active: true,
              href: '#',
            },
            {
              item: 'Another action',
              href: '#',
            },
            {
              item: 'Something else here',
              href: '#',
            },
            {
              divider: true,
            },
            {
              item: 'Separated link',
              href: '#',
            },
          ]}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Dropdown button"
          data-bs-theme="dark"
        />

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              data-bs-target="#navbarNavDarkDropdown"
              aria-controls="navbarNavDarkDropdown"
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              aria-expanded="false"
              type="button"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul className="navbar-nav">
                <Dropdown
                  options={[
                    {
                      item: 'Action',
                      href: '#',
                    },
                    {
                      item: 'Another action',
                      href: '#',
                    },
                    {
                      item: 'Something else here',
                      href: '#',
                    },
                  ]}
                  toggleProps={{
                    variant: 'dark',
                  }}
                  toggle="Dropdown button"
                  className="nav-item"
                  data-bs-theme="dark"
                  as="li"
                />
              </ul>
            </div>
          </div>
        </nav>
      </Example>

      <Example t={tDropdownPage} hash="centered" state={state}>
        <Dropdown
          options={[
            {
              item: 'Action',
              href: '#',
            },
            {
              item: 'Action two',
              href: '#',
            },
            {
              item: 'Action three',
              href: '#',
            },
          ]}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Centered dropdown"
          center
        />
      </Example>

      <Example t={tDropdownPage} hash="dropup" state={state} row>
        <Dropdown
          options={[
            {
              item: 'Action',
              href: '#',
            },
            {
              item: 'Another action',
              href: '#',
            },
            {
              item: 'Something else here',
              href: '#',
            },
            {
              divider: true,
            },
            {
              item: 'Separated link',
              href: '#',
            },
          ]}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Dropup"
          dropup
        />

        <Dropdown
          options={[
            {
              item: 'Action',
              href: '#',
            },
            {
              item: 'Another action',
              href: '#',
            },
            {
              item: 'Something else here',
              href: '#',
            },
            {
              divider: true,
            },
            {
              item: 'Separated link',
              href: '#',
            },
          ]}
          buttonProps={{
            variant: 'secondary',
          }}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Split dropup"
          dropup
          split
        />
      </Example>

      <Example hash="dropupCentered" t={tDropdownPage} state={state}>
        <Dropdown
          options={[
            {
              item: 'Action',
              href: '#',
            },
            {
              item: 'Another action',
              href: '#',
            },
            {
              item: 'Something else here',
              href: '#',
            },
            {
              divider: true,
            },
            {
              item: 'Separated link',
              href: '#',
            },
          ]}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Centered dropup"
          dropupCenter
          dropup
        />
      </Example>

      <Example t={tDropdownPage} hash="dropend" state={state} row>
        <Dropdown
          options={[
            {
              item: 'Action',
              href: '#',
            },
            {
              item: 'Another action',
              href: '#',
            },
            {
              item: 'Something else here',
              href: '#',
            },
            {
              divider: true,
            },
            {
              item: 'Separated link',
              href: '#',
            },
          ]}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Dropend"
          btnGroup
          dropend
        />

        <Dropdown
          options={[
            {
              item: 'Action',
              href: '#',
            },
            {
              item: 'Another action',
              href: '#',
            },
            {
              item: 'Something else here',
              href: '#',
            },
            {
              divider: true,
            },
            {
              item: 'Separated link',
              href: '#',
            },
          ]}
          buttonProps={{
            variant: 'secondary',
          }}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Split dropend"
          btnGroup
          dropend
          split
        />
      </Example>

      <Example t={tDropdownPage} hash="dropstart" state={state} row>
        <Dropdown
          options={[
            {
              item: 'Action',
              href: '#',
            },
            {
              item: 'Another action',
              href: '#',
            },
            {
              item: 'Something else here',
              href: '#',
            },
            {
              divider: true,
            },
            {
              item: 'Separated link',
              href: '#',
            },
          ]}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Dropstart"
          strategy="fixed"
          dropstart
          btnGroup
        />

        <Dropdown
          options={[
            {
              item: 'Action',
              href: '#',
            },
            {
              item: 'Another action',
              href: '#',
            },
            {
              item: 'Something else here',
              href: '#',
            },
            {
              divider: true,
            },
            {
              item: 'Separated link',
              href: '#',
            },
          ]}
          buttonProps={{
            variant: 'secondary',
          }}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Split dropend"
          strategy="fixed"
          dropstart
          btnGroup
          split
        />
      </Example>

      <Example t={tDropdownPage} hash="menuItems" state={state} inline>
        <Dropdown
          options={[
            {
              item: 'Action',
              as: 'button',
            },
            {
              item: 'Another action',
              as: 'button',
            },
            {
              item: 'Something else here',
              as: 'button',
            },
          ]}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Dropdown"
        />

        <Dropdown
          options={[
            {
              itemText: 'Dropdown item text',
            },
            {
              item: 'Action',
              href: '#',
            },
            {
              item: 'Another action',
              href: '#',
            },
            {
              item: 'Something else here',
              href: '#',
            },
          ]}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Dropdown item text"
        />
      </Example>

      <Example t={tDropdownPage} hash="active" state={state} inline>
        <Dropdown
          options={[
            {
              item: 'Regular link',
              href: '#',
            },
            {
              item: 'Active link',
              active: true,
              href: '#',
            },
            {
              item: 'Another link',
              href: '#',
            },
          ]}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Dropdown"
        />
      </Example>

      <Example t={tDropdownPage} hash="disabled" state={state} inline>
        <Dropdown
          options={[
            {
              item: 'Regular link',
              href: '#',
            },
            {
              item: 'Disabled link',
              disabled: true,
              href: '#',
            },
            {
              item: 'Another link',
              href: '#',
            },
          ]}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Dropdown"
        />
      </Example>

      <Example hash="menuAlignment" t={tDropdownPage} state={state} inline>
        <Dropdown
          options={[
            {
              item: 'Action',
              as: 'button',
            },
            {
              item: 'Another action',
              as: 'button',
            },
            {
              item: 'Something else here',
              as: 'button',
            },
          ]}
          menuProps={{
            className: 'dropdown-menu-end',
          }}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Right-aligned menu example"
        />
      </Example>

      <Example hash="responsiveAlignment" t={tDropdownPage} state={state} inline>
        <Dropdown
          options={[
            {
              item: 'Action',
              as: 'button',
            },
            {
              item: 'Another action',
              as: 'button',
            },
            {
              item: 'Something else here',
              as: 'button',
            },
          ]}
          menuProps={{
            className: 'dropdown-menu-lg-end',
          }}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Left-aligned but right aligned when large screen"
          btnGroup
        />

        <Dropdown
          options={[
            {
              item: 'Action',
              as: 'button',
            },
            {
              item: 'Another action',
              as: 'button',
            },
            {
              item: 'Something else here',
              as: 'button',
            },
          ]}
          menuProps={{
            className: 'dropdown-menu-end dropdown-menu-lg-start',
          }}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Right-aligned but left aligned when large screen"
          btnGroup
        />
      </Example>

      <Example hash="alignmentOptions" t={tDropdownPage} state={state}>
        <div className="d-flex gap-2">
          <Dropdown
            options={[
              {
                item: 'Menu item',
                href: '#',
              },
              {
                item: 'Menu item',
                href: '#',
              },
              {
                item: 'Menu item',
                href: '#',
              },
            ]}
            toggleProps={{
              variant: 'secondary',
            }}
            toggle="Dropdown"
            btnGroup
          />

          <Dropdown
            options={[
              {
                item: 'Menu item',
                href: '#',
              },
              {
                item: 'Menu item',
                href: '#',
              },
              {
                item: 'Menu item',
                href: '#',
              },
            ]}
            menuProps={{
              className: 'dropdown-menu-end',
            }}
            toggleProps={{
              variant: 'secondary',
            }}
            toggle="Right-aligned menu"
            btnGroup
          />

          <Dropdown
            options={[
              {
                item: 'Menu item',
                href: '#',
              },
              {
                item: 'Menu item',
                href: '#',
              },
              {
                item: 'Menu item',
                href: '#',
              },
            ]}
            menuProps={{
              className: 'dropdown-menu-lg-end',
            }}
            toggleProps={{
              variant: 'secondary',
            }}
            toggle="Left-aligned, right-aligned lg"
            btnGroup
          />
        </div>

        <div className="d-flex gap-2">
          <Dropdown
            options={[
              {
                item: 'Menu item',
                href: '#',
              },
              {
                item: 'Menu item',
                href: '#',
              },
              {
                item: 'Menu item',
                href: '#',
              },
            ]}
            menuProps={{
              className: 'dropdown-menu-end dropdown-menu-lg-start',
            }}
            toggleProps={{
              variant: 'secondary',
            }}
            toggle="Right-aligned, left-aligned lg"
            btnGroup
          />

          <Dropdown
            options={[
              {
                item: 'Menu item',
                href: '#',
              },
              {
                item: 'Menu item',
                href: '#',
              },
              {
                item: 'Menu item',
                href: '#',
              },
            ]}
            toggleProps={{
              variant: 'secondary',
            }}
            toggle="Dropstart"
            dropstart
            btnGroup
          />

          <Dropdown
            options={[
              {
                item: 'Menu item',
                href: '#',
              },
              {
                item: 'Menu item',
                href: '#',
              },
              {
                item: 'Menu item',
                href: '#',
              },
            ]}
            toggleProps={{
              variant: 'secondary',
            }}
            toggle="Dropend"
            btnGroup
            dropend
          />

          <Dropdown
            options={[
              {
                item: 'Menu item',
                href: '#',
              },
              {
                item: 'Menu item',
                href: '#',
              },
              {
                item: 'Menu item',
                href: '#',
              },
            ]}
            toggleProps={{
              variant: 'secondary',
            }}
            toggle="Dropup"
            btnGroup
            dropup
          />
        </div>
      </Example>

      <Example t={tDropdownPage} hash="headers" state={state} inline>
        <Dropdown
          options={[
            {
              header: 'Dropdown header',
            },
            {
              item: 'Dropdown header',
              href: '#',
            },
            {
              item: 'Another action',
              href: '#',
            },
          ]}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Headers"
        />
      </Example>

      <Example t={tDropdownPage} hash="dividers" state={state} inline>
        <Dropdown
          options={[
            {
              item: 'Action',
              href: '#',
            },
            {
              item: 'Another action',
              href: '#',
            },
            {
              item: 'Something else here',
              href: '#',
            },
            {
              divider: true,
            },
            {
              item: 'Separated link',
              href: '#',
            },
          ]}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Dividers"
        />
      </Example>

      <Example t={tDropdownPage} state={state} hash="text" inline>
        <Dropdown
          menuProps={{
            className: 'p-4 text-body-secondary',
            style: { maxWidth: 200, width: 200 },
          }}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Text"
          customMenu
        >
          <p>Some example text that's free-flowing within the dropdown menu.</p>
          <p className="mb-0">And this is more example text.</p>
        </Dropdown>
      </Example>

      <Example t={tDropdownPage} state={state} hash="forms" inline>
        <Dropdown
          menuProps={{
            className: 'tw-w-[50vw]',
          }}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Forms"
          customMenu
        >
          <form className="px-4 py-3">
            <div className="mb-3">
              <label htmlFor="exampleDropdownFormEmail1" className="form-label">
                Email address
              </label>
              <input
                placeholder="email@example.com"
                id="exampleDropdownFormEmail1"
                className="form-control"
                type="email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleDropdownFormPassword1" className="form-label">
                Password
              </label>
              <input
                defaultValue="hiddenUsername"
                autoComplete="username"
                className="d-none"
                name="username"
                type="text"
              />
              <input
                id="exampleDropdownFormPassword1"
                className="form-control"
                autoComplete="password"
                placeholder="Password"
                type="password"
              />
            </div>

            <div className="mb-3">
              <div className="form-check">
                <input className="form-check-input" id="dropdownCheck" type="checkbox" />
                <label className="form-check-label" htmlFor="dropdownCheck">
                  Remember me
                </label>
              </div>
            </div>

            <button className="btn btn-primary" type="submit">
              Sign in
            </button>
          </form>

          <div className="dropdown-divider"></div>

          <a className="dropdown-item" href="#">
            New around here? Sign up
          </a>

          <a className="dropdown-item" href="#">
            Forgot password?
          </a>
        </Dropdown>

        <Dropdown
          menuProps={{
            className: 'tw-w-[20vw] p-4',
          }}
          toggleProps={{
            variant: 'primary',
          }}
          toggle="Dropdown form"
          customMenu
        >
          <form>
            <div className="mb-3">
              <label htmlFor="exampleDropdownFormEmail2" className="form-label">
                Email address
              </label>
              <input
                placeholder="email@example.com"
                id="exampleDropdownFormEmail2"
                className="form-control"
                type="email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleDropdownFormPassword2" className="form-label">
                Password
              </label>
              <input
                defaultValue="hiddenUsername"
                autoComplete="username"
                className="d-none"
                name="username"
                type="text"
              />
              <input
                id="exampleDropdownFormPassword2"
                className="form-control"
                autoComplete="password"
                placeholder="Password"
                type="password"
              />
            </div>

            <div className="mb-3">
              <div className="form-check">
                <input className="form-check-input" id="dropdownCheck2" type="checkbox" />
                <label className="form-check-label" htmlFor="dropdownCheck2">
                  Remember me
                </label>
              </div>
            </div>

            <button className="btn btn-primary" type="submit">
              Sign in
            </button>
          </form>
        </Dropdown>
      </Example>

      <Example hash="dropdownOptions" t={tDropdownPage} state={state} inline>
        <Dropdown
          options={[
            {
              item: 'Action',
              href: '#',
            },
            {
              item: 'Another action',
              href: '#',
            },
            {
              item: 'Something else here',
              href: '#',
            },
          ]}
          offset={{
            crossAxis: 20,
            mainAxis: 10,
          }}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Offset"
        />
      </Example>

      <Example hash="autoCloseBehavior" t={tDropdownPage} state={state} row>
        <Dropdown
          options={[
            {
              item: 'Menu item',
              href: '#',
            },
            {
              item: 'Menu item',
              href: '#',
            },
            {
              item: 'Menu item',
              href: '#',
            },
          ]}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Default dropdown"
          autoClose
        />

        <Dropdown
          options={[
            {
              item: 'Menu item',
              href: '#',
            },
            {
              item: 'Menu item',
              href: '#',
            },
            {
              item: 'Menu item',
              href: '#',
            },
          ]}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Clickable inside"
          autoClose="inside"
        />

        <Dropdown
          options={[
            {
              item: 'Menu item',
              href: '#',
            },
            {
              item: 'Menu item',
              href: '#',
            },
            {
              item: 'Menu item',
              href: '#',
            },
          ]}
          toggleProps={{
            variant: 'secondary',
          }}
          toggle="Manual close"
          autoClose="outside"
        />

        <Dropdown
          options={[
            {
              item: 'Menu item',
              href: '#',
            },
            {
              item: 'Menu item',
              href: '#',
            },
            {
              item: 'Menu item',
              href: '#',
            },
          ]}
          toggleProps={{
            onClick: () => {
              setVisible(!visible);
            },
            variant: 'secondary',
          }}
          toggle="Manual close"
          autoClose={false}
          visible={visible}
        />
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow value={tDropdownComponentProps('dropdown.options.id')} label="id?: string | number" />
                <OptionRow value={tDropdownComponentProps('dropdown.options.item')} label="item?: ReactNode" />
                <OptionRow value={tDropdownComponentProps('dropdown.options.itemText')} label="itemText?: ReactNode" />
                <OptionRow value={tDropdownComponentProps('dropdown.options.href')} label="href?: string" />
                <OptionRow value={tDropdownComponentProps('dropdown.options.divider')} label="divider?: boolean" />
                <OptionRow value={tDropdownComponentProps('dropdown.options.active')} label="active?: boolean" />
                <OptionRow value={tDropdownComponentProps('dropdown.options.as')} label="as?: button | a" />
                <OptionRow value={tDropdownComponentProps('dropdown.options.disabled')} label="disabled?: boolean" />
                <OptionRow value={tDropdownComponentProps('dropdown.options.header')} label="header?: ReactNode" />
              </div>
            ),
            desc: tDropdownComponentProps('dropdown.desc.options'),
            attr: 'options',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tDropdownComponentProps('dropdown.desc.toggle'),
            attr: 'toggle',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ButtonProps&lt;button | a&gt;</span>,
            desc: tDropdownComponentProps('dropdown.desc.toggleProps'),
            attr: 'toggleProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ButtonProps&lt;button | a&gt;</span>,
            desc: tDropdownComponentProps('dropdown.desc.buttonProps'),
            attr: 'buttonProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tDropdownComponentProps('dropdown.desc.split'),
            attr: 'split',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tDropdownComponentProps('dropdown.desc.btnGroup'),
            attr: 'btnGroup',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tDropdownComponentProps('dropdown.desc.center'),
            attr: 'center',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tDropdownComponentProps('dropdown.desc.dropup'),
            attr: 'dropup',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tDropdownComponentProps('dropdown.desc.dropupCenter'),
            attr: 'dropupCenter',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tDropdownComponentProps('dropdown.desc.dropend'),
            attr: 'dropend',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tDropdownComponentProps('dropdown.desc.dropstart'),
            attr: 'dropstart',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">fixed | absolute</span>,
            desc: tDropdownComponentProps('dropdown.desc.strategy'),
            default: 'absolute',
            attr: 'strategy',
          },
          {
            type: <span className="badge text-bg-secondary">DropdownMenuProps&lt;ul&gt;</span>,
            desc: tDropdownComponentProps('dropdown.desc.menuProps'),
            attr: 'menuProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tDropdownComponentProps('dropdown.desc.customMenu'),
            attr: 'customMenu',
            default: '',
          },
          {
            type: (
              <div className="d-flex gap-2">
                <div>
                  <span className="badge text-bg-secondary">number</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    <pre className="mb-0 text-start p-1">{`{
  mainAxis?: number
  crossAxis?: number
  alignmentAxis?: number | null
}`}</pre>
                  </span>
                </div>
              </div>
            ),
            desc: tDropdownComponentProps('dropdown.desc.offset'),
            attr: 'offset',
            default: '',
          },
          {
            type: (
              <div className="d-flex gap-2">
                <span className="badge text-bg-secondary">boolean</span>
                <span className="badge text-bg-secondary">inside | outside</span>
              </div>
            ),
            desc: tDropdownComponentProps('dropdown.desc.autoClose'),
            attr: 'autoClose',
            default: 'true',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tDropdownComponentProps('dropdown.desc.visible'),
            attr: 'visible',
            default: '',
          },
        ]}
        hash="dropdownComponentProps"
        t={tDropdownComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
