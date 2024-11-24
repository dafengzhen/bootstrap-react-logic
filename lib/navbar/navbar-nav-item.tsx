import { type ElementType, useMemo } from 'react';

import type { NavbarNavItemProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const NavbarNavItem = function NavbarNavItem<T extends ElementType = 'li' | 'a'>(props: NavbarNavItemProps<T>) {
  const { as: Component = 'li', dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'nav-item', className);
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
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

NavbarNavItem.displayName = 'BRL.NavbarNavItem';

export default NavbarNavItem;
