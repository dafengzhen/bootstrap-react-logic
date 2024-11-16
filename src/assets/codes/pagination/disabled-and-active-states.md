```jsx
<Pagination
  navProps={{
    'aria-label': 'Page navigation example',
  }}
  options={[
    {
      disabled: true,
      href: '#',
      link: 'Previous',
    },
    {
      href: '#',
      link: '1',
    },
    {
      href: '#',
      link: '2',
    },
    {
      href: '#',
      link: '3',
    },
    {
      href: '#',
      link: 'Next',
    },
  ]}
/>

<Pagination
  navProps={{
    'aria-label': 'Page navigation example',
  }}
  options={[
    {
      disabled: true,
      href: '#',
      link: 'Previous',
    },
    {
      href: '#',
      link: '1',
    },
    {
      active: true,
      href: '#',
      link: '2',
    },
    {
      href: '#',
      link: '3',
    },
    {
      href: '#',
      link: 'Next',
    },
  ]}
/>
```
