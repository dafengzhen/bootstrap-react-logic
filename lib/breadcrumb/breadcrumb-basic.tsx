import { type ElementType, useMemo } from 'react';

import type { BreadcrumbBasicProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';
import BreadcrumbItem from './breadcrumb-item.tsx';

const BreadcrumbBasic = function BreadcrumbBasic<T extends ElementType = 'ol'>(props: BreadcrumbBasicProps<T>) {
  const { as: Component = 'ol', dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'breadcrumb', className);
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [dropOldClass, className, variables, style]);

  return <Component {...rest} {...renderOptions} />;
};

BreadcrumbBasic.Item = BreadcrumbItem;

BreadcrumbBasic.displayName = 'BRL.BreadcrumbBasic';

export default BreadcrumbBasic;
