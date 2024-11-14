```jsx
const [visible4, setVisible4] = useState(false);

function onClickVisible4() {
  setVisible4(!visible4);
}

<button className="btn btn-primary" onClick={onClickVisible4} type="button">
  Toggle static offcanvas
</button>

<Offcanvas
  backdrop="static"
  body={<div>I will not close if you click outside of me.</div>}
  onChange={setVisible4}
  placement="start"
  title="Offcanvas"
  visible={visible4}
/>
```
