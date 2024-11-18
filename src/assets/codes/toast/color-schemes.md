```jsx
const [visible8, setVisible8] = useState(true);

function onClickVisible8() {
  setVisible8(!visible8);
}

<Toast
  aria-atomic="true"
  aria-live="assertive"
  autohide={false}
  className="align-items-center text-bg-primary border-0"
  customContent={
    <div className="d-flex">
      <div className="toast-body">Hello, world! This is a toast message.</div>
      <button
        aria-label="Close"
        className="btn-close btn-close-white me-2 m-auto"
        data-bs-dismiss="toast"
        onClick={onClickVisible8}
        type="button"
      ></button>
    </div>
  }
  role="alert"
  visible={visible8}
/>;
```
