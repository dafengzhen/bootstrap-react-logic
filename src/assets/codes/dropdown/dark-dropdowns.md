```jsx
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
```
