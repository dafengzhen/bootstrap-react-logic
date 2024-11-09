```tsx
const [visible12, setVisible12] = useState(false);

const [size, setSize] = useState<'sm' | 'lg' | 'xl'>();

function onClickVisible12() {
  setVisible12(!visible12);
}

<button
  type="button"
  className="btn btn-primary"
  onClick={() => {
    setSize('xl');
    onClickVisible12();
  }}
>
  Extra large modal
</button>
<button
  type="button"
  className="btn btn-primary"
  onClick={() => {
    setSize('lg');
    onClickVisible12();
  }}
>
  Large modal
</button>
<button
  type="button"
  className="btn btn-primary"
  onClick={() => {
    setSize('sm');
    onClickVisible12();
  }}
>
  Small modal
</button>

<Modal
  size={size}
  visible={visible12}
  onVisibleChange={setVisible12}
  fade
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  title={
    size === 'xl'
      ? 'Extra large modal'
      : size === 'lg'
        ? 'Large modal'
        : size === 'sm'
          ? 'Small modal'
          : 'Modal title'
  }
  header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible12}></button>}
  body
  footer={
    <>
      <button type="button" className="btn btn-secondary" onClick={onClickVisible12}>
        Close
      </button>
      <button type="button" className="btn btn-primary">
        Save changes
      </button>
    </>
  }
/>
```
