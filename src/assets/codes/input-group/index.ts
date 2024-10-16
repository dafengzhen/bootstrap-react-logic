const inputGroupCodes = {
  basic: {
    code: `
<InputGroup>
  <InputGroupText id="basic-addon1">@</InputGroupText>
  <Input
    type="text"
    placeholder="Username"
    aria-label="Username"
    aria-describedby="basic-addon1"
  />
</InputGroup>

<InputGroup>
  <Input
    type="text"
    placeholder="Recipient's username"
    aria-label="Recipient's username"
    aria-describedby="basic-addon2"
  />
  <InputGroupText id="basic-addon2">@example.com</InputGroupText>
</InputGroup>

<div>
  <Label htmlFor="basic-url">Your vanity URL</Label>
  <InputGroup>
    <InputGroupText id="basic-addon3">
      https://example.com/users/
    </InputGroupText>
    <Input
      type="text"
      id="basic-url"
      aria-describedby="basic-addon3 basic-addon4"
    />
  </InputGroup>
  <Text id="basic-addon4">
    Example help text goes outside the input group.
  </Text>
</div>

<InputGroup>
  <InputGroupText>$</InputGroupText>
  <Input type="text" aria-label="Amount (to the nearest dollar)" />
  <InputGroupText>.00</InputGroupText>
</InputGroup>

<InputGroup>
  <Input type="text" placeholder="Username" aria-label="Username" />
  <InputGroupText>@</InputGroupText>
  <Input type="text" placeholder="Server" aria-label="Server" />
</InputGroup>

<InputGroup>
  <InputGroupText>With textarea</InputGroupText>
  <Textarea aria-label="With textarea"></Textarea>
</InputGroup>
        `,
  },
  nowrap: {
    code: `
<InputGroup nowrap>
  <InputGroupText id="addon-wrapping">@</InputGroupText>
  <Input
    type="text"
    placeholder="Username"
    aria-label="Username"
    aria-describedby="addon-wrapping"
  />
</InputGroup>
    `,
  },
  size: {
    code: `
<InputGroup size="sm">
  <InputGroupText id="inputGroup-sizing-sm">Small</InputGroupText>
  <Input
    type="text"
    aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-sm"
  />
</InputGroup>

<InputGroup>
  <InputGroupText id="inputGroup-sizing-default">
    Default
  </InputGroupText>
  <Input
    type="text"
    aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-default"
  />
</InputGroup>

<InputGroup size="lg">
  <InputGroupText id="inputGroup-sizing-lg">Large</InputGroupText>
  <Input
    type="text"
    aria-label="Sizing example input"
    aria-describedby="inputGroup-sizing-lg"
  />
</InputGroup>
    `,
  },
  checkboxAndRadio: {
    code: `
<InputGroup>
  <InputGroupText as="div">
    <Input
      className="form-check-input mt-0"
      type="checkbox"
      readOnly
      aria-label="Checkbox for following text input"
    />
  </InputGroupText>
  <Input type="text" aria-label="Text input with checkbox" />
</InputGroup>

<InputGroup>
  <InputGroupText as="div">
    <Input
      className="form-check-input mt-0"
      type="radio"
      readOnly
      aria-label="Radio button for following text input"
    />
  </InputGroupText>
  <Input type="text" aria-label="Text input with radio button" />
</InputGroup>
    `,
  },
  multipleInput: {
    code: `
<InputGroup>
  <InputGroupText className="input-group-text">
    First and last name
  </InputGroupText>
  <Input type="text" aria-label="First name" />
  <Input type="text" aria-label="Last name" />
</InputGroup>
    `,
  },
  multipleAddons: {
    code: `
<InputGroup>
  <InputGroupText>$</InputGroupText>
  <InputGroupText>0.00</InputGroupText>
  <Input
    type="text"
    aria-label="Dollar amount (with dot and two decimal places)"
  />
</InputGroup>

<InputGroup>
  <Input
    type="text"
    aria-label="Dollar amount (with dot and two decimal places)"
  />
  <InputGroupText>$</InputGroupText>
  <InputGroupText>0.00</InputGroupText>
</InputGroup>
    `,
  },
  buttonAddons: {
    code: `
<InputGroup>
  <Button outline="secondary" type="button" id="button-addon1">
    Button
  </Button>
  <Input
    type="text"
    placeholder=""
    aria-label="Example text with button addon"
    aria-describedby="button-addon1"
  />
</InputGroup>

<InputGroup>
  <Input
    type="text"
    placeholder="Recipient's username"
    aria-label="Recipient's username"
    aria-describedby="button-addon2"
  />
  <Button outline="secondary" type="button" id="button-addon2">
    Button
  </Button>
</InputGroup>

<InputGroup>
  <Button outline="secondary" type="button">
    Button
  </Button>
  <Button outline="secondary" type="button">
    Button
  </Button>
  <Input
    type="text"
    placeholder=""
    aria-label="Example text with two button addons"
  />
</InputGroup>

<InputGroup>
  <Input
    type="text"
    placeholder="Recipient's username"
    aria-label="Recipient's username with two button addons"
  />
  <Button outline="secondary" type="button">
    Button
  </Button>
  <Button outline="secondary" type="button">
    Button
  </Button>
</InputGroup>
    `,
  },
  customSelect: {
    code: `
<InputGroup>
  <Label inputGroupText htmlFor="inputGroupSelect01">
    Options
  </Label>
  <select className="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</InputGroup>

<InputGroup>
  <select className="form-select" id="inputGroupSelect02">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <Label inputGroupText htmlFor="inputGroupSelect02">
    Options
  </Label>
</InputGroup>

<InputGroup>
  <Button outline="secondary" type="button">
    Button
  </Button>
  <select
    className="form-select"
    id="inputGroupSelect03"
    aria-label="Example select with button addon"
  >
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</InputGroup>

<InputGroup>
  <select
    className="form-select"
    id="inputGroupSelect04"
    aria-label="Example select with button addon"
  >
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <Button outline="secondary" type="button">
    Button
  </Button>
</InputGroup>
    `,
  },
  customFileInput: {
    code: `
<InputGroup>
  <Label inputGroupText htmlFor="inputGroupFile01">
    Upload
  </Label>
  <Input type="file" id="inputGroupFile01" />
</InputGroup>

<InputGroup>
  <Input type="file" id="inputGroupFile02" />
  <Label inputGroupText htmlFor="inputGroupFile02">
    Upload
  </Label>
</InputGroup>

<InputGroup>
  <Button
    outline="secondary"
    type="button"
    id="inputGroupFileAddon03"
  >
    Button
  </Button>
  <Input
    type="file"
    id="inputGroupFile03"
    aria-describedby="inputGroupFileAddon03"
    aria-label="Upload"
  />
</InputGroup>

<InputGroup>
  <Input
    type="file"
    id="inputGroupFile04"
    aria-describedby="inputGroupFileAddon04"
    aria-label="Upload"
  />
  <Button
    outline="secondary"
    type="button"
    id="inputGroupFileAddon04"
  >
    Button
  </Button>
</InputGroup>
    `,
  },
};

export default inputGroupCodes;
