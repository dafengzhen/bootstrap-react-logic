```jsx
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
```
