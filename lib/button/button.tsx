import { type CSSProperties, type ElementType, useMemo } from 'react';
import type { Props } from '@lib/button/types.ts';
import clsx from 'clsx';
import {
  deepMerge,
  filterAndTransformProperties,
  filterOptions,
  getValue,
  isValueValid,
  mapAndFilterStyles,
  RoundedClassEnum,
  VARIABLE_BS_BTN_PREFIX,
  VARIABLE_BS_PREFIX,
  VariableEnum,
} from '@lib/tools';

function getRoundedValue(key?: keyof typeof RoundedClassEnum | boolean) {
  if (key !== undefined) {
    if (typeof key === 'boolean') {
      return key ? 'rounded' : false;
    } else {
      return `rounded-${RoundedClassEnum[key]}`;
    }
  }
}

const Button = function Button<T extends ElementType = 'button'>(
  props: Props<T>,
) {
  const {
    rounded,
    'aria-disabled': ariaDisabled,
    'aria-pressed': ariaPressed,
    active,
    as: Component = 'button',
    children,
    className,
    disabled,
    isLoading,
    outline,
    role,
    size,
    style,
    tabIndex,
    variables,
    variant,
    startContent,
    endContent,
    dropOldClass,
    render,
    skipCompWrap,
    ...rest
  } = deepMerge(props, props.options, (path) => !path.includes('options'));

  const renderOptions = useMemo(() => {
    const finalClass = clsx(
      !dropOldClass && 'btn',
      active && 'active',
      variant && `btn-${variant}`,
      outline && `btn-outline-${outline}`,
      size && `btn-${size}`,
      Component === 'a' && disabled && 'disabled',
      rounded && getRoundedValue(rounded),
      className,
    );
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _key = VariableEnum[key];
        return {
          include: !!_key,
          transformedKey: `${VARIABLE_BS_PREFIX}-${_key}`,
        };
      }),
      ...mapAndFilterStyles(
        {
          [`${VARIABLE_BS_BTN_PREFIX}-padding-y`]: 'paddingY',
          [`${VARIABLE_BS_BTN_PREFIX}-padding-x`]: 'paddingX',
          [`${VARIABLE_BS_BTN_PREFIX}-font-size`]: 'fontSize',
        },
        size,
      ),
      ...style,
    } as CSSProperties;
    const finalRole = getValue(role, Component === 'a' ? 'button' : undefined);
    const finalDisabled = getValue(
      Component === 'button' && disabled,
      Component === 'a' ? undefined : disabled,
    );
    const finalAriaDisabled = getValue(
      ariaDisabled,
      disabled ? 'true' : undefined,
    );
    const finalAriaPressed = getValue(
      ariaPressed,
      className?.includes('active') ? 'true' : undefined,
    );
    const finalTabIndex = getValue(
      tabIndex,
      Component === 'a' && disabled ? -1 : undefined,
    );

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
        role: finalRole,
        disabled: finalDisabled,
        tabIndex: finalTabIndex,
        'aria-disabled': finalAriaDisabled,
        'aria-pressed': finalAriaPressed,
      },
      isValueValid,
    );
  }, [
    Component,
    active,
    ariaDisabled,
    ariaPressed,
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

  if (render && skipCompWrap) {
    return render({ ...rest, ...renderOptions });
  }

  const renderContent = render ? (
    render({ ...rest, ...renderOptions })
  ) : (
    <>
      {isLoading && !startContent && (
        <>
          <span
            className="spinner-border spinner-border-sm me-1"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden" role="status">
            Loading...
          </span>
        </>
      )}
      {startContent && startContent}
      {children}
      {endContent && endContent}
    </>
  );

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <Component {...rest} {...renderOptions}>
      {renderContent}
    </Component>
  );
};

Button.displayName = 'BRL.Button';

export default Button;
