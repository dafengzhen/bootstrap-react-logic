import { type ElementType, useMemo } from 'react';

import type { TableTfootProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const TableTfoot = function TableTfoot<T extends ElementType = 'tfoot'>(props: TableTfootProps<T>) {
  const { as: Component = 'tfoot', className, divider, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && '', divider && 'table-group-divider', className);
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
  }, [className, divider, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

TableTfoot.displayName = 'BRL.TableTfoot';

export default TableTfoot;
