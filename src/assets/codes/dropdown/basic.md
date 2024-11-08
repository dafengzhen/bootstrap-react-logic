```tsx
<Dropdown
  toggle="Dropdown button"
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
  ]}
/>

<Dropdown
  toggle="Dropdown button"
  toggleProps={
    {
      as: 'a',
      href: '#',
      variant: 'secondary',
    } as ButtonProps<'a'>
  }
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

{(['primary', 'secondary', 'success', 'info', 'warning', 'danger'] as Type[]).map((type) => {
  return (
    <Dropdown
      key={type}
      btnGroup
      toggle={capitalizeFirstLetter(type)}
      toggleProps={{
        variant: type,
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
  );
})}
```
