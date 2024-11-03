import type { ElementType, ReactNode } from 'react';
import type {
  BaseProps,
  CarouselCaptionVariablesType,
  CarouselItemVariablesType,
  CarouselVariablesType,
  OmittedPropsWithoutRef,
  PropsWithoutRef,
} from '../tools';

type Props<T extends ElementType> = BaseProps<T, CarouselVariablesType> & {
  /**
   * slide.
   */
  slide?: boolean;

  /**
   * fade.
   */
  fade?: boolean;

  /**
   * options.
   */
  options?: CarouselOption[];

  /**
   * controls.
   */
  controls?: boolean;

  /**
   * indicators.
   */
  indicators?: boolean;

  /**
   * onChange.
   */
  onChange?: (id: string | number, type: 'prev' | 'next' | 'nextIndicator' | 'prevIndicator') => void;

  /**
   * ride.
   */
  ride?: 'carousel' | boolean;

  /**
   * pause.
   */
  pause?: boolean;

  /**
   * touch.
   */
  touch?: boolean;
};

type ItemProps<T extends ElementType> = BaseProps<T, CarouselItemVariablesType> & {
  /**
   * active.
   */
  active?: boolean;

  /**
   * carouselItemStart.
   */
  carouselItemStart?: boolean;

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
};

type CaptionProps<T extends ElementType> = BaseProps<T, CarouselCaptionVariablesType> & {};

export interface CarouselOption {
  id?: string | number;
  item?: ReactNode;
  caption?: ReactNode;
  active?: boolean;
  interval?: number;
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
