```jsx
<div className="row g-2">
  <div className="col-md">
    <FloatingLabel>
      <Input type="email" id="floatingInputGrid" placeholder="name@example.com" defaultValue="mdo@example.com" />
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
```
