import type { ElementType, ReactNode } from 'react';

import type {
  BaseProps,
  CarouselCaptionVariablesType,
  CarouselItemVariablesType,
  CarouselVariablesType,
  OmittedPropsWithoutRef,
  PropsWithoutRef,
} from '../tools';

type Props<T extends ElementType> = {
  /**
   * controls.
   */
  controls?: boolean;

  /**
   * fade.
   */
  fade?: boolean;

  /**
   * indicators.
   */
  indicators?: boolean;

  /**
   * onChange.
   */
  onChange?: (id: number | string, type: 'next' | 'nextIndicator' | 'prev' | 'prevIndicator') => void;

  /**
   * options.
   */
  options?: CarouselOption[];

  /**
   * pause.
   */
  pause?: boolean;

  /**
   * ride.
   */
  ride?: 'carousel' | boolean;

  /**
   * slide.
   */
  slide?: boolean;

  /**
   * touch.
   */
  touch?: boolean;
} & BaseProps<T, CarouselVariablesType>;

type ItemProps<T extends ElementType> = {
  /**
   * active.
   */
  active?: boolean;

  /**
   * carouselItemEnd.
   */
  carouselItemEnd?: boolean;

  /**
   * carouselItemNext.
   */
  carouselItemNext?: boolean;

  /**
   * carouselItemPrev.
   */
  carouselItemPrev?: boolean;

  /**
   * carouselItemStart.
   */
  carouselItemStart?: boolean;
} & BaseProps<T, CarouselItemVariablesType>;

type CaptionProps<T extends ElementType> = {} & BaseProps<T, CarouselCaptionVariablesType>;

export interface CarouselOption {
  active?: boolean;
  caption?: ReactNode;
  id?: number | string;
  interval?: number;
  item?: ReactNode;
}

export type CarouselProps<T extends ElementType> = OmittedPropsWithoutRef<
  Props<T>,
  T,
  CarouselVariablesType,
  'onChange'
>;

export type CarouselItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, CarouselItemVariablesType>;

export type CarouselCaptionProps<T extends ElementType> = PropsWithoutRef<
  CaptionProps<T>,
  T,
  CarouselCaptionVariablesType
>;
