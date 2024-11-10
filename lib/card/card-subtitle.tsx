import { type ElementType, useMemo } from 'react';

import type { CardTitleProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const CardSubtitle = function CardSubtitle<T extends ElementType = 'div'>(props: CardTitleProps<T>) {
  const { as: Component = 'div', className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'card-subtitle h6', className);
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

CardSubtitle.displayName = 'BRL.CardSubtitle';

export default CardSubtitle;
