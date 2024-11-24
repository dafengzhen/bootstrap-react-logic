import type { ElementType, ReactNode } from 'react';

import type {
  CarouselCaptionVariablesType,
  CarouselItemVariablesType,
  OmittedPropsWithoutRef,
  CarouselVariablesType,
  PropsWithoutRef,
  BaseProps,
} from '../tools';

export interface CarouselOption {
  id?: number | string;
  caption?: ReactNode;
  interval?: number;
  active?: boolean;
  item?: ReactNode;
}

export type CarouselCaptionProps<T extends ElementType> = PropsWithoutRef<
  CaptionProps<T>,
  T,
  CarouselCaptionVariablesType
>;

export type CarouselProps<T extends ElementType> = OmittedPropsWithoutRef<
  Props<T>,
  T,
  CarouselVariablesType,
  'onChange'
>;

export type CarouselItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, CarouselItemVariablesType>;

type Props<T extends ElementType> = {
  /**
   * onChange.
   */
  onChange?: (id: number | string, type: 'nextIndicator' | 'prevIndicator' | 'next' | 'prev') => void;

  /**
   * ride.
   */
  ride?: 'carousel' | boolean;

  /**
   * options.
   */
  options?: CarouselOption[];

  /**
   * indicators.
   */
  indicators?: boolean;

  /**
   * controls.
   */
  controls?: boolean;

  /**
   * pause.
   */
  pause?: boolean;

  /**
   * slide.
   */
  slide?: boolean;

  /**
   * touch.
   */
  touch?: boolean;

  /**
   * fade.
   */
  fade?: boolean;
} & BaseProps<T, CarouselVariablesType>;

type ItemProps<T extends ElementType> = {
  /**
   * carouselItemStart.
   */
  carouselItemStart?: boolean;

  /**
   * carouselItemNext.
   */
  carouselItemNext?: boolean;

  /**
   * carouselItemPrev.
   */
  carouselItemPrev?: boolean;

  /**
   * carouselItemEnd.
   */
  carouselItemEnd?: boolean;

  /**
   * active.
   */
  active?: boolean;
} & BaseProps<T, CarouselItemVariablesType>;

type CaptionProps<T extends ElementType> = BaseProps<T, CarouselCaptionVariablesType> & {};
