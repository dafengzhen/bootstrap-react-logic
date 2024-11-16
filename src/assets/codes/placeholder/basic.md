```jsx
<Example
  hash="basic"
  parentClassName="d-flex bd-example-placeholder-cards justify-content-around"
  row
  state={state}
  t={tPlaceholderPage}
>
  <div className="card">
    <ExampleCardImg fill="#20c997" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <a className="btn btn-primary" href="#">
        Go somewhere
      </a>
    </div>
  </div>

  <div aria-hidden="true" className="card">
    <ExampleCardImg fill="#868e96" />
    <div className="card-body">
      <h5 className="card-title">
        <Placeholder animation="glow" col={6} />
      </h5>

      <p className="card-text placeholder-glow">
        <Placeholder className="me-1" col={7} />
        <Placeholder col={4} />
        <Placeholder className="me-1" col={4} />
        <Placeholder col={6} />
        <Placeholder col={8} />
      </p>

      <Placeholder as="a" className="btn btn-primary disabled" col={6} ria-disabled="true" />
    </div>
  </div>
```
