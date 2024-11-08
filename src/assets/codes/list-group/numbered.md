```jsx
<ListGroup
  numbered
  options={[
    {
      item: 'A list item',
    },
    {
      item: 'A list item',
    },
    {
      item: 'A list item',
    },
  ]}
/>

<ListGroup
  as="ol"
  numbered
  options={[
    {
      item: (
        <>
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Content for list item
          </div>
          <span className="badge text-bg-primary rounded-pill">14</span>
        </>
      ),
      props: {
        className: 'd-flex justify-content-between align-items-start',
      },
    },
    {
      item: (
        <>
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Content for list item
          </div>
          <span className="badge text-bg-primary rounded-pill">14</span>
        </>
      ),
      props: {
        className: 'd-flex justify-content-between align-items-start',
      },
    },
    {
      item: (
        <>
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Content for list item
          </div>
          <span className="badge text-bg-primary rounded-pill">14</span>
        </>
      ),
      props: {
        className: 'd-flex justify-content-between align-items-start',
      },
    },
  ]}
/>
```
