```jsx
<button type="button" className="btn btn-primary position-relative">
  Inbox
  <Badge
    variant="danger"
    variantType="bg"
    rounded="pill"
    className="position-absolute top-0 start-100 translate-middle"
  >
    99+
    <span className="visually-hidden">unread messages</span>
  </Badge>
</button>

<button type="button" className="btn btn-primary position-relative">
  Profile
  <Badge
    variant="danger"
    variantType="bg"
    rounded="circle"
    className="position-absolute top-0 start-100 translate-middle p-2 border border-light"
  >
    <span className="visually-hidden">New alerts</span>
  </Badge>
</button>
```
