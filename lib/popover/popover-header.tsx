import { type ElementType, useMemo } from 'react';

import type { PopoverHeaderProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const PopoverHeader = function PopoverHeader<T extends ElementType = 'div'>(props: PopoverHeaderProps<T>) {
  const { as: Component = 'div', dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'popover-header h3', className);
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
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

PopoverHeader.displayName = 'BRL.PopoverHeader';

export default PopoverHeader;
