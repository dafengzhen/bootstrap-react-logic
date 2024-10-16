import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import useHighlightCode from '@hooks/use-highlight-code.ts';
import type { NestedKeys } from '@src/types';
import CustomSimpleCard from '@src/components/custom-simple-card';
import AboutComponent from '@components/about-component.tsx';
import { updateState } from '@src/tools';
import GeneralComponentPropsCard from '@components/general-component-props-card.tsx';
import PropsIndicator from '@components/props-indicator.tsx';
import { useTranslation } from 'react-i18next';
import generalCodes from '@assets/codes/general';
import cardCodes from '@assets/codes/card';
import cardComponentPropsCodes from '@assets/codes/card/component-props.ts';
import {
  Card,
  CardBody,
  CardFooter,
  CardGroup,
  CardHeader,
  CardImg,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
} from '@lib/card';

interface IStates {
  card: {
    basic: {
      openCode: boolean;
      code?: string;
    };
    body: {
      openCode: boolean;
      code?: string;
    };
    titlesTextAndLinks: {
      openCode: boolean;
      code?: string;
    };
    listGroups: {
      openCode: boolean;
      code?: string;
    };
    cardGroups: {
      openCode: boolean;
      code?: string;
    };
  };
}

interface IComponentPropsStates {
  card: {
    cardComponentProps: {
      openCode: boolean;
      code?: string;
    };
    generalComponentProps: {
      openCode: boolean;
      code?: string;
    };
  };
}

export default function CardPage() {
  useHighlightCode();
  const navigation = useNavigation();
  // const { t: tCardComponentProps } = useTranslation(['cardComponentProps']);
  const { t: tCardPage } = useTranslation(['cardPage']);

  const [states, setStates] = useState<IStates>({
    card: {
      basic: {
        openCode: false,
        code: cardCodes.basic.code.trim(),
      },
      body: {
        openCode: false,
        code: cardCodes.body.code.trim(),
      },
      titlesTextAndLinks: {
        openCode: false,
        code: cardCodes.titlesTextAndLinks.code.trim(),
      },
      listGroups: {
        openCode: false,
        code: cardCodes.listGroups.code.trim(),
      },
      cardGroups: {
        openCode: false,
        code: cardCodes.cardGroups.code.trim(),
      },
    },
  });
  const [componentPropsStates, setComponentPropsStates] = useState<IComponentPropsStates>({
    card: {
      cardComponentProps: {
        openCode: false,
        code: cardComponentPropsCodes.cardComponentProps.code.trim(),
      },
      generalComponentProps: {
        openCode: false,
        code: generalCodes.generalComponentProps.code.trim(),
      },
    },
  });
  const [colgroup] = useState({
    attr: {
      width: '150px',
    },
    type: {
      width: '350px',
    },
    desc: {
      width: '100px',
    },
    default: {
      width: '100px',
    },
  });

  function onClickUpdateState(k: NestedKeys<IStates>, v: unknown, c?: () => void) {
    updateState(setStates, k, v, c);
  }

  function onClickUpdateComponentPropsState(k: NestedKeys<IComponentPropsStates>, v: unknown, c?: () => void) {
    updateState(setComponentPropsStates, k, v, c);
  }

  if (navigation.state === 'loading') {
    return <div className="h2 text-secondary">Loading...</div>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      <CustomSimpleCard
        title={tCardPage('basic')}
        hash="basic"
        isOpen={states.card.basic.openCode}
        toggleCode={() => onClickUpdateState('card.basic.openCode', !states.card.basic.openCode)}
        code={states.card.basic.code}
      >
        <div className="d-flex flex-column gap-2">
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
              <CardTitle as="h5">Card title</CardTitle>
              <CardText as="p">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </CardBody>
          </Card>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tCardPage('body')}
        hash="body"
        isOpen={states.card.body.openCode}
        toggleCode={() => onClickUpdateState('card.body.openCode', !states.card.body.openCode)}
        code={states.card.body.code}
      >
        <div className="d-flex flex-column gap-2">
          <Card>
            <CardBody>This is some text within a card body.</CardBody>
          </Card>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tCardPage('titlesTextAndLinks')}
        hash="titlesTextAndLinks"
        isOpen={states.card.titlesTextAndLinks.openCode}
        toggleCode={() =>
          onClickUpdateState('card.titlesTextAndLinks.openCode', !states.card.titlesTextAndLinks.openCode)
        }
        code={states.card.titlesTextAndLinks.code}
      >
        <div className="d-flex flex-column gap-2">
          <Card style={{ width: '18rem' }}>
            <CardBody>
              <CardTitle as="h5">Card title</CardTitle>
              <CardSubtitle as="h6" className="mb-2 text-body-secondary">
                Card subtitle
              </CardSubtitle>
              <CardText as="p">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <CardLink href="#">Card link</CardLink>
              <CardLink href="#">Another link</CardLink>
            </CardBody>
          </Card>
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tCardPage('listGroups')}
        hash="listGroups"
        isOpen={states.card.listGroups.openCode}
        toggleCode={() => onClickUpdateState('card.listGroups.openCode', !states.card.listGroups.openCode)}
        code={states.card.listGroups.code}
      >
        <div className="d-flex flex-column gap-2">
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
        </div>
      </CustomSimpleCard>

      <CustomSimpleCard
        title={tCardPage('cardGroups')}
        hash="cardGroups"
        isOpen={states.card.cardGroups.openCode}
        toggleCode={() => onClickUpdateState('card.cardGroups.openCode', !states.card.cardGroups.openCode)}
        code={states.card.cardGroups.code}
      >
        <div className="d-flex flex-column gap-2">
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
        </div>
      </CustomSimpleCard>

      <PropsIndicator />

      <CustomSimpleCard.ComponentProps
        title="Card"
        hash="cardComponentProps"
        colgroup={colgroup}
        isOpen={componentPropsStates.card.cardComponentProps.openCode}
        code={componentPropsStates.card.cardComponentProps.code}
        codeLanguage="typescript"
        codeDisplayMode="direct"
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'card.cardComponentProps.openCode',
            !componentPropsStates.card.cardComponentProps.openCode,
          )
        }
        items={[
          {
            attr: '-',
            type: '-',
            desc: '-',
            default: '-',
          },
        ]}
      ></CustomSimpleCard.ComponentProps>

      <GeneralComponentPropsCard
        colgroup={colgroup}
        isOpen={componentPropsStates.card.generalComponentProps.openCode}
        code={componentPropsStates.card.generalComponentProps.code}
        toggleCode={() =>
          onClickUpdateComponentPropsState(
            'card.generalComponentProps.openCode',
            !componentPropsStates.card.generalComponentProps.openCode,
          )
        }
      ></GeneralComponentPropsCard>

      <AboutComponent />
    </div>
  );
}
