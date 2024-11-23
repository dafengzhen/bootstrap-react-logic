```jsx
<Table
  body={[
    {
      scope: 'row',
      values: ['1', 'Mark', 'Otto', '@mdo'],
    },
    {
      values: [
        {
          colSpan: 4,
          value: (
            <Table
              body={[
                {
                  scope: 'row',
                  values: ['A', 'First', 'Last'],
                },
                {
                  scope: 'row',
                  values: ['B', 'First', 'Last'],
                },
                {
                  scope: 'row',
                  values: ['C', 'First', 'Last'],
                },
              ]}
              className="mb-0"
              head={[
                { label: 'Header', scope: 'col' },
                { label: 'Header', scope: 'col' },
                { label: 'Header', scope: 'col' },
              ]}
            />
          ),
        },
      ],
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
  bordered
  head={[
    { label: '#', scope: 'col' },
    { label: 'First', scope: 'col' },
    { label: 'Last', scope: 'col' },
    { label: 'Handle', scope: 'col' },
  ]}
  striped
/>
```
