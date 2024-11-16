```jsx
const [visible8, setVisible8] = useState(false);

<Popover
  body="And here's some amazing content. It's very engaging. Right?"
  header="Dismissible popover"
  onChange={setVisible8}
  trigger={(setRef) => (
    <a className="btn btn-lg btn-danger" ref={setRef} role="button" tabIndex={0}>
      Dismissible popover
    </a>
  )}
  triggerType="focus"
  visible={visible8}
/>;
```
