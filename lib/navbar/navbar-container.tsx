import { type ElementType, useMemo } from 'react';

import type { NavbarContainerProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const NavbarContainer = function NavbarContainer<T extends ElementType = 'form' | 'div'>(
  props: NavbarContainerProps<T>,
) {
  const { as: Component = 'div', dropOldClass, className, variables, style, ...rest } = props;

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
