```jsx
const [visible5, setVisible5] = useState(false);

function onClickVisible5() {
  setVisible5(!visible5);
}

<button className="btn btn-primary d-lg-none" onClick={onClickVisible5} type="button">
  Toggle offcanvas
</button>

<div className="alert alert-info d-none d-lg-block">
  Resize your browser to show the responsive offcanvas toggle.
</div>

<Offcanvas
  body={
    <p className="mb-0">
      This is content within an <code>.offcanvas-lg</code>.
    </p>
  }
  onChange={setVisible5}
  placement="end"
  responsive="lg"
  title="Responsive offcanvas"
  visible={visible5}
/>
```
