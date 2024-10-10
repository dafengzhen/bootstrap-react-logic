const checkboxCodes = {
  basic: {
    code: `
<div className="form-check">
  <Checkbox value="" id="flexCheckDefault"></Checkbox>
  <Label formCheckLabel htmlFor="flexCheckDefault">
    Default checkbox
  </Label>
</div>
  
<Checkbox defaultChecked value="" id="flexCheckChecked">
  Checked checkbox
</Checkbox>
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
  switch: {
    code: `
<Checkbox switch value="" id="flexSwitchCheckDefault">
  Default switch checkbox input
</Checkbox>

<div className="form-check form-switch">
  <Checkbox defaultChecked value="" id="flexSwitchCheckChecked" role="switch"></Checkbox>
  <Label formCheckLabel htmlFor="flexSwitchCheckChecked">
    Checked switch checkbox input
  </Label>
</div>

<div className="form-check form-switch">
  <Checkbox disabled value="" id="flexSwitchCheckDisabled" role="switch"></Checkbox>
  <Label formCheckLabel htmlFor="flexSwitchCheckDisabled">
    Disabled switch checkbox input
  </Label>
</div>

<div className="form-check form-switch">
  <Checkbox defaultChecked disabled value="" id="flexSwitchCheckCheckedDisabled" role="switch"></Checkbox>
  <Label formCheckLabel htmlFor="flexSwitchCheckCheckedDisabled">
    Disabled checked switch checkbox input
  </Label>
</div>
    `,
  },
  inline: {
    code: `
<Checkbox inline value="option1" id="inlineCheckbox1">
  1
</Checkbox>

<div className="form-check form-check-inline">
  <Checkbox value="option2" id="inlineCheckbox2"></Checkbox>
  <Label formCheckLabel htmlFor="inlineCheckbox2">
    2
  </Label>
</div>

<div className="form-check form-check-inline">
  <Checkbox disabled value="option3" id="inlineCheckbox3"></Checkbox>
  <Label formCheckLabel htmlFor="inlineCheckbox3">
    3 (disabled)
  </Label>
</div>
    `,
  },
  reverse: {
    code: `
<Checkbox reverse value="option1" id="reverseCheck1">
  Reverse checkbox
</Checkbox>

<div className="form-check form-check-reverse">
  <Checkbox disabled value="" id="reverseCheck2"></Checkbox>
  <Label formCheckLabel htmlFor="reverseCheck2">
    Disabled reverse checkbox
  </Label>
</div>

<div className="form-check form-switch form-check-reverse">
  <Checkbox value="" id="flexSwitchCheckReverse"></Checkbox>
  <Label formCheckLabel htmlFor="flexSwitchCheckReverse">
    Reverse switch checkbox input
  </Label>
</div>
    `,
  },
  withoutLabels: {
    code: `
<Checkbox value="" />
    `,
  },
  toggleButtons: {
    code: `
<Checkbox dropOldClass value="" className="btn-check" autoComplete="off" id="btn-check"></Checkbox>
<Label dropOldClass className="btn btn-primary" htmlFor="btn-check">
  Single toggle
</Label>

<Checkbox
  defaultChecked
  dropOldClass
  value=""
  className="btn-check"
  autoComplete="off"
  id="btn-check-2"
></Checkbox>
<Label dropOldClass className="btn btn-primary" htmlFor="btn-check-2">
  Checked
</Label>

<Checkbox
  dropOldClass
  disabled
  value=""
  className="btn-check"
  autoComplete="off"
  id="btn-check-3"
></Checkbox>
<Label dropOldClass className="btn btn-primary" htmlFor="btn-check-3">
  Disabled
</Label>
    `,
  },
  outlinedStyles: {
    code: `
<Checkbox dropOldClass value="" className="btn-check" autoComplete="off" id="btn-check-outlined"></Checkbox>
<Label dropOldClass className="btn btn-outline-primary" htmlFor="btn-check-outlined">
  Single toggle
</Label>

<Checkbox
  defaultChecked
  dropOldClass
  value=""
  className="btn-check"
  autoComplete="off"
  id="btn-check-2-outlined"
></Checkbox>
<Label dropOldClass className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined">
  Checked
</Label>
    `,
  },
};

export default checkboxCodes;
