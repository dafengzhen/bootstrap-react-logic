import { type ElementType, useMemo } from 'react';

import type { TableThProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const TableTh = function TableTh<T extends ElementType = 'th'>(props: TableThProps<T>) {
  const { active, as: Component = 'th', className, dropOldClass, style, variables, variant, ...rest } = props;

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

TableTh.displayName = 'BRL.TableTh';

export default TableTh;
