import { type ElementType, useMemo } from 'react';

import type { OffcanvasBodyProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const OffcanvasBody = function OffcanvasBody<T extends ElementType = 'div'>(props: OffcanvasBodyProps<T>) {
  const { as: Component = 'div' as ElementType, dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'offcanvas-body', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

OffcanvasBody.displayName = 'BRL.OffcanvasBody';

export default OffcanvasBody;
