import { type ElementType, useMemo } from 'react';

import type { OffcanvasHeaderProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const OffcanvasHeader = function OffcanvasHeader<T extends ElementType = 'div'>(props: OffcanvasHeaderProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'offcanvas-header', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

OffcanvasHeader.displayName = 'BRL.OffcanvasHeader';

export default OffcanvasHeader;
