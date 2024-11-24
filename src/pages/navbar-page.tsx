import bootstrapLogo from '@assets/images/bootstrap-logo.svg';
import PropsIndicator from '@components/props-indicator.tsx';
import OptionRow from '@components/option-row.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { Navbar } from '@lib/navbar';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob(['../assets/codes/navbar/*.md', '../assets/codes/common/*.md'], {
    import: 'default',
    query: '?raw',
    eager: true,
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
      <Example t={tNavbarPage} state={state} hash="basic">
        <Navbar
          options={[
            {
              active: true,
              link: 'Home',
              href: '#',
            },
            {
              link: 'Link',
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
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              ),
              linkProps: {
                className: 'dropdown-toggle',
                'aria-disabled': 'true',
                role: 'button',
              },
              itemProps: {
                className: 'dropdown',
              },
              link: 'Dropdown',
              href: '#',
            },
            {
              link: 'Disabled',
              disabled: true,
            },
          ]}
          collapse={
            <form className="d-flex" role="search">
              <input className="form-control me-2" placeholder="Search" aria-label="Search" type="search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          }
          navProps={{
            className: 'me-auto mb-2 mb-lg-0',
          }}
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          brand="Navbar"
          expand="lg"
          toggler
        />
      </Example>

      <Example t={tNavbarPage} state={state} hash="brand">
        <Navbar
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          brand="Navbar"
        />

        <Navbar
          brandProps={{
            className: 'mb-0 h1',
            href: '#',
          }}
          className="bg-body-tertiary"
          brand="Navbar"
        />
      </Example>

      <Example t={tNavbarPage} state={state} hash="image">
        <Navbar
          brand={<img src={bootstrapLogo} alt="Bootstrap" height="24" width="30" />}
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
        />
      </Example>

      <Example hash="imageAndText" t={tNavbarPage} state={state}>
        <Navbar
          brand={
            <>
              <img className="d-inline-block align-text-top" src={bootstrapLogo} height="24" alt="Logo" width="30" />
              {' Bootstrap '}
            </>
          }
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
        />
      </Example>

      <Example t={tNavbarPage} state={state} hash="nav">
        <Navbar
          options={[
            {
              active: true,
              link: 'Home',
              href: '#',
            },
            {
              link: 'Features',
              href: '#',
            },
            {
              link: 'Pricing',
              href: '#',
            },
            {
              link: 'Disabled',
              disabled: true,
              href: '#',
            },
          ]}
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          brand="Navbar"
          expand="lg"
          toggler
        />

        <Navbar
          options={[
            {
              active: true,
              link: 'Home',
              href: '#',
            },
            {
              link: 'Features',
              href: '#',
            },
            {
              link: 'Pricing',
              href: '#',
            },
            {
              link: 'Disabled',
              disabled: true,
              href: '#',
            },
          ]}
          brandProps={{
            href: '#',
          }}
          navProps={{
            as: 'div',
          }}
          className="bg-body-tertiary"
          brand="Navbar"
          expand="lg"
          skipItem
          toggler
        />

        <Navbar
          options={[
            {
              active: true,
              link: 'Home',
              href: '#',
            },
            {
              link: 'Features',
              href: '#',
            },
            {
              link: 'Pricing',
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
                </ul>
              ),
              linkProps: {
                className: 'dropdown-toggle',
                role: 'button',
              },
              itemProps: {
                className: 'dropdown',
              },
              link: 'Dropdown link',
              href: '#',
            },
          ]}
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          brand="Navbar"
          expand="lg"
          toggler
        />
      </Example>

      <Example t={tNavbarPage} state={state} hash="forms">
        <Navbar
          container={
            <form className="d-flex" role="search">
              <input className="form-control me-2" placeholder="Search" aria-label="Search" type="search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          }
          className="bg-body-tertiary"
        />

        <Navbar
          container={
            <>
              <a className="navbar-brand">Navbar</a>
              <form className="d-flex" role="search">
                <input className="form-control me-2" placeholder="Search" aria-label="Search" type="search" />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </>
          }
          className="bg-body-tertiary"
        />

        <Navbar
          container={
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                aria-describedby="basic-addon1"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                type="text"
              />
            </div>
          }
          containerProps={{
            as: 'form',
          }}
          className="bg-body-tertiary"
        />

        <Navbar
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
            className: 'justify-content-start',
            as: 'form',
          }}
          className="bg-body-tertiary"
        />
      </Example>

      <Example t={tNavbarPage} state={state} hash="text">
        <Navbar
          container={<span className="navbar-text">Navbar text with an inline element</span>}
          className="bg-body-tertiary"
        />

        <Navbar
          options={[
            {
              active: true,
              link: 'Home',
              href: '#',
            },
            {
              link: 'Features',
              href: '#',
            },
            {
              link: 'Pricing',
              href: '#',
            },
          ]}
          navProps={{
            className: 'me-auto mb-2 mb-lg-0',
          }}
          brandProps={{
            href: '#',
          }}
          text="Navbar text with an inline element"
          className="bg-body-tertiary"
          brand="Navbar w/ text"
          expand="lg"
          toggler
        />
      </Example>

      <Example hash="colorSchemes" t={tNavbarPage} state={state}>
        <Navbar
          options={[
            {
              active: true,
              link: 'Home',
              href: '#',
            },
            {
              link: 'Features',
              href: '#',
            },
            {
              link: 'Pricing',
              href: '#',
            },
            {
              link: 'About',
              href: '#',
            },
          ]}
          collapse={
            <form className="d-flex" role="search">
              <input className="form-control me-2" placeholder="Search" aria-label="Search" type="search" />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          }
          navProps={{
            className: 'me-auto mb-2 mb-lg-0',
          }}
          brandProps={{
            href: '#',
          }}
          className="bg-dark border-bottom border-body"
          data-bs-theme="dark"
          brand="Navbar"
          expand="lg"
          toggler
        />

        <Navbar
          options={[
            {
              active: true,
              link: 'Home',
              href: '#',
            },
            {
              link: 'Features',
              href: '#',
            },
            {
              link: 'Pricing',
              href: '#',
            },
            {
              link: 'About',
              href: '#',
            },
          ]}
          collapse={
            <form className="d-flex" role="search">
              <input className="form-control me-2" placeholder="Search" aria-label="Search" type="search" />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          }
          navProps={{
            className: 'me-auto mb-2 mb-lg-0',
          }}
          brandProps={{
            href: '#',
          }}
          className="bg-primary"
          data-bs-theme="dark"
          brand="Navbar"
          expand="lg"
          toggler
        />

        <Navbar
          options={[
            {
              active: true,
              link: 'Home',
              href: '#',
            },
            {
              link: 'Features',
              href: '#',
            },
            {
              link: 'Pricing',
              href: '#',
            },
            {
              link: 'About',
              href: '#',
            },
          ]}
          collapse={
            <form className="d-flex" role="search">
              <input className="form-control me-2" placeholder="Search" aria-label="Search" type="search" />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          }
          navProps={{
            className: 'me-auto mb-2 mb-lg-0',
          }}
          style={{
            backgroundColor: '#e3f2fd',
          }}
          brandProps={{
            href: '#',
          }}
          data-bs-theme="light"
          brand="Navbar"
          expand="lg"
          toggler
        />
      </Example>

      <Example hash="containers" t={tNavbarPage} state={state}>
        <div className="container">
          <Navbar
            brandProps={{
              href: '#',
            }}
            className="bg-body-tertiary"
            brand="Navbar"
            expand="lg"
          />
        </div>

        <Navbar
          containerProps={{
            className: 'container-md',
          }}
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          brand="Navbar"
          expand="lg"
        />
      </Example>

      <Example hash="placement" t={tNavbarPage} state={state}>
        <Navbar
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          brand="Default"
        />

        <Navbar
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          brand="Fixed top"
        />

        <Navbar
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          brand="Fixed bottom"
        />

        <Navbar
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          brand="Sticky top"
        />

        <Navbar
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          brand="Sticky bottom"
        />
      </Example>

      <Example hash="scrolling" t={tNavbarPage} state={state}>
        <Navbar
          options={[
            {
              active: true,
              link: 'Home',
              href: '#',
            },
            {
              link: 'Link',
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
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              ),
              linkProps: {
                className: 'dropdown-toggle',
                role: 'button',
              },
              itemProps: {
                className: 'dropdown',
              },
              link: 'Link',
              href: '#',
            },
            {
              disabled: true,
              link: 'Link',
            },
          ]}
          collapse={
            <form className="d-flex" role="search">
              <input className="form-control me-2" placeholder="Search" aria-label="Search" type="search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          }
          navProps={{
            className: 'me-auto mb-2 mb-lg-0',
          }}
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          brand="Navbar scroll"
          expand="lg"
          toggler
          scroll
        />
      </Example>

      <Example t={tNavbarPage} hash="toggler" state={state}>
        <Navbar
          options={[
            {
              active: true,
              link: 'Home',
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
          collapse={
            <form className="d-flex" role="search">
              <input className="form-control me-2" placeholder="Search" aria-label="Search" type="search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          }
          navProps={{
            className: 'me-auto mb-2 mb-lg-0',
          }}
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          brandPosition="hidden"
          brand="Hidden brand"
          expand="lg"
          toggler
        />

        <Navbar
          options={[
            {
              active: true,
              link: 'Home',
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
          collapse={
            <form className="d-flex" role="search">
              <input className="form-control me-2" placeholder="Search" aria-label="Search" type="search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          }
          navProps={{
            className: 'me-auto mb-2 mb-lg-0',
          }}
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          brand="Navbar"
          expand="lg"
          toggler
        />

        <Navbar
          options={[
            {
              active: true,
              link: 'Home',
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
          collapse={
            <form className="d-flex" role="search">
              <input className="form-control me-2" placeholder="Search" aria-label="Search" type="search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          }
          navProps={{
            className: 'me-auto mb-2 mb-lg-0',
          }}
          brandProps={{
            href: '#',
          }}
          className="bg-body-tertiary"
          brandPosition="right"
          brand="Navbar"
          expand="lg"
          toggler
        />
      </Example>

      <Example hash="externalContent" t={tNavbarPage} state={state}>
        <Navbar
          externalContent={
            <div className={`collapse ${show ? 'show' : ''}`} id="navbarToggleExternalContent" data-bs-theme="dark">
              <div className="bg-dark p-4">
                <h5 className="text-body-emphasis h4">Collapsed content</h5>
                <span className="text-body-secondary">Toggleable via the navbar brand.</span>
              </div>
            </div>
          }
          togglerProps={{
            onClick: () => setShow(!show),
          }}
          className="navbar-dark bg-dark"
          toggler
        />
      </Example>

      <Example hash="offcanvas" t={tNavbarPage} state={state}>
        <Navbar
          container={
            <div
              className="offcanvas offcanvas-end text-bg-dark"
              aria-labelledby="offcanvasDarkNavbarLabel"
              id="offcanvasDarkNavbar"
              tabIndex={-1}
            >
              <div className="offcanvas-header">
                <h5 id="offcanvasDarkNavbarLabel" className="offcanvas-title">
                  Dark offcanvas
                </h5>
                <button
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  type="button"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
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
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      role="button"
                      href="#"
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
                  <input className="form-control me-2" placeholder="Search" aria-label="Search" type="search" />
                  <button className="btn btn-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          }
          className="navbar-dark bg-dark"
          brand="Offcanvas navbar"
          toggler
        />
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tNavbarComponentProps('navbar.desc.brand'),
            attr: 'brand',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">hidden | left | right</span>,
            desc: tNavbarComponentProps('navbar.desc.brandPosition'),
            attr: 'brandPosition',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">NavbarBrandProps&lt;a&gt;</span>,
            desc: tNavbarComponentProps('navbar.desc.brandProps'),
            attr: 'brandProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tNavbarComponentProps('navbar.desc.collapse'),
            attr: 'collapse',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">NavbarCollapseProps&lt;div&gt;</span>,
            desc: tNavbarComponentProps('navbar.desc.collapseProps'),
            attr: 'collapseProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tNavbarComponentProps('navbar.desc.container'),
            attr: 'container',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">NavbarContainerProps&lt;div&gt;</span>,
            desc: tNavbarComponentProps('navbar.desc.containerProps'),
            attr: 'containerProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">lg | md | sm | xl | xxl | boolean</span>,
            desc: tNavbarComponentProps('navbar.desc.expand'),
            attr: 'expand',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tNavbarComponentProps('navbar.desc.externalContent'),
            attr: 'externalContent',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">bottom | top</span>,
            desc: tNavbarComponentProps('navbar.desc.fixed'),
            attr: 'fixed',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tNavbarComponentProps('navbar.desc.nav'),
            attr: 'nav',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">NavbarNavProps&lt;nav&gt;</span>,
            desc: tNavbarComponentProps('navbar.desc.nav'),
            attr: 'navProps',
            default: '',
          },
          {
            type: (
              <div className="d-flex flex-column gap-1">
                <OptionRow value={tNavbarComponentProps('navbar.options.active')} label="active?: boolean" />
                <OptionRow value={tNavbarComponentProps('navbar.options.disabled')} label="disabled?: boolean" />
                <OptionRow value={tNavbarComponentProps('navbar.options.href')} label="href?: string" />
                <OptionRow value={tNavbarComponentProps('navbar.options.id')} label="id?: number | string" />
                <OptionRow value={tNavbarComponentProps('navbar.options.item')} label="item?: ReactNode" />
                <OptionRow
                  value={tNavbarComponentProps('navbar.options.itemProps')}
                  label="itemProps?: NavbarNavItemProps<li>"
                />
                <OptionRow value={tNavbarComponentProps('navbar.options.link')} label="link?: ReactNode" />
                <OptionRow
                  value={tNavbarComponentProps('navbar.options.linkProps')}
                  label="linkProps?: NavbarNavLinkProps<a>"
                />
              </div>
            ),
            desc: tNavbarComponentProps('navbar.desc.options'),
            attr: 'options',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tNavbarComponentProps('navbar.desc.scroll'),
            attr: 'scroll',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tNavbarComponentProps('navbar.desc.skipItem'),
            attr: 'skipItem',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">bottom | top</span>,
            desc: tNavbarComponentProps('navbar.desc.sticky'),
            attr: 'sticky',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tNavbarComponentProps('navbar.desc.text'),
            attr: 'text',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">NavbarTextProps&lt;span&gt;</span>,
            desc: tNavbarComponentProps('navbar.desc.textProps'),
            attr: 'textProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">ReactNode</span>,
            desc: tNavbarComponentProps('navbar.desc.toggler'),
            attr: 'toggler',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">NavbarTogglerIconProps&lt;span&gt;</span>,
            desc: tNavbarComponentProps('navbar.desc.togglerIconProps'),
            attr: 'togglerIconProps',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">NavbarTogglerProps&lt;button&gt;</span>,
            desc: tNavbarComponentProps('navbar.desc.togglerProps'),
            attr: 'togglerProps',
            default: '',
          },
        ]}
        hash="navbarComponentProps"
        t={tNavbarComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
