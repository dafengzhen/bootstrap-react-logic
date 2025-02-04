```jsx
<Modal
  backdrop={false}
  body={<p>Modal body text goes here.</p>}
  className="position-static z-0"
  container="#custom-container"
  footer={
    <>
      <button className="btn btn-secondary" data-bs-dismiss="modal" type="button">
        Close
      </button>
      <button className="btn btn-primary" type="button">
        Save changes
      </button>
    </>
  }
  header={<button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"></button>}
  tabIndex={-1}
  title="Modal title"
  visible
/>
```
