```jsx
<Modal
  container="#custom-container"
  tabIndex={-1}
  className="position-static d-block z-0"
  title="Modal title"
  header={<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>}
  body={<p>Modal body text goes here.</p>}
  footer={
    <>
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
        Close
      </button>
      <button type="button" className="btn btn-primary">
        Save changes
      </button>
    </>
  }
/>
```
