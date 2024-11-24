import { type ElementType, useMemo } from 'react';

import type { NavbarTogglerProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const NavbarTogglerIcon = function NavbarTogglerIcon<T extends ElementType = 'span'>(props: NavbarTogglerProps<T>) {
  const { as: Component = 'span' as ElementType, dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'navbar-toggler-icon', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

NavbarTogglerIcon.displayName = 'BRL.NavbarTogglerIcon';

export default NavbarTogglerIcon;
