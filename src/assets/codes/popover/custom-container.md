```jsx
const [visible6, setVisible6] = useState(false);

function onClickVisible6() {
  setVisible6(!visible6);
}

<div id="custom-popover-ontainer">
  <Popover
    body="And here's some amazing content. It's very engaging. Right?"
    container="#custom-popover-ontainer"
    header="Popover title"
    trigger={(setRef) => (
      <button className="btn btn-secondary" onClick={onClickVisible6} ref={setRef} type="button">
        Custom container
      </button>
    )}
    visible={visible6}
  />
</div>;
```
