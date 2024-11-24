import { type ElementType, useMemo } from 'react';

import type { OffcanvasHeaderProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const OffcanvasHeader = function OffcanvasHeader<T extends ElementType = 'div'>(props: OffcanvasHeaderProps<T>) {
  const { as: Component = 'div', dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'offcanvas-header', className);
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

OffcanvasHeader.displayName = 'BRL.OffcanvasHeader';

export default OffcanvasHeader;
