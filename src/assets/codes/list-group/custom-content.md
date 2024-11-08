```jsx
<ListGroup
  options={[
    {
      item: (
        <>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">Some placeholder content in a paragraph.</p>
          <small>And some small print.</small>
        </>
      ),
      active: true,
      props: {
        as: 'a',
        href: '#',
        'aria-current': 'true',
      },
    },
    {
      item: (
        <>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-body-secondary">3 days ago</small>
          </div>
          <p className="mb-1">Some placeholder content in a paragraph.</p>
          <small className="text-body-secondary">And some muted small print.</small>
        </>
      ),
      props: {
        as: 'a',
        href: '#',
      },
    },
    {
      item: (
        <>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-body-secondary">3 days ago</small>
          </div>
          <p className="mb-1">Some placeholder content in a paragraph.</p>
          <small className="text-body-secondary">And some muted small print.</small>
        </>
      ),
      props: {
        as: 'a',
        href: '#',
      },
    },
  ]}
/>
```
