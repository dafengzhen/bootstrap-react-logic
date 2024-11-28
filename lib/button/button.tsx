import { type ElementType, useMemo } from 'react';

import type { ButtonProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, findTruthyClass, resolveRoundedClass, stylex } from '../tools';

const Button = function Button<T extends ElementType = 'button'>(props: ButtonProps<T>) {
  const {
    active,
    as: Component = 'button' as ElementType,
    btnClose,
    children,
    className,
    disabled,
    dropOldClass,
    endContent,
    isLoading,
    onRef,
    outline,
    rounded,
    show,
    size,
    startContent,
    style,
    type = 'button',
    variables,
    variant,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && findTruthyClass(['btn-close', btnClose], ['btn', true]),
      active && 'active',
      show && 'show',
      variant && `btn-${variant}`,
      outline && `btn-outline-${outline}`,
      size && `btn-${size}`,
      Component === 'a' && disabled && 'disabled',
      rounded && resolveRoundedClass(rounded),
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      disabled: disabled && Component === 'button',
      style: finalStyle,
    };
  }, [
    Component,
    active,
    btnClose,
    className,
    disabled,
    dropOldClass,
    outline,
    rounded,
    show,
    size,
    style,
    variables,
    variant,
  ]);

  return (
    <Component type={type} {...rest} {...renderOptions} ref={onRef}>
      {isLoading && !startContent && (
        <>
          <span aria-hidden="true" className="spinner-border spinner-border-sm me-1"></span>
          <span className="visually-hidden" role="status">
            Loading...
          </span>
        </>
      )}
      {startContent && startContent}
      {children}
      {endContent && endContent}
    </Component>
  );
};

Button.displayName = 'BRL.Button';

export default Button;
