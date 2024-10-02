const inputCodes = {
  basic: {
    code: `
<div className="d-flex flex-column gap-2">
  <div>
    <Label htmlFor="exampleFormControlInput1">Email address</Label>
    <Input
      type="email"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
    ></Input>
  </div>
  <div>
    <Label htmlFor="exampleFormControlTextarea1">
      Example textarea
    </Label>
    <Textarea id="exampleFormControlTextarea1" rows={3}></Textarea>
  </div>
</div>
        `,
  },
  size: {
    code: `
<div className="d-flex flex-column gap-2">
  <Input
    size="lg"
    type="text"
    placeholder=".form-control-lg"
    aria-label=".form-control-lg example"
  />
  <Input
    type="text"
    placeholder="Default input"
    aria-label="default input example"
  />
  <Input
    size="sm"
    type="text"
    placeholder=".form-control-sm"
    aria-label=".form-control-sm example"
  />
</div>
    `,
  },
  text: {
    code: `
<div className="d-flex flex-column gap-2">
  <div>
    <form>
      <Label htmlFor="inputPassword5">Password</Label>
      <Input
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        autoComplete="new-password"
      />
      <Text>
        Your password must be 8-20 characters long, contain letters and
        numbers, and must not contain spaces, special characters, or
        emoji.
      </Text>
    </form>
  </div>
  <div>
    <form>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <Label htmlFor="inputPassword6" colFormLabel>
            Password
          </Label>
        </div>
        <div className="col-auto">
          <Input
            type="password"
            id="inputPassword6"
            aria-describedby="passwordHelpInline"
            autoComplete="new-password"
          />
        </div>
        <div className="col-auto">
          <Text as="span">Must be 8-20 characters long.</Text>
        </div>
      </div>
    </form>
  </div>
</div>
    `,
  },
  size2: {
    code: `

    `,
  },
};

export default inputCodes;
