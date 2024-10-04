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
