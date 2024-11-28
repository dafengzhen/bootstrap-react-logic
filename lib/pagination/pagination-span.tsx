import { type ElementType, useMemo } from 'react';

import type { PaginationSpanProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const PaginationSpan = function PaginationSpan<T extends ElementType = 'span'>(props: PaginationSpanProps<T>) {
  const { as: Component = 'span' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

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

PaginationSpan.displayName = 'BRL.PaginationSpan';

export default PaginationSpan;
