```jsx
<Progress bg="success" now={25} />

<Progress bg="info" now={50} />

<Progress bg="warning" now={75} />

<Progress bg="danger" now={100} />

<Progress bg="success" now={25}>
  25%
</Progress>

<Progress barProps={{ className: 'text-dark' }} bg="info" now={50}>
  50%
</Progress>

<Progress barProps={{ className: 'text-dark' }} bg="warning" now={75}>
  75%
</Progress>

<Progress bg="danger" now={100}>
  100%
</Progress>

<Progress barProps={{ className: 'text-bg-warning' }} bg="warning" now={75}>
  75%
</Progress>
```
