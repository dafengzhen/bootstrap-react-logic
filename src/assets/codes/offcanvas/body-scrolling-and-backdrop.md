```jsx
const [visible3, setVisible3] = useState(false);

function onClickVisible3() {
  setVisible3(!visible3);
}

<button className="btn btn-primary" onClick={onClickVisible3} type="button">
  Enable both scrolling & backdrop
</button>

<Offcanvas
  body={<p>Try scrolling the rest of the page to see this option in action.</p>}
  onChange={setVisible3}
  placement="start"
  scroll
  title="Backdrop with scrolling"
  visible={visible3}
/>
```
