import { type ElementType, useMemo } from 'react';
import {
  BS_PREFIX,
  clsxStyle,
  clsxUnique,
  convertBsKeyToVar,
  filterOptions,
  getFirstNonEmptyClass,
  getValue,
  isValueValid,
  mapAndFilterStyles,
  resolveRoundedClass,
} from '../tools';
import type { ButtonProps } from './types.ts';

const Button = function Button<T extends ElementType = 'button' | 'a'>(props: ButtonProps<T>) {
  const {
    as: Component = 'button',
    dropOldClass,
    children,
    className,
    style,
    rounded,
    'aria-disabled': ariaDisabled,
    'aria-pressed': ariaPressed,
    'aria-label': ariaLabel,
    active,
    disabled,
    isLoading,
    outline,
    role,
    size,
    tabIndex,
    variables,
    variant,
    startContent,
    endContent,
    btnClose,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass &&
        getFirstNonEmptyClass({
          'btn-close': btnClose,
          btn: true,
        }),
      active && 'active',
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
            [`${BS_PREFIX}PaddingY`]: 'paddingY',
            [`${BS_PREFIX}paddingX`]: 'paddingX',
            [`${BS_PREFIX}fontSize`]: 'fontSize',
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

    const finalRole = getValue(role, Component === 'a' ? 'button' : undefined);
    const finalDisabled = getValue(Component === 'button' && disabled, Component === 'a' ? undefined : disabled);
    const finalAriaDisabled = getValue(ariaDisabled, disabled ? 'true' : undefined);
    const finalAriaPressed = getValue(ariaPressed, className?.includes('active') ? 'true' : undefined);
    const finalAriaLabel = getValue(ariaLabel, 'Close');
    const finalTabIndex = getValue(tabIndex, Component === 'a' && disabled ? -1 : undefined);

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
        role: finalRole,
        disabled: finalDisabled,
        tabIndex: finalTabIndex,
        'aria-disabled': finalAriaDisabled,
        'aria-pressed': finalAriaPressed,
        'aria-label': finalAriaLabel,
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
    size,
    style,
    tabIndex,
    variables,
    variant,
  ]);

  return (
    <Component {...rest} {...renderOptions}>
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
