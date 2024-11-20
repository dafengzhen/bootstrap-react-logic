```jsx
<Table
  body={[
    {
      id: 1,
      scope: 'row',
      values: ['1', 'Mark', 'Otto', '@mdo'],
    },
    {
      id: 2,
      scope: 'row',
      values: ['2', 'Jacob', 'Thornton', '@fat'],
    },
    {
      colSpan: { firstName: 2 },
      id: 3,
      scope: 'row',
      values: ['3', 'Larry the Bird', null, '@twitter'],
    },
  ]}
  head={[
    { key: 'id', label: '#', scope: 'col' },
    { key: 'firstName', label: 'First', scope: 'col' },
    { key: 'lastName', label: 'Last', scope: 'col' },
    { key: 'handle', label: 'Handle', scope: 'col' },
  ]}
/>

<Table
  body={[
    {
      cells: [
        { key: 'id', value: '1' },
        { key: 'firstName', value: 'Mark' },
        { key: 'lastName', value: 'Otto' },
        { key: 'handle', value: '@mdo' },
      ],
      id: 1,
      scope: 'row',
    },
    {
      cells: [
        { key: 'id', value: '2' },
        { key: 'firstName', value: 'Jacob' },
        { key: 'lastName', value: 'Thornton' },
        { key: 'handle', value: '@fat' },
      ],
      id: 2,
      scope: 'row',
    },
    {
      cells: [
        { key: 'id', value: '3' },
        { colSpan: 2, key: 'firstName', value: 'Larry the Bird' },
        { key: 'handle', value: '@twitter' },
      ],
      id: 3,
      scope: 'row',
    },
  ]}
  head={[
    { key: 'id', label: '#', scope: 'col' },
    { key: 'firstName', label: 'First', scope: 'col' },
    { key: 'lastName', label: 'Last', scope: 'col' },
    { key: 'handle', label: 'Handle', scope: 'col' },
  ]}
/>
```
