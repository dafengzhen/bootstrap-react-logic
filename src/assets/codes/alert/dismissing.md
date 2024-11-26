```jsx
const [visible, setVisible] = useState(true);

<Alert variant="warning" fade dismissible role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert
  closeButton={
    <button
      onClick={() => setVisible(!visible)}
      data-bs-dismiss="alert"
      className="btn-close"
      aria-label="Close"
      type="button"
    />
  }
  visible={visible}
  variant="warning"
  role="alert"
  dismissible
  fade
>
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>
```
