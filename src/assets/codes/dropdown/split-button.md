```tsx
{
  (['primary', 'secondary', 'success', 'info', 'warning', 'danger'] as Type[]).map((type) => {
    return (
      <Dropdown
        key={type}
        split
        toggle={capitalizeFirstLetter(type)}
        buttonProps={{
          variant: type,
        }}
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
  });
}
```
