import { type ElementType, useMemo } from 'react';

import type { TableTrProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const TableTr = function TableTr<T extends ElementType = 'tr'>(props: TableTrProps<T>) {
  const { active, as: Component = 'tr', className, dropOldClass, style, variables, variant, ...rest } = props;

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

TableTr.displayName = 'BRL.TableTr';

export default TableTr;
