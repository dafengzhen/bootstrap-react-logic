import { type ElementType, useMemo } from 'react';

import type { TableTbodyProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const TableTbody = function TableTbody<T extends ElementType = 'tbody'>(props: TableTbodyProps<T>) {
  const { as: Component = 'tbody', className, divider, dropOldClass, style, variables, ...rest } = props;

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

TableTbody.displayName = 'BRL.TableTbody';

export default TableTbody;
