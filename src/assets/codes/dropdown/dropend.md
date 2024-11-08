```jsx
<Dropdown
  dropend
  btnGroup
  toggle="Dropend"
  toggleProps={{
    variant: 'secondary',
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
    {
      divider: true,
    },
    {
      item: 'Separated link',
      href: '#',
    },
  ]}
/>

<Dropdown
  dropend
  btnGroup
  split
  toggle="Split dropend"
  buttonProps={{
    variant: 'secondary',
  }}
  toggleProps={{
    variant: 'secondary',
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
    {
      divider: true,
    },
    {
      item: 'Separated link',
      href: '#',
    },
  ]}
/>
```
