import { type ElementType, useMemo } from 'react';

import type { CardTextProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const CardFooter = function CardFooter<T extends ElementType = 'div'>(props: CardTextProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'card-footer', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [dropOldClass, className, variables, style]);

  return <Component {...rest} {...renderOptions}></Component>;
};

CardFooter.displayName = 'BRL.CardFooter';

export default CardFooter;
