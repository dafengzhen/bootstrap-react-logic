```jsx
<form>
  <Label htmlFor="inputPassword5">Password</Label>
  <Input
    type="text"
    name="username"
    autoComplete="username"
    defaultValue="hiddenUsername"
    className="d-none"
  />
  <Input
    type="password"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
    autoComplete="new-password"
  />
  <Text>
    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
    special characters, or emoji.
  </Text>
</form>

<form>
  <div className="row g-3 align-items-center">
    <div className="col-auto">
      <Label htmlFor="inputPassword6" colFormLabel>
        Password
      </Label>
    </div>
    <div className="col-auto">
      <Input
        type="text"
        name="username"
        autoComplete="username"
        defaultValue="hiddenUsername"
        className="d-none"
      />
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
```
