```jsx
const [show, setShow] = useState(false);

function onClickShowLiveAlertTest() {
  setShow(!show);
}

<Alert show={show} dismissible variant="success" role="alert">
  <div>A simple primary alert—check it out!</div>
  <button type="button" className="btn-close" aria-label="Close" onClick={onClickShowLiveAlertTest}></button>
</Alert>

<Button variant="primary" onClick={onClickShowLiveAlertTest}>
  {show ? 'Close' : 'Show'} live alert
</Button>
```
