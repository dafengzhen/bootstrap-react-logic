```jsx
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
```
