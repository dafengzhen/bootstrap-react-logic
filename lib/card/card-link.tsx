import { type ElementType, useMemo } from 'react';

import type { CardTextProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const CardLink = function CardLink<T extends ElementType = 'a'>(props: CardTextProps<T>) {
  const { as: Component = 'a' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'card-link', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [dropOldClass, className, variables, style]);

  return <Component {...rest} {...renderOptions}></Component>;
};

CardLink.displayName = 'BRL.CardLink';

export default CardLink;
