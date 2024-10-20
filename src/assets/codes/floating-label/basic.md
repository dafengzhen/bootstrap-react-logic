```jsx
<FloatingLabel>
  <Input type="email" id="floatingInput" placeholder="name@example.com" />
  <Label htmlFor="floatingInput">Email address</Label>
</FloatingLabel>

<FloatingLabel as="form">
  <Input
    type="text"
    name="username"
    autoComplete="username"
    defaultValue="hiddenUsername"
    className="d-none"
  />
  <Input type="password" autoComplete="new-password" id="floatingPassword" placeholder="Password" />
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
    isInvalid
    type="email"
    id="floatingInputInvalid"
    placeholder="name@example.com"
    defaultValue="test@example.com"
  />
  <Label htmlFor="floatingInputInvalid">Invalid input</Label>
</FloatingLabel>
```
