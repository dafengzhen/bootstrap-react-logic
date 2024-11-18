```jsx
const [visible9, setVisible9] = useState(false);

<Popover
  body="Disabled popover"
  onChange={setVisible9}
  trigger={(setRef) => (
    <button className="btn btn-primary" disabled ref={setRef} type="button">
      Disabled button
    </button>
  )}
  triggerType={['focus', 'hover']}
  triggerWrapper
  visible={visible9}
/>;
```
