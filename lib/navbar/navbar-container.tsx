import { type ElementType, useMemo } from 'react';

import type { NavbarContainerProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const NavbarContainer = function NavbarContainer<T extends ElementType = 'div'>(props: NavbarContainerProps<T>) {
  const { as: Component = 'div', className, container, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && (typeof container === 'boolean' && container ? 'container' : 'container-fluid'),
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
  }, [className, container, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

NavbarContainer.displayName = 'BRL.NavbarContainer';

export default NavbarContainer;
