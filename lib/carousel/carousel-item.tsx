import { type ElementType, useEffect, useMemo, useRef } from 'react';

import type { CarouselItemProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const CarouselItem = function CarouselItem<T extends ElementType = 'div'>(props: CarouselItemProps<T>) {
  const {
    active: activeByDefault = false,
    as: Component = 'div' as ElementType,
    carouselItemEnd: carouselItemEndByDefault = false,
    carouselItemNext: carouselItemNextByDefault = false,
    carouselItemPrev: carouselItemPrevByDefault = false,
    carouselItemStart: carouselItemStartByDefault = false,
    className,
    dropOldClass,
    style,
    variables,
    ...rest
  } = props;

  const element = useRef<HTMLDivElement | null>(null);

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'carousel-item', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return { className: finalClass, style: finalStyle };
  }, [className, dropOldClass, style, variables]);

  useEffect(() => {
    const current = element.current;
    if (!current) {
      return;
    }

    const handleTransitionEnd = (addActive: boolean, removeClasses: string[], addClasses: string[]) => {
      if (addActive) {
        current.classList.add('active');
      }

      removeClasses.forEach((cls) => current.classList.remove(cls));
      addClasses.forEach((cls) => current.classList.add(cls));
    };

    const onTransitionEnd = () => {
      if (activeByDefault) {
        handleTransitionEnd(
          false,
          carouselItemStartByDefault ? ['active', 'carousel-item-start'] : ['active', 'carousel-item-end'],
          [],
        );
      } else {
        handleTransitionEnd(
          true,
          carouselItemStartByDefault
            ? ['carousel-item-next', 'carousel-item-start']
            : ['carousel-item-prev', 'carousel-item-end'],
          [],
        );
      }
    };

    if (activeByDefault && carouselItemStartByDefault) {
      requestAnimationFrame(() => {
        current.addEventListener('transitionend', onTransitionEnd);
        requestAnimationFrame(() => {
          current.classList.add('active', 'carousel-item-start');
        });
      });
    } else if (!activeByDefault && carouselItemNextByDefault && carouselItemStartByDefault) {
      requestAnimationFrame(() => {
        current.addEventListener('transitionend', onTransitionEnd);
        current.classList.add('carousel-item-next');
        requestAnimationFrame(() => {
          current.classList.add('carousel-item-start');
        });
      });
    } else if (activeByDefault && carouselItemEndByDefault) {
      requestAnimationFrame(() => {
        current.addEventListener('transitionend', onTransitionEnd);
        requestAnimationFrame(() => {
          current.classList.add('active', 'carousel-item-end');
        });
      });
    } else if (!activeByDefault && carouselItemPrevByDefault && carouselItemEndByDefault) {
      requestAnimationFrame(() => {
        current.addEventListener('transitionend', onTransitionEnd);
        current.classList.add('carousel-item-prev');
        requestAnimationFrame(() => {
          current.classList.add('carousel-item-end');
        });
      });
    } else {
      handleTransitionEnd(activeByDefault, [], []);
      return;
    }

    return () => {
      onTransitionEnd();
      current.removeEventListener('transitionend', onTransitionEnd);
    };
  }, [
    activeByDefault,
    carouselItemEndByDefault,
    carouselItemNextByDefault,
    carouselItemPrevByDefault,
    carouselItemStartByDefault,
  ]);

  return <Component {...rest} {...renderOptions} ref={element} />;
};

CarouselItem.displayName = 'BRL.CarouselItem';

export default CarouselItem;
