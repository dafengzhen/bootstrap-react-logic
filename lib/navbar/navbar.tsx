import { type ElementType, useMemo } from 'react';

import type { NavbarProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';
import NavbarContainer from './navbar-container.tsx';

const Navbar = function Navbar<T extends ElementType = 'nav'>(props: NavbarProps<T>) {
  const { as: Component = 'nav', className, container, dropOldClass, expand, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'navbar',
      expand && (typeof expand === 'boolean' ? 'navbar-expand' : `navbar-expand-${expand}`),
      container && (typeof container === 'boolean' ? 'container' : 'container-fluid'),
      className,
    );
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
  }, [className, container, dropOldClass, expand, style, variables]);

  return (
    <Component {...rest} {...renderOptions}>
      <NavbarContainer container={container}></NavbarContainer>
    </Component>
  );
};

Navbar.Container = NavbarContainer;

Navbar.displayName = 'BRL.Navbar';

export default Navbar;
