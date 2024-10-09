const checkboxCodes = {
  basic: {
    code: `
<div className="form-check">
  <Checkbox value="" id="flexCheckDefault"></Checkbox>
  <Label formCheckLabel htmlFor="flexCheckDefault">
    Default checkbox
  </Label>
</div>
  
<div className="form-check">
  <Checkbox defaultChecked value="" id="flexCheckChecked"></Checkbox>
  <Label formCheckLabel htmlFor="flexCheckChecked">
    Checked checkbox
  </Label>
</div>
    `,
  },
  indeterminate: {
    code: `
<div className="form-check">
  <Checkbox indeterminate value="" id="flexCheckIndeterminate"></Checkbox>
  <Label formCheckLabel htmlFor="flexCheckIndeterminate">
    Indeterminate checkbox
  </Label>
</div>
    `,
  },
  disabled: {
    code: `
<div className="form-check">
  <Checkbox indeterminate value="" id="flexCheckIndeterminateDisabled" disabled></Checkbox>
  <Label formCheckLabel htmlFor="flexCheckIndeterminateDisabled">
    Disabled indeterminate checkbox
  </Label>
</div>

<div className="form-check">
  <Checkbox value="" id="flexCheckDisabled" disabled></Checkbox>
  <Label formCheckLabel htmlFor="flexCheckDisabled">
    Disabled checkbox
  </Label>
</div>

<div className="form-check">
  <Checkbox value="" id="flexCheckCheckedDisabled" disabled defaultChecked></Checkbox>
  <Label formCheckLabel htmlFor="flexCheckCheckedDisabled">
    Disabled checked checkbox
  </Label>
</div>
    `,
  },
};

export default checkboxCodes;
