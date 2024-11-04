```tsx
const [visible, setVisible] = useState(false);

function onClickVisible(e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) {
  e.preventDefault();
  setVisible(!visible);
}

<p className="d-inline-flex gap-1">
  <a className="btn btn-primary" href="" role="button" onClick={onClickVisible}>
    Link with href
  </a>
  <button className="btn btn-primary" type="button" onClick={onClickVisible}>
    Button with data-bs-target
  </button>
</p>

<Collapse visible={visible}>
  <div className="card card-body">
    Some placeholder content for the collapse component.
    This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</Collapse>
```
