import { type ElementType, type TouchEvent, useCallback, useEffect, useState, useMemo } from 'react';

import type { CarouselOption, CarouselProps } from './types.ts';

import {
  getLoopIndexDirection,
  calculateLoopIndex,
  convertBsKeyToVar,
  clsxWithOptions,
  filterOptions,
  isValueValid,
  clsxUnique,
  clsxStyle,
} from '../tools';
import CarouselCaption from './carousel-caption.tsx';
import CarouselItem from './carousel-item.tsx';
import Button from '../button/button.tsx';

interface IOption extends CarouselOption {
  carouselItemStart?: boolean;
  carouselItemNext?: boolean;
  carouselItemPrev?: boolean;
  carouselItemEnd?: boolean;
  id: number | string;
  interval: number;
}

const Carousel = function Carousel<T extends ElementType = 'div'>(props: CarouselProps<T>) {
  const {
    onChange: onChangeByDefault,
    options: defaultOptions,
    as: Component = 'div',
    controls = true,
    dropOldClass,
    slide = true,
    indicators,
    className,
    variables,
    pause,
    style,
    touch,
    fade,
    ride,
    ...rest
  } = props;

  const initialOptions = (defaultOptions ?? []).map((item, index) => ({
    ...item,
    interval: item.interval ?? 3000,
    id: item.id ?? index,
  }));

  const [options, setOptions] = useState<IOption[]>(initialOptions);
  const [carouselItemIndex, setCarouselItemIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'carousel', slide && 'slide', fade && 'carousel-fade', className);
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => convertBsKeyToVar(key));

    return filterOptions({ className: finalClass, style: finalStyle }, isValueValid);
  }, [className, dropOldClass, fade, slide, style, variables]);

  const updateItemsState = useCallback(
    (currentIndex: number, nextIndex: number, type: 'nextIndicator' | 'prevIndicator' | 'next' | 'prev') => {
      const currentItem = options[currentIndex];
      const nextItem = options[nextIndex];

      currentItem.active = true;
      currentItem.carouselItemStart = type === 'next' || type === 'nextIndicator';
      currentItem.carouselItemEnd = type === 'prev' || type === 'prevIndicator';
      currentItem.carouselItemNext = false;
      currentItem.carouselItemPrev = false;

      nextItem.active = false;
      nextItem.carouselItemNext = type === 'next' || type === 'nextIndicator';
      nextItem.carouselItemStart = type === 'next' || type === 'nextIndicator';
      nextItem.carouselItemPrev = type === 'prev' || type === 'prevIndicator';
      nextItem.carouselItemEnd = type === 'prev' || type === 'prevIndicator';

      setOptions([...options]);
    },
    [options],
  );

  const handleClick = useCallback(
    (type: 'nextIndicator' | 'prevIndicator' | 'next' | 'prev') => {
      const length = options.length;
      if (length === 0) {
        return;
      } else if (ride === true && !pause && length > 1) {
        setIsPlaying(true);
      }

      const currentItemIndex = calculateLoopIndex(carouselItemIndex, length, 0);
      const nextItemIndex = calculateLoopIndex(
        carouselItemIndex,
        length,
        type === 'next' || type === 'nextIndicator' ? 1 : -1,
      );

      updateItemsState(currentItemIndex, nextItemIndex, type);
      setCarouselItemIndex(nextItemIndex);
      onChangeByDefault?.(options[nextItemIndex].id, type);
    },
    [carouselItemIndex, onChangeByDefault, options, pause, ride, updateItemsState],
  );
  const handleMouseEnter = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false);
    }
  }, [isPlaying]);
  const handleMouseLeave = useCallback(() => {
    if (ride === 'carousel') {
      setIsPlaying(true);
    }
  }, [ride]);
  const handleTouchStart = useCallback(
    (e: TouchEvent<HTMLDivElement>) => {
      if (touch) {
        setTouchStartX(e.touches[0].clientX);
      }
    },
    [touch],
  );
  const handleTouchEnd = useCallback(
    (e: TouchEvent<HTMLDivElement>) => {
      if (touch && touchStartX !== null) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchDelta = touchStartX - touchEndX;

        if (touchDelta > 50) {
          handleClick('next');
        } else if (touchDelta < -50) {
          handleClick('prev');
        }

        setTouchStartX(null);
      }
    },
    [handleClick, touch, touchStartX],
  );

  useEffect(() => {
    if (ride === 'carousel' && options.length > 1) {
      setIsPlaying(true);
    } else if (ride === true) {
      setIsPlaying(false);
    }
  }, [options.length, ride]);
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPlaying(false);
      } else if ((ride === 'carousel' || ride === true) && !pause) {
        setIsPlaying(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [ride, pause]);
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      interval = setInterval(() => {
        handleClick('next');
      }, options[carouselItemIndex].interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [carouselItemIndex, isPlaying, handleClick, options]);

  return (
    <Component
      {...rest}
      {...renderOptions}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {indicators && (
        <div className="carousel-indicators">
          {options.map((item, index) => {
            const { isNext } = getLoopIndexDirection(carouselItemIndex, index, options.length);
            return (
              <Button
                className={clsxWithOptions(null, index === carouselItemIndex && 'active')}
                onClick={() => handleClick(isNext ? 'nextIndicator' : 'prevIndicator')}
                aria-current={index === carouselItemIndex ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
                data-bs-target=""
                key={item.id}
                dropOldClass
              ></Button>
            );
          })}
        </div>
      )}
      <div className="carousel-inner">
        {options.map((item) => (
          <CarouselItem
            carouselItemStart={item.carouselItemStart}
            carouselItemNext={item.carouselItemNext}
            carouselItemPrev={item.carouselItemPrev}
            carouselItemEnd={item.carouselItemEnd}
            active={item.active}
            key={item.id}
          >
            {item.item}
            {item.caption && <CarouselCaption>{item.caption}</CarouselCaption>}
          </CarouselItem>
        ))}
      </div>
      {controls && (
        <>
          <Button onClick={() => handleClick('prev')} className="carousel-control-prev" dropOldClass>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </Button>
          <Button onClick={() => handleClick('next')} className="carousel-control-next" dropOldClass>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </Button>
        </>
      )}
    </Component>
  );
};

Carousel.Item = CarouselItem;

Carousel.Caption = CarouselCaption;

Carousel.displayName = 'BRL.Carousel';

export default Carousel;
