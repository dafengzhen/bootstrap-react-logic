import { type ElementType, useMemo } from 'react';

import type { NavLinkProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const NavLink = function NavLink<T extends ElementType = 'a' | 'button'>(props: NavLinkProps<T>) {
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
    const finalClass = clsxUnique(
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

NavLink.displayName = 'BRL.NavLink';

export default NavLink;
