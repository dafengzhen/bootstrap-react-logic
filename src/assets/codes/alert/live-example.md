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
    const onVisibleChange = (visible: boolean) => {
      setAlerts((prevState) => [
        ...prevState.slice(0, index),
        { ...prevState[index], visible },
        ...prevState.slice(index + 1),
      ]);
    };

    return (
      <Alert
        dismissible
        key={item.id}
        onVisibleChange={onVisibleChange}
        role="alert"
        variant="success"
        visible={item.visible}
      >
        <div>A simple primary alert—check it out!</div>
        <button
          aria-label="Close"
          className="btn-close"
          data-bs-dismiss="alert"
          onClick={() => onVisibleChange(!item.visible)}
          type="button"
        />
      </Alert>
    );
  });
}

<Button variant="primary" onClick={onClickShowLiveAlertTest}>
  Show live alert
</Button>;
```
