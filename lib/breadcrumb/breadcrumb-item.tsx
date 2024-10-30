import { type ElementType, useMemo } from 'react';
import type { BreadcrumbItemProps } from './types.ts';
import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const BreadcrumbItem = function BreadcrumbItem<T extends ElementType = 'li'>(props: BreadcrumbItemProps<T>) {
  const {
    as: Component = 'li',
    dropOldClass,
    variables,
    className,
    style,
    active,
    'aria-current': ariaCurrent,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'breadcrumb-item', active && 'active', className);
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    const finalAriaCurrent = (ariaCurrent ? ariaCurrent : active ? 'page' : undefined) as 'page' | undefined;

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
        'aria-current': finalAriaCurrent,
      },
      isValueValid,
    );
  }, [active, ariaCurrent, className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

BreadcrumbItem.displayName = 'BRL.BreadcrumbItem';

export default BreadcrumbItem;
