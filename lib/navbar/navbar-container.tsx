import { type ElementType, useMemo } from 'react';

import type { NavbarContainerProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const NavbarContainer = function NavbarContainer<T extends ElementType = 'div' | 'form'>(
  props: NavbarContainerProps<T>,
) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && !className?.includes('container') && 'container-fluid', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

NavbarContainer.displayName = 'BRL.NavbarContainer';

export default NavbarContainer;
