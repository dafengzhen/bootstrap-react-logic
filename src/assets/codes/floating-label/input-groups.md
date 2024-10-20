```jsx
<InputGroup>
  <InputGroupText>@</InputGroupText>
  <FloatingLabel>
    <Input type="text" id="floatingInputGroup1" placeholder="Username" />
    <Label htmlFor="floatingInputGroup1">Username</Label>
  </FloatingLabel>
</InputGroup>

<InputGroup hasValidation>
  <InputGroupText>@</InputGroupText>
  <FloatingLabel isInvalid>
    <Input type="text" isInvalid id="floatingInputGroup2" placeholder="Username" required />
    <Label htmlFor="floatingInputGroup2">Username</Label>
  </FloatingLabel>
  <Text invalidFeedback>Please choose a username.</Text>
</InputGroup>
```
