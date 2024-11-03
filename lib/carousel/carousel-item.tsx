import { type ElementType, useEffect, useMemo, useRef } from 'react';
import type { CarouselItemProps } from './types.ts';
import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const CarouselItem = function CarouselItem<T extends ElementType = 'div'>(props: CarouselItemProps<T>) {
  const {
    as: Component = 'div',
    dropOldClass,
    variables,
    className,
    style,
    active: activeByDefault = false,
    carouselItemStart: carouselItemStartByDefault = false,
    carouselItemEnd: carouselItemEndByDefault = false,
    carouselItemPrev: carouselItemPrevByDefault = false,
    carouselItemNext: carouselItemNextByDefault = false,
    ...rest
  } = props;

  const element = useRef<HTMLDivElement | null>(null);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'carousel-item', className);
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => convertBsKeyToVar(key));

    return filterOptions({ className: finalClass, style: finalStyle }, isValueValid);
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
