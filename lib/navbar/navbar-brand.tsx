import { type ElementType, useMemo } from 'react';

import type { NavbarBrandProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const NavbarBrand = function NavbarBrand<T extends ElementType = 'a'>(props: NavbarBrandProps<T>) {
  const { as: Component = 'a' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'navbar-brand', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

NavbarBrand.displayName = 'BRL.NavbarBrand';

export default NavbarBrand;
