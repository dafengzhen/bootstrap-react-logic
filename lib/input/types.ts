import type { ElementType, ElementRef, LegacyRef, ReactNode } from 'react';

import type { OmittedPropsWithoutRef, InputVariablesType, BaseProps, SlotValue } from '../tools';

export type InputProps<T extends ElementType> = OmittedPropsWithoutRef<
  Props<T>,
  T,
  InputVariablesType,
  'color' | 'size'
>;

type Props<T extends ElementType> = {
  /**
   * startEndContentClasses.
   */
  startEndContentClasses?: Partial<Record<SlotValueKeys, SlotValue>>;

  /**
   * nativeColor.
   */
  nativeColor?: undefined | string;

  /**
   * onRef.
   */
  onRef?: LegacyRef<ElementRef<T>>;

  /**
   * nativeSize.
   */
  nativeSize?: undefined | number;

  /**
   * readonlyPlainText.
   */
  readonlyPlainText?: boolean;

  /**
   * startContent.
   */
  startContent?: ReactNode;

  /**
   * endContent.
   */
  endContent?: ReactNode;

  /**
   * isInvalid,
   */
  isInvalid?: boolean;

  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * isValid.
   */
  isValid?: boolean;

  /**
   * color
   */
  color?: boolean;
} & BaseProps<T, InputVariablesType>;

type SlotValueKeys = 'component' | 'container' | 'start' | 'end';
