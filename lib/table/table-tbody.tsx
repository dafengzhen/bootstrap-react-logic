import { type ElementType, useMemo } from 'react';

import type { TableTbodyProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const TableTbody = function TableTbody<T extends ElementType = 'tbody'>(props: TableTbodyProps<T>) {
  const { as: Component = 'tbody' as ElementType, dropOldClass, className, variables, divider, style, ...rest } = props;

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

TableTbody.displayName = 'BRL.TableTbody';

export default TableTbody;
