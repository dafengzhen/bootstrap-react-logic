```jsx
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
```
