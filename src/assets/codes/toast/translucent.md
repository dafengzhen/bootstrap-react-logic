```jsx
const [visible3, setVisible3] = useState(true);

function onClickVisible3() {
  setVisible3(!visible3);
}

<Toast
  aria-atomic="true"
  aria-live="assertive"
  autohide={false}
  body="Hello, world! This is a toast message."
  header={
    <>
      <SquareIcon />
      <strong className="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button
        aria-label="Close"
        className="btn-close"
        data-bs-dismiss="toast"
        onClick={onClickVisible3}
        type="button"
      ></button>
    </>
  }
  role="alert"
  visible={visible3}
/>;
```
