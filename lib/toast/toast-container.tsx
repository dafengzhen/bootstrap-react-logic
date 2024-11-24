import { type ElementType, useMemo } from 'react';

import type { ToastContainerProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const ToastContainer = function ToastContainer<T extends ElementType = 'div'>(props: ToastContainerProps<T>) {
  const { as: Component = 'div', dropOldClass, className, placement, variables, position, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'toast-container',
      position && `position-${position}`,
      placement && {
        'bottom-0 start-50 translate-middle-x': placement === 'bottom-center',
        'top-50 start-50 translate-middle': placement === 'middle-center',
        'top-50 start-0 translate-middle-y': placement === 'middle-left',
        'top-0 start-50 translate-middle-x': placement === 'top-center',
        'top-50 end-0 translate-middle-y': placement === 'middle-right',
        'bottom-0 start-0': placement === 'bottom-start',
        'bottom-0 end-0': placement === 'bottom-end',
        'top-0 start-0': placement === 'top-start',
        'top-0 end-0': placement === 'top-end',
      },
      className,
    );
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
  }, [className, dropOldClass, placement, position, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

ToastContainer.displayName = 'BRL.ToastContainer';

export default ToastContainer;
