```jsx
const [visible13, setVisible13] = useState(true);

function onClickVisible13() {
  setVisible13(!visible13);
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
        onClick={onClickVisible13}
        type="button"
      ></button>
    </>
  }
  role="alert"
  visible={visible13}
/>;
```
