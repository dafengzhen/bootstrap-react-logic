```jsx
const [visible6, setVisible6] = useState(true);
const [visible7, setVisible7] = useState(true);

function onClickVisible6() {
  setVisible6(!visible6);
}

function onClickVisible7() {
  setVisible7(!visible7);
}

<Toast
  aria-atomic="true"
  aria-live="assertive"
  autohide={false}
  className="align-items-center"
  customContent={
    <div className="d-flex">
      <div className="toast-body">Hello, world! This is a toast message.</div>
      <button
        aria-label="Close"
        className="btn-close me-2 m-auto"
        data-bs-dismiss="toast"
        onClick={onClickVisible6}
        type="button"
      ></button>
    </div>
  }
  role="alert"
  visible={visible6}
/>

<Toast
  aria-atomic="true"
  aria-live="assertive"
  autohide={false}
  customContent={
    <div className="toast-body">
      Hello, world! This is a toast message.
      <div className="mt-2 pt-2 border-top d-flex gap-2">
        <button className="btn btn-primary btn-sm" type="button">
          Take action
        </button>
        <button
          className="btn btn-secondary btn-sm"
          data-bs-dismiss="toast"
          onClick={onClickVisible7}
          type="button"
        >
          Close
        </button>
      </div>
    </div>
  }
  role="alert"
  visible={visible7}
/>
```
