```jsx
const [visible2, setVisible2] = useState(false);

function onClickVisible2() {
  setVisible2(!visible2);
}

<button type="button" className="btn btn-primary" onClick={onClickVisible2}>
  Launch static backdrop modal
</button>

<Modal
  visible={visible2}
  onVisibleChange={setVisible2}
  static
  fade
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  title="Modal title"
  titleProps={{
    as: 'h1',
    className: 'fs-5',
  }}
  header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible2}></button>}
  body
  footer={
    <>
      <button type="button" className="btn btn-secondary" onClick={onClickVisible2}>
        Close
      </button>
      <button type="button" className="btn btn-primary">
        Understood
      </button>
    </>
  }
/>
```
