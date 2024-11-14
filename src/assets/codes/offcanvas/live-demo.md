```tsx
const [visible, setVisible] = useState(false);

function onClickVisible() {
  setVisible(!visible);
}

<a
  className="btn btn-primary"
  href="#"
  onClick={(e) => {
    e.preventDefault();
    onClickVisible();
  }}
  role="button"
>
  Link with href
</a>
<button className="btn btn-primary" onClick={onClickVisible} type="button">
  Button with data-bs-target
</button>

<Offcanvas
  body={
    <>
      <div>
        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images,
        lists, etc.
      </div>
      <div className="dropdown mt-3">
        <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button">
          Dropdown button
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </>
  }
  onChange={setVisible}
  placement="start"
  title="Offcanvas"
  visible={visible}
/>
```
