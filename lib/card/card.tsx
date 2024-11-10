import { type ElementType, useMemo } from 'react';

import type { CardProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';
import CardBody from './card-body.tsx';
import CardFooter from './card-footer.tsx';
import CardHeader from './card-header.tsx';
import CardImg from './card-img.tsx';
import CardLink from './card-link.tsx';
import CardSubtitle from './card-subtitle.tsx';
import CardText from './card-text.tsx';
import CardTitle from './card-title.tsx';

const Card = function Card<T extends ElementType = 'div'>(props: CardProps<T>) {
  const { as: Component = 'div', cardBody, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'card', cardBody && '.card-body', className);
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [cardBody, className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions}></Component>;
};

Card.Body = CardBody;

Card.Img = CardImg;

Card.Title = CardTitle;

Card.Subtitle = CardSubtitle;

Card.Text = CardText;

Card.Link = CardLink;

Card.Header = CardHeader;

Card.Footer = CardFooter;

Card.displayName = 'BRL.Card';

export default Card;
