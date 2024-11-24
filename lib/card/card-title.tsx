import { type ElementType, useMemo } from 'react';

import type { CardTitleProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const CardTitle = function CardTitle<T extends ElementType = 'div'>(props: CardTitleProps<T>) {
  const { as: Component = 'div', dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'card-title h5', className);
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

CardTitle.displayName = 'BRL.CardTitle';

export default CardTitle;
