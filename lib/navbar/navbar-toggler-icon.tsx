import { type ElementType, useMemo } from 'react';

import type { NavbarTogglerProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const NavbarTogglerIcon = function NavbarTogglerIcon<T extends ElementType = 'span'>(props: NavbarTogglerProps<T>) {
  const { as: Component = 'span', className, dropOldClass, style, variables, ...rest } = props;

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

NavbarTogglerIcon.displayName = 'BRL.NavbarTogglerIcon';

export default NavbarTogglerIcon;
