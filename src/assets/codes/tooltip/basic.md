```jsx
const [visible, setVisible] = useState(false);
const [visible2, setVisible2] = useState(false);
const [visible3, setVisible3] = useState(false);
const [visible4, setVisible4] = useState(false);

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

<p className="muted">
  Placeholder text to demonstrate some{' '}
  <Tooltip
    inner="Default tooltip"
    onChange={setVisible}
    role="tooltip"
    trigger={(setRef) => (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (!visible) {
            onClickVisible();
          }
        }}
        ref={setRef}
      >
        inline links
      </a>
    )}
    visible={visible}
  />{' '}
  with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of{' '}
  <Tooltip
    inner="Another tooltip"
    onChange={setVisible2}
    role="tooltip"
    trigger={(setRef) => (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (!visible2) {
            onClickVisible2();
          }
        }}
        ref={setRef}
      >
        real text
      </a>
    )}
    visible={visible2}
  />
  . And all that just to give you an idea of how tooltips would look when used in real-world situations. So hopefully
  you've now seen how{' '}
  <Tooltip
    inner="Another one here too"
    onChange={setVisible3}
    role="tooltip"
    trigger={(setRef) => (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (!visible3) {
            onClickVisible3();
          }
        }}
        ref={setRef}
      >
        these tooltips on links
      </a>
    )}
    visible={visible3}
  />{' '}
  can work in practice, once you use them on{' '}
  <Tooltip
    inner="The last tip!"
    onChange={setVisible4}
    role="tooltip"
    trigger={(setRef) => (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (!visible4) {
            onClickVisible4();
          }
        }}
        ref={setRef}
      >
        your own
      </a>
    )}
    visible={visible4}
  />{' '}
  site or project.
</p>;
```
