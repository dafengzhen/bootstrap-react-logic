import { type ElementType, useMemo } from 'react';

import type { TableTdProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const TableTd = function TableTd<T extends ElementType = 'td'>(props: TableTdProps<T>) {
  const {
    as: Component = 'td' as ElementType,
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

TableTd.displayName = 'BRL.TableTd';

export default TableTd;
