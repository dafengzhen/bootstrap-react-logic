```jsx
<ListGroup
  options={[
    {
      item: 'A simple default list group item',
    },
    ...['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((variant) => {
      return {
        item: `A simple ${variant} list group item`,
        variant,
      };
    }),
  ]}
/>
```
