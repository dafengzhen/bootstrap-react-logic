```jsx
const [visible7, setVisible7] = useState(false);

function onClickVisible7() {
  setVisible7(!visible7);
}

<Popover
  body="This popover is themed via CSS variables."
  header="Custom popover"
  trigger={(setRef) => (
    <button className="btn btn-secondary" onClick={onClickVisible7} ref={setRef} type="button">
      Custom popover
    </button>
  )}
  variables={{
    bsPopoverBodyPaddingX: '1rem',
    bsPopoverBodyPaddingY: '.5rem',
    bsPopoverBorderColor: 'var(--bd-violet-bg)',
    bsPopoverHeaderBg: 'var(--bd-violet-bg)',
    bsPopoverHeaderColor: 'var(--bs-white)',
    bsPopoverMaxWidth: '200px',
  }}
  visible={visible7}
/>;
```
