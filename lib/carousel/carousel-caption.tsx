import { type ElementType, useMemo } from 'react';

import type { CarouselCaptionProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const CarouselCaption = function CarouselCaption<T extends ElementType = 'div'>(props: CarouselCaptionProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'carousel-caption', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return { className: finalClass, style: finalStyle };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

CarouselCaption.displayName = 'BRL.CarouselCaption';

export default CarouselCaption;
