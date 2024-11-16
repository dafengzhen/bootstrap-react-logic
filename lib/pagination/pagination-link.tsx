import { type ElementType, useMemo } from 'react';

import type { PaginationLinkProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const PaginationLink = function PaginationLink<T extends ElementType = 'a'>(props: PaginationLinkProps<T>) {
  const { as: Component = 'a', className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'page-link', className);
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
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

PaginationLink.displayName = 'BRL.PaginationLink';

export default PaginationLink;