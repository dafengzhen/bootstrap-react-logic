import type { CodeType } from '@src/types';

const cardCodes = {
  basic: {
    code: `
<Card style={{ width: '18rem' }}>
  <CardImg top src="" alt=""></CardImg>
  <CardBody>
    <CardTitle>Card title</CardTitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </CardText>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </CardBody>
</Card>
    `,
  },
  body: {
    code: `
<Card>
  <CardBody>This is some text within a card body.</CardBody>
</Card>
    `,
  },
  titlesTextAndLinks: {
    code: `
<Card style={{ width: '18rem' }}>
  <CardBody>
    <CardTitle>Card title</CardTitle>
    <CardSubtitle className="mb-2 text-body-secondary">
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </CardText>
    <CardLink href="#">Card link</CardLink>
    <CardLink href="#">Another link</CardLink>
  </CardBody>
</Card>
    `,
  },
  images: {
    code: `
<Card style={{ width: '18rem' }}>
  <CardImg top src="" alt="" />
  <CardBody>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </CardText>
  </CardBody>
</Card>
    `,
  },
  listGroups: {
    code: `
<Card style={{ width: '18rem' }}>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
</Card>

<Card style={{ width: '18rem' }}>
  <CardHeader>Featured</CardHeader>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
</Card>

<Card style={{ width: '18rem' }}>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <CardFooter>Card footer</CardFooter>
</Card>
    `,
  },
  cardGroups: {
    code: `
<CardGroup>
  <Card>
    <CardImg
      top
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
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
      <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
        Image cap
      </text>
    </CardImg>
    <CardBody>
      <CardTitle as="h5">Card title</CardTitle>
      <CardText as="p">
        This is a wider card with supporting text below as a natural lead-in to additional content. This
        content is a little bit longer.
      </CardText>
      <CardText as="p">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </CardText>
    </CardBody>
  </Card>

  <Card>
    <CardImg
      top
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
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
      <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
        Image cap
      </text>
    </CardImg>
    <CardBody>
      <CardTitle as="h5">Card title</CardTitle>
      <CardText as="p">
        This is a wider card with supporting text below as a natural lead-in to additional content. This
        content is a little bit longer.
      </CardText>
      <CardText as="p">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </CardText>
    </CardBody>
  </Card>

  <Card>
    <CardImg
      top
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
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
      <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
        Image cap
      </text>
    </CardImg>
    <CardBody>
      <CardTitle as="h5">Card title</CardTitle>
      <CardText as="p">
        This is a wider card with supporting text below as a natural lead-in to additional content. This
        content is a little bit longer.
      </CardText>
      <CardText as="p">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </CardText>
    </CardBody>
  </Card>
</CardGroup>
    `,
  },
  kitchenSink: {
    code: `
<Card style={{ width: '18rem' }}>
  <CardImg top src="" alt="" />
  <CardBody>
    <CardTitle>Card title</CardTitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </CardText>
  </CardBody>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <CardBody>
    <CardLink href="#">Card link</CardLink>
    <CardLink href="#">Another link</CardLink>
  </CardBody>
</Card>
    `,
  },
  headerAndFooter: {
    code: `
<Card>
  <CardHeader>Featured</CardHeader>
  <CardBody>
    <CardTitle>Special title treatment</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </CardBody>
</Card>

<Card>
  <CardHeader>Quote</CardHeader>
  <CardBody>
    <blockquote className="blockquote mb-0">
      <p>A well-known quote, contained in a blockquote element.</p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </CardBody>
</Card>

<Card className="text-center">
  <CardHeader>Featured</CardHeader>
  <CardBody>
    <CardTitle>Special title treatment</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </CardBody>
  <CardFooter className="text-body-secondary">2 days ago</CardFooter>
</Card>
    `,
  },
  usingGridMarkup: {
    code: `
<div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <Card>
      <CardBody>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </CardBody>
    </Card>
  </div>
  <div className="col-sm-6">
    <Card>
      <CardBody>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </CardBody>
    </Card>
  </div>
</div>
    `,
  },
  usingUtilities: {
    code: `
    
    `,
  },
  usingCustomCss: {
    code: `
    
    `,
  },
};

export default cardCodes as CodeType;
