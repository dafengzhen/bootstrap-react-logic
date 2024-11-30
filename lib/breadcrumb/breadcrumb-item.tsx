import { type ElementType, useMemo } from 'react';

import type { BreadcrumbItemProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const BreadcrumbItem = function BreadcrumbItem<T extends ElementType = 'li'>(props: BreadcrumbItemProps<T>) {
  const { active, as: Component = 'li' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'breadcrumb-item', active && 'active', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [active, className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

BreadcrumbItem.displayName = 'BRL.BreadcrumbItem';

export default BreadcrumbItem;
