import { type ElementType, useMemo } from 'react';

import type { BreadcrumbBasicProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';
import BreadcrumbItem from './breadcrumb-item.tsx';

const BreadcrumbBasic = function BreadcrumbBasic<T extends ElementType = 'ol'>(props: BreadcrumbBasicProps<T>) {
  const { as: Component = 'ol' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'breadcrumb', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

BreadcrumbBasic.Item = BreadcrumbItem;

BreadcrumbBasic.displayName = 'BRL.BreadcrumbBasic';

export default BreadcrumbBasic;
