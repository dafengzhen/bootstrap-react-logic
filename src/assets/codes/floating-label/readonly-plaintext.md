```jsx
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
```
