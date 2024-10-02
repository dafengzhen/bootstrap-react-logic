const buttonGroupCodes = {
  basic: {
    code: `
<ButtonGroup>
  <Button variant="primary">Left</Button>
  <Button variant="primary">Middle</Button>
  <Button variant="primary">Right</Button>
</ButtonGroup>

<ButtonGroup>
  <Button as="a" href="#" variant="primary" active>
    Active link
  </Button>
  <Button as="a" href="#" variant="primary">
    Link
  </Button>
  <Button as="a" href="#" variant="primary">
    Link
  </Button>
</ButtonGroup>

<ButtonGroup>
  <Button variant="danger">Left</Button>
  <Button variant="warning">Middle</Button>
  <Button variant="success">Right</Button>
</ButtonGroup>
            
<ButtonGroup>
  <Button outline="primary">Left</Button>
  <Button outline="primary">Middle</Button>
  <Button outline="primary">Right</Button>
</ButtonGroup>
        `,
  },
  checkbox: {
    code: `
<ButtonGroup>
  <input
    type="checkbox"
    className="btn-check"
    id="btncheck1"
    autoComplete="off"
  />
  <label className="btn btn-outline-primary" htmlFor="btncheck1">
    Checkbox 1
  </label>

  <input
    type="checkbox"
    className="btn-check"
    id="btncheck2"
    autoComplete="off"
  />
  <label className="btn btn-outline-primary" htmlFor="btncheck2">
    Checkbox 2
  </label>

  <input
    type="checkbox"
    className="btn-check"
    id="btncheck3"
    autoComplete="off"
  />
  <label className="btn btn-outline-primary" htmlFor="btncheck3">
    Checkbox 3
  </label>
</ButtonGroup>
    `,
  },
  radio: {
    code: `
<ButtonGroup>
  <input
    type="radio"
    className="btn-check"
    name="btnradio"
    id="btnradio1"
    autoComplete="off"
    defaultChecked
  />
  <label className="btn btn-outline-primary" htmlFor="btnradio1">
    Radio 1
  </label>

  <input
    type="radio"
    className="btn-check"
    name="btnradio"
    id="btnradio2"
    autoComplete="off"
  />
  <label className="btn btn-outline-primary" htmlFor="btnradio2">
    Radio 2
  </label>

  <input
    type="radio"
    className="btn-check"
    name="btnradio"
    id="btnradio3"
    autoComplete="off"
  />
  <label className="btn btn-outline-primary" htmlFor="btnradio3">
    Radio 3
  </label>
</ButtonGroup>
    `,
  },
  toolbar: {
    code: `
<ButtonGroup toolbar className="gap-2">
  <ButtonGroup>
    <Button variant="primary">1</Button>
    <Button variant="primary">2</Button>
    <Button variant="primary">3</Button>
    <Button variant="primary">4</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button variant="secondary">5</Button>
    <Button variant="secondary">6</Button>
    <Button variant="secondary">7</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button variant="info">8</Button>
  </ButtonGroup>
</ButtonGroup>

<ButtonGroup toolbar className="gap-2">
  <ButtonGroup>
    <Button outline="secondary">1</Button>
    <Button outline="secondary">2</Button>
    <Button outline="secondary">3</Button>
    <Button outline="secondary">4</Button>
  </ButtonGroup>

  <div className="input-group">
    <div className="input-group-text" id="btnGroupAddon">
      @
    </div>
    <input
      type="text"
      className="form-control"
      placeholder="Input group example"
      aria-label="Input group example"
      aria-describedby="btnGroupAddon"
    />
  </div>
</ButtonGroup>

<ButtonGroup toolbar className="justify-content-between gap-2">
  <ButtonGroup>
    <Button outline="secondary">1</Button>
    <Button outline="secondary">2</Button>
    <Button outline="secondary">3</Button>
    <Button outline="secondary">4</Button>
  </ButtonGroup>

  <div className="input-group">
    <div className="input-group-text" id="btnGroupAddon2">
      @
    </div>
    <input
      type="text"
      className="form-control"
      placeholder="Input group example"
      aria-label="Input group example"
      aria-describedby="btnGroupAddon2"
    />
  </div>
</ButtonGroup>
    `,
  },
  size: {
    code: `
<ButtonGroup size="lg">
  <Button outline="primary">Left</Button>
  <Button outline="primary">Middle</Button>
  <Button outline="primary">Right</Button>
</ButtonGroup>

<ButtonGroup>
  <Button outline="primary">Left</Button>
  <Button outline="primary">Middle</Button>
  <Button outline="primary">Right</Button>
</ButtonGroup>

<ButtonGroup size="sm">
  <Button outline="primary">Left</Button>
  <Button outline="primary">Middle</Button>
  <Button outline="primary">Right</Button>
</ButtonGroup>
    `,
  },
  vertical: {
    code: `
<ButtonGroup vertical>
  <Button variant="primary">Button</Button>
  <Button variant="primary">Button</Button>
  <Button variant="primary">Button</Button>
  <Button variant="primary">Button</Button>
</ButtonGroup>

<ButtonGroup vertical>
  <input
    type="radio"
    className="btn-check"
    name="vbtn-radio"
    id="vbtn-radio1"
    autoComplete="off"
    defaultChecked
  />
  <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">
    Radio 1
  </label>
  <input
    type="radio"
    className="btn-check"
    name="vbtn-radio"
    id="vbtn-radio2"
    autoComplete="off"
  />
  <label className="btn btn-outline-danger" htmlFor="vbtn-radio2">
    Radio 2
  </label>
  <input
    type="radio"
    className="btn-check"
    name="vbtn-radio"
    id="vbtn-radio3"
    autoComplete="off"
  />
  <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">
    Radio 3
  </label>
</ButtonGroup>
    `,
  },
  example: {
    code: `
const [mySize, setMySize] = useState<'lg' | 'sm'>('sm');

function onClickChangeSizeTest() {
  setMySize(mySize === 'sm' ? 'lg' : 'sm');
}

<ButtonGroup size={mySize}>
  <Button variant="primary" onClick={onClickChangeSizeTest}>
    Click
  </Button>
  <Button variant="primary" onClick={onClickChangeSizeTest}>
    Change Button
  </Button>
  <Button variant="primary" onClick={onClickChangeSizeTest}>
    Size ({mySize})
  </Button>
</ButtonGroup>
    `,
  },
};

export default buttonGroupCodes;
