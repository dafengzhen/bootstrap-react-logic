const radioCodes = {
  basic: {
    code: `
<div className="form-check">
  <Radio name="flexRadioDefault" id="flexRadioDefault1"></Radio>
  <Label formCheckLabel htmlFor="flexRadioDefault1">
    Default radio
  </Label>
</div>

<Radio defaultChecked name="flexRadioDefault" id="flexRadioDefault2">
  Default checked radio
</Radio>
    `,
  },
  disabled: {
    code: `
<Radio name="flexRadioDisabled" id="flexRadioDisabled" disabled>
  Disabled radio
</Radio>

<div className="form-check">
  <Radio name="flexRadioDisabled" id="flexRadioCheckedDisabled" disabled defaultChecked></Radio>
  <Label formCheckLabel htmlFor="flexRadioCheckedDisabled">
    Disabled checked radio
  </Label>
</div>
    `,
  },
  inline: {
    code: `
<Radio inline name="inlineRadioOptions" id="inlineRadio1" value="option1">
  1
</Radio>

<div className="form-check form-check-inline">
  <Radio name="inlineRadioOptions" id="inlineRadio2" value="option2"></Radio>
  <Label formCheckLabel htmlFor="inlineRadio2">
    2
  </Label>
</div>

<div className="form-check form-check-inline">
  <Radio name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled></Radio>
  <Label formCheckLabel htmlFor="inlineRadio3">
    3 (disabled)
  </Label>
</div>
    `,
  },
  withoutLabels: {
    code: `
<Radio />
    `,
  },
  toggleButtons: {
    code: `
<Radio
  dropOldClass
  className="btn-check"
  name="options"
  id="option1"
  autoComplete="off"
  defaultChecked
></Radio>
<Label dropOldClass className="btn btn-secondary" htmlFor="option1">
  Checked
</Label>

<Radio dropOldClass className="btn-check" name="options" id="option2" autoComplete="off"></Radio>
<Label dropOldClass className="btn btn-secondary" htmlFor="option2">
  Radio
</Label>

<Radio dropOldClass className="btn-check" name="options" id="option3" autoComplete="off" disabled></Radio>
<Label dropOldClass className="btn btn-secondary" htmlFor="option3">
  Disabled
</Label>

<Radio dropOldClass className="btn-check" name="options" id="option4" autoComplete="off"></Radio>
<Label dropOldClass className="btn btn-secondary" htmlFor="option4">
  Radio
</Label>
    `,
  },
  outlinedStyles: {
    code: `
<Radio
  dropOldClass
  className="btn-check"
  name="options-outlined"
  id="success-outlined"
  autoComplete="off"
  defaultChecked
></Radio>
<Label dropOldClass className="btn btn-outline-success" htmlFor="success-outlined">
  Checked success radio
</Label>

<Radio
  dropOldClass
  className="btn-check"
  name="options-outlined"
  id="danger-outlined"
  autoComplete="off"
></Radio>
<Label dropOldClass className="btn btn-outline-danger" htmlFor="danger-outlined">
  Danger radio
</Label>
    `,
  },
};

export default radioCodes;
