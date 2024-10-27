```jsx
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
  options={[
    {
      text: 'Primary',
    },
    {
      text: 'Secondary',
    },
    {
      text: 'Success',
    },
    {
      text: 'Danger',
    },
    {
      text: 'Warning',
    },
    {
      text: 'Info',
    },
  ]}
></SelectMultiple>

<SelectMultiple disabled placeholder="Please select"></SelectMultiple>

<SelectMultiple
  single
  placeholder="Please select"
  options={[
    {
      text: 'Primary',
    },
    {
      text: 'Secondary',
      active: true,
    },
    {
      text: 'Success',
      disabled: true,
    },
    {
      text: 'Danger',
    },
    {
      text: 'Warning',
    },
    {
      text: 'Info',
    },
  ]}
></SelectMultiple>

<SelectMultiple
  placeholder="Please select"
  options={[
    {
      text: 'Primary',
    },
    {
      text: 'Secondary',
      active: true,
    },
    {
      text: 'Success',
    },
    {
      text: 'Danger',

      active: true,
    },
    {
      text: 'Warning',
    },
    {
      text: 'Info',
    },
  ]}
></SelectMultiple>

<SelectMultiple
  placeholder="Please select"
  options={[
    {
      text: 'Primary',
    },
    {
      text: 'Secondary',
      active: true,
    },
    {
      text: 'Success',
    },
    {
      divider: 'top',
      text: 'Danger',
    },
    {
      text: 'Warning',
      divider: 'bottom',
    },
    {
      text: 'Info',
    },
  ]}
></SelectMultiple>

<SelectMultiple
  placeholder="Please select"
  options={[
    {
      header: 'Status and Importance',
      text: 'Primary',
    },
    {
      header: 'Status and Importance',
      text: 'Secondary',
      active: true,
    },
    {
      header: 'Status and Importance',
      text: 'Success',
    },
    {
      header: 'Status and Importance',
      text: 'Danger',
      active: true,
    },
    {
      header: 'Warning and Information',
      text: 'Warning',
    },
    {
      header: 'Warning and Information',
      text: 'Info',
    },
  ]}
></SelectMultiple>

<SelectMultiple
  hideActiveOptions
  selectableCount={4}
  placeholder="Please select"
  options={[
    {
      text: 'Primary',
    },
    {
      text: 'Secondary',
      active: true,
    },
    {
      text: 'Success',
      active: true,
    },
    {
      text: 'Danger',
      active: true,
    },
    {
      text: 'Warning',
    },
    {
      text: 'Info',
    },
  ]}
></SelectMultiple>
```
