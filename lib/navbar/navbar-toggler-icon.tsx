import { type ElementType, useMemo } from 'react';

import type { NavbarTogglerProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const NavbarTogglerIcon = function NavbarTogglerIcon<T extends ElementType = 'span'>(props: NavbarTogglerProps<T>) {
  const { as: Component = 'span', dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'navbar-toggler-icon', className);
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
