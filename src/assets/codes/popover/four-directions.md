```jsx
const [visible2, setVisible2] = useState(false);
const [visible3, setVisible3] = useState(false);
const [visible4, setVisible4] = useState(false);
const [visible5, setVisible5] = useState(false);

function onClickVisible2() {
  setVisible2(!visible2);
}

function onClickVisible3() {
  setVisible3(!visible3);
}

function onClickVisible4() {
  setVisible4(!visible4);
}

function onClickVisible5() {
  setVisible5(!visible5);
}

<Popover
  body="Top popover"
  placement="top"
  trigger={(setRef) => (
    <button className="btn btn-secondary" onClick={onClickVisible2} ref={setRef} type="button">
      Popover on top
    </button>
  )}
  visible={visible2}
/>

<Popover
  body="Right popover"
  placement="right"
  trigger={(setRef) => (
    <button className="btn btn-secondary" onClick={onClickVisible3} ref={setRef} type="button">
      Popover on right
    </button>
  )}
  visible={visible3}
/>

<Popover
  body="Bottom popover"
  placement="bottom"
  trigger={(setRef) => (
    <button className="btn btn-secondary" onClick={onClickVisible4} ref={setRef} type="button">
      Popover on bottom
    </button>
  )}
  visible={visible4}
/>

<Popover
  body="Left popover"
  placement="left"
  trigger={(setRef) => (
    <button className="btn btn-secondary" onClick={onClickVisible5} ref={setRef} type="button">
      Popover on left
    </button>
  )}
  visible={visible5}
/>
```
