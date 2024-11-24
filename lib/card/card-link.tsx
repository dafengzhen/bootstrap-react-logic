import { type ElementType, useMemo } from 'react';

import type { CardTextProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const CardLink = function CardLink<T extends ElementType = 'a'>(props: CardTextProps<T>) {
  const { as: Component = 'a' as ElementType, dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'card-link', className);
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
