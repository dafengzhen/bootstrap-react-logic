```jsx
<InputGroup>
  <InputGroupText id="basic-addon1">@</InputGroupText>
  <Input type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
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
    <InputGroupText id="basic-addon3">https://example.com/users/</InputGroupText>
    <Input type="text" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
  </InputGroup>
  <Text id="basic-addon4">Example help text goes outside the input group.</Text>
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
```
