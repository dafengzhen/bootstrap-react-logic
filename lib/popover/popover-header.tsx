import { type ElementType, useMemo } from 'react';

import type { PopoverHeaderProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const PopoverHeader = function PopoverHeader<T extends ElementType = 'div'>(props: PopoverHeaderProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'popover-header h3', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

PopoverHeader.displayName = 'BRL.PopoverHeader';

export default PopoverHeader;
