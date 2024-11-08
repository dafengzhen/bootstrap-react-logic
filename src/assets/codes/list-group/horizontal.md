```jsx
<ListGroup
  horizontal
  options={[
    {
      item: 'An item',
    },
    {
      item: 'A second item',
    },
    {
      item: 'A third item',
    },
  ]}
/>;

{
  ['sm', 'md', 'lg', 'xl', 'xxl'].map((name) => {
    return (
      <ListGroup
        key={name}
        horizontal={name}
        options={[
          {
            item: 'An item',
          },
          {
            item: 'A second item',
          },
          {
            item: 'A third item',
          },
        ]}
      />
    );
  });
}
```
