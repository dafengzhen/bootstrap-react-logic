import { type ElementType, useMemo } from 'react';
import type { NavbarProps } from './types.ts';
import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const Navbar = function Navbar<T extends ElementType = 'nav'>(props: NavbarProps<T>) {
  const { as: Component = 'nav', dropOldClass, variables, className, style, ...rest } = props;

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

Navbar.displayName = 'BRL.Navbar';

export default Navbar;
