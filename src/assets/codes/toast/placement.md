```tsx
const [visible9, setVisible9] = useState(true);
const [visible10, setVisible10] = useState(true);
const [visible11, setVisible11] = useState(true);
const [visible12, setVisible12] = useState(true);

const [placement, setPlacement] = useState<any>();

function onClickVisible9() {
  setVisible9(!visible9);
}

function onClickVisible10() {
  setVisible10(!visible10);
}

function onClickVisible11() {
  setVisible11(!visible11);
}

function onClickVisible12() {
  setVisible12(!visible12);
}

function onChangeSelect(e: ChangeEvent<HTMLSelectElement>) {
  const value = e.target.value;
  switch (value) {
    case 'bottom-0 end-0':
      setPlacement('bottom-end');
      break;
    case 'bottom-0 start-0':
      setPlacement('bottom-start');
      break;
    case 'bottom-0 start-50 translate-middle-x':
      setPlacement('bottom-center');
      break;
    case 'top-0 end-0':
      setPlacement('top-end');
      break;
    case 'top-0 start-0':
      setPlacement('top-start');
      break;
    case 'top-0 start-50 translate-middle-x':
      setPlacement('top-center');
      break;
    case 'top-50 end-0 translate-middle-y':
      setPlacement('middle-right');
      break;
    case 'top-50 start-0 translate-middle-y':
      setPlacement('middle-left');
      break;
    case 'top-50 start-50 translate-middle':
      setPlacement('middle-center');
      break;
  }
}

<form>
  <div className="mb-3">
    <label htmlFor="selectToastPlacement">Toast placement</label>
    <select className="form-select mt-2" id="selectToastPlacement" onChange={onChangeSelect}>
      <option defaultChecked value="">
        Select a position...
      </option>
      <option value="top-0 start-0">Top left</option>
      <option value="top-0 start-50 translate-middle-x">Top center</option>
      <option value="top-0 end-0">Top right</option>
      <option value="top-50 start-0 translate-middle-y">Middle left</option>
      <option value="top-50 start-50 translate-middle">Middle center</option>
      <option value="top-50 end-0 translate-middle-y">Middle right</option>
      <option value="bottom-0 start-0">Bottom left</option>
      <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
      <option value="bottom-0 end-0">Bottom right</option>
    </select>
  </div>
</form>

<div
  aria-atomic="true"
  aria-live="polite"
  className="bg-body-secondary position-relative bd-example-toasts rounded-3"
>
  <Toast
    container
    containerProps={{
      className: 'p-3',
    }}
    options={[
      {
        'aria-atomic': 'true',
        'aria-live': 'assertive',
        autohide: false,
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
              onClick={onClickVisible9}
              type="button"
            ></button>
          </>
        ),
        role: 'alert',
        visible: visible9,
      },
    ]}
    placement={placement}
  />
</div>

<div className="bd-example-toasts">
  <div aria-atomic="true" aria-live="polite" className="position-relative">
    <Toast
      container
      containerProps={{
        className: 'top-0 end-0 p-3',
      }}
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
                onClick={onClickVisible10}
                type="button"
              ></button>
            </>
          ),
          role: 'alert',
          visible: visible10,
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
                onClick={onClickVisible11}
                type="button"
              ></button>
            </>
          ),
          role: 'alert',
          visible: visible11,
        },
      ]}
    />
  </div>
</div>

<div className="bd-example-toasts">
  <div aria-atomic="true" aria-live="polite" className="d-flex justify-content-center align-items-center w-100">
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
            onClick={onClickVisible12}
            type="button"
          ></button>
        </>
      }
      role="alert"
      visible={visible12}
    />
  </div>
</div>
```
