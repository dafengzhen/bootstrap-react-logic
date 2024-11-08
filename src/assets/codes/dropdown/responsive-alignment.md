```jsx
<Dropdown
  btnGroup
  toggle="Left-aligned but right aligned when large screen"
  toggleProps={{
    variant: 'secondary',
  }}
  menuProps={{
    className: 'dropdown-menu-lg-end',
  }}
  options={[
    {
      as: 'button',
      item: 'Action',
    },
    {
      as: 'button',
      item: 'Another action',
    },
    {
      as: 'button',
      item: 'Something else here',
    },
  ]}
/>

<Dropdown
  btnGroup
  toggle="Right-aligned but left aligned when large screen"
  toggleProps={{
    variant: 'secondary',
  }}
  menuProps={{
    className: 'dropdown-menu-end dropdown-menu-lg-start',
  }}
  options={[
    {
      as: 'button',
      item: 'Action',
    },
    {
      as: 'button',
      item: 'Another action',
    },
    {
      as: 'button',
      item: 'Something else here',
    },
  ]}
/>
```
