import { type ElementType, useMemo } from 'react';

import type { NavbarBrandProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const NavbarBrand = function NavbarBrand<T extends ElementType = 'a'>(props: NavbarBrandProps<T>) {
  const { as: Component = 'a', dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'navbar-brand', className);
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

NavbarBrand.displayName = 'BRL.NavbarBrand';

export default NavbarBrand;
