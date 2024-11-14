```jsx
const [visible6, setVisible6] = useState(false);
const [visible7, setVisible7] = useState(false);
const [visible8, setVisible8] = useState(false);

function onClickVisible6() {
  setVisible6(!visible6);
}

function onClickVisible7() {
  setVisible7(!visible7);
}

function onClickVisible8() {
  setVisible8(!visible8);
}

<button className="btn btn-primary" onClick={onClickVisible6} type="button">
  Toggle top offcanvas
</button>

<Offcanvas body="..." onChange={setVisible6} placement="top" title="Offcanvas top" visible={visible6} />

<button className="btn btn-primary" onClick={onClickVisible7} type="button">
  Toggle right offcanvas
</button>

<Offcanvas body="..." onChange={setVisible7} placement="end" title="Offcanvas right" visible={visible7} />

<button className="btn btn-primary" onClick={onClickVisible8} type="button">
  Toggle bottom offcanvas
</button>

<Offcanvas body="..." onChange={setVisible8} placement="bottom" title="Offcanvas bottom" visible={visible8} />
```
