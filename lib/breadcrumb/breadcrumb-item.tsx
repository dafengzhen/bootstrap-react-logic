import { type ElementType, useMemo } from 'react';

import type { BreadcrumbItemProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const BreadcrumbItem = function BreadcrumbItem<T extends ElementType = 'li'>(props: BreadcrumbItemProps<T>) {
  const {
    active,
    'aria-current': ariaCurrent,
    as: Component = 'li' as ElementType,
    className,
    dropOldClass,
    style,
    variables,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'breadcrumb-item', active && 'active', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    const finalAriaCurrent = (ariaCurrent ? ariaCurrent : active ? 'page' : undefined) as 'page' | undefined;

    return {
      'aria-current': finalAriaCurrent,
      className: finalClass,
      style: finalStyle,
    };
  }, [active, ariaCurrent, className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

BreadcrumbItem.displayName = 'BRL.BreadcrumbItem';

export default BreadcrumbItem;
