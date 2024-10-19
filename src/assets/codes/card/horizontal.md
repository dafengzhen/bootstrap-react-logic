```jsx
<Card style={{ maxWidth: '540px' }}>
  <div className="row g-0">
    <div className="col-md-4">
      <CardImg
        as="svg"
        style={{
          fontSize: '1.125rem',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          userSelect: 'none',
          textAnchor: 'middle',
        }}
        width="100%"
        height="180"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Image cap"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        className="img-fluid rounded-start"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
          Image
        </text>
      </CardImg>
    </div>
    <div className="col-md-8">
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
          little bit longer.
        </CardText>
        <CardText>
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </CardText>
      </CardBody>
    </div>
  </div>
</Card>
```
