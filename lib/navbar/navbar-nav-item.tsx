import { type ElementType, useMemo } from 'react';

import type { NavbarNavItemProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const NavbarNavItem = function NavbarNavItem<T extends ElementType = 'a' | 'li'>(props: NavbarNavItemProps<T>) {
  const { as: Component = 'li' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'nav-item', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

NavbarNavItem.displayName = 'BRL.NavbarNavItem';

export default NavbarNavItem;
