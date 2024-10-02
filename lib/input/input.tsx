import React, { type ElementType, useMemo } from 'react';
import type { ElementProps, Props } from './types.ts';
import { clsxUnique, filterOptions, isValueValid } from '../tools';

const Input = function Input<T extends ElementType>(props: Props<T>) {
  const {
    as: Component = 'input',
    dropOldClass,
    render,
    skipCompWrap,
    className,
    style,
    children,
    size,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'form-control',
      size && `form-control-${size}`,
      className,
    );
    const finalStyle = style;

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [dropOldClass, className, style]);

  if (render && skipCompWrap) {
    return render({ ...rest, ...renderOptions } as ElementProps<T>);
  }

  const renderContent = render
    ? render({ ...rest, ...renderOptions } as ElementProps<T>)
    : children;

  return (
    <Component
      {...(rest as React.JSX.IntrinsicElements['input'])}
      {...renderOptions}
    >
      {renderContent}
    </Component>
  );
};

Input.displayName = 'BRL.Input';

export default Input;
