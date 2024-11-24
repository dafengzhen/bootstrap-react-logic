import type { ElementType } from 'react';

import type { RadioVariablesType, PropsWithoutRef, BaseProps, SlotValue } from '../tools';

export type RadioProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, RadioVariablesType>;

type Props<T extends ElementType> = {
  /**
   * contentClasses.
   */
  contentClasses?: Partial<Record<SlotValueKeys, SlotValue>>;

  /**
   * isInvalid,
   */
  isInvalid?: boolean;

  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * isValid.
   */
  isValid?: boolean;

  /**
   * reverse.
   */
  reverse?: boolean;

  /**
   * inline.
   */
  inline?: boolean;

  /**
   * switch.
   */
  switch?: boolean;
} & BaseProps<T, RadioVariablesType>;

type SlotValueKeys = 'component' | 'container' | 'label';
