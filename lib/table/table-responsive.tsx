import { type ElementType, useMemo } from 'react';

import type { TableResponsiveProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const TableResponsive = function TableResponsive<T extends ElementType = 'div'>(props: TableResponsiveProps<T>) {
  const { as: Component = 'div', className, dropOldClass, responsive, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass &&
        responsive &&
        (typeof responsive === 'boolean' ? 'table-responsive' : `table-responsive-${responsive}`),
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
  }, [className, dropOldClass, responsive, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

TableResponsive.displayName = 'BRL.TableResponsive';

export default TableResponsive;
