import { type ElementType, useMemo } from 'react';

import type { CardTextProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const CardHeader = function CardHeader<T extends ElementType = 'div'>(props: CardTextProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'card-header', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [dropOldClass, className, variables, style]);

  return <Component {...rest} {...renderOptions}></Component>;
};

CardHeader.displayName = 'BRL.CardHeader';

export default CardHeader;
