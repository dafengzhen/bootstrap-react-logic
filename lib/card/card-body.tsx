import { type ElementType, useMemo } from 'react';

import type { CardBodyProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const CardBody = function CardBody<T extends ElementType = 'div'>(props: CardBodyProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'card-body', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [dropOldClass, className, variables, style]);

  return <Component {...rest} {...renderOptions}></Component>;
};

CardBody.displayName = 'BRL.CardBody';

export default CardBody;
