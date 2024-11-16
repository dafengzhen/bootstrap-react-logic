```jsx
const [visible, setVisible] = useState(false);

function onClickVisible() {
  setVisible(!visible);
}

<Popover
  body="And here's some amazing content. It's very engaging. Right?"
  header="Popover title"
  trigger={(setRef) => (
    <button className="btn btn-lg btn-danger" onClick={onClickVisible} ref={setRef} type="button">
      Click to toggle popover
    </button>
  )}
  visible={visible}
/>;
```
