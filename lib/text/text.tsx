import React, { type ElementType, useMemo } from 'react';
import type { ElementProps, Props } from './types.ts';
import { clsxUnique, filterOptions, isValueValid } from '../tools';

const Text = function Text<T extends ElementType>(props: Props<T>) {
  const {
    as: Component = 'div',
    render,
    skipCompWrap,
    dropOldClass,
    children,
    className,
    style,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'form-text', className);
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
      {...(rest as React.JSX.IntrinsicElements['div'])}
      {...renderOptions}
    >
      {renderContent}
    </Component>
  );
};

Text.displayName = 'BRL.Text';

export default Text;
