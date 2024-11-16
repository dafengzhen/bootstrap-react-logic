import { type ElementType, useMemo } from 'react';

import type { PaginationNavProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const PaginationNav = function PaginationNav<T extends ElementType = 'nav'>(props: PaginationNavProps<T>) {
  const { as: Component = 'nav', className, dropOldClass, style, variables, ...rest } = props;

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

PaginationNav.displayName = 'BRL.PaginationNav';

export default PaginationNav;
