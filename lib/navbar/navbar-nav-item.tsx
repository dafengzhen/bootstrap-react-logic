import { type ElementType, useMemo } from 'react';

import type { NavbarNavItemProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const NavbarNavItem = function NavbarNavItem<T extends ElementType = 'li'>(props: NavbarNavItemProps<T>) {
  const { as: Component = 'li', className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && '', className);
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
