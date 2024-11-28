import { type ElementType, useMemo } from 'react';

import type { PaginationNavProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const PaginationNav = function PaginationNav<T extends ElementType = 'nav'>(props: PaginationNavProps<T>) {
  const { as: Component = 'nav' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && '', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

PaginationNav.displayName = 'BRL.PaginationNav';

export default PaginationNav;
