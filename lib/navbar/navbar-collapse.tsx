import { type ElementType, useMemo } from 'react';

import type { NavbarCollapseProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const NavbarCollapse = function NavbarCollapse<T extends ElementType = 'div'>(props: NavbarCollapseProps<T>) {
  const { as: Component = 'div', className, dropOldClass, style, variables, ...rest } = props;

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

NavbarCollapse.displayName = 'BRL.NavbarCollapse';

export default NavbarCollapse;
