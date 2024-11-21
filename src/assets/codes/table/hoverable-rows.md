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
      values: [
        '3',
        {
          colSpan: 2,
          value: 'Larry the Bird',
        },
        null,
        '@twitter',
      ],
    },
  ]}
  head={[
    { label: '#', scope: 'col' },
    { label: 'First', scope: 'col' },
    { label: 'Last', scope: 'col' },
    { label: 'Handle', scope: 'col' },
  ]}
  hover
/>

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
      values: [
        '3',
        {
          colSpan: 2,
          value: 'Larry the Bird',
        },
        null,
        '@twitter',
      ],
    },
  ]}
  head={[
    { label: '#', scope: 'col' },
    { label: 'First', scope: 'col' },
    { label: 'Last', scope: 'col' },
    { label: 'Handle', scope: 'col' },
  ]}
  hover
  variant="dark"
/>

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
      values: [
        '3',
        {
          colSpan: 2,
          value: 'Larry the Bird',
        },
        null,
        '@twitter',
      ],
    },
  ]}
  head={[
    { label: '#', scope: 'col' },
    { label: 'First', scope: 'col' },
    { label: 'Last', scope: 'col' },
    { label: 'Handle', scope: 'col' },
  ]}
  hover
  striped
/>
```
