import { type ElementType, useMemo } from 'react';

import type { TableThProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const TableTh = function TableTh<T extends ElementType = 'th'>(props: TableThProps<T>) {
  const {
    as: Component = 'th' as ElementType,
    dropOldClass,
    className,
    variables,
    variant,
    active,
    style,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && '',
      variant && `table-${variant}`,
      active && 'table-active',
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [active, className, dropOldClass, style, variables, variant]);

  return <Component {...rest} {...renderOptions} />;
};

TableTh.displayName = 'BRL.TableTh';

export default TableTh;
