import { type ElementType, useMemo } from 'react';

import type { TableTheadProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const TableThead = function TableThead<T extends ElementType = 'thead'>(props: TableTheadProps<T>) {
  const { as: Component = 'thead', className, divider, dropOldClass, style, variables, variant, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && '',
      divider && 'table-group-divider',
      variant && `table-${variant}`,
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
  }, [className, divider, dropOldClass, style, variables, variant]);

  return <Component {...rest} {...renderOptions} />;
};

TableThead.displayName = 'BRL.TableThead';

export default TableThead;
