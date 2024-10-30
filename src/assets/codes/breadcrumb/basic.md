```jsx
<Breadcrumb
  options={[
    {
      title: 'Home',
    },
  ]}
/>

<Breadcrumb
  options={[
    {
      title: <a href="#">Home</a>,
    },
    {
      title: 'Library',
      active: true,
    },
  ]}
/>

<Breadcrumb
  options={[
    {
      title: <a href="#">Home</a>,
    },
    {
      title: <a href="#">Library</a>,
    },
    {
      title: 'Data',
      active: true,
    },
  ]}
/>
```
