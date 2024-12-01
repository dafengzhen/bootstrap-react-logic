import { type ElementType, useMemo } from 'react';

import type { PopoverBodyProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const PopoverBody = function PopoverBody<T extends ElementType = 'div'>(props: PopoverBodyProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'popover-body', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

PopoverBody.displayName = 'BRL.PopoverBody';

export default PopoverBody;
