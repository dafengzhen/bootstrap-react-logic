import { type ElementType, useMemo } from 'react';

import type { NavbarNavLinkProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const NavbarNavLink = function NavbarNavLink<T extends ElementType = 'a'>(props: NavbarNavLinkProps<T>) {
  const { as: Component = 'a', className, dropOldClass, style, variables, ...rest } = props;

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

NavbarNavLink.displayName = 'BRL.NavbarNavLink';

export default NavbarNavLink;
