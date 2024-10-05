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
      label: 'Primary',
      value: 1
    },
    {
      label: 'Secondary',
      value: 1,
      active: true
    },
    {
      label: 'Success',
      value: 1,
      disabled: true
    },
    {
      label: 'Danger',
      value: 2
    },
    {
      label: 'Warning',
      value: 3
    },
    {
      label: 'Info',
      value: 4
    }
  ]}
></SelectMultiple>

<SelectMultiple
  placeholder="Please select"
  options={[
    {
      label: 'Primary',
      value: 1
    },
    {
      label: 'Secondary',
      value: 1,
      active: true
    },
    {
      label: 'Success',
      value: 1
    },
    {
      label: 'Danger',
      value: 2,
      active: true
    },
    {
      label: 'Warning',
      value: 3
    },
    {
      label: 'Info',
      value: 4
    }
  ]}
></SelectMultiple>

<SelectMultiple
  placeholder="Please select"
  options={[
    {
      label: 'Primary',
      value: 1
    },
    {
      label: 'Secondary',
      value: 1,
      active: true
    },
    {
      label: 'Success',
      value: 1
    },
    {
      divider: 'top',
      label: 'Danger',
      value: 2
    },
    {
      label: 'Warning',
      value: 3,
      divider: 'bottom'
    },
    {
      label: 'Info',
      value: 4
    }
  ]}
></SelectMultiple>

<SelectMultiple
  placeholder="Please select"
  options={[
    {
      header: 'Status and Importance',
      label: 'Primary',
      value: 1
    },
    {
      header: 'Status and Importance',
      label: 'Secondary',
      value: 1,
      active: true
    },
    {
      header: 'Status and Importance',
      label: 'Success',
      value: 1
    },
    {
      header: 'Status and Importance',
      label: 'Danger',
      value: 2,
      active: true
    },
    {
      header: 'Warning and Information',
      label: 'Warning',
      value: 3
    },
    {
      header: 'Warning and Information',
      label: 'Info',
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
      label: 'Primary',
      value: 1
    },
    {
      label: 'Secondary',
      value: 1,
      active: true
    },
    {
      label: 'Success',
      value: 1,
      active: true
    },
    {
      label: 'Danger',
      value: 2,
      active: true
    },
    {
      label: 'Warning',
      value: 3
    },
    {
      label: 'Info',
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
