import type { ElementRef, ElementType, LegacyRef, ReactNode } from 'react';
import type {
  BaseProps,
  InputVariablesEnum,
  OmittedPropsWithoutRef,
  SlotValue,
} from '../tools';

type SlotValueKeys = 'container' | 'start' | 'end' | 'component';

type Props<T extends ElementType> = BaseProps<T, typeof InputVariablesEnum> & {
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
  typeof InputVariablesEnum,
  'size' | 'color'
>;
