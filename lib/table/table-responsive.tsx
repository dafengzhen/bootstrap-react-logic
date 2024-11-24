import { type ElementType, useMemo } from 'react';

import type { TableResponsiveProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const TableResponsive = function TableResponsive<T extends ElementType = 'div'>(props: TableResponsiveProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    dropOldClass,
    responsive,
    className,
    variables,
    style,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass &&
        responsive &&
        (typeof responsive === 'boolean' ? 'table-responsive' : `table-responsive-${responsive}`),
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, responsive, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

TableResponsive.displayName = 'BRL.TableResponsive';

export default TableResponsive;
