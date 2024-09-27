import { type CSSProperties, type ElementType } from 'react';
import type { Props } from '@lib/button/types.ts';
import clsx from 'clsx';
import {
  filterAndTransformProperties,
  getValue,
  mapAndFilterStyles,
  VARIABLE_BS_BTN_PREFIX,
  VARIABLE_BS_PREFIX,
  VARIABLE_BTN_MAP,
} from '@lib/tools';

function getClassNames({
  variant,
  outline,
  size,
  disabled,
  Component,
  className,
}: {
  variant?: string;
  outline?: string;
  size?: Props['size'];
  disabled?: boolean;
  Component: ElementType;
  className?: string;
}) {
  return clsx(
    'btn',
    variant && `btn-${variant}`,
    outline && `btn-outline-${outline}`,
    typeof size === 'string' && `btn-${size}`,
    Component === 'a' && disabled && 'disabled',
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
      const _key = VARIABLE_BTN_MAP[key];
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
  };
}

export default function Button<T extends ElementType = 'button'>(
  props: Props<T>,
) {
  const {
    as: Component = 'button',
    variant,
    outline,
    size,
    className,
    style,
    variables,
    children,
    disabled,
    role,
    tabIndex,
    'aria-disabled': ariaDisabled,
    'aria-pressed': ariaPressed,
    ...rest
  } = props;

  const classNames = getClassNames({
    variant,
    outline,
    size,
    disabled,
    Component,
    className,
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

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <Component
      {...rest}
      className={classNames}
      style={combinedStyles}
      role={finalRole}
      disabled={finalDisabled}
      aria-disabled={finalAriaDisabled}
      tabIndex={finalTabIndex}
      aria-pressed={finalAriaPressed}
    >
      {children}
    </Component>
  );
}
