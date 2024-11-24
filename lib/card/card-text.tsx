import { type ElementType, useMemo } from 'react';

import type { CardTextProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const CardText = function CardText<T extends ElementType = 'div'>(props: CardTextProps<T>) {
  const { as: Component = 'div' as ElementType, dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'card-text mb-3', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [dropOldClass, className, variables, style]);

  return <Component {...rest} {...renderOptions}></Component>;
};

CardText.displayName = 'BRL.CardText';

export default CardText;
