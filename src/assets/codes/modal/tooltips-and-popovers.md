```jsx
const [visible7, setVisible7] = useState(false);

function onClickVisible7() {
  setVisible7(!visible7);
}

<button type="button" className="btn btn-primary" onClick={onClickVisible7}>
  Launch demo modal
</button>

<Modal
  visible={visible7}
  onVisibleChange={setVisible7}
  fade
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  title="Modal title"
  header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible7}></button>}
  body={
    <>
      <h2 className="fs-5">Popover in a modal</h2>
      <p>
        This{' '}
        <button
          className="btn btn-secondary"
          data-bs-toggle="popover"
          title="Popover title"
          data-bs-content="Popover body content is set in this attribute."
        >
          button
        </button>{' '}
        triggers a popover on click.
      </p>
      <hr />
      <h2 className="fs-5">Tooltips in a modal</h2>
      <p>
        <a href="#" data-bs-toggle="tooltip" title="Tooltip">
          This link
        </a>{' '}
        and{' '}
        <a href="#" data-bs-toggle="tooltip" title="Tooltip">
          that link
        </a>{' '}
        have tooltips on hover.
      </p>
    </>
  }
  footer={
    <>
      <button type="button" className="btn btn-secondary" onClick={onClickVisible7}>
        Close
      </button>
      <button type="button" className="btn btn-primary">
        Save changes
      </button>
    </>
  }
/>
```
