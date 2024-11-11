import bootstrapLogo from '@assets/images/bootstrap-logo.svg';
import About from '@components/about.tsx';
import Example from '@components/example.tsx';
import OptionRow from '@components/option-row.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { Navbar } from '@lib/navbar';
import { transformCodeObj } from '@src/tools';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-router-dom';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/navbar/*.md', '../assets/codes/common/*.md'], {
    eager: true,
    import: 'default',
    query: '?raw',
  }),
);

export default function NavbarPage() {
  const navigation = useNavigation();
  const { t: tNavbarComponentProps } = useTranslation(['navbarComponentProps']);
  const { t: tNavbarPage } = useTranslation(['navbarPage']);
  const state = useState(codes);

  const [show, setShow] = useState(false);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tNavbarPage}>
        <Navbar
          brand="Navbar"
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          collapse={
            <form className="d-flex" role="search">
              <input aria-label="Search" className="form-control me-2" placeholder="Search" type="search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          }
          expand="lg"
          navProps={{
            className: 'me-auto mb-2 mb-lg-0',
          }}
          options={[
            {
              active: true,
              href: '#',
              link: 'Home',
            },
            {
              href: '#',
              link: 'Link',
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
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              ),
              itemProps: {
                className: 'dropdown',
              },
              link: 'Dropdown',
              linkProps: {
                'aria-disabled': 'true',
                className: 'dropdown-toggle',
                role: 'button',
              },
            },
            {
              disabled: true,
              link: 'Disabled',
            },
          ]}
          toggler
        />
      </Example>

      <Example hash="brand" state={state} t={tNavbarPage}>
        <Navbar
          brand="Navbar"
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
        />

        <Navbar
          brand="Navbar"
          brandProps={{
            className: 'mb-0 h1',
            href: '#',
          }}
          className="bg-body-tertiary"
        />
      </Example>

      <Example hash="image" state={state} t={tNavbarPage}>
        <Navbar
          brand={<img alt="Bootstrap" height="24" src={bootstrapLogo} width="30" />}
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
        />
      </Example>

      <Example hash="imageAndText" state={state} t={tNavbarPage}>
        <Navbar
          brand={
            <>
              <img alt="Logo" className="d-inline-block align-text-top" height="24" src={bootstrapLogo} width="30" />
              {' Bootstrap '}
            </>
          }
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
        />
      </Example>

      <Example hash="nav" state={state} t={tNavbarPage}>
        <Navbar
          brand="Navbar"
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          expand="lg"
          options={[
            {
              active: true,
              href: '#',
              link: 'Home',
            },
            {
              href: '#',
              link: 'Features',
            },
            {
              href: '#',
              link: 'Pricing',
            },
            {
              disabled: true,
              href: '#',
              link: 'Disabled',
            },
          ]}
          toggler
        />

        <Navbar
          brand="Navbar"
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          expand="lg"
          navProps={{
            as: 'div',
          }}
          options={[
            {
              active: true,
              href: '#',
              link: 'Home',
            },
            {
              href: '#',
              link: 'Features',
            },
            {
              href: '#',
              link: 'Pricing',
            },
            {
              disabled: true,
              href: '#',
              link: 'Disabled',
            },
          ]}
          skipItem
          toggler
        />

        <Navbar
          brand="Navbar"
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          expand="lg"
          options={[
            {
              active: true,
              href: '#',
              link: 'Home',
            },
            {
              href: '#',
              link: 'Features',
            },
            {
              href: '#',
              link: 'Pricing',
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
                </ul>
              ),
              itemProps: {
                className: 'dropdown',
              },
              link: 'Dropdown link',
              linkProps: {
                className: 'dropdown-toggle',
                role: 'button',
              },
            },
          ]}
          toggler
        />
      </Example>

      <Example hash="forms" state={state} t={tNavbarPage}>
        <Navbar
          className="bg-body-tertiary"
          container={
            <form className="d-flex" role="search">
              <input aria-label="Search" className="form-control me-2" placeholder="Search" type="search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          }
        />

        <Navbar
          className="bg-body-tertiary"
          container={
            <>
              <a className="navbar-brand">Navbar</a>
              <form className="d-flex" role="search">
                <input aria-label="Search" className="form-control me-2" placeholder="Search" type="search" />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </>
          }
        />

        <Navbar
          className="bg-body-tertiary"
          container={
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                aria-describedby="basic-addon1"
                aria-label="Username"
                className="form-control"
                placeholder="Username"
                type="text"
              />
            </div>
          }
          containerProps={{
            as: 'form',
          }}
        />

        <Navbar
          className="bg-body-tertiary"
          container={
            <>
              <button className="btn btn-outline-success me-2" type="button">
                Main button
              </button>
              <button className="btn btn-sm btn-outline-secondary" type="button">
                Smaller button
              </button>
            </>
          }
          containerProps={{
            as: 'form',
            className: 'justify-content-start',
          }}
        />
      </Example>

      <Example hash="text" state={state} t={tNavbarPage}>
        <Navbar
          className="bg-body-tertiary"
          container={<span className="navbar-text">Navbar text with an inline element</span>}
        />

        <Navbar
          brand="Navbar w/ text"
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          expand="lg"
          navProps={{
            className: 'me-auto mb-2 mb-lg-0',
          }}
          options={[
            {
              active: true,
              href: '#',
              link: 'Home',
            },
            {
              href: '#',
              link: 'Features',
            },
            {
              href: '#',
              link: 'Pricing',
            },
          ]}
          text="Navbar text with an inline element"
          toggler
        />
      </Example>

      <Example hash="colorSchemes" state={state} t={tNavbarPage}>
        <Navbar
          brand="Navbar"
          brandProps={{
            href: '#',
          }}
          className="bg-dark border-bottom border-body"
          collapse={
            <form className="d-flex" role="search">
              <input aria-label="Search" className="form-control me-2" placeholder="Search" type="search" />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          }
          data-bs-theme="dark"
          expand="lg"
          navProps={{
            className: 'me-auto mb-2 mb-lg-0',
          }}
          options={[
            {
              active: true,
              href: '#',
              link: 'Home',
            },
            {
              href: '#',
              link: 'Features',
            },
            {
              href: '#',
              link: 'Pricing',
            },
            {
              href: '#',
              link: 'About',
            },
          ]}
          toggler
        />

        <Navbar
          brand="Navbar"
          brandProps={{
            href: '#',
          }}
          className="bg-primary"
          collapse={
            <form className="d-flex" role="search">
              <input aria-label="Search" className="form-control me-2" placeholder="Search" type="search" />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          }
          data-bs-theme="dark"
          expand="lg"
          navProps={{
            className: 'me-auto mb-2 mb-lg-0',
          }}
          options={[
            {
              active: true,
              href: '#',
              link: 'Home',
            },
            {
              href: '#',
              link: 'Features',
            },
            {
              href: '#',
              link: 'Pricing',
            },
            {
              href: '#',
              link: 'About',
            },
          ]}
          toggler
        />

        <Navbar
          brand="Navbar"
          brandProps={{
            href: '#',
          }}
          collapse={
            <form className="d-flex" role="search">
              <input aria-label="Search" className="form-control me-2" placeholder="Search" type="search" />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          }
          data-bs-theme="light"
          expand="lg"
          navProps={{
            className: 'me-auto mb-2 mb-lg-0',
          }}
          options={[
            {
              active: true,
              href: '#',
              link: 'Home',
            },
            {
              href: '#',
              link: 'Features',
            },
            {
              href: '#',
              link: 'Pricing',
            },
            {
              href: '#',
              link: 'About',
            },
          ]}
          style={{
            backgroundColor: '#e3f2fd',
          }}
          toggler
        />
      </Example>

      <Example hash="containers" state={state} t={tNavbarPage}>
        <div className="container">
          <Navbar
            brand="Navbar"
            brandProps={{
              href: '#',
            }}
            className="bg-body-tertiary"
            expand="lg"
          />
        </div>

        <Navbar
          brand="Navbar"
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          containerProps={{
            className: 'container-md',
          }}
          expand="lg"
        />
      </Example>

      <Example hash="placement" state={state} t={tNavbarPage}>
        <Navbar
          brand="Default"
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
        />

        <Navbar
          brand="Fixed top"
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
        />

        <Navbar
          brand="Fixed bottom"
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
        />

        <Navbar
          brand="Sticky top"
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
        />

        <Navbar
          brand="Sticky bottom"
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
        />
      </Example>

      <Example hash="scrolling" state={state} t={tNavbarPage}>
        <Navbar
          brand="Navbar scroll"
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          collapse={
            <form className="d-flex" role="search">
              <input aria-label="Search" className="form-control me-2" placeholder="Search" type="search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          }
          expand="lg"
          navProps={{
            className: 'me-auto mb-2 mb-lg-0',
          }}
          options={[
            {
              active: true,
              href: '#',
              link: 'Home',
            },
            {
              href: '#',
              link: 'Link',
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
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              ),
              itemProps: {
                className: 'dropdown',
              },
              link: 'Link',
              linkProps: {
                className: 'dropdown-toggle',
                role: 'button',
              },
            },
            {
              disabled: true,
              link: 'Link',
            },
          ]}
          scroll
          toggler
        />
      </Example>

      <Example hash="toggler" state={state} t={tNavbarPage}>
        <Navbar
          brand="Hidden brand"
          brandPosition="hidden"
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          collapse={
            <form className="d-flex" role="search">
              <input aria-label="Search" className="form-control me-2" placeholder="Search" type="search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          }
          expand="lg"
          navProps={{
            className: 'me-auto mb-2 mb-lg-0',
          }}
          options={[
            {
              active: true,
              href: '#',
              link: 'Home',
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
          toggler
        />

        <Navbar
          brand="Navbar"
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          collapse={
            <form className="d-flex" role="search">
              <input aria-label="Search" className="form-control me-2" placeholder="Search" type="search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          }
          expand="lg"
          navProps={{
            className: 'me-auto mb-2 mb-lg-0',
          }}
          options={[
            {
              active: true,
              href: '#',
              link: 'Home',
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
          toggler
        />

        <Navbar
          brand="Navbar"
          brandPosition="right"
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          collapse={
            <form className="d-flex" role="search">
              <input aria-label="Search" className="form-control me-2" placeholder="Search" type="search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          }
          expand="lg"
          navProps={{
            className: 'me-auto mb-2 mb-lg-0',
          }}
          options={[
            {
              active: true,
              href: '#',
              link: 'Home',
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
          toggler
        />
      </Example>

      <Example hash="externalContent" state={state} t={tNavbarPage}>
        <Navbar
          className="navbar-dark bg-dark"
          externalContent={
            <div className={`collapse ${show ? 'show' : ''}`} data-bs-theme="dark" id="navbarToggleExternalContent">
              <div className="bg-dark p-4">
                <h5 className="text-body-emphasis h4">Collapsed content</h5>
                <span className="text-body-secondary">Toggleable via the navbar brand.</span>
              </div>
            </div>
          }
          toggler
          togglerProps={{
            onClick: () => setShow(!show),
          }}
        />
      </Example>

      <Example hash="offcanvas" state={state} t={tNavbarPage}>
        <Navbar
          brand="Offcanvas navbar"
          className="navbar-dark bg-dark"
          container={
            <div
              aria-labelledby="offcanvasDarkNavbarLabel"
              className="offcanvas offcanvas-end text-bg-dark"
              id="offcanvasDarkNavbar"
              tabIndex={-1}
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  Dark offcanvas
                </h5>
                <button
                  aria-label="Close"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  type="button"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a aria-current="page" className="nav-link active" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      aria-expanded="false"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                    >
                      Dropdown
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
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
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form className="d-flex mt-3" role="search">
                  <input aria-label="Search" className="form-control me-2" placeholder="Search" type="search" />
                  <button className="btn btn-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          }
          toggler
        />
      </Example>

      <PropsIndicator />

      <Example
        hash="navbarComponentProps"
        items={[
          {
            attr: 'brand',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.brand'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'brandPosition',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.brandPosition'),
            type: <span className="badge text-bg-secondary">hidden | left | right</span>,
          },
          {
            attr: 'brandProps',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.brandProps'),
            type: <span className="badge text-bg-secondary">NavbarBrandProps&lt;a&gt;</span>,
          },
          {
            attr: 'collapse',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.collapse'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'collapseProps',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.collapseProps'),
            type: <span className="badge text-bg-secondary">NavbarCollapseProps&lt;div&gt;</span>,
          },
          {
            attr: 'container',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.container'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'containerProps',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.containerProps'),
            type: <span className="badge text-bg-secondary">NavbarContainerProps&lt;div&gt;</span>,
          },
          {
            attr: 'expand',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.expand'),
            type: <span className="badge text-bg-secondary">lg | md | sm | xl | xxl | boolean</span>,
          },
          {
            attr: 'externalContent',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.externalContent'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'fixed',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.fixed'),
            type: <span className="badge text-bg-secondary">bottom | top</span>,
          },
          {
            attr: 'nav',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.nav'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'navProps',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.nav'),
            type: <span className="badge text-bg-secondary">NavbarNavProps&lt;nav&gt;</span>,
          },
          {
            attr: 'options',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.options'),
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow label="active?: boolean" value={tNavbarComponentProps('navbar.options.active')} />
                <OptionRow label="disabled?: boolean" value={tNavbarComponentProps('navbar.options.disabled')} />
                <OptionRow label="href?: string" value={tNavbarComponentProps('navbar.options.href')} />
                <OptionRow label="id?: number | string" value={tNavbarComponentProps('navbar.options.id')} />
                <OptionRow label="item?: ReactNode" value={tNavbarComponentProps('navbar.options.item')} />
                <OptionRow
                  label="itemProps?: NavbarNavItemProps<li>"
                  value={tNavbarComponentProps('navbar.options.itemProps')}
                />
                <OptionRow label="link?: ReactNode" value={tNavbarComponentProps('navbar.options.link')} />
                <OptionRow
                  label="linkProps?: NavbarNavLinkProps<a>"
                  value={tNavbarComponentProps('navbar.options.linkProps')}
                />
              </div>
            ),
          },
          {
            attr: 'scroll',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.scroll'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'skipItem',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.skipItem'),
            type: <span className="badge text-bg-secondary">boolean</span>,
          },
          {
            attr: 'sticky',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.sticky'),
            type: <span className="badge text-bg-secondary">bottom | top</span>,
          },
          {
            attr: 'text',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.text'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'textProps',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.textProps'),
            type: <span className="badge text-bg-secondary">NavbarTextProps&lt;span&gt;</span>,
          },
          {
            attr: 'toggler',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.toggler'),
            type: <span className="badge text-bg-secondary">ReactNode</span>,
          },
          {
            attr: 'togglerIconProps',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.togglerIconProps'),
            type: <span className="badge text-bg-secondary">NavbarTogglerIconProps&lt;span&gt;</span>,
          },
          {
            attr: 'togglerProps',
            default: '',
            desc: tNavbarComponentProps('navbar.desc.togglerProps'),
            type: <span className="badge text-bg-secondary">NavbarTogglerProps&lt;button&gt;</span>,
          },
        ]}
        props
        state={state}
        t={tNavbarComponentProps}
      />

      <Example hash="commonComponentProps" props state={state} />

      <About />
    </div>
  );
}
