import { type ElementType, useMemo } from 'react';

import type { PopoverArrowProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const PopoverArrow = function PopoverArrow<T extends ElementType = 'div'>(props: PopoverArrowProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, onRef, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'popover-arrow position-absolute', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} ref={onRef} />;
};

PopoverArrow.displayName = 'BRL.PopoverArrow';

export default PopoverArrow;
