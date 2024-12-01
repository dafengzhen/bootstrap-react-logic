import { type ElementType, useMemo } from 'react';

import type { NavItemProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const NavItem = function NavItem<T extends ElementType = 'li'>(props: NavItemProps<T>) {
  const { as: Component = 'li' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'nav-item', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

NavItem.displayName = 'BRL.NavItem';

export default NavItem;
