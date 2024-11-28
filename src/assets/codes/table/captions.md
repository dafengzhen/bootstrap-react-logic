```jsx
<Table
  body={[
    {
      scope: 'row',
      values: ['1', 'Mark', 'Otto', '@mdo'],
    },
    {
      scope: 'row',
      values: ['2', 'Jacob', 'Thornton', '@fat'],
    },
    {
      scope: 'row',
      values: ['3', 'Larry', 'the Bird', '@twitter'],
    },
  ]}
  caption="List of users"
  head={[
    { label: '#', scope: 'col' },
    { label: 'First', scope: 'col' },
    { label: 'Last', scope: 'col' },
    { label: 'Handle', scope: 'col' },
  ]}
/>
```