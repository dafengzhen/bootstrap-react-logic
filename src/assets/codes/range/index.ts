const rangeCodes = {
  basic: {
    code: `
<Label htmlFor="customRange1">Example range</Label>
<Range id="customRange1" />
    `,
  },
  disabled: {
    code: `
<Label htmlFor="disabledRange">Disabled range</Label>
<Range id="disabledRange" disabled />
    `,
  },
  minAndMax: {
    code: `
<Label htmlFor="customRange2">Example range</Label>
<Range min="0" max="5" id="customRange2" />
    `,
  },
  steps: {
    code: `
<Label htmlFor="customRange3">Example range</Label>
<Range min="0" max="5" step="0.5" id="customRange3" />
    `,
  },
};

export default rangeCodes;
