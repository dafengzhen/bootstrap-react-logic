import {
  CardSubtitle,
  CardFooter,
  CardHeader,
  CardGroup,
  CardTitle,
  CardBody,
  CardLink,
  CardText,
  CardImg,
  Card,
} from '@lib/card';
import PropsIndicator from '@components/props-indicator.tsx';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Example from '@components/example.tsx';
import { transformCodeObj } from '@src/tools';
import About from '@components/about.tsx';
import { useState } from 'react';

const codes = transformCodeObj(
  import.meta.glob('../assets/codes/card/*.md', { import: 'default', query: '?raw', eager: true }),
);

export default function CardPage() {
  const navigation = useNavigation();
  const { t: tCardComponentProps } = useTranslation(['cardComponentProps']);
  const { t: tCardPage } = useTranslation(['cardPage']);
  const state = useState(codes);

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example state={state} t={tCardPage} hash="basic">
        <Card style={{ width: '18rem' }}>
          <CardImg
            style={{
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              fontSize: '1.125rem',
              textAnchor: 'middle',
              userSelect: 'none',
            }}
            preserveAspectRatio="xMidYMid slice"
            aria-label="Placeholder: Image cap"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            height="180"
            width="100%"
            role="img"
            as="svg"
            top
          >
            <title>Placeholder</title>
            <rect fill="#868e96" height="100%" width="100%"></rect>
            <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
              Image cap
            </text>
          </CardImg>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <a className="btn btn-primary" href="#">
              Go somewhere
            </a>
          </CardBody>
        </Card>
      </Example>

      <Example state={state} t={tCardPage} hash="body">
        <Card>
          <CardBody>This is some text within a card body.</CardBody>
        </Card>
      </Example>

      <Example hash="titlesTextAndLinks" state={state} t={tCardPage}>
        <Card style={{ width: '18rem' }}>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle className="mb-2 text-body-secondary">Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <CardLink href="#">Card link</CardLink>
            <CardLink href="#">Another link</CardLink>
          </CardBody>
        </Card>
      </Example>

      <Example hash="images" state={state} t={tCardPage}>
        <Card style={{ width: '18rem' }}>
          <CardImg
            style={{
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              fontSize: '1.125rem',
              textAnchor: 'middle',
              userSelect: 'none',
            }}
            preserveAspectRatio="xMidYMid slice"
            aria-label="Placeholder: Image cap"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            height="180"
            width="100%"
            role="img"
            as="svg"
            top
          >
            <title>Placeholder</title>
            <rect fill="#868e96" height="100%" width="100%"></rect>
            <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
              Image cap
            </text>
          </CardImg>
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </Example>

      <Example hash="listGroups" state={state} t={tCardPage}>
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
      </Example>

      <Example hash="kitchenSink" state={state} t={tCardPage}>
        <Card style={{ width: '18rem' }}>
          <CardImg
            style={{
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              fontSize: '1.125rem',
              textAnchor: 'middle',
              userSelect: 'none',
            }}
            preserveAspectRatio="xMidYMid slice"
            aria-label="Placeholder: Image cap"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            height="180"
            width="100%"
            role="img"
            as="svg"
            top
          >
            <title>Placeholder</title>
            <rect fill="#868e96" height="100%" width="100%"></rect>
            <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
              Image cap
            </text>
          </CardImg>
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
      </Example>

      <Example hash="headerAndFooter" state={state} t={tCardPage}>
        <Card>
          <CardHeader>Featured</CardHeader>
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <a className="btn btn-primary" href="#">
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
            <a className="btn btn-primary" href="#">
              Go somewhere
            </a>
          </CardBody>
          <CardFooter className="text-body-secondary">2 days ago</CardFooter>
        </Card>
      </Example>

      <Example hash="usingGridMarkup" state={state} t={tCardPage}>
        <div className="row">
          <div className="col-sm-6">
            <Card>
              <CardBody>
                <CardTitle>Special title treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <a className="btn btn-primary" href="#">
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
                <a className="btn btn-primary" href="#">
                  Go somewhere
                </a>
              </CardBody>
            </Card>
          </div>
        </div>
      </Example>

      <Example hash="usingUtilities" state={state} t={tCardPage}>
        <Card className="w-75">
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <a className="btn btn-primary" href="#">
              Button
            </a>
          </CardBody>
        </Card>

        <Card className="w-50">
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <a className="btn btn-primary" href="#">
              Button
            </a>
          </CardBody>
        </Card>
      </Example>

      <Example hash="usingCustomCss" state={state} t={tCardPage}>
        <Card style={{ width: '18rem' }}>
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <a className="btn btn-primary" href="#">
              Go somewhere
            </a>
          </CardBody>
        </Card>
      </Example>

      <Example hash="textAlignment" state={state} t={tCardPage}>
        <Card style={{ width: '18rem' }}>
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <a className="btn btn-primary" href="#">
              Go somewhere
            </a>
          </CardBody>
        </Card>

        <Card style={{ width: '18rem' }} className="text-center">
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <a className="btn btn-primary" href="#">
              Go somewhere
            </a>
          </CardBody>
        </Card>

        <Card style={{ width: '18rem' }} className="text-end">
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <a className="btn btn-primary" href="#">
              Go somewhere
            </a>
          </CardBody>
        </Card>
      </Example>

      <Example hash="navigation" state={state} t={tCardPage}>
        <Card className="text-center">
          <CardHeader>
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link active" aria-current="true" href="#">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </CardHeader>
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <a className="btn btn-primary" href="#">
              Go somewhere
            </a>
          </CardBody>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <ul className="nav nav-pills card-header-pills">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </CardHeader>
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <a className="btn btn-primary" href="#">
              Go somewhere
            </a>
          </CardBody>
        </Card>
      </Example>

      <Example hash="imageCaps" state={state} t={tCardPage}>
        <Card>
          <CardImg
            style={{
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              fontSize: '1.125rem',
              textAnchor: 'middle',
              userSelect: 'none',
            }}
            preserveAspectRatio="xMidYMid slice"
            aria-label="Placeholder: Image cap"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            height="180"
            width="100%"
            role="img"
            as="svg"
            top
          >
            <title>Placeholder</title>
            <rect fill="#868e96" height="100%" width="100%"></rect>
            <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
              Image cap
            </text>
          </CardImg>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content
              is a little bit longer.
            </CardText>
            <CardText>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content
              is a little bit longer.
            </CardText>
            <CardText>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
          <CardImg
            style={{
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              fontSize: '1.125rem',
              textAnchor: 'middle',
              userSelect: 'none',
            }}
            preserveAspectRatio="xMidYMid slice"
            aria-label="Placeholder: Image cap"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            height="180"
            width="100%"
            role="img"
            as="svg"
            bottom
          >
            <title>Placeholder</title>
            <rect fill="#868e96" height="100%" width="100%"></rect>
            <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
              Image cap
            </text>
          </CardImg>
        </Card>

        <Card className="text-bg-dark">
          <CardImg
            style={{
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              fontSize: '1.125rem',
              textAnchor: 'middle',
              userSelect: 'none',
            }}
            preserveAspectRatio="xMidYMid slice"
            aria-label="Placeholder: Image cap"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            height="180"
            width="100%"
            role="img"
            as="svg"
          >
            <title>Placeholder</title>
            <rect fill="#868e96" height="100%" width="100%"></rect>
            <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
              Image cap
            </text>
          </CardImg>
          <CardImg overlay>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content
              is a little bit longer.
            </CardText>
            <CardText>
              <small>Last updated 3 mins ago</small>
            </CardText>
          </CardImg>
        </Card>
      </Example>

      <Example hash="horizontal" state={state} t={tCardPage}>
        <Card style={{ maxWidth: '540px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <CardImg
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  fontSize: '1.125rem',
                  textAnchor: 'middle',
                  userSelect: 'none',
                }}
                preserveAspectRatio="xMidYMid slice"
                aria-label="Placeholder: Image cap"
                className="img-fluid rounded-start"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                height="180"
                width="100%"
                role="img"
                as="svg"
              >
                <title>Placeholder</title>
                <rect fill="#868e96" height="100%" width="100%"></rect>
                <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
                  Image
                </text>
              </CardImg>
            </div>
            <div className="col-md-8">
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </CardText>
                <CardText>
                  <small className="text-body-secondary">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </div>
          </div>
        </Card>
      </Example>

      <Example hash="backgroundAndColor" state={state} t={tCardPage}>
        <Card style={{ maxWidth: '18rem' }} className="text-bg-primary">
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle>Primary card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card className="text-bg-secondary" style={{ maxWidth: '18rem' }}>
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle>Secondary card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card style={{ maxWidth: '18rem' }} className="text-bg-success">
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle>Success card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card style={{ maxWidth: '18rem' }} className="text-bg-danger">
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle>Danger card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card style={{ maxWidth: '18rem' }} className="text-bg-warning">
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle>Warning card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card style={{ maxWidth: '18rem' }} className="text-bg-info">
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle>Info card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card style={{ maxWidth: '18rem' }} className="text-bg-light">
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle>Light card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card style={{ maxWidth: '18rem' }} className="text-bg-dark">
          <CardBody>
            <CardTitle>Dark card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </Example>

      <Example hash="border" state={state} t={tCardPage}>
        <Card style={{ maxWidth: '18rem' }} className="border-primary">
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle>Primary card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card style={{ maxWidth: '18rem' }} className="border-secondary">
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle>Secondary card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card style={{ maxWidth: '18rem' }} className="border-secondary">
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle>Success card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card style={{ maxWidth: '18rem' }} className="border-danger">
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle>Danger card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card style={{ maxWidth: '18rem' }} className="border-warning">
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle>Warning card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card style={{ maxWidth: '18rem' }} className="border-info">
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle>Info card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card style={{ maxWidth: '18rem' }} className="border-light">
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle>Light card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card style={{ maxWidth: '18rem' }} className="border-dark">
          <CardBody>
            <CardTitle>Dark card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </Example>

      <Example hash="mixinsUtilities" state={state} t={tCardPage}>
        <Card className="border-success mb-3" style={{ maxWidth: '18rem' }}>
          <CardHeader className="bg-transparent border-success">Header</CardHeader>
          <CardBody className="text-success">
            <CardTitle>Success card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
          <CardFooter className="bg-transparent border-success">Footer</CardFooter>
        </Card>
      </Example>

      <Example hash="cardGroups" state={state} t={tCardPage}>
        <CardGroup>
          <Card>
            <CardImg
              style={{
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                fontSize: '1.125rem',
                textAnchor: 'middle',
                userSelect: 'none',
              }}
              preserveAspectRatio="xMidYMid slice"
              aria-label="Placeholder: Image cap"
              className="img-fluid rounded-start"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              height="180"
              width="100%"
              role="img"
              as="svg"
              top
            >
              <title>Placeholder</title>
              <rect fill="#868e96" height="100%" width="100%"></rect>
              <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
                Image
              </text>
            </CardImg>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content
                is a little bit longer.
              </CardText>
              <CardText>
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardImg
              style={{
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                fontSize: '1.125rem',
                textAnchor: 'middle',
                userSelect: 'none',
              }}
              preserveAspectRatio="xMidYMid slice"
              aria-label="Placeholder: Image cap"
              className="img-fluid rounded-start"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              height="180"
              width="100%"
              role="img"
              as="svg"
              top
            >
              <title>Placeholder</title>
              <rect fill="#868e96" height="100%" width="100%"></rect>
              <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
                Image
              </text>
            </CardImg>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              <CardText>
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardImg
              style={{
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                fontSize: '1.125rem',
                textAnchor: 'middle',
                userSelect: 'none',
              }}
              preserveAspectRatio="xMidYMid slice"
              aria-label="Placeholder: Image cap"
              className="img-fluid rounded-start"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              height="180"
              width="100%"
              role="img"
              as="svg"
              top
            >
              <title>Placeholder</title>
              <rect fill="#868e96" height="100%" width="100%"></rect>
              <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
                Image
              </text>
            </CardImg>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card
                has even longer content than the first to show that equal height action.
              </CardText>
              <CardText>
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>
      </Example>

      <Example hash="gridCards" state={state} t={tCardPage}>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <Card>
              <CardImg
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  fontSize: '1.125rem',
                  textAnchor: 'middle',
                  userSelect: 'none',
                }}
                preserveAspectRatio="xMidYMid slice"
                aria-label="Placeholder: Image cap"
                className="img-fluid rounded-start"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                height="180"
                width="100%"
                role="img"
                as="svg"
                top
              >
                <title>Placeholder</title>
                <rect fill="#868e96" height="100%" width="100%"></rect>
                <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
                  Image
                </text>
              </CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col">
            <Card>
              <CardImg
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  fontSize: '1.125rem',
                  textAnchor: 'middle',
                  userSelect: 'none',
                }}
                preserveAspectRatio="xMidYMid slice"
                aria-label="Placeholder: Image cap"
                className="img-fluid rounded-start"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                height="180"
                width="100%"
                role="img"
                as="svg"
                top
              >
                <title>Placeholder</title>
                <rect fill="#868e96" height="100%" width="100%"></rect>
                <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
                  Image
                </text>
              </CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col">
            <Card>
              <CardImg
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  fontSize: '1.125rem',
                  textAnchor: 'middle',
                  userSelect: 'none',
                }}
                preserveAspectRatio="xMidYMid slice"
                aria-label="Placeholder: Image cap"
                className="img-fluid rounded-start"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                height="180"
                width="100%"
                role="img"
                as="svg"
                top
              >
                <title>Placeholder</title>
                <rect fill="#868e96" height="100%" width="100%"></rect>
                <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
                  Image
                </text>
              </CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a longer card with supporting text below as a natural lead-in to additional content.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col">
            <Card>
              <CardImg
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  fontSize: '1.125rem',
                  textAnchor: 'middle',
                  userSelect: 'none',
                }}
                preserveAspectRatio="xMidYMid slice"
                aria-label="Placeholder: Image cap"
                className="img-fluid rounded-start"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                height="180"
                width="100%"
                role="img"
                as="svg"
                top
              >
                <title>Placeholder</title>
                <rect fill="#868e96" height="100%" width="100%"></rect>
                <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
                  Image
                </text>
              </CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
          <div className="col">
            <Card>
              <CardImg
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  fontSize: '1.125rem',
                  textAnchor: 'middle',
                  userSelect: 'none',
                }}
                preserveAspectRatio="xMidYMid slice"
                aria-label="Placeholder: Image cap"
                className="img-fluid rounded-start"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                height="180"
                width="100%"
                role="img"
                as="svg"
                top
              >
                <title>Placeholder</title>
                <rect fill="#868e96" height="100%" width="100%"></rect>
                <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
                  Image
                </text>
              </CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col">
            <Card>
              <CardImg
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  fontSize: '1.125rem',
                  textAnchor: 'middle',
                  userSelect: 'none',
                }}
                preserveAspectRatio="xMidYMid slice"
                aria-label="Placeholder: Image cap"
                className="img-fluid rounded-start"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                height="180"
                width="100%"
                role="img"
                as="svg"
                top
              >
                <title>Placeholder</title>
                <rect fill="#868e96" height="100%" width="100%"></rect>
                <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
                  Image
                </text>
              </CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col">
            <Card>
              <CardImg
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  fontSize: '1.125rem',
                  textAnchor: 'middle',
                  userSelect: 'none',
                }}
                preserveAspectRatio="xMidYMid slice"
                aria-label="Placeholder: Image cap"
                className="img-fluid rounded-start"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                height="180"
                width="100%"
                role="img"
                as="svg"
                top
              >
                <title>Placeholder</title>
                <rect fill="#868e96" height="100%" width="100%"></rect>
                <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
                  Image
                </text>
              </CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a longer card with supporting text below as a natural lead-in to additional content.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col">
            <Card>
              <CardImg
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  fontSize: '1.125rem',
                  textAnchor: 'middle',
                  userSelect: 'none',
                }}
                preserveAspectRatio="xMidYMid slice"
                aria-label="Placeholder: Image cap"
                className="img-fluid rounded-start"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                height="180"
                width="100%"
                role="img"
                as="svg"
                top
              >
                <title>Placeholder</title>
                <rect fill="#868e96" height="100%" width="100%"></rect>
                <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
                  Image
                </text>
              </CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
          <div className="col">
            <Card className="h-100">
              <CardImg
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  fontSize: '1.125rem',
                  textAnchor: 'middle',
                  userSelect: 'none',
                }}
                preserveAspectRatio="xMidYMid slice"
                aria-label="Placeholder: Image cap"
                className="img-fluid rounded-start"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                height="180"
                width="100%"
                role="img"
                as="svg"
                top
              >
                <title>Placeholder</title>
                <rect fill="#868e96" height="100%" width="100%"></rect>
                <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
                  Image
                </text>
              </CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col">
            <Card className="h-100">
              <CardImg
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  fontSize: '1.125rem',
                  textAnchor: 'middle',
                  userSelect: 'none',
                }}
                preserveAspectRatio="xMidYMid slice"
                aria-label="Placeholder: Image cap"
                className="img-fluid rounded-start"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                height="180"
                width="100%"
                role="img"
                as="svg"
                top
              >
                <title>Placeholder</title>
                <rect fill="#868e96" height="100%" width="100%"></rect>
                <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
                  Image
                </text>
              </CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>This is a short card.</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col">
            <Card className="h-100">
              <CardImg
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  fontSize: '1.125rem',
                  textAnchor: 'middle',
                  userSelect: 'none',
                }}
                preserveAspectRatio="xMidYMid slice"
                aria-label="Placeholder: Image cap"
                className="img-fluid rounded-start"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                height="180"
                width="100%"
                role="img"
                as="svg"
                top
              >
                <title>Placeholder</title>
                <rect fill="#868e96" height="100%" width="100%"></rect>
                <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
                  Image
                </text>
              </CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a longer card with supporting text below as a natural lead-in to additional content.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col">
            <Card className="h-100">
              <CardImg
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  fontSize: '1.125rem',
                  textAnchor: 'middle',
                  userSelect: 'none',
                }}
                preserveAspectRatio="xMidYMid slice"
                aria-label="Placeholder: Image cap"
                className="img-fluid rounded-start"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                height="180"
                width="100%"
                role="img"
                as="svg"
                top
              >
                <title>Placeholder</title>
                <rect fill="#868e96" height="100%" width="100%"></rect>
                <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
                  Image
                </text>
              </CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
          <div className="col">
            <Card className="h-100">
              <CardImg
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  fontSize: '1.125rem',
                  textAnchor: 'middle',
                  userSelect: 'none',
                }}
                preserveAspectRatio="xMidYMid slice"
                aria-label="Placeholder: Image cap"
                className="img-fluid rounded-start"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                height="180"
                width="100%"
                role="img"
                as="svg"
                top
              >
                <title>Placeholder</title>
                <rect fill="#868e96" height="100%" width="100%"></rect>
                <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
                  Image
                </text>
              </CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </CardText>
              </CardBody>
              <CardFooter>
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </CardFooter>
            </Card>
          </div>
          <div className="col">
            <Card className="h-100">
              <CardImg
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  fontSize: '1.125rem',
                  textAnchor: 'middle',
                  userSelect: 'none',
                }}
                preserveAspectRatio="xMidYMid slice"
                aria-label="Placeholder: Image cap"
                className="img-fluid rounded-start"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                height="180"
                width="100%"
                role="img"
                as="svg"
                top
              >
                <title>Placeholder</title>
                <rect fill="#868e96" height="100%" width="100%"></rect>
                <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
                  Image
                </text>
              </CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              </CardBody>
              <CardFooter>
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </CardFooter>
            </Card>
          </div>
          <div className="col">
            <Card className="h-100">
              <CardImg
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  fontSize: '1.125rem',
                  textAnchor: 'middle',
                  userSelect: 'none',
                }}
                preserveAspectRatio="xMidYMid slice"
                aria-label="Placeholder: Image cap"
                className="img-fluid rounded-start"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                height="180"
                width="100%"
                role="img"
                as="svg"
                top
              >
                <title>Placeholder</title>
                <rect fill="#868e96" height="100%" width="100%"></rect>
                <text fill="#dee2e6" dy=".3em" x="50%" y="50%">
                  Image
                </text>
              </CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This card
                  has even longer content than the first to show that equal height action.
                </CardText>
              </CardBody>
              <CardFooter>
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Example>

      <PropsIndicator />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCardComponentProps('card.desc.cardBody'),
            attr: 'cardBody',
            default: '',
          },
        ]}
        hash="cardComponentProps"
        t={tCardComponentProps}
        state={state}
        props
      />

      <Example
        items={[
          {
            default: '-',
            attr: '-',
            desc: '-',
            type: '-',
          },
        ]}
        hash="cardGroupComponentProps"
        t={tCardComponentProps}
        state={state}
        props
      />

      <Example
        items={[
          {
            default: '-',
            attr: '-',
            desc: '-',
            type: '-',
          },
        ]}
        hash="cardBodyComponentProps"
        t={tCardComponentProps}
        state={state}
        props
      />

      <Example
        items={[
          {
            default: '-',
            attr: '-',
            desc: '-',
            type: '-',
          },
        ]}
        hash="cardTitleComponentProps"
        t={tCardComponentProps}
        state={state}
        props
      />

      <Example
        items={[
          {
            default: '-',
            attr: '-',
            desc: '-',
            type: '-',
          },
        ]}
        hash="cardSubtitleComponentProps"
        t={tCardComponentProps}
        state={state}
        props
      />

      <Example
        items={[
          {
            default: '-',
            attr: '-',
            desc: '-',
            type: '-',
          },
        ]}
        hash="cardTextComponentProps"
        t={tCardComponentProps}
        state={state}
        props
      />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">img | div</span>,
            desc: tCardComponentProps('cardImg.desc.as'),
            default: 'img',
            attr: 'as',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCardComponentProps('cardImg.desc.top'),
            attr: 'top',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCardComponentProps('cardImg.desc.bottom'),
            attr: 'bottom',
            default: '',
          },
          {
            type: <span className="badge text-bg-secondary">boolean</span>,
            desc: tCardComponentProps('cardImg.desc.overlay'),
            attr: 'overlay',
            default: '',
          },
        ]}
        hash="cardImgComponentProps"
        t={tCardComponentProps}
        state={state}
        props
      />

      <Example
        items={[
          {
            default: '-',
            attr: '-',
            desc: '-',
            type: '-',
          },
        ]}
        hash="cardHeaderComponentProps"
        t={tCardComponentProps}
        state={state}
        props
      />

      <Example
        items={[
          {
            default: '-',
            attr: '-',
            desc: '-',
            type: '-',
          },
        ]}
        hash="cardFooterComponentProps"
        t={tCardComponentProps}
        state={state}
        props
      />

      <Example
        items={[
          {
            type: <span className="badge text-bg-secondary">a</span>,
            desc: tCardComponentProps('cardLink.desc.as'),
            default: 'a',
            attr: 'as',
          },
        ]}
        hash="cardLinkComponentProps"
        t={tCardComponentProps}
        state={state}
        props
      />

      <Example hash="commonComponentProps" state={state} props />

      <About />
    </div>
  );
}
