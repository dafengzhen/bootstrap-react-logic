```jsx
<Nav
  as="nav"
  className="flex-sm-row"
  options={[
    {
      active: true,
      href: '#',
      link: 'Active',
      linkProps: {
        className: 'flex-sm-fill text-sm-center',
      },
    },
    {
      href: '#',
      link: 'Longer nav link',
      linkProps: {
        className: 'flex-sm-fill text-sm-center',
      },
    },
    {
      href: '#',
      link: 'Link',
      linkProps: {
        className: 'flex-sm-fill text-sm-center',
      },
    },
    {
      disabled: true,
      href: '#',
      link: 'Disabled',
      linkProps: {
        className: 'flex-sm-fill text-sm-center',
      },
    },
  ]}
  pills
  skipItem
  vertical
/>
```
