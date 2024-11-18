```jsx
const [visible6, setVisible6] = useState(false);
const [visible7, setVisible7] = useState(false);
const [visible8, setVisible8] = useState(false);
const [visible9, setVisible9] = useState(false);
const [visible10, setVisible10] = useState(false);
const [visible11, setVisible11] = useState(false);

function onClickVisible() {
  setVisible(!visible);
}

function onClickVisible2() {
  setVisible2(!visible2);
}

function onClickVisible3() {
  setVisible3(!visible3);
}

function onClickVisible4() {
  setVisible4(!visible4);
}

function onClickVisible11() {
  setVisible11(!visible11);
}

<div className="d-flex flex-wrap gap-2">
  <Tooltip
    inner="Tooltip on top"
    onChange={setVisible6}
    role="tooltip"
    trigger={(setRef) => (
      <button className="btn btn-secondary" ref={setRef} type="button">
        Tooltip on top
      </button>
    )}
    visible={visible6}
  />

  <Tooltip
    inner="Tooltip on right"
    onChange={setVisible7}
    placement="right"
    role="tooltip"
    trigger={(setRef) => (
      <button className="btn btn-secondary" ref={setRef} type="button">
        Tooltip on right
      </button>
    )}
    visible={visible7}
  />

  <Tooltip
    inner="Tooltip on bottom"
    onChange={setVisible8}
    placement="bottom"
    role="tooltip"
    trigger={(setRef) => (
      <button className="btn btn-secondary" ref={setRef} type="button">
        Tooltip on bottom
      </button>
    )}
    visible={visible8}
  />

  <Tooltip
    inner="Tooltip on left"
    onChange={setVisible9}
    placement="left"
    role="tooltip"
    trigger={(setRef) => (
      <button className="btn btn-secondary" ref={setRef} type="button">
        Tooltip on left
      </button>
    )}
    visible={visible9}
  />

  <Tooltip
    html="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
    onChange={setVisible10}
    role="tooltip"
    trigger={(setRef) => (
      <button className="btn btn-secondary" ref={setRef} type="button">
        Tooltip with HTML
      </button>
    )}
    visible={visible10}
  />
</div>

<Tooltip
  inner="Default tooltip"
  onChange={setVisible11}
  role="tooltip"
  trigger={(setRef) => (
    <a
      className="d-inline-block"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        if (!visible11) {
          onClickVisible11();
        }
      }}
      ref={setRef}
    >
      <svg height="50" viewBox="0 0 100 100" width="50" xmlns="http://www.w3.org/2000/svg">
        <rect fill="#563d7c" height="100%" width="100%"></rect>
        <circle cx="50" cy="50" fill="#007bff" r="30"></circle>
      </svg>
    </a>
  )}
  visible={visible11}
/>
```
