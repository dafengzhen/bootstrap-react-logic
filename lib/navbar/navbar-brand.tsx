import { type ElementType, useMemo } from 'react';

import type { NavbarBrandProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const NavbarBrand = function NavbarBrand<T extends ElementType = 'a'>(props: NavbarBrandProps<T>) {
  const { as: Component = 'a' as ElementType, dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'navbar-brand', className);
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
