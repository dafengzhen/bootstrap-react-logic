```jsx
const [visible8, setVisible8] = useState(false);

function onClickVisible8() {
  setVisible8(!visible8);
}

<button type="button" className="btn btn-primary" onClick={onClickVisible8}>
  Launch demo modal
</button>

<Modal
  visible={visible8}
  onVisibleChange={setVisible8}
  fade
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  title="Modal title"
  header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible8}></button>}
  body={
    <div className="container-fluid bd-example-row">
      <div className="row">
        <div className="col-md-4">.col-md-4</div>
        <div className="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
      </div>
      <div className="row">
        <div className="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
        <div className="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
      </div>
      <div className="row">
        <div className="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
      </div>
      <div className="row">
        <div className="col-sm-9">
          Level 1: .col-sm-9
          <div className="row">
            <div className="col-8 col-sm-6">Level 2: .col-8 .col-sm-6</div>
            <div className="col-4 col-sm-6">Level 2: .col-4 .col-sm-6</div>
          </div>
        </div>
      </div>
    </div>
  }
  footer={
    <>
      <button type="button" className="btn btn-secondary" onClick={onClickVisible8}>
        Close
      </button>
      <button type="button" className="btn btn-primary">
        Save changes
      </button>
    </>
  }
/>
```
