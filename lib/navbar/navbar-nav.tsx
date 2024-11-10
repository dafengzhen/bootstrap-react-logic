import { type ElementType, useMemo } from 'react';

import type { NavbarNavProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const NavbarNav = function NavbarNav<T extends ElementType = 'ul'>(props: NavbarNavProps<T>) {
  const { as: Component = 'ul', className, dropOldClass, style, variables, ...rest } = props;

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

NavbarNav.displayName = 'BRL.NavbarNav';

export default NavbarNav;
