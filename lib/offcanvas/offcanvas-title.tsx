import { type ElementType, useMemo } from 'react';

import type { OffcanvasTitleProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const OffcanvasTitle = function OffcanvasTitle<T extends ElementType = 'div'>(props: OffcanvasTitleProps<T>) {
  const { as: Component = 'div', dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'offcanvas-title h5', className);
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

OffcanvasTitle.displayName = 'BRL.OffcanvasTitle';

export default OffcanvasTitle;
