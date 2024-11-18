```tsx
const [visible12, setVisible12] = useState(false);

<Tooltip
  inner="Disabled tooltip"
  onChange={setVisible12}
  role="tooltip"
  trigger={(setRef) => (
    <button className="btn btn-primary" disabled ref={setRef} type="button">
      Disabled button
    </button>
  )}
  triggerWrapper
  visible={visible12}
/>;
```
