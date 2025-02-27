import type { ComponentRef, ElementType, ReactNode, RefCallback } from 'react';

import type { BaseProps, InputVariablesType, OmittedPropsWithoutRef, SlotValue } from '../tools';

export type InputProps<T extends ElementType> = OmittedPropsWithoutRef<
  Props<T>,
  T,
  InputVariablesType,
  'color' | 'size'
>;

type Props<T extends ElementType> = BaseProps<T, InputVariablesType> & {
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
  nativeColor?: string;

  /**
   * nativeSize.
   */
  nativeSize?: number;

  /**
   * onRef.
   */
  onRef?: RefCallback<ComponentRef<T>>;

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
};

type SlotValueKeys = 'component' | 'container' | 'end' | 'start';
