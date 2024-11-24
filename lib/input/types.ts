import type { ElementType, RefCallback, ElementRef, ReactNode } from 'react';

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
   * onRef.
   */
  onRef?: RefCallback<ElementRef<T>>;

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
   * nativeColor.
   */
  nativeColor?: string;

  /**
   * nativeSize.
   */
  nativeSize?: number;

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
