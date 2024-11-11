```jsx
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
```
