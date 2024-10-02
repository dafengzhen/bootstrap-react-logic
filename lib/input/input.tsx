import React, { type ElementType, useMemo } from 'react';
import type { ElementProps, Props } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  InputVariablesEnum,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';

const Input = function Input<T extends ElementType>(props: Props<T>) {
  const {
    as: Component = 'input',
    render,
    skipCompWrap,
    dropOldClass,
    variables,
    className,
    style,
    children,
    size,
    nativeSize,
    readonlyPlainText,
    color,
    nativeColor,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass &&
        (readonlyPlainText ? 'form-control-plaintext' : 'form-control'),
      color && 'form-control-color',
      size && `form-control-${size}`,
      className,
    );
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = InputVariablesEnum[key];
        return {
          include: true,
          transformedKey: _value ? key : `${VARIABLE_BS_PREFIX}${_value}`,
        };
      }),
      ...style,
    };

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
        size: nativeSize,
        color: nativeColor,
      },
      isValueValid,
    );
  }, [
    dropOldClass,
    readonlyPlainText,
    color,
    size,
    className,
    style,
    nativeSize,
    nativeColor,
  ]);

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