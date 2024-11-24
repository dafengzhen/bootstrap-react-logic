import { type ElementType, useMemo } from 'react';

import type { OffcanvasBodyProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const OffcanvasBody = function OffcanvasBody<T extends ElementType = 'div'>(props: OffcanvasBodyProps<T>) {
  const { as: Component = 'div', dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'offcanvas-body', className);
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

OffcanvasBody.displayName = 'BRL.OffcanvasBody';

export default OffcanvasBody;
