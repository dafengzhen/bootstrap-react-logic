import { type ElementType, useMemo } from 'react';

import type { TableTdProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const TableTd = function TableTd<T extends ElementType = 'td'>(props: TableTdProps<T>) {
  const { as: Component = 'td', dropOldClass, className, variables, variant, active, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && '',
      variant && `table-${variant}`,
      active && 'table-active',
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
  }, [active, className, dropOldClass, style, variables, variant]);

  return <Component {...rest} {...renderOptions} />;
};

TableTd.displayName = 'BRL.TableTd';

export default TableTd;
