import { type ElementType, useMemo } from 'react';

import type { NavbarTextProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const NavbarText = function NavbarText<T extends ElementType = 'span'>(props: NavbarTextProps<T>) {
  const { as: Component = 'span' as ElementType, dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'navbar-text', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

NavbarText.displayName = 'BRL.NavbarText';

export default NavbarText;
