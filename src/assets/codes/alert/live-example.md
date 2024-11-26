```tsx
const [alerts, setAlerts] = useState<
  {
    visible: boolean;
    id: number;
  }[]
>([]);

function onClickShowLiveAlertTest() {
  setAlerts((prevAlerts) => [...prevAlerts, { id: (prevAlerts.at(-1)?.id ?? 0) + 1, visible: true }]);
}

{
  alerts.map((item, index) => {
    return (
      <Alert
        onVisibleChange={(visible) =>
          setAlerts((prevState) => [
            ...prevState.slice(0, index),
            { ...prevState[index], visible },
            ...prevState.slice(index + 1),
          ])
        }
        visible={item.visible}
        clickToClose={false}
        variant="success"
        key={item.id}
        role="alert"
        dismissible
        fade
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
