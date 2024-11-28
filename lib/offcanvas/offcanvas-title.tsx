import { type ElementType, useMemo } from 'react';

import type { OffcanvasTitleProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const OffcanvasTitle = function OffcanvasTitle<T extends ElementType = 'div'>(props: OffcanvasTitleProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'offcanvas-title h5', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

OffcanvasTitle.displayName = 'BRL.OffcanvasTitle';

export default OffcanvasTitle;
