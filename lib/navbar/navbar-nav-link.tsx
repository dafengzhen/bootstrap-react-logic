import { type ElementType, useMemo } from 'react';

import type { NavbarNavLinkProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const NavbarNavLink = function NavbarNavLink<T extends ElementType = 'a'>(props: NavbarNavLinkProps<T>) {
  const {
    active,
    'aria-disabled': ariaDisabled,
    as: Component = 'a' as ElementType,
    className,
    disabled,
    dropOldClass,
    style,
    variables,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'nav-link',
      active && 'active',
      disabled && Component === 'a' && 'disabled',
      className,
    );
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    return filterOptions(
      {
        'aria-disabled': ariaDisabled ?? (disabled ? 'true' : undefined),
        className: finalClass,
        disabled: disabled && Component === 'button' ? true : undefined,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [Component, active, ariaDisabled, className, disabled, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

NavbarNavLink.displayName = 'BRL.NavbarNavLink';

export default NavbarNavLink;
