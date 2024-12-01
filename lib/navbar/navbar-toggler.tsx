import { type ElementType, useMemo } from 'react';

import type { NavbarTogglerProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const NavbarToggler = function NavbarToggler<T extends ElementType = 'button'>(props: NavbarTogglerProps<T>) {
  const { as: Component = 'button' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'navbar-toggler', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component type="button" {...rest} {...renderOptions} />;
};

NavbarToggler.displayName = 'BRL.NavbarToggler';

export default NavbarToggler;
