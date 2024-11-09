```tsx
const [visible13, setVisible13] = useState(false);

const [fullscreen, setFullscreen] = useState<boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>();

function onClickVisible13() {
  setVisible13(!visible13);
}

<button
  type="button"
  className="btn btn-primary"
  onClick={() => {
    setFullscreen(true);
    onClickVisible13();
  }}
>
  Full screen
</button>
<button
  type="button"
  className="btn btn-primary"
  onClick={() => {
    setFullscreen('sm');
    onClickVisible13();
  }}
>
  Full screen below sm
</button>
<button
  type="button"
  className="btn btn-primary"
  onClick={() => {
    setFullscreen('md');
    onClickVisible13();
  }}
>
  Full screen below md
</button>
<button
  type="button"
  className="btn btn-primary"
  onClick={() => {
    setFullscreen('lg');
    onClickVisible13();
  }}
>
  Full screen below lg
</button>
<button
  type="button"
  className="btn btn-primary"
  onClick={() => {
    setFullscreen('xl');
    onClickVisible13();
  }}
>
  Full screen below xl
</button>
<button
  type="button"
  className="btn btn-primary"
  onClick={() => {
    setFullscreen('xxl');
    onClickVisible13();
  }}
>
  Full screen below xxl
</button>

<Modal
  fullscreen={fullscreen}
  visible={visible13}
  onVisibleChange={setVisible13}
  fade
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  title={
    fullscreen === 'sm'
      ? 'Full screen below sm'
      : fullscreen === 'md'
        ? 'Full screen below md'
        : fullscreen === 'lg'
          ? 'Full screen below lg'
          : fullscreen === 'xl'
            ? 'Full screen below xl'
            : fullscreen === 'xxl'
              ? 'Full screen below xxl'
              : 'Full screen modal'
  }
  header={<button type="button" className="btn-close" aria-label="Close" onClick={onClickVisible13}></button>}
  body
  footer={
    <button type="button" className="btn btn-secondary" onClick={onClickVisible13}>
      Close
    </button>
  }
/>
```
