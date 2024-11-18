```jsx
const [visible2, setVisible2] = useState(false);

function onClickVisible2() {
  setVisible2(!visible2);
}

<button className="btn btn-primary" onClick={onClickVisible2} type="button">
  Show live toast
</button>

<Toast
  container
  containerProps={{
    className: 'bottom-0 end-0 p-3',
  }}
  options={[
    {
      'aria-atomic': 'true',
      'aria-live': 'assertive',
      body: 'Hello, world! This is a toast message.',
      header: (
        <>
          <SquareIcon />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="toast"
            onClick={onClickVisible2}
            type="button"
          ></button>
        </>
      ),
      onChange: setVisible2,
      role: 'alert',
      visible: visible2,
    },
  ]}
  position="fixed"
/>
```
