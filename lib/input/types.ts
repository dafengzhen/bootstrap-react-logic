import type { ElementRef, ElementType, LegacyRef, ReactNode } from 'react';
import type { BaseProps, InputVariablesType, OmittedPropsWithoutRef, SlotValue } from '../tools';

type SlotValueKeys = 'container' | 'start' | 'end' | 'component';

type Props<T extends ElementType> = BaseProps<T, InputVariablesType> & {
  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * nativeSize.
   */
  nativeSize?: number | undefined;

  /**
   * readonlyPlainText.
   */
  readonlyPlainText?: boolean;

  /**
   * isValid.
   */
  isValid?: boolean;

  /**
   * isInvalid,
   */
  isInvalid?: boolean;

  /**
   * color
   */
  color?: boolean;

  /**
   * nativeColor.
   */
  nativeColor?: string | undefined;

  /**
   * startContent.
   */
  startContent?: ReactNode;

  /**
   * endContent.
   */
  endContent?: ReactNode;

  /**
   * startEndContentClasses.
   */
  startEndContentClasses?: Partial<Record<SlotValueKeys, SlotValue>>;

  /**
   * onRef.
   */
  onRef?: LegacyRef<ElementRef<T>>;
};

export type InputProps<T extends ElementType> = OmittedPropsWithoutRef<
  Props<T>,
  T,
  InputVariablesType,
  'size' | 'color'
>;
