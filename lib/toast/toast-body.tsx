import { type ElementType, useMemo } from 'react';

import type { ToastBodyProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const ToastBody = function ToastBody<T extends ElementType = 'div'>(props: ToastBodyProps<T>) {
  const { as: Component = 'div' as ElementType, dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'toast-body', className);
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
