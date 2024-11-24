import { type ElementType, useMemo } from 'react';

import type { PopoverArrowProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const PopoverArrow = function PopoverArrow<T extends ElementType = 'div'>(props: PopoverArrowProps<T>) {
  const { as: Component = 'div', dropOldClass, className, variables, onRef, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'popover-arrow position-absolute', className);
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

  return <Component {...rest} {...renderOptions} ref={onRef} />;
};

PopoverArrow.displayName = 'BRL.PopoverArrow';

export default PopoverArrow;
