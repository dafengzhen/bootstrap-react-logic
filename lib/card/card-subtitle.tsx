import { type ElementType, useMemo } from 'react';

import type { CardTitleProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const CardSubtitle = function CardSubtitle<T extends ElementType = 'div'>(props: CardTitleProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'card-subtitle h6', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [dropOldClass, className, variables, style]);

  return <Component {...rest} {...renderOptions}></Component>;
};

CardSubtitle.displayName = 'BRL.CardSubtitle';

export default CardSubtitle;
