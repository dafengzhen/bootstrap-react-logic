```tsx
const [alerts, setAlerts] = useState<number[]>([]);

function onClickShowLiveAlertTest() {
  setAlerts([...alerts, alerts.length + 1]);
}

{
  alerts.map((item) => {
    return (
      <Alert
        key={item}
        variant="success"
        role="alert"
        fade
        dismissible
        clickToClose={false}
        onClose={(close) => {
          close?.();
        }}
      >
        <div>A simple primary alert—check it out!</div>
      </Alert>
    );
  });
}

<Button variant="primary" onClick={onClickShowLiveAlertTest}>
  Show live alert
</Button>;
```
