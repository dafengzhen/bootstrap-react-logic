import { type ElementType, useMemo } from 'react';

import type { TableTfootProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const TableTfoot = function TableTfoot<T extends ElementType = 'tfoot'>(props: TableTfootProps<T>) {
  const { as: Component = 'tfoot' as ElementType, dropOldClass, className, variables, divider, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && '', divider && 'table-group-divider', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, divider, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

TableTfoot.displayName = 'BRL.TableTfoot';

export default TableTfoot;
