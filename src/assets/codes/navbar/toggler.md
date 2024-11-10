```jsx
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
```
