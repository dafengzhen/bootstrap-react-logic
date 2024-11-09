```jsx
const [visible5, setVisible5] = useState(false);
const [visible6, setVisible6] = useState(false);

function onClickVisible5() {
  setVisible5(!visible5);
}

function onClickVisible6() {
  setVisible6(!visible6);
}

<button type="button" className="btn btn-primary" onClick={onClickVisible5}>
  Launch demo modal
</button>

<Modal
  centered
  visible={visible5}
  onVisibleChange={setVisible5}
  fade
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  title="Modal title"
  header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible5}></button>}
  body={<p>This is a vertically centered modal.</p>}
  footer={
    <>
      <button type="button" className="btn btn-secondary" onClick={onClickVisible5}>
        Close
      </button>
      <button type="button" className="btn btn-primary">
        Save changes
      </button>
    </>
  }
/>

<button type="button" className="btn btn-primary" onClick={onClickVisible6}>
  Launch demo modal
</button>

<Modal
  centered
  scrollable
  visible={visible6}
  onVisibleChange={setVisible6}
  fade
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  title="Modal title"
  header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible6}></button>}
  body={
    <>
      <p>
        This is some placeholder content to show a vertically centered modal. We've added some extra copy here
        to show how vertically centering the modal works when combined with scrollable modals. We also use
        some repeated line breaks to quickly extend the height of the content, thereby triggering the
        scrolling. When content becomes longer than the predefined max-height of modal, content will be
        cropped and scrollable within the modal.
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
      <p>Just like that.</p>
    </>
  }
  footer={
    <>
      <button type="button" className="btn btn-secondary" onClick={onClickVisible6}>
        Close
      </button>
      <button type="button" className="btn btn-primary">
        Save changes
      </button>
    </>
  }
/>
```
