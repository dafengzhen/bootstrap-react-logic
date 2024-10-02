const inputCodes = {
  basic: {
    code: `
<Label htmlFor="exampleFormControlInput1">Email address</Label>
<Input
  type="email"
  id="exampleFormControlInput1"
  placeholder="name@example.com"
></Input>

<Label htmlFor="exampleFormControlTextarea1">
  Example textarea
</Label>
<Textarea id="exampleFormControlTextarea1" rows={3}></Textarea>
        `,
  },
  size: {
    code: `
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
    `,
  },
  text: {
    code: `
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

<Label htmlFor="inputPassword6" colFormLabel>
  Password
</Label>
<Input
  type="password"
  id="inputPassword6"
  aria-describedby="passwordHelpInline"
  autoComplete="new-password"
/>
<Text as="span">Must be 8-20 characters long.</Text>
    `,
  },
  disabled: {
    code: `
<Input
  type="text"
  placeholder="Disabled input"
  aria-label="Disabled input example"
  disabled
/>
    
<Input
  type="text"
  value="Disabled readonly input"
  aria-label="Disabled input example"
  disabled
  readOnly
/>
    `,
  },
  readonly: {
    code: `
<Input
  type="text"
  value="Readonly input here..."
  aria-label="readonly input example"
  readOnly
/>
    `,
  },
  readonlyPlainText: {
    code: `
<Label htmlFor="staticEmail" className="col-sm-2">
  Email
</Label>
<Input
  type="text"
  readOnly
  readonlyPlainText
  id="staticEmail"
  value="email@example.com"
/>

<Label htmlFor="inputPassword" className="col-sm-2">
  Password
</Label>
<Input type="password" id="inputPassword" />
    `,
  },
};

export default inputCodes;
