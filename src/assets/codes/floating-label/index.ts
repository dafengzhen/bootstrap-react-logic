const floatingLabelCodes = {
  basic: {
    code: `
<FloatingLabel>
  <Input type="email" id="floatingInput" placeholder="name@example.com" />
  <Label htmlFor="floatingInput">Email address</Label>
</FloatingLabel>

<FloatingLabel>
  <Input type="password" id="floatingPassword" placeholder="Password" />
  <Label htmlFor="floatingPassword">Password</Label>
</FloatingLabel>

<FloatingLabel as="form">
  <Input
    type="email"
    id="floatingInputValue"
    placeholder="name@example.com"
    defaultValue="test@example.com"
  />
  <Label htmlFor="floatingInputValue">Input with value</Label>
</FloatingLabel>

<FloatingLabel as="form">
  <Input
    invalid
    type="email"
    id="floatingInputInvalid"
    placeholder="name@example.com"
    defaultValue="test@example.com"
  />
  <Label htmlFor="floatingInputInvalid">Invalid input</Label>
</FloatingLabel>
    `,
  },
  textarea: {
    code: `
<FloatingLabel>
  <Textarea placeholder="Leave a comment here" id="floatingTextarea"></Textarea>
  <Label htmlFor="floatingTextarea">Comments</Label>
</FloatingLabel>

<FloatingLabel>
  <Textarea placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }}></Textarea>
  <Label htmlFor="floatingTextarea2">Comments</Label>
</FloatingLabel>
    `,
  },
  select: {
    code: `
<FloatingLabel>
  <Select id="floatingSelect" aria-label="Floating label select example">
    <SelectOption defaultChecked>Open this select menu</SelectOption>
    <SelectOption value="1">One</SelectOption>
    <SelectOption value="2">Two</SelectOption>
    <SelectOption value="3">Three</SelectOption>
  </Select>
  <label htmlFor="floatingSelect">Works with selects</label>
</FloatingLabel>
    `,
  },
  disabled: {
    code: `
<FloatingLabel>
  <Input type="email" id="floatingInputDisabled" placeholder="name@example.com" disabled />
  <Label htmlFor="floatingInputDisabled">Email address</Label>
</FloatingLabel>

<FloatingLabel>
  <Textarea placeholder="Leave a comment here" id="floatingTextareaDisabled" disabled></Textarea>
  <Label htmlFor="floatingTextareaDisabled">Comments</Label>
</FloatingLabel>

<FloatingLabel>
  <Textarea
    placeholder="Leave a comment here"
    id="floatingTextarea2Disabled"
    style={{ height: 100 }}
    disabled
  >
    Disabled textarea with some text inside
  </Textarea>
  <Label htmlFor="floatingTextarea2Disabled">Comments</Label>
</FloatingLabel>

<FloatingLabel>
  <Select id="floatingSelectDisabled" aria-label="Floating label disabled select example" disabled>
    <SelectOption defaultChecked>Open this select menu</SelectOption>
    <SelectOption value="1">One</SelectOption>
    <SelectOption value="2">Two</SelectOption>
    <SelectOption value="3">Three</SelectOption>
  </Select>
  <Label htmlFor="floatingSelectDisabled">Works with selects</Label>
</FloatingLabel>
    `,
  },
  readonlyPlaintext: {
    code: `
<FloatingLabel>
  <Input
    type="email"
    readOnly
    readonlyPlainText
    id="floatingEmptyPlaintextInput"
    placeholder="name@example.com"
  />
  <Label htmlFor="floatingEmptyPlaintextInput">Empty input</Label>
</FloatingLabel>

<FloatingLabel>
  <Input
    type="email"
    readOnly
    readonlyPlainText
    id="floatingPlaintextInput"
    placeholder="name@example.com"
    value="name@example.com"
  />
  <Label htmlFor="floatingPlaintextInput">Input with value</Label>
</FloatingLabel>
    `,
  },
  inputGroups: {
    code: `
<InputGroup>
  <InputGroupText>@</InputGroupText>
  <FloatingLabel>
    <Input type="text" id="floatingInputGroup1" placeholder="Username" />
    <Label htmlFor="floatingInputGroup1">Username</Label>
  </FloatingLabel>
</InputGroup>

<InputGroup hasValidation>
  <InputGroupText>@</InputGroupText>
  <FloatingLabel invalid>
    <Input type="text" invalid id="floatingInputGroup2" placeholder="Username" required />
    <Label htmlFor="floatingInputGroup2">Username</Label>
  </FloatingLabel>
  <Text invalidFeedback>Please choose a username.</Text>
</InputGroup>
    `,
  },
  layout: {
    code: `
<div className="row g-2">
  <div className="col-md">
    <FloatingLabel>
      <Input
        type="email"
        id="floatingInputGrid"
        placeholder="name@example.com"
        defaultValue="mdo@example.com"
      />
      <Label htmlFor="floatingInputGrid">Email address</Label>
    </FloatingLabel>
  </div>

  <div className="col-md">
    <FloatingLabel>
      <Select id="floatingSelectGrid">
        <SelectOption defaultChecked>Open this select menu</SelectOption>
        <SelectOption value="1">One</SelectOption>
        <SelectOption value="2">Two</SelectOption>
        <SelectOption value="3">Three</SelectOption>
      </Select>
      <Label htmlFor="floatingSelectGrid">Works with selects</Label>
    </FloatingLabel>
  </div>
</div>
    `,
  },
};

export default floatingLabelCodes;
