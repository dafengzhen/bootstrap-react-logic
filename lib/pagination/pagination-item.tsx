import { type ElementType, useMemo } from 'react';

import type { PaginationItemProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const PaginationItem = function PaginationItem<T extends ElementType = 'li'>(props: PaginationItemProps<T>) {
  const { as: Component = 'li', dropOldClass, className, variables, disabled, active, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'page-item', disabled && 'disabled', active && 'active', className);
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
  }, [active, className, disabled, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

PaginationItem.displayName = 'BRL.PaginationItem';

export default PaginationItem;
