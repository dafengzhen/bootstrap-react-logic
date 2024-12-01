import { type ElementType, useMemo } from 'react';

import type { ToastBodyProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const ToastBody = function ToastBody<T extends ElementType = 'div'>(props: ToastBodyProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'toast-body', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

ToastBody.displayName = 'BRL.ToastBody';

export default ToastBody;
