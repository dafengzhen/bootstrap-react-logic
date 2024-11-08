```jsx
<ListGroup
  as="div"
  itemAction
  options={[
    {
      item: 'A simple default list group item',
      props: {
        as: 'a',
        href: '#',
      },
    },
    ...['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((variant) => {
      return {
        item: `A simple ${variant} list group item`,
        variant,
        props: {
          as: 'a',
          href: '#',
        },
      };
    }),
  ]}
/>
```
