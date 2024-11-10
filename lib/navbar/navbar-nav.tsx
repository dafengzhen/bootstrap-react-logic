import { type ElementType, useMemo } from 'react';

import type { NavbarNavProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const NavbarNav = function NavbarNav<T extends ElementType = 'div' | 'ul'>(props: NavbarNavProps<T>) {
  const { as: Component = 'ul', className, dropOldClass, scroll, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'navbar-nav', scroll && 'navbar-nav-scroll', className);
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [className, dropOldClass, scroll, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

NavbarNav.displayName = 'BRL.NavbarNav';

export default NavbarNav;
