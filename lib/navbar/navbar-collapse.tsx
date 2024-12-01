import { type ElementType, useMemo } from 'react';

import type { NavbarCollapseProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const NavbarCollapse = function NavbarCollapse<T extends ElementType = 'div'>(props: NavbarCollapseProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'collapse navbar-collapse', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

NavbarCollapse.displayName = 'BRL.NavbarCollapse';

export default NavbarCollapse;
