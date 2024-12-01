import { type ElementType, useMemo } from 'react';

import type { ToastHeaderProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const ToastHeader = function ToastHeader<T extends ElementType = 'div'>(props: ToastHeaderProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'toast-header', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

ToastHeader.displayName = 'BRL.ToastHeader';

export default ToastHeader;
