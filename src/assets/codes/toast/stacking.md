```jsx
const [visible4, setVisible4] = useState(true);
const [visible5, setVisible5] = useState(true);

function onClickVisible4() {
  setVisible4(!visible4);
}

function onClickVisible5() {
  setVisible5(!visible5);
}

<Toast
  container
  options={[
    {
      'aria-atomic': 'true',
      'aria-live': 'assertive',
      autohide: false,
      body: 'See? Just like this.',
      header: (
        <>
          <SquareIcon />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-body-secondary">just now</small>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="toast"
            onClick={onClickVisible4}
            type="button"
          ></button>
        </>
      ),
      role: 'alert',
      visible: visible4,
    },
    {
      'aria-atomic': 'true',
      'aria-live': 'assertive',
      autohide: false,
      body: 'Heads up, toasts will stack automatically',
      header: (
        <>
          <SquareIcon />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-body-secondary">2 seconds ago</small>
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="toast"
            onClick={onClickVisible5}
            type="button"
          ></button>
        </>
      ),
      role: 'alert',
      visible: visible5,
    },
  ]}
  position="static"
/>;
```
