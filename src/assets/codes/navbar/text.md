```jsx
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
```
