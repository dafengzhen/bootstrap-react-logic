import { type ElementType, useMemo } from 'react';

import type { NavbarNavLinkProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const NavbarNavLink = function NavbarNavLink<T extends ElementType = 'a' | 'button'>(props: NavbarNavLinkProps<T>) {
  const {
    active,
    'aria-current': ariaCurrent,
    'aria-disabled': ariaDisabled,
    as: Component = 'a' as ElementType,
    className,
    disabled,
    dropOldClass,
    style,
    type,
    variables,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(
      !dropOldClass && 'nav-link',
      active && 'active',
      disabled && Component === 'a' && 'disabled',
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      'aria-current': ariaCurrent ?? (active ? 'page' : undefined),
      'aria-disabled': ariaDisabled ?? (disabled ? 'true' : undefined),
      className: finalClass,
      disabled: disabled && Component === 'button' ? true : undefined,
      style: finalStyle,
      type: type ?? (Component === 'button' ? 'button' : undefined),
    };
  }, [Component, active, ariaCurrent, ariaDisabled, className, disabled, dropOldClass, style, type, variables]);

  return <Component {...rest} {...renderOptions} />;
};

NavbarNavLink.displayName = 'BRL.NavbarNavLink';

export default NavbarNavLink;
