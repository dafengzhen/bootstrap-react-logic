import { type ElementType, useMemo } from 'react';

import type { ButtonProps } from './types.ts';

import {
  BS_PREFIX,
  clsxStyle,
  clsxUnique,
  convertBsKeyToVar,
  filterOptions,
  getFirstNonEmptyClass,
  isValueValid,
  mapAndFilterStyles,
  resolveRoundedClass,
} from '../tools';

const Button = function Button<T extends ElementType = 'a' | 'button'>(props: ButtonProps<T>) {
  const {
    active,
    'aria-disabled': ariaDisabled,
    'aria-label': ariaLabel,
    'aria-pressed': ariaPressed,
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
    role,
    rounded,
    show,
    size,
    startContent,
    style,
    tabIndex,
    type = 'button',
    variables,
    variant,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass &&
        getFirstNonEmptyClass({
          btn: true,
          'btn-close': btnClose,
        }),
      active && 'active',
      show && 'show',
      variant && `btn-${variant}`,
      outline && `btn-outline-${outline}`,
      typeof size === 'string' && `btn-${size}`,
      Component === 'a' && disabled && 'disabled',
      rounded && resolveRoundedClass(rounded),
      className,
    );
    const finalStyle = clsxStyle(
      {
        ...mapAndFilterStyles(
          {
            [`${BS_PREFIX}fontSize`]: 'fontSize',
            [`${BS_PREFIX}paddingX`]: 'paddingX',
            [`${BS_PREFIX}PaddingY`]: 'paddingY',
          },
          size,
        ),
        ...variables,
        ...style,
      },
      true,
      (_, key) => {
        return convertBsKeyToVar(key);
      },
    );

    return filterOptions(
      {
        'aria-disabled': ariaDisabled ?? (disabled ? 'true' : 'false'),
        'aria-label': ariaLabel ?? (btnClose && 'Close'),
        'aria-pressed': ariaPressed ?? (active ? 'true' : 'false'),
        className: finalClass,
        disabled: disabled && Component === 'button',
        role: role ?? (Component === 'a' && 'button'),
        style: finalStyle,
        tabIndex: tabIndex ?? (Component === 'a' && disabled && -1),
      },
      isValueValid,
    );
  }, [
    Component,
    active,
    ariaDisabled,
    ariaLabel,
    ariaPressed,
    btnClose,
    className,
    disabled,
    dropOldClass,
    outline,
    role,
    rounded,
    show,
    size,
    style,
    tabIndex,
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
