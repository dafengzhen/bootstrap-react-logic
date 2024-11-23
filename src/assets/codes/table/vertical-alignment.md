```jsx
<Table
  body={[
    {
      values: [
        <>
          This cell inherits <code>vertical-align: middle;</code> from the table
        </>,
        <>
          This cell inherits <code>vertical-align: middle;</code> from the table
        </>,
        <>
          This cell inherits <code>vertical-align: middle;</code> from the table
        </>,
        <>
          This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the
          vertical alignment works in the preceding cells.
        </>,
      ],
    },
    {
      props: {
        className: 'align-bottom',
      },
      values: [
        <>
          This cell inherits <code>vertical-align: middle;</code> from the table
        </>,
        <>
          This cell inherits <code>vertical-align: middle;</code> from the table
        </>,
        <>
          This cell inherits <code>vertical-align: middle;</code> from the table
        </>,
        <>
          This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the
          vertical alignment works in the preceding cells.
        </>,
      ],
    },
    {
      values: [
        <>
          This cell inherits <code>vertical-align: middle;</code> from the table
        </>,
        <>
          This cell inherits <code>vertical-align: middle;</code> from the table
        </>,
        {
          tdProps: {
            className: 'align-top',
          },
          value: (
            <>
              This cell inherits <code>vertical-align: middle;</code> from the table
            </>
          ),
        },
        <>
          This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the
          vertical alignment works in the preceding cells.
        </>,
      ],
    },
  ]}
  head={[
    {
      label: 'Heading 1',
      props: {
        className: 'w-25',
      },
      scope: 'col',
    },
    {
      label: 'Heading 2',
      props: {
        className: 'w-25',
      },
      scope: 'col',
    },
    {
      label: 'Heading 3',
      props: {
        className: 'w-25',
      },
      scope: 'col',
    },
    {
      label: 'Heading 4',
      props: {
        className: 'w-25',
      },
      scope: 'col',
    },
  ]}
  middle
  responsive
/>
```
