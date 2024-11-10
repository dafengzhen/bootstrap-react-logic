import type { ElementRef, ElementType, LegacyRef, ReactNode } from 'react';

import type { BaseProps, InputVariablesType, OmittedPropsWithoutRef, SlotValue } from '../tools';

type SlotValueKeys = 'component' | 'container' | 'end' | 'start';

type Props<T extends ElementType> = {
  /**
   * color
   */
  color?: boolean;

  /**
   * endContent.
   */
  endContent?: ReactNode;

  /**
   * isInvalid,
   */
  isInvalid?: boolean;

  /**
   * isValid.
   */
  isValid?: boolean;

  /**
   * nativeColor.
   */
  nativeColor?: string | undefined;

  /**
   * nativeSize.
   */
  nativeSize?: number | undefined;

  /**
   * onRef.
   */
  onRef?: LegacyRef<ElementRef<T>>;

  /**
   * readonlyPlainText.
   */
  readonlyPlainText?: boolean;

  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * startContent.
   */
  startContent?: ReactNode;

  /**
   * startEndContentClasses.
   */
  startEndContentClasses?: Partial<Record<SlotValueKeys, SlotValue>>;
} & BaseProps<T, InputVariablesType>;

export type InputProps<T extends ElementType> = OmittedPropsWithoutRef<
  Props<T>,
  T,
  InputVariablesType,
  'color' | 'size'
>;
