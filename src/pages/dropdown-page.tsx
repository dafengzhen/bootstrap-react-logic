import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import { Dropdown } from '@lib/dropdown';
import type { ButtonProps } from '@lib/button';
import OptionRow from '@components/option-row.tsx';

type Type = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/dropdown/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    query: '?raw',
    import: 'default',
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
      <Example hash="basic" state={state} t={tDropdownPage} inline>
        <Dropdown
          toggle="Dropdown button"
          toggleProps={{
            variant: 'secondary',
          }}
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
        />

        <Dropdown
          toggle="Dropdown button"
          toggleProps={
            {
              as: 'a',
              href: '#',
              variant: 'secondary',
            } as ButtonProps<'a'>
          }
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
        />

        <div className="d-inline-flex flex-wrap gap-2">
          {(['primary', 'secondary', 'success', 'info', 'warning', 'danger'] as Type[]).map((type) => {
            return (
              <Dropdown
                key={type}
                btnGroup
                toggle={capitalizeFirstLetter(type)}
                toggleProps={{
                  variant: type,
                }}
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
              />
            );
          })}
        </div>
      </Example>

      <Example hash="splitButton" state={state} t={tDropdownPage} inline>
        <div className="d-flex flex-wrap gap-2">
          {(['primary', 'secondary', 'success', 'info', 'warning', 'danger'] as Type[]).map((type) => {
            return (
              <Dropdown
                key={type}
                split
                toggle={capitalizeFirstLetter(type)}
                buttonProps={{
                  variant: type,
                }}
                toggleProps={{
                  variant: type,
                }}
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
              />
            );
          })}
        </div>
      </Example>

      <Example hash="sizing" state={state} t={tDropdownPage} inline>
        <div className="d-flex flex-wrap gap-2">
          <Dropdown
            btnGroup
            toggle="Large button"
            toggleProps={{
              className: 'btn-lg',
              variant: 'secondary',
            }}
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
          />

          <Dropdown
            split
            toggle="Large split button"
            buttonProps={{
              className: 'btn-lg',
              variant: 'secondary',
            }}
            toggleProps={{
              className: 'btn-lg',
              variant: 'secondary',
            }}
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
          />
        </div>

        <div className="d-flex flex-wrap gap-2">
          <Dropdown
            btnGroup
            toggle="Small button"
            toggleProps={{
              className: 'btn-sm',
              variant: 'secondary',
            }}
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
          />

          <Dropdown
            split
            toggle="Small split button"
            buttonProps={{
              className: 'btn-sm',
              variant: 'secondary',
            }}
            toggleProps={{
              className: 'btn-sm',
              variant: 'secondary',
            }}
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
          />
        </div>
      </Example>

      <Example hash="darkDropdowns" state={state} t={tDropdownPage}>
        <Dropdown
          data-bs-theme="dark"
          toggle="Dropdown button"
          toggleProps={{
            variant: 'secondary',
          }}
          options={[
            {
              item: 'Action',
              href: '#',
              active: true,
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
        />

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDarkDropdown"
              aria-controls="navbarNavDarkDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul className="navbar-nav">
                <Dropdown
                  as="li"
                  className="nav-item"
                  data-bs-theme="dark"
                  toggle="Dropdown button"
                  toggleProps={{
                    variant: 'dark',
                  }}
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
                />
              </ul>
            </div>
          </div>
        </nav>
      </Example>

      <Example hash="centered" state={state} t={tDropdownPage}>
        <Dropdown
          center
          toggle="Centered dropdown"
          toggleProps={{
            variant: 'secondary',
          }}
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
        />
      </Example>

      <Example hash="dropup" state={state} t={tDropdownPage} row>
        <Dropdown
          dropup
          toggle="Dropup"
          toggleProps={{
            variant: 'secondary',
          }}
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
        />

        <Dropdown
          dropup
          split
          toggle="Split dropup"
          buttonProps={{
            variant: 'secondary',
          }}
          toggleProps={{
            variant: 'secondary',
          }}
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
        />
      </Example>

      <Example hash="dropupCentered" state={state} t={tDropdownPage}>
        <Dropdown
          dropupCenter
          dropup
          toggle="Centered dropup"
          toggleProps={{
            variant: 'secondary',
          }}
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
        />
      </Example>

      <Example hash="dropend" state={state} t={tDropdownPage} row>
        <Dropdown
          dropend
          btnGroup
          toggle="Dropend"
          toggleProps={{
            variant: 'secondary',
          }}
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
        />

        <Dropdown
          dropend
          btnGroup
          split
          toggle="Split dropend"
          buttonProps={{
            variant: 'secondary',
          }}
          toggleProps={{
            variant: 'secondary',
          }}
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
        />
      </Example>

      <Example hash="dropstart" state={state} t={tDropdownPage} row>
        <Dropdown
          dropstart
          btnGroup
          strategy="fixed"
          toggle="Dropstart"
          toggleProps={{
            variant: 'secondary',
          }}
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
        />

        <Dropdown
          dropstart
          btnGroup
          split
          strategy="fixed"
          toggle="Split dropend"
          buttonProps={{
            variant: 'secondary',
          }}
          toggleProps={{
            variant: 'secondary',
          }}
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
        />
      </Example>

      <Example hash="menuItems" state={state} t={tDropdownPage} inline>
        <Dropdown
          toggle="Dropdown"
          toggleProps={{
            variant: 'secondary',
          }}
          options={[
            {
              as: 'button',
              item: 'Action',
            },
            {
              as: 'button',
              item: 'Another action',
            },
            {
              as: 'button',
              item: 'Something else here',
            },
          ]}
        />

        <Dropdown
          toggle="Dropdown item text"
          toggleProps={{
            variant: 'secondary',
          }}
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
        />
      </Example>

      <Example hash="active" state={state} t={tDropdownPage} inline>
        <Dropdown
          toggle="Dropdown"
          toggleProps={{
            variant: 'secondary',
          }}
          options={[
            {
              item: 'Regular link',
              href: '#',
            },
            {
              item: 'Active link',
              href: '#',
              active: true,
            },
            {
              item: 'Another link',
              href: '#',
            },
          ]}
        />
      </Example>

      <Example hash="disabled" state={state} t={tDropdownPage} inline>
        <Dropdown
          toggle="Dropdown"
          toggleProps={{
            variant: 'secondary',
          }}
          options={[
            {
              item: 'Regular link',
              href: '#',
            },
            {
              item: 'Disabled link',
              href: '#',
              disabled: true,
            },
            {
              item: 'Another link',
              href: '#',
            },
          ]}
        />
      </Example>

      <Example hash="menuAlignment" state={state} t={tDropdownPage} inline>
        <Dropdown
          toggle="Right-aligned menu example"
          toggleProps={{
            variant: 'secondary',
          }}
          menuProps={{
            className: 'dropdown-menu-end',
          }}
          options={[
            {
              as: 'button',
              item: 'Action',
            },
            {
              as: 'button',
              item: 'Another action',
            },
            {
              as: 'button',
              item: 'Something else here',
            },
          ]}
        />
      </Example>

      <Example hash="responsiveAlignment" state={state} t={tDropdownPage} inline>
        <Dropdown
          btnGroup
          toggle="Left-aligned but right aligned when large screen"
          toggleProps={{
            variant: 'secondary',
          }}
          menuProps={{
            className: 'dropdown-menu-lg-end',
          }}
          options={[
            {
              as: 'button',
              item: 'Action',
            },
            {
              as: 'button',
              item: 'Another action',
            },
            {
              as: 'button',
              item: 'Something else here',
            },
          ]}
        />

        <Dropdown
          btnGroup
          toggle="Right-aligned but left aligned when large screen"
          toggleProps={{
            variant: 'secondary',
          }}
          menuProps={{
            className: 'dropdown-menu-end dropdown-menu-lg-start',
          }}
          options={[
            {
              as: 'button',
              item: 'Action',
            },
            {
              as: 'button',
              item: 'Another action',
            },
            {
              as: 'button',
              item: 'Something else here',
            },
          ]}
        />
      </Example>

      <Example hash="alignmentOptions" state={state} t={tDropdownPage}>
        <div className="d-flex gap-2">
          <Dropdown
            btnGroup
            toggle="Dropdown"
            toggleProps={{
              variant: 'secondary',
            }}
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
          />

          <Dropdown
            btnGroup
            toggle="Right-aligned menu"
            toggleProps={{
              variant: 'secondary',
            }}
            menuProps={{
              className: 'dropdown-menu-end',
            }}
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
          />

          <Dropdown
            btnGroup
            toggle="Left-aligned, right-aligned lg"
            toggleProps={{
              variant: 'secondary',
            }}
            menuProps={{
              className: 'dropdown-menu-lg-end',
            }}
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
          />
        </div>

        <div className="d-flex gap-2">
          <Dropdown
            btnGroup
            toggle="Right-aligned, left-aligned lg"
            toggleProps={{
              variant: 'secondary',
            }}
            menuProps={{
              className: 'dropdown-menu-end dropdown-menu-lg-start',
            }}
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
          />

          <Dropdown
            dropstart
            btnGroup
            toggle="Dropstart"
            toggleProps={{
              variant: 'secondary',
            }}
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
          />

          <Dropdown
            dropend
            btnGroup
            toggle="Dropend"
            toggleProps={{
              variant: 'secondary',
            }}
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
          />

          <Dropdown
            dropup
            btnGroup
            toggle="Dropup"
            toggleProps={{
              variant: 'secondary',
            }}
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
          />
        </div>
      </Example>

      <Example hash="headers" state={state} t={tDropdownPage} inline>
        <Dropdown
          toggle="Headers"
          toggleProps={{
            variant: 'secondary',
          }}
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
        />
      </Example>

      <Example hash="dividers" state={state} t={tDropdownPage} inline>
        <Dropdown
          toggle="Dividers"
          toggleProps={{
            variant: 'secondary',
          }}
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
        />
      </Example>

      <Example hash="text" state={state} t={tDropdownPage} inline>
        <Dropdown
          toggle="Text"
          customMenu
          menuProps={{
            className: 'p-4 text-body-secondary',
            style: { width: 200, maxWidth: 200 },
          }}
          toggleProps={{
            variant: 'secondary',
          }}
        >
          <p>Some example text that's free-flowing within the dropdown menu.</p>
          <p className="mb-0">And this is more example text.</p>
        </Dropdown>
      </Example>

      <Example hash="forms" state={state} t={tDropdownPage} inline>
        <Dropdown
          toggle="Forms"
          customMenu
          menuProps={{
            className: 'tw-w-[50vw]',
          }}
          toggleProps={{
            variant: 'secondary',
          }}
        >
          <form className="px-4 py-3">
            <div className="mb-3">
              <label htmlFor="exampleDropdownFormEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleDropdownFormEmail1"
                placeholder="email@example.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleDropdownFormPassword1" className="form-label">
                Password
              </label>
              <input
                type="text"
                name="username"
                autoComplete="username"
                defaultValue="hiddenUsername"
                className="d-none"
              />
              <input
                type="password"
                className="form-control"
                id="exampleDropdownFormPassword1"
                placeholder="Password"
                autoComplete="password"
              />
            </div>

            <div className="mb-3">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                <label className="form-check-label" htmlFor="dropdownCheck">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
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
          toggle="Dropdown form"
          customMenu
          menuProps={{
            className: 'tw-w-[20vw] p-4',
          }}
          toggleProps={{
            variant: 'primary',
          }}
        >
          <form>
            <div className="mb-3">
              <label htmlFor="exampleDropdownFormEmail2" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleDropdownFormEmail2"
                placeholder="email@example.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleDropdownFormPassword2" className="form-label">
                Password
              </label>
              <input
                type="text"
                name="username"
                autoComplete="username"
                defaultValue="hiddenUsername"
                className="d-none"
              />
              <input
                type="password"
                className="form-control"
                id="exampleDropdownFormPassword2"
                placeholder="Password"
                autoComplete="password"
              />
            </div>

            <div className="mb-3">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                <label className="form-check-label" htmlFor="dropdownCheck2">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </Dropdown>
      </Example>

      <Example hash="dropdownOptions" state={state} t={tDropdownPage} inline>
        <Dropdown
          offset={{
            mainAxis: 10,
            crossAxis: 20,
          }}
          toggle="Offset"
          toggleProps={{
            variant: 'secondary',
          }}
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
        />
      </Example>

      <Example hash="autoCloseBehavior" state={state} t={tDropdownPage} row>
        <Dropdown
          autoClose
          toggle="Default dropdown"
          toggleProps={{
            variant: 'secondary',
          }}
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
        />

        <Dropdown
          autoClose="inside"
          toggle="Clickable inside"
          toggleProps={{
            variant: 'secondary',
          }}
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
        />

        <Dropdown
          autoClose="outside"
          toggle="Manual close"
          toggleProps={{
            variant: 'secondary',
          }}
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
        />

        <Dropdown
          visible={visible}
          autoClose={false}
          toggle="Manual close"
          toggleProps={{
            variant: 'secondary',
            onClick: () => {
              setVisible(!visible);
            },
          }}
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
        />
      </Example>

      <PropsIndicator />

      <Example
        props
        hash="dropdownComponentProps"
        state={state}
        t={tDropdownComponentProps}
        items={[
          {
            attr: 'options',
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="id?: string | number" value={tDropdownComponentProps('dropdown.options.id')} />
                <OptionRow label="item?: ReactNode" value={tDropdownComponentProps('dropdown.options.item')} />
                <OptionRow label="itemText?: ReactNode" value={tDropdownComponentProps('dropdown.options.itemText')} />
                <OptionRow label="href?: string" value={tDropdownComponentProps('dropdown.options.href')} />
                <OptionRow label="divider?: boolean" value={tDropdownComponentProps('dropdown.options.divider')} />
                <OptionRow label="active?: boolean" value={tDropdownComponentProps('dropdown.options.active')} />
                <OptionRow label="as?: button | a" value={tDropdownComponentProps('dropdown.options.as')} />
                <OptionRow label="disabled?: boolean" value={tDropdownComponentProps('dropdown.options.disabled')} />
                <OptionRow label="header?: ReactNode" value={tDropdownComponentProps('dropdown.options.header')} />
              </div>
            ),
            desc: tDropdownComponentProps('dropdown.desc.options'),
            default: '',
          },
          {
            attr: 'toggle',
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tDropdownComponentProps('dropdown.desc.toggle'),
            default: '',
          },
          {
            attr: 'toggleProps',
            type: <span className="badge text-bg-secondary">ButtonProps&lt;button | a&gt;</span>,
            desc: tDropdownComponentProps('dropdown.desc.toggleProps'),
            default: '',
          },
          {
            attr: 'buttonProps',
            type: <span className="badge text-bg-secondary">ButtonProps&lt;button | a&gt;</span>,
            desc: tDropdownComponentProps('dropdown.desc.buttonProps'),
            default: '',
          },
          {
            attr: 'split',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tDropdownComponentProps('dropdown.desc.split'),
            default: '',
          },
          {
            attr: 'btnGroup',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tDropdownComponentProps('dropdown.desc.btnGroup'),
            default: '',
          },
          {
            attr: 'center',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tDropdownComponentProps('dropdown.desc.center'),
            default: '',
          },
          {
            attr: 'dropup',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tDropdownComponentProps('dropdown.desc.dropup'),
            default: '',
          },
          {
            attr: 'dropupCenter',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tDropdownComponentProps('dropdown.desc.dropupCenter'),
            default: '',
          },
          {
            attr: 'dropend',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tDropdownComponentProps('dropdown.desc.dropend'),
            default: '',
          },
          {
            attr: 'dropstart',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tDropdownComponentProps('dropdown.desc.dropstart'),
            default: '',
          },
          {
            attr: 'strategy',
            type: <span className="badge text-bg-secondary">fixed | absolute</span>,
            desc: tDropdownComponentProps('dropdown.desc.strategy'),
            default: 'absolute',
          },
          {
            attr: 'menuProps',
            type: <span className="badge text-bg-secondary">DropdownMenuProps&lt;ul&gt;</span>,
            desc: tDropdownComponentProps('dropdown.desc.menuProps'),
            default: '',
          },
          {
            attr: 'customMenu',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tDropdownComponentProps('dropdown.desc.customMenu'),
            default: '',
          },
          {
            attr: 'offset',
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
            default: '',
          },
          {
            attr: 'autoClose',
            type: (
              <div className="d-flex gap-2">
                <span className="badge text-bg-secondary">boolean</span>
                <span className="badge text-bg-secondary">inside | outside</span>
              </div>
            ),
            desc: tDropdownComponentProps('dropdown.desc.autoClose'),
            default: 'true',
          },
          {
            attr: 'visible',
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tDropdownComponentProps('dropdown.desc.visible'),
            default: '',
          },
        ]}
      />

      <Example props hash="commonComponentProps" state={state} />

      <About />
    </div>
  );
}
