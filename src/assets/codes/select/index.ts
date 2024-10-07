const selectCodes = {
  basic: {
    code: `
<Select aria-label="Default select example">
  <SelectOption defaultValue="">Open this select menu</SelectOption>
  <SelectOption disabled value="1">
    One
  </SelectOption>
  <SelectOption value="2">Two</SelectOption>
  <SelectOption value="3">Three</SelectOption>
</Select>
    `,
  },
  size: {
    code: `
<Select size="lg" aria-label="Large select example">
  <SelectOption defaultValue="">Open this select menu</SelectOption>
  <SelectOption value="1">One</SelectOption>
  <SelectOption value="2">Two</SelectOption>
  <SelectOption value="3">Three</SelectOption>
</Select>

<Select size="sm" aria-label="Small select example">
  <SelectOption defaultValue="">Open this select menu</SelectOption>
  <SelectOption value="1">One</SelectOption>
  <SelectOption value="2">Two</SelectOption>
  <SelectOption value="3">Three</SelectOption>
</Select>
    `,
  },
  multiple: {
    code: `
<Select multiple aria-label="Multiple select example">
  <SelectOption defaultValue="">Open this select menu</SelectOption>
  <SelectOption value="1">One</SelectOption>
  <SelectOption value="2">Two</SelectOption>
  <SelectOption value="3">Three</SelectOption>
</Select>

<Select nativeSize={3} aria-label="Size 3 select example">
  <SelectOption defaultValue="">Open this select menu</SelectOption>
  <SelectOption value="1">One</SelectOption>
  <SelectOption value="2">Two</SelectOption>
  <SelectOption value="3">Three</SelectOption>
</Select>

<SelectMultiple
  placeholder="Please select"
  options={[/** ... */]}
></SelectMultiple>

<SelectMultiple disabled placeholder="Please select"></SelectMultiple>

<SelectMultiple
  single
  placeholder="Please select"
  options={[
    {
      text: 'Primary',
      value: 1
    },
    {
      text: 'Secondary',
      value: 1,
      active: true
    },
    {
      text: 'Success',
      value: 1,
      disabled: true
    },
    {
      text: 'Danger',
      value: 2
    },
    {
      text: 'Warning',
      value: 3
    },
    {
      text: 'Info',
      value: 4
    }
  ]}
></SelectMultiple>

<SelectMultiple
  placeholder="Please select"
  options={[
    {
      text: 'Primary',
      value: 1
    },
    {
      text: 'Secondary',
      value: 1,
      active: true
    },
    {
      text: 'Success',
      value: 1
    },
    {
      text: 'Danger',
      value: 2,
      active: true
    },
    {
      text: 'Warning',
      value: 3
    },
    {
      text: 'Info',
      value: 4
    }
  ]}
></SelectMultiple>

<SelectMultiple
  placeholder="Please select"
  options={[
    {
      text: 'Primary',
      value: 1
    },
    {
      text: 'Secondary',
      value: 1,
      active: true
    },
    {
      text: 'Success',
      value: 1
    },
    {
      divider: 'top',
      text: 'Danger',
      value: 2
    },
    {
      text: 'Warning',
      value: 3,
      divider: 'bottom'
    },
    {
      text: 'Info',
      value: 4
    }
  ]}
></SelectMultiple>

<SelectMultiple
  placeholder="Please select"
  options={[
    {
      header: 'Status and Importance',
      text: 'Primary',
      value: 1
    },
    {
      header: 'Status and Importance',
      text: 'Secondary',
      value: 1,
      active: true
    },
    {
      header: 'Status and Importance',
      text: 'Success',
      value: 1
    },
    {
      header: 'Status and Importance',
      text: 'Danger',
      value: 2,
      active: true
    },
    {
      header: 'Warning and Information',
      text: 'Warning',
      value: 3
    },
    {
      header: 'Warning and Information',
      text: 'Info',
      value: 4
    }
  ]}
></SelectMultiple>

<SelectMultiple
  hideActiveOptions
  selectableCount={4}
  placeholder="Please select"
  options={[
    {
      text: 'Primary',
      value: 1
    },
    {
      text: 'Secondary',
      value: 1,
      active: true
    },
    {
      text: 'Success',
      value: 1,
      active: true
    },
    {
      text: 'Danger',
      value: 2,
      active: true
    },
    {
      text: 'Warning',
      value: 3
    },
    {
      text: 'Info',
      value: 4
    }
  ]}
></SelectMultiple>
    `,
  },
  disabled: {
    code: `
<Select aria-label="Disabled select example" disabled>
  <SelectOption defaultValue="">Open this select menu</SelectOption>
  <SelectOption value="1">One</SelectOption>
  <SelectOption value="2">Two</SelectOption>
  <SelectOption value="3">Three</SelectOption>
</Select>
    `,
  },
};

export default selectCodes;
