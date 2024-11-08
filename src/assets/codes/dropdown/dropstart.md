```jsx
<Dropdown
  dropstart
  btnGroup
  strategy="fixed"
  toggle="Dropstart"
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
  dropstart
  btnGroup
  split
  strategy="fixed"
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
