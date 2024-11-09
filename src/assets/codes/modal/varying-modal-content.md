```tsx
const [visible9, setVisible9] = useState(false);
const [value, setValue] = useState<'@mdo' | '@fat' | '@getbootstrap'>();

function onClickVisible9() {
  setVisible9(!visible9);
}

<button
  type="button"
  className="btn btn-primary"
  onClick={() => {
    setValue('@mdo');
    onClickVisible9();
  }}
>
  Open modal for @mdo
</button>
<button
  type="button"
  className="btn btn-primary"
  onClick={() => {
    setValue('@fat');
    onClickVisible9();
  }}
>
  OOpen modal for @fat
</button>
<button
  type="button"
  className="btn btn-primary"
  onClick={() => {
    setValue('@getbootstrap');
    onClickVisible9();
  }}
>
  Open modal for @getbootstrap
</button>

<Modal
  visible={visible9}
  onVisibleChange={setVisible9}
  fade
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  title={`New message to ${value}`}
  titleProps={{
    as: 'h1',
    className: 'fs-5',
  }}
  header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible9}></button>}
  body={
    <form>
      <div className="mb-3">
        <label htmlFor="recipient-name" className="col-form-label">
          Recipient:
        </label>
        <input type="text" className="form-control" id="recipient-name" defaultValue={value} />
      </div>
      <div className="mb-3">
        <label htmlFor="message-text" className="col-form-label">
          Message:
        </label>
        <textarea className="form-control" id="message-text"></textarea>
      </div>
    </form>
  }
  footer={
    <>
      <button type="button" className="btn btn-secondary" onClick={onClickVisible9}>
        Close
      </button>
      <button type="button" className="btn btn-primary">
        Save changes
      </button>
    </>
  }
/>
```
