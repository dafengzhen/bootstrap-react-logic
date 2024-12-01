import { type ElementType, useMemo } from 'react';

import type { PaginationItemProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const PaginationItem = function PaginationItem<T extends ElementType = 'li'>(props: PaginationItemProps<T>) {
  const {
    active,
    as: Component = 'li' as ElementType,
    className,
    disabled,
    dropOldClass,
    style,
    variables,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'page-item', disabled && 'disabled', active && 'active', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [active, className, disabled, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

PaginationItem.displayName = 'BRL.PaginationItem';

export default PaginationItem;
