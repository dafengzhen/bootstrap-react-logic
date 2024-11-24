import { type ElementType, useMemo } from 'react';

import type { TableTrProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const TableTr = function TableTr<T extends ElementType = 'tr'>(props: TableTrProps<T>) {
  const {
    as: Component = 'tr' as ElementType,
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

TableTr.displayName = 'BRL.TableTr';

export default TableTr;
