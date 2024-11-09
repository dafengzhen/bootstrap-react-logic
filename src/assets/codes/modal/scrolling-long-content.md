```jsx
const [visible3, setVisible3] = useState(false);
const [visible4, setVisible4] = useState(false);

function onClickVisible3() {
  setVisible3(!visible3);
}

function onClickVisible4() {
  setVisible4(!visible4);
}

<button type="button" className="btn btn-primary" onClick={onClickVisible3}>
  Launch demo modal
</button>

<Modal
  visible={visible3}
  onVisibleChange={setVisible3}
  fade
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  title="Modal title"
  header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible3}></button>}
  body={
    <p>
      This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the
      text in the modal, we use an inline style to set a minimum height, thereby extending the length of the
      overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of
      the viewport, scrolling will move the modal as needed.
    </p>
  }
  bodyProps={{
    style: { minHeight: 1500 },
  }}
  footer={
    <>
      <button type="button" className="btn btn-secondary" onClick={onClickVisible3}>
        Close
      </button>
      <button type="button" className="btn btn-primary">
        Save changes
      </button>
    </>
  }
/>

<button type="button" className="btn btn-primary" onClick={onClickVisible4}>
  Launch demo modal
</button>

<Modal
  scrollable
  visible={visible4}
  onVisibleChange={setVisible4}
  fade
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  title="Modal title"
  header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible4}></button>}
  body={
    <>
      <div className="modal-body">
        <p>
          This is some placeholder content to show the scrolling behavior for modals. We use repeated line
          breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling.
          When content becomes longer than the predefined max-height of modal, content will be cropped and
          scrollable within the modal.
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>This content should appear at the bottom after you scroll.</p>
      </div>
    </>
  }
  footer={
    <>
      <button type="button" className="btn btn-secondary" onClick={onClickVisible4}>
        Close
      </button>
      <button type="button" className="btn btn-primary">
        Save changes
      </button>
    </>
  }
/>
```
