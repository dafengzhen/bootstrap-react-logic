```tsx
const [visible1, setVisible1] = useState(false);
const [visible2, setVisible2] = useState(false);

function onClickVisible1(e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) {
  e.preventDefault();
  setVisible1(!visible1);
}

function onClickVisible2(e: MouseEvent<HTMLButtonElement>) {
  e.preventDefault();
  setVisible2(!visible2);
}

function onClickVisible3(e: MouseEvent<HTMLButtonElement>) {
  e.preventDefault();
  onClickVisible1(e);
  onClickVisible2(e);
}

<p className="d-inline-flex gap-1">
  <a className="btn btn-primary" href="" role="button" onClick={onClickVisible1}>
    Toggle first element
  </a>
  <button className="btn btn-primary" type="button" onClick={onClickVisible2}>
    Toggle second element
  </button>
  <button className="btn btn-primary" type="button" onClick={onClickVisible3}>
    Toggle both elements
  </button>
</p>

<div className="row">
  <div className="col">
    <Collapse visible={visible1}>
      <div className="card card-body">
        Some placeholder content for the first collapse component of this multi-collapse example.
        This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </Collapse>
  </div>
  <div className="col">
    <Collapse visible={visible2}>
      <div className="card card-body">
        Some placeholder content for the second collapse component of this multi-collapse example.
        This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </Collapse>
  </div>
</div>
```
