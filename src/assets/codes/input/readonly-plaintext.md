```jsx
<div className="row">
  <Label htmlFor="staticEmail" className="col-sm-2">
    Email
  </Label>
  <div className="col-sm-10">
    <Input type="text" readOnly readonlyPlainText id="staticEmail" value="email@example.com" />
  </div>
</div>

<form>
  <div className="row">
    <Label htmlFor="inputPassword" className="col-sm-2">
      Password
    </Label>
    <div className="col-sm-10">
      <Input
        type="text"
        name="username"
        autoComplete="username"
        defaultValue="hiddenUsername"
        className="d-none"
      />
      <Input type="password" id="inputPassword" autoComplete="new-password" />
    </div>
  </div>
</form>

<form className="row g-3">
  <div className="col-auto">
    <Label htmlFor="staticEmail2" className="visually-hidden">
      Email
    </Label>
    <Input
      type="text"
      readOnly
      readonlyPlainText
      id="staticEmail2"
      value="email@example.com"
      autoComplete="username"
    />
  </div>
  <div className="col-auto">
    <Label htmlFor="inputPassword2" className="visually-hidden">
      Password
    </Label>
    <Input
      type="text"
      name="username"
      autoComplete="username"
      defaultValue="hiddenUsername"
      className="d-none"
    />
    <Input type="password" id="inputPassword2" placeholder="Password" autoComplete="new-password" />
  </div>
  <div className="col-auto">
    <Button type="button" variant="primary">
      Confirm identity
    </Button>
  </div>
</form>
```
