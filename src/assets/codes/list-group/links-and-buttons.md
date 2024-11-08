```jsx
<ListGroup
  as="div"
  options={[
    {
      item: 'The current link item',
      active: true,
      props: {
        as: 'a',
        href: '#',
        'aria-current': 'true',
      },
    },
    {
      item: 'A second link item',
      props: {
        as: 'a',
        href: '#',
      },
    },
    {
      item: 'A third link item',
      props: {
        as: 'a',
        href: '#',
      },
    },
    {
      item: 'A fourth link item',
      props: {
        as: 'a',
        href: '#',
      },
    },
    {
      item: 'A disabled link item',
      props: {
        as: 'a',
        href: '#',
      },
    },
  ]}
/>

<ListGroup
  as="div"
  options={[
    {
      item: 'The current button',
      active: true,
      props: {
        as: 'button',
        type: 'button',
        'aria-current': 'true',
      },
    },
    {
      item: 'A second button item',
      props: {
        as: 'button',
        type: 'button',
      },
    },
    {
      item: 'A third button item',
      props: {
        as: 'button',
        type: 'button',
      },
    },
    {
      item: 'A fourth button item',
      props: {
        as: 'button',
        type: 'button',
      },
    },
    {
      item: 'A disabled button item',
      disabled: true,
      props: {
        as: 'button',
        type: 'button',
      },
    },
  ]}
/>
```
