import { type ElementType, useMemo } from 'react';

import type { BreadcrumbItemProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const BreadcrumbItem = function BreadcrumbItem<T extends ElementType = 'li'>(props: BreadcrumbItemProps<T>) {
  const {
    'aria-current': ariaCurrent,
    as: Component = 'li',
    dropOldClass,
    className,
    variables,
    active,
    style,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'breadcrumb-item', active && 'active', className);
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    const finalAriaCurrent = (ariaCurrent ? ariaCurrent : active ? 'page' : undefined) as undefined | 'page';

    return filterOptions(
      {
        'aria-current': finalAriaCurrent,
        className: finalClass,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [active, ariaCurrent, className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

BreadcrumbItem.displayName = 'BRL.BreadcrumbItem';

export default BreadcrumbItem;
