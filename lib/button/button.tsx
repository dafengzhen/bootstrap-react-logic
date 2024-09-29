import { type CSSProperties, type ElementType, memo } from 'react';
import type { Props, RenderOptions } from '@lib/button/types.ts';
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

function getClassNames({
  active,
  variant,
  outline,
  size,
  disabled,
  Component,
  className,
  rounded,
  dropOldClass,
}: {
  active?: boolean;
  variant?: string;
  outline?: string;
  size?: Props['size'];
  disabled?: boolean;
  Component: ElementType;
  className?: string;
  rounded?: Props['rounded'];
  dropOldClass?: boolean;
}) {
  return clsx(
    !dropOldClass && 'btn',
    active && 'active',
    variant && `btn-${variant}`,
    outline && `btn-outline-${outline}`,
    typeof size === 'string' && `btn-${size}`,
    Component === 'a' && disabled && 'disabled',
    rounded && getRoundedValue(rounded),
    className,
  );
}

function getStyles(
  variables: Props['variables'],
  size: Props['size'],
  style: CSSProperties | undefined,
) {
  return {
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
}

const Button = memo(function Button<T extends ElementType = 'button'>(
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
    ...rest
  } = deepMerge(props, props.options, (path) => !path.includes('options'));

  const classNames = getClassNames({
    Component,
    active,
    className,
    disabled,
    outline,
    rounded,
    size,
    variant,
    dropOldClass,
  });
  const combinedStyles = getStyles(variables, size, style);
  const finalRole = getValue(role, Component === 'a' ? 'button' : undefined);
  const finalDisabled = getValue(
    Component === 'button' && disabled,
    Component === 'a' ? undefined : disabled,
  );
  const finalAriaDisabled = getValue(
    ariaDisabled,
    disabled ? 'true' : undefined,
  );
  const finalTabIndex = getValue(
    tabIndex,
    Component === 'a' && disabled ? -1 : undefined,
  );
  const finalAriaPressed = getValue(
    ariaPressed,
    className?.includes('active') ? 'true' : undefined,
  );

  const renderOptions: RenderOptions = filterOptions(
    {
      'aria-disabled': finalAriaDisabled,
      'aria-pressed': finalAriaPressed,
      className: classNames,
      disabled: finalDisabled,
      role: finalRole,
      style: combinedStyles,
      tabIndex: finalTabIndex,
    },
    isValueValid,
  );

  const renderContent = render ? (
    render(renderOptions)
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
});

Button.displayName = 'Button';

export default Button;
