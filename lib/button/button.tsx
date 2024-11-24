import { type ElementType, useMemo } from 'react';

import type { ButtonProps } from './types.ts';

import { resolveRoundedClass, convertBsKeyToVar, findTruthyClass, clsxUnique, stylex } from '../tools';

const Button = function Button<T extends ElementType = 'button'>(props: ButtonProps<T>) {
  const {
    as: Component = 'button' as ElementType,
    type = 'button',
    dropOldClass,
    startContent,
    endContent,
    className,
    isLoading,
    variables,
    btnClose,
    children,
    disabled,
    outline,
    rounded,
    variant,
    active,
    onRef,
    style,
    show,
    size,
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
      disabled: disabled && Component === 'button',
      className: finalClass,
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
          <span className="spinner-border spinner-border-sm me-1" aria-hidden="true"></span>
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
