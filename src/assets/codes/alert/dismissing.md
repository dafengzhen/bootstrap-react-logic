```jsx
const [visible, setVisible] = useState(true);

<Alert dismissible onVisibleChange={setVisible} role="alert" variant="warning" visible={visible}>
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button
    aria-label="Close"
    className="btn-close"
    data-bs-dismiss="alert"
    onClick={() => setVisible(!visible)}
    type="button"
  />
</Alert>;
```
