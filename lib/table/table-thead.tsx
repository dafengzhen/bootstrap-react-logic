import { type ElementType, useMemo } from 'react';

import type { TableTheadProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const TableThead = function TableThead<T extends ElementType = 'thead'>(props: TableTheadProps<T>) {
  const {
    as: Component = 'thead' as ElementType,
    className,
    divider,
    dropOldClass,
    style,
    variables,
    variant,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(
      !dropOldClass && '',
      divider && 'table-group-divider',
      variant && `table-${variant}`,
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, divider, dropOldClass, style, variables, variant]);

  return <Component {...rest} {...renderOptions} />;
};

TableThead.displayName = 'BRL.TableThead';

export default TableThead;
