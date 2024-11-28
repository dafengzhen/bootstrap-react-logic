import { type ElementType, useMemo } from 'react';

import type { PaginationLinkProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const PaginationLink = function PaginationLink<T extends ElementType = 'a'>(props: PaginationLinkProps<T>) {
  const { as: Component = 'a' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'page-link', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

PaginationLink.displayName = 'BRL.PaginationLink';

export default PaginationLink;
