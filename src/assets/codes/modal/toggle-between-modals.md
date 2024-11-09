```tsx
const [visible10, setVisible10] = useState(false);
const [visible11, setVisible11] = useState(false);

const [toggle, setToggle] = useState(true);

function onClickVisible10() {
  setVisible10(!visible10);
}

function onClickVisible11() {
  setVisible11(!visible11);
}

<button type="button" className="btn btn-primary" onClick={onClickVisible10}>
  Open first modal
</button>

<Modal
  toggle={toggle}
  centered
  visible={visible10}
  onVisibleChange={setVisible10}
  fade
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  title="Modal 1"
  titleProps={{
    as: 'h1',
    className: 'fs-5',
  }}
  header={
    <button
      type="button"
      className="btn-close"
      aria-label="Close"
      onClick={() => {
        setToggle(false);
        onClickVisible10();
      }}
    ></button>
  }
  body="Show a second modal and hide this one with the button below."
  footer={
    <button
      className="btn btn-primary"
      onClick={() => {
        setToggle(true);
        onClickVisible10();
        onClickVisible11();
      }}
    >
      Open second modal
    </button>
  }
/>

<Modal
  toggle={toggle}
  centered
  visible={visible11}
  onVisibleChange={setVisible11}
  fade
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  title="Modal 2"
  titleProps={{
    as: 'h1',
    className: 'fs-5',
  }}
  header={
    <button
      type="button"
      className="btn-close"
      aria-label="Close"
      onClick={() => {
        setToggle(false);
        onClickVisible11();
      }}
    ></button>
  }
  body="Hide this modal and show the first with the button below."
  footer={
    <button
      className="btn btn-primary"
      onClick={() => {
        setToggle(true);
        onClickVisible10();
        onClickVisible11();
      }}
    >
      Back to first
    </button>
  }
/>
```
