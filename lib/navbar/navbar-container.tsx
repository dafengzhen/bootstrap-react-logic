import { type ElementType, useMemo } from 'react';

import type { NavbarContainerProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const NavbarContainer = function NavbarContainer<T extends ElementType = 'div' | 'form'>(
  props: NavbarContainerProps<T>,
) {
  const { as: Component = 'div', className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && !className?.includes('container') && 'container-fluid', className);
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

NavbarContainer.displayName = 'BRL.NavbarContainer';

export default NavbarContainer;