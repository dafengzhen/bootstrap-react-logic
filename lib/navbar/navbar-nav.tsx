import { type ElementType, useMemo } from 'react';

import type { NavbarNavProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const NavbarNav = function NavbarNav<T extends ElementType = 'div' | 'ul'>(props: NavbarNavProps<T>) {
  const { as: Component = 'ul' as ElementType, className, dropOldClass, scroll, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'navbar-nav', scroll && 'navbar-nav-scroll', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, scroll, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

NavbarNav.displayName = 'BRL.NavbarNav';

export default NavbarNav;
