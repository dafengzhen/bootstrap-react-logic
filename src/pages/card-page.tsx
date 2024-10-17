import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import About from '@components/about.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import generalCodes from '@assets/codes/general';
import cardCodes from '@assets/codes/card';
import cardComponentPropsCodes from '@assets/codes/card/component-props.ts';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
} from '@lib/card';
import Example from '@components/example.tsx';
import { createState } from '@tools/handlers.ts';

enum StatesEnum {
  basic,
  body,
  titlesTextAndLinks,
  images,
  listGroups,
  cardGroups,
  kitchenSink,
  headerAndFooter,
  usingGridMarkup,
  usingUtilities,
  usingCustomCss,
}

enum PropsStatesEnum {
  cardComponentProps,
  generalComponentProps,
}

export default function CardPage() {
  const navigation = useNavigation();
  const { t: tCardComponentProps } = useTranslation(['cardComponentProps']);
  const { t: tCardPage } = useTranslation(['cardPage']);

  const state = useState({
    card: createState(StatesEnum, cardCodes),
  });
  const propsState = useState({
    card: createState(PropsStatesEnum, cardComponentPropsCodes, generalCodes),
  });

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <Example hash="basic" state={state} t={tCardPage}>
        <Card style={{ width: '18rem' }}>
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
            <CardTitle>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </CardBody>
        </Card>
      </Example>

      <Example hash="body" state={state} t={tCardPage}>
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
      </Example>

      <Example hash="usingGridMarkup" state={state} t={tCardPage}>
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
      </Example>

      <Example hash="usingUtilities" state={state} t={tCardPage}>
        <div>123</div>
      </Example>

      <PropsIndicator />

      <Example
        hash="cardComponentProps"
        state={propsState}
        t={tCardComponentProps}
        items={[
          {
            attr: '-',
            type: '-',
            desc: '-',
            default: '-',
          },
        ]}
        props
      ></Example>

      <Example hash="generalComponentProps" state={propsState} props></Example>

      <About />
    </div>
  );
}
