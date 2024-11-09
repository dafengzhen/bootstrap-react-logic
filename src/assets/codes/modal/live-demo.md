```jsx
const [visible, setVisible] = useState(false);

function onClickVisible() {
  setVisible(!visible);
}

<button type="button" className="btn btn-primary" onClick={onClickVisible}>
  Launch demo modal
</button>

<Modal
  visible={visible}
  fade
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  title="Modal title"
  header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible}></button>}
  body
  footer={
    <>
      <button type="button" className="btn btn-secondary" onClick={onClickVisible}>
        Close
      </button>
      <button type="button" className="btn btn-primary">
        Save changes
      </button>
    </>
  }
/>
```
