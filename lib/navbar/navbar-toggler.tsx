import { type ElementType, useMemo } from 'react';

import type { NavbarTogglerProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const NavbarToggler = function NavbarToggler<T extends ElementType = 'button'>(props: NavbarTogglerProps<T>) {
  const { as: Component = 'button', dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'navbar-toggler', className);
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

  return <Component type="button" {...rest} {...renderOptions} />;
};

NavbarToggler.displayName = 'BRL.NavbarToggler';

export default NavbarToggler;
