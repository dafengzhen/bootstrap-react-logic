import React, { type ElementType, useMemo } from 'react';
import type { ElementProps, Props } from './types.ts';
import { clsxUnique, filterOptions, isValueValid } from '../tools';

const Textarea = function Textarea<T extends ElementType>(props: Props<T>) {
  const {
    as: Component = 'textarea',
    dropOldClass,
    render,
    skipCompWrap,
    className,
    style,
    children,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'form-control', className);
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
      {...(rest as React.JSX.IntrinsicElements['textarea'])}
      {...renderOptions}
    >
      {renderContent}
    </Component>
  );
};

Textarea.displayName = 'BRL.Textarea';

export default Textarea;
