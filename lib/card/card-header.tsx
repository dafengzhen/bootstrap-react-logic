import { type ElementType, useMemo } from 'react';

import type { CardTextProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const CardHeader = function CardHeader<T extends ElementType = 'div'>(props: CardTextProps<T>) {
  const { as: Component = 'div', dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'card-header', className);
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

CardHeader.displayName = 'BRL.CardHeader';

export default CardHeader;
