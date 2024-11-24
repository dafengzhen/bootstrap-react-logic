import { type ElementType, useMemo } from 'react';

import type { PopoverBodyProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const PopoverBody = function PopoverBody<T extends ElementType = 'div'>(props: PopoverBodyProps<T>) {
  const { as: Component = 'div' as ElementType, dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'popover-body', className);
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
