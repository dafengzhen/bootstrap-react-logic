```tsx
const [toasts, setToasts] = useState<
{
  id: number;
  visible: boolean;
}[]
>([]);

function onClickShowLiveToastTest() {
  setToasts((prevState) => [...prevState, { id: (prevState.at(-1)?.id ?? 0) + 1, visible: true }]);
}

<button className="btn btn-primary" onClick={onClickShowLiveToastTest} type="button">
  Show live toast
</button>

<Toast
  container
  containerProps={{
    className: 'bottom-0 end-0 p-3 overflow-y-auto tw-max-h-screen tw-pointer-events-auto',
  }}
  options={toasts.map((item, index) => {
    const onVisibleChange = (visible: boolean) => {
      setToasts((prevState) => [
        ...prevState.slice(0, index),
        { ...prevState[index], visible },
        ...prevState.slice(index + 1),
      ]);
    };

    return {
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
            className="btn-close tw-pointer-events-auto"
            data-bs-dismiss="toast"
            onClick={() => onVisibleChange(!item.visible)}
            type="button"
          ></button>
        </>
      ),
      id: item.id,
      onVisibleChange,
      role: 'alert',
      visible: item.visible,
    };
  })}
  position="fixed"
/>
```
