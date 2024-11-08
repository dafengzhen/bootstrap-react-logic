```jsx
<Dropdown
  toggle="Dropdown"
  toggleProps={{
    variant: 'secondary',
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
  toggle="Dropdown item text"
  toggleProps={{
    variant: 'secondary',
  }}
  options={[
    {
      itemText: 'Dropdown item text',
    },
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
```
