```jsx
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
```
