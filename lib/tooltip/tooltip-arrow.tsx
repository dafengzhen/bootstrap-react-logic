import { type ElementType, useMemo } from 'react';

import type { TooltipArrowProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const TooltipArrow = function TooltipArrow<T extends ElementType = 'div'>(props: TooltipArrowProps<T>) {
  const { as: Component = 'div' as ElementType, dropOldClass, className, variables, onRef, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'tooltip-arrow position-absolute', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} ref={onRef} />;
};

TooltipArrow.displayName = 'BRL.TooltipArrow';

export default TooltipArrow;
