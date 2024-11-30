import type { ButtonProps } from '@lib/button';

import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import OptionRow from '@components/option-row.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Dropdown } from '@lib/dropdown';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

type Type = 'danger' | 'info' | 'primary' | 'secondary' | 'success' | 'warning';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/dropdown/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
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
      <Example hash="basic" inline state={state} t={tDropdownPage}>
        <Dropdown
          options={[
            {
              href: '#',
              item: 'Action',
            },
            {
              href: '#',
              item: 'Another action',
            },
            {
              href: '#',
              item: 'Something else here',
            },
          ]}
          toggle="Dropdown button"
          toggleProps={{
            variant: 'secondary',
          }}
        />

        <Dropdown
          options={[
            {
              href: '#',
              item: 'Action',
            },
            {
              href: '#',
              item: 'Another action',
            },
            {
              href: '#',
              item: 'Something else here',
            },
          ]}
          toggle="Dropdown button"
          toggleProps={
            {
              as: 'a',
              href: '#',
              variant: 'secondary',
            } as ButtonProps<'a'>
          }
        />

        <div className="d-inline-flex flex-wrap gap-2">
          {(['primary', 'secondary', 'success', 'info', 'warning', 'danger'] as Type[]).map((type) => {
            return (
              <Dropdown
                btnGroup
                key={type}
                options={[
                  {
                    href: '#',
                    item: 'Action',
                  },
                  {
                    href: '#',
                    item: 'Another action',
                  },
                  {
                    href: '#',
                    item: 'Something else here',
                  },
                  {
                    divider: true,
                  },
                  {
                    href: '#',
                    item: 'Separated link',
                  },
                ]}
                toggle={capitalizeFirstLetter(type)}
                toggleProps={{
                  variant: type,
                }}
              />
            );
          })}
        </div>
      </Example>

      <Example hash="splitButton" inline state={state} t={tDropdownPage}>
        <div className="d-flex flex-wrap gap-2">
          {(['primary', 'secondary', 'success', 'info', 'warning', 'danger'] as Type[]).map((type) => {
            return (
              <Dropdown
                buttonProps={{
                  variant: type,
                }}
                key={type}
                options={[
                  {
                    href: '#',
                    item: 'Action',
                  },
                  {
                    href: '#',
                    item: 'Another action',
                  },
                  {
                    href: '#',
                    item: 'Something else here',
                  },
                  {
                    divider: true,
                  },
                  {
                    href: '#',
                    item: 'Separated link',
                  },
                ]}
                split
                toggle={capitalizeFirstLetter(type)}
                toggleProps={{
                  variant: type,
                }}
              />
            );
          })}
        </div>
      </Example>

      <Example hash="sizing" inline state={state} t={tDropdownPage}>
        <div className="d-flex flex-wrap gap-2">
          <Dropdown
            btnGroup
            options={[
              {
                href: '#',
                item: 'Action',
              },
              {
                href: '#',
                item: 'Another action',
              },
              {
                href: '#',
                item: 'Something else here',
              },
              {
                divider: true,
              },
              {
                href: '#',
                item: 'Separated link',
              },
            ]}
            toggle="Large button"
            toggleProps={{
              className: 'btn-lg',
              variant: 'secondary',
            }}
          />

          <Dropdown
            buttonProps={{
              className: 'btn-lg',
              variant: 'secondary',
            }}
            options={[
              {
                href: '#',
                item: 'Action',
              },
              {
                href: '#',
                item: 'Another action',
              },
              {
                href: '#',
                item: 'Something else here',
              },
              {
                divider: true,
              },
              {
                href: '#',
                item: 'Separated link',
              },
            ]}
            split
            toggle="Large split button"
            toggleProps={{
              className: 'btn-lg',
              variant: 'secondary',
            }}
          />
        </div>

        <div className="d-flex flex-wrap gap-2">
          <Dropdown
            btnGroup
            options={[
              {
                href: '#',
                item: 'Action',
              },
              {
                href: '#',
                item: 'Another action',
              },
              {
                href: '#',
                item: 'Something else here',
              },
              {
                divider: true,
              },
              {
                href: '#',
                item: 'Separated link',
              },
            ]}
            toggle="Small button"
            toggleProps={{
              className: 'btn-sm',
              variant: 'secondary',
            }}
          />

          <Dropdown
            buttonProps={{
              className: 'btn-sm',
              variant: 'secondary',
            }}
            options={[
              {
                href: '#',
                item: 'Action',
              },
              {
                href: '#',
                item: 'Another action',
              },
              {
                href: '#',
                item: 'Something else here',
              },
              {
                divider: true,
              },
              {
                href: '#',
                item: 'Separated link',
              },
            ]}
            split
            toggle="Small split button"
            toggleProps={{
              className: 'btn-sm',
              variant: 'secondary',
            }}
          />
        </div>
      </Example>

      <Example hash="darkDropdowns" state={state} t={tDropdownPage}>
        <Dropdown
          data-bs-theme="dark"
          options={[
            {
              active: true,
              href: '#',
              item: 'Action',
            },
            {
              href: '#',
              item: 'Another action',
            },
            {
              href: '#',
              item: 'Something else here',
            },
            {
              divider: true,
            },
            {
              href: '#',
              item: 'Separated link',
            },
          ]}
          toggle="Dropdown button"
          toggleProps={{
            variant: 'secondary',
          }}
        />

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              aria-controls="navbarNavDarkDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-bs-target="#navbarNavDarkDropdown"
              data-bs-toggle="collapse"
              type="button"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul className="navbar-nav">
                <Dropdown
                  as="li"
                  className="nav-item"
                  data-bs-theme="dark"
                  options={[
                    {
                      href: '#',
                      item: 'Action',
                    },
                    {
                      href: '#',
                      item: 'Another action',
                    },
                    {
                      href: '#',
                      item: 'Something else here',
                    },
                  ]}
                  toggle="Dropdown button"
                  toggleProps={{
                    variant: 'dark',
                  }}
                />
              </ul>
            </div>
          </div>
        </nav>
      </Example>

      <Example hash="centered" state={state} t={tDropdownPage}>
        <Dropdown
          center
          options={[
            {
              href: '#',
              item: 'Action',
            },
            {
              href: '#',
              item: 'Action two',
            },
            {
              href: '#',
              item: 'Action three',
            },
          ]}
          toggle="Centered dropdown"
          toggleProps={{
            variant: 'secondary',
          }}
        />
      </Example>

      <Example hash="dropup" row state={state} t={tDropdownPage}>
        <Dropdown
          dropup
          options={[
            {
              href: '#',
              item: 'Action',
            },
            {
              href: '#',
              item: 'Another action',
            },
            {
              href: '#',
              item: 'Something else here',
            },
            {
              divider: true,
            },
            {
              href: '#',
              item: 'Separated link',
            },
          ]}
          toggle="Dropup"
          toggleProps={{
            variant: 'secondary',
          }}
        />

        <Dropdown
          buttonProps={{
            variant: 'secondary',
          }}
          dropup
          options={[
            {
              href: '#',
              item: 'Action',
            },
            {
              href: '#',
              item: 'Another action',
            },
            {
              href: '#',
              item: 'Something else here',
            },
            {
              divider: true,
            },
            {
              href: '#',
              item: 'Separated link',
            },
          ]}
          split
          toggle="Split dropup"
          toggleProps={{
            variant: 'secondary',
          }}
        />
      </Example>

      <Example hash="dropupCentered" state={state} t={tDropdownPage}>
        <Dropdown
          dropup
          dropupCenter
          options={[
            {
              href: '#',
              item: 'Action',
            },
            {
              href: '#',
              item: 'Another action',
            },
            {
              href: '#',
              item: 'Something else here',
            },
            {
              divider: true,
            },
            {
              href: '#',
              item: 'Separated link',
            },
          ]}
          toggle="Centered dropup"
          toggleProps={{
            variant: 'secondary',
          }}
        />
      </Example>

      <Example hash="dropend" row state={state} t={tDropdownPage}>
        <Dropdown
          btnGroup
          dropend
          options={[
            {
              href: '#',
              item: 'Action',
            },
            {
              href: '#',
              item: 'Another action',
            },
            {
              href: '#',
              item: 'Something else here',
            },
            {
              divider: true,
            },
            {
              href: '#',
              item: 'Separated link',
            },
          ]}
          toggle="Dropend"
          toggleProps={{
            variant: 'secondary',
          }}
        />

        <Dropdown
          btnGroup
          buttonProps={{
            variant: 'secondary',
          }}
          dropend
          options={[
            {
              href: '#',
              item: 'Action',
            },
            {
              href: '#',
              item: 'Another action',
            },
            {
              href: '#',
              item: 'Something else here',
            },
            {
              divider: true,
            },
            {
              href: '#',
              item: 'Separated link',
            },
          ]}
          split
          toggle="Split dropend"
          toggleProps={{
            variant: 'secondary',
          }}
        />
      </Example>

      <Example hash="dropstart" row state={state} t={tDropdownPage}>
        <Dropdown
          btnGroup
          dropstart
          options={[
            {
              href: '#',
              item: 'Action',
            },
            {
              href: '#',
              item: 'Another action',
            },
            {
              href: '#',
              item: 'Something else here',
            },
            {
              divider: true,
            },
            {
              href: '#',
              item: 'Separated link',
            },
          ]}
          strategy="fixed"
          toggle="Dropstart"
          toggleProps={{
            variant: 'secondary',
          }}
        />

        <Dropdown
          btnGroup
          buttonProps={{
            variant: 'secondary',
          }}
          dropstart
          options={[
            {
              href: '#',
              item: 'Action',
            },
            {
              href: '#',
              item: 'Another action',
            },
            {
              href: '#',
              item: 'Something else here',
            },
            {
              divider: true,
            },
            {
              href: '#',
              item: 'Separated link',
            },
          ]}
          split
          strategy="fixed"
          toggle="Split dropend"
          toggleProps={{
            variant: 'secondary',
          }}
        />
      </Example>

      <Example hash="menuItems" inline state={state} t={tDropdownPage}>
        <Dropdown
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
          toggle="Dropdown"
          toggleProps={{
            variant: 'secondary',
          }}
        />

        <Dropdown
          options={[
            {
              itemText: 'Dropdown item text',
            },
            {
              href: '#',
              item: 'Action',
            },
            {
              href: '#',
              item: 'Another action',
            },
            {
              href: '#',
              item: 'Something else here',
            },
          ]}
          toggle="Dropdown item text"
          toggleProps={{
            variant: 'secondary',
          }}
        />
      </Example>

      <Example hash="active" inline state={state} t={tDropdownPage}>
        <Dropdown
          options={[
            {
              href: '#',
              item: 'Regular link',
            },
            {
              active: true,
              href: '#',
              item: 'Active link',
            },
            {
              href: '#',
              item: 'Another link',
            },
          ]}
          toggle="Dropdown"
          toggleProps={{
            variant: 'secondary',
          }}
        />
      </Example>

      <Example hash="disabled" inline state={state} t={tDropdownPage}>
        <Dropdown
          options={[
            {
              href: '#',
              item: 'Regular link',
            },
            {
              disabled: true,
              href: '#',
              item: 'Disabled link',
            },
            {
              href: '#',
              item: 'Another link',
            },
          ]}
          toggle="Dropdown"
          toggleProps={{
            variant: 'secondary',
          }}
        />
      </Example>

      <Example hash="menuAlignment" inline state={state} t={tDropdownPage}>
        <Dropdown
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
          toggle="Right-aligned menu example"
          toggleProps={{
            variant: 'secondary',
          }}
        />
      </Example>

      <Example hash="responsiveAlignment" inline state={state} t={tDropdownPage}>
        <Dropdown
          btnGroup
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
          toggle="Left-aligned but right aligned when large screen"
          toggleProps={{
            variant: 'secondary',
          }}
        />

        <Dropdown
          btnGroup
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
          toggle="Right-aligned but left aligned when large screen"
          toggleProps={{
            variant: 'secondary',
          }}
        />
      </Example>

      <Example hash="alignmentOptions" state={state} t={tDropdownPage}>
        <div className="d-flex gap-2">
          <Dropdown
            btnGroup
            options={[
              {
                href: '#',
                item: 'Menu item',
              },
              {
                href: '#',
                item: 'Menu item',
              },
              {
                href: '#',
                item: 'Menu item',
              },
            ]}
            toggle="Dropdown"
            toggleProps={{
              variant: 'secondary',
            }}
          />

          <Dropdown
            btnGroup
            menuProps={{
              className: 'dropdown-menu-end',
            }}
            options={[
              {
                href: '#',
                item: 'Menu item',
              },
              {
                href: '#',
                item: 'Menu item',
              },
              {
                href: '#',
                item: 'Menu item',
              },
            ]}
            toggle="Right-aligned menu"
            toggleProps={{
              variant: 'secondary',
            }}
          />

          <Dropdown
            btnGroup
            menuProps={{
              className: 'dropdown-menu-lg-end',
            }}
            options={[
              {
                href: '#',
                item: 'Menu item',
              },
              {
                href: '#',
                item: 'Menu item',
              },
              {
                href: '#',
                item: 'Menu item',
              },
            ]}
            toggle="Left-aligned, right-aligned lg"
            toggleProps={{
              variant: 'secondary',
            }}
          />
        </div>

        <div className="d-flex gap-2">
          <Dropdown
            btnGroup
            menuProps={{
              className: 'dropdown-menu-end dropdown-menu-lg-start',
            }}
            options={[
              {
                href: '#',
                item: 'Menu item',
              },
              {
                href: '#',
                item: 'Menu item',
              },
              {
                href: '#',
                item: 'Menu item',
              },
            ]}
            toggle="Right-aligned, left-aligned lg"
            toggleProps={{
              variant: 'secondary',
            }}
          />

          <Dropdown
            btnGroup
            dropstart
            options={[
              {
                href: '#',
                item: 'Menu item',
              },
              {
                href: '#',
                item: 'Menu item',
              },
              {
                href: '#',
                item: 'Menu item',
              },
            ]}
            toggle="Dropstart"
            toggleProps={{
              variant: 'secondary',
            }}
          />

          <Dropdown
            btnGroup
            dropend
            options={[
              {
                href: '#',
                item: 'Menu item',
              },
              {
                href: '#',
                item: 'Menu item',
              },
              {
                href: '#',
                item: 'Menu item',
              },
            ]}
            toggle="Dropend"
            toggleProps={{
              variant: 'secondary',
            }}
          />

          <Dropdown
            btnGroup
            dropup
            options={[
              {
                href: '#',
                item: 'Menu item',
              },
              {
                href: '#',
                item: 'Menu item',
              },
              {
                href: '#',
                item: 'Menu item',
              },
            ]}
            toggle="Dropup"
            toggleProps={{
              variant: 'secondary',
            }}
          />
        </div>
      </Example>

      <Example hash="headers" inline state={state} t={tDropdownPage}>
        <Dropdown
          options={[
            {
              header: 'Dropdown header',
            },
            {
              href: '#',
              item: 'Dropdown header',
            },
            {
              href: '#',
              item: 'Another action',
            },
          ]}
          toggle="Headers"
          toggleProps={{
            variant: 'secondary',
          }}
        />
      </Example>

      <Example hash="dividers" inline state={state} t={tDropdownPage}>
        <Dropdown
          options={[
            {
              href: '#',
              item: 'Action',
            },
            {
              href: '#',
              item: 'Another action',
            },
            {
              href: '#',
              item: 'Something else here',
            },
            {
              divider: true,
            },
            {
              href: '#',
              item: 'Separated link',
            },
          ]}
          toggle="Dividers"
          toggleProps={{
            variant: 'secondary',
          }}
        />
      </Example>

      <Example hash="text" inline state={state} t={tDropdownPage}>
        <Dropdown
          customMenu
          menuProps={{
            className: 'p-4 text-body-secondary',
            style: { maxWidth: 200, width: 200 },
          }}
          toggle="Text"
          toggleProps={{
            variant: 'secondary',
          }}
        >
          <p>Some example text that's free-flowing within the dropdown menu.</p>
          <p className="mb-0">And this is more example text.</p>
        </Dropdown>
      </Example>

      <Example hash="forms" inline state={state} t={tDropdownPage}>
        <Dropdown
          customMenu
          menuProps={{
            className: 'tw-w-[50vw]',
          }}
          toggle="Forms"
          toggleProps={{
            variant: 'secondary',
          }}
        >
          <form className="px-4 py-3">
            <div className="mb-3">
              <label className="form-label" htmlFor="exampleDropdownFormEmail1">
                Email address
              </label>
              <input
                className="form-control"
                id="exampleDropdownFormEmail1"
                placeholder="email@example.com"
                type="email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="exampleDropdownFormPassword1">
                Password
              </label>
              <input
                autoComplete="username"
                className="d-none"
                defaultValue="hiddenUsername"
                name="username"
                type="text"
              />
              <input
                autoComplete="password"
                className="form-control"
                id="exampleDropdownFormPassword1"
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
          customMenu
          menuProps={{
            className: 'tw-w-[20vw] p-4',
          }}
          toggle="Dropdown form"
          toggleProps={{
            variant: 'primary',
          }}
        >
          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="exampleDropdownFormEmail2">
                Email address
              </label>
              <input
                className="form-control"
                id="exampleDropdownFormEmail2"
                placeholder="email@example.com"
                type="email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="exampleDropdownFormPassword2">
                Password
              </label>
              <input
                autoComplete="username"
                className="d-none"
                defaultValue="hiddenUsername"
                name="username"
                type="text"
              />
              <input
                autoComplete="password"
                className="form-control"
                id="exampleDropdownFormPassword2"
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

      <Example hash="dropdownOptions" inline state={state} t={tDropdownPage}>
        <Dropdown
          offset={{
            crossAxis: 20,
            mainAxis: 10,
          }}
          options={[
            {
              href: '#',
              item: 'Action',
            },
            {
              href: '#',
              item: 'Another action',
            },
            {
              href: '#',
              item: 'Something else here',
            },
          ]}
          toggle="Offset"
          toggleProps={{
            variant: 'secondary',
          }}
        />
      </Example>

      <Example hash="autoCloseBehavior" row state={state} t={tDropdownPage}>
        <Dropdown
          autoClose
          options={[
            {
              href: '#',
              item: 'Menu item',
            },
            {
              href: '#',
              item: 'Menu item',
            },
            {
              href: '#',
              item: 'Menu item',
            },
          ]}
          toggle="Default dropdown"
          toggleProps={{
            variant: 'secondary',
          }}
        />

        <Dropdown
          autoClose="inside"
          options={[
            {
              href: '#',
              item: 'Menu item',
            },
            {
              href: '#',
              item: 'Menu item',
            },
            {
              href: '#',
              item: 'Menu item',
            },
          ]}
          toggle="Clickable inside"
          toggleProps={{
            variant: 'secondary',
          }}
        />

        <Dropdown
          autoClose="outside"
          options={[
            {
              href: '#',
              item: 'Menu item',
            },
            {
              href: '#',
              item: 'Menu item',
            },
            {
              href: '#',
              item: 'Menu item',
            },
          ]}
          toggle="Manual close"
          toggleProps={{
            variant: 'secondary',
          }}
        />

        <Dropdown
          autoClose={false}
          options={[
            {
              href: '#',
              item: 'Menu item',
            },
            {
              href: '#',
              item: 'Menu item',
            },
            {
              href: '#',
              item: 'Menu item',
            },
          ]}
          toggle="Manual close"
          toggleProps={{
            onClick: () => {
              setVisible(!visible);
            },
            variant: 'secondary',
          }}
          visible={visible}
        />
      </Example>

      <PropsIndicator />

      <Example
        hash="dropdownComponentProps"
        items={[
          {
            attr: 'options',
            default: '',
            desc: tDropdownComponentProps('dropdown.desc.options'),
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
          },
          {
            attr: 'toggle',
            default: '',
            desc: tDropdownComponentProps('dropdown.desc.toggle'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'toggleProps',
            default: '',
            desc: tDropdownComponentProps('dropdown.desc.toggleProps'),
            type: <span className="badge text-bg-secondary">ButtonProps&lt;button | a&gt;</span>,
          },
          {
            attr: 'buttonProps',
            default: '',
            desc: tDropdownComponentProps('dropdown.desc.buttonProps'),
            type: <span className="badge text-bg-secondary">ButtonProps&lt;button | a&gt;</span>,
          },
          {
            attr: 'split',
            default: '',
            desc: tDropdownComponentProps('dropdown.desc.split'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'btnGroup',
            default: '',
            desc: tDropdownComponentProps('dropdown.desc.btnGroup'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'center',
            default: '',
            desc: tDropdownComponentProps('dropdown.desc.center'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'dropup',
            default: '',
            desc: tDropdownComponentProps('dropdown.desc.dropup'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'dropupCenter',
            default: '',
            desc: tDropdownComponentProps('dropdown.desc.dropupCenter'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'dropend',
            default: '',
            desc: tDropdownComponentProps('dropdown.desc.dropend'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'dropstart',
            default: '',
            desc: tDropdownComponentProps('dropdown.desc.dropstart'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'strategy',
            default: 'absolute',
            desc: tDropdownComponentProps('dropdown.desc.strategy'),
            type: <span className="badge text-bg-secondary">fixed | absolute</span>,
          },
          {
            attr: 'menuProps',
            default: '',
            desc: tDropdownComponentProps('dropdown.desc.menuProps'),
            type: <span className="badge text-bg-secondary">DropdownMenuProps&lt;ul&gt;</span>,
          },
          {
            attr: 'customMenu',
            default: '',
            desc: tDropdownComponentProps('dropdown.desc.customMenu'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'offset',
            default: '',
            desc: tDropdownComponentProps('dropdown.desc.offset'),
            type: (
              <div className="d-flex flex-column">
                <div>
                  <span className="badge text-bg-secondary">number</span>
                </div>
                <div>
                  <span className="badge text-bg-secondary">
                    {`{mainAxis?: number, crossAxis?: number, alignmentAxis?: number}`}
                  </span>
                </div>
              </div>
            ),
          },
          {
            attr: 'autoClose',
            default: 'true',
            desc: tDropdownComponentProps('dropdown.desc.autoClose'),
            type: (
              <div className="d-flex gap-2">
                <span className="badge text-bg-secondary">boolean</span>
                <span className="badge text-bg-secondary">inside | outside</span>
              </div>
            ),
          },
          {
            attr: 'visible',
            default: '',
            desc: tDropdownComponentProps('dropdown.desc.visible'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
        ]}
        props
        state={state}
        t={tDropdownComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
