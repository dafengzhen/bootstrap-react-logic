import { type ElementType, useMemo } from 'react';

import type { CarouselCaptionProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const CarouselCaption = function CarouselCaption<T extends ElementType = 'div'>(props: CarouselCaptionProps<T>) {
  const { as: Component = 'div', dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'carousel-caption', className);
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => convertBsKeyToVar(key));

    return filterOptions({ className: finalClass, style: finalStyle }, isValueValid);
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

CarouselCaption.displayName = 'BRL.CarouselCaption';

export default CarouselCaption;
