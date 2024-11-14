```jsx
const [visible2, setVisible2] = useState(false);

function onClickVisible2() {
  setVisible2(!visible2);
}

<button className="btn btn-primary" onClick={onClickVisible2} type="button">
  Enable body scrolling
</button>

<Offcanvas
  backdrop={false}
  body={<p>Try scrolling the rest of the page to see this option in action.</p>}
  onChange={setVisible2}
  placement="start"
  scroll
  title="Offcanvas with body scrolling"
  visible={visible2}
/>
```
