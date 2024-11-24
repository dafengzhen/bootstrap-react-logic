import { type ElementType, useMemo } from 'react';

import type { NavbarNavLinkProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const NavbarNavLink = function NavbarNavLink<T extends ElementType = 'button' | 'a'>(props: NavbarNavLinkProps<T>) {
  const {
    as: Component = 'a' as ElementType,
    'aria-disabled': ariaDisabled,
    'aria-current': ariaCurrent,
    dropOldClass,
    className,
    variables,
    disabled,
    active,
    style,
    type,
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
        disabled: disabled && Component === 'button' ? true : undefined,
        type: type ?? (Component === 'button' ? 'button' : undefined),
        'aria-current': ariaCurrent ?? (active ? 'page' : undefined),
        className: finalClass,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [Component, active, ariaCurrent, ariaDisabled, className, disabled, dropOldClass, style, type, variables]);

  return <Component {...rest} {...renderOptions} />;
};

NavbarNavLink.displayName = 'BRL.NavbarNavLink';

export default NavbarNavLink;
