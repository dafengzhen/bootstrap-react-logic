import { type ElementType, useMemo } from 'react';
import type { CardProps } from './types.ts';
import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';
import CardBody from './card-body.tsx';
import CardImg from './card-img.tsx';
import CardTitle from './card-title.tsx';
import CardSubtitle from './card-subtitle.tsx';
import CardText from './card-text.tsx';
import CardLink from './card-link.tsx';
import CardHeader from './card-header.tsx';
import CardFooter from './card-footer.tsx';

const Card = function Card<T extends ElementType = 'div'>(props: CardProps<T>) {
  const { as: Component = 'div', dropOldClass, variables, className, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'card', className);
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
  }, [dropOldClass, className, variables, style]);

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
