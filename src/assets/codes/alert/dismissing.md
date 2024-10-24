```jsx
<Alert variant="warning" fade dismissible role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>

<Alert
  variant="warning"
  fade
  dismissible
  closeButton={({ close }) => {
    return (
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={close}
      ></button>
    );
  }}
  role="alert"
>
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>
```
