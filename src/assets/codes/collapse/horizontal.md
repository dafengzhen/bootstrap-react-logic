```tsx
const [visible, setVisible] = useState(false);

function onClickVisible(e: MouseEvent<HTMLButtonElement>) {
  e.preventDefault();
  setVisible2(!visible);
}

<p>
  <button className="btn btn-primary" type="button" onClick={onClickVisible}>
    Toggle width collapse
  </button>
</p>

<div style={{ minHeight: 130 }}>
  <Collapse visible={visible2} horizontal>
    <div className="card card-body" style={{ width: 300 }}>
      This is some placeholder content for a horizontal collapse.
      It's hidden by default and shown when triggered.
    </div>
  </Collapse>
</div>
```
