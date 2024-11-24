import { type ElementType, useMemo } from 'react';

import type { CardGroupProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const CardGroup = function CardGroup<T extends ElementType = 'div'>(props: CardGroupProps<T>) {
  const { as: Component = 'div' as ElementType, dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'card-group', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [dropOldClass, className, variables, style]);

  return <Component {...rest} {...renderOptions}></Component>;
};

CardGroup.displayName = 'BRL.CardGroup';

export default CardGroup;
