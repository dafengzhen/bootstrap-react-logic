import { type ElementType, useMemo } from 'react';

import type { TooltipArrowProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const TooltipArrow = function TooltipArrow<T extends ElementType = 'div'>(props: TooltipArrowProps<T>) {
  const { as: Component = 'div', className, dropOldClass, onRef, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'tooltip-arrow position-absolute', className);
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

TooltipArrow.displayName = 'BRL.TooltipArrow';

export default TooltipArrow;
