import type { ElementType } from 'react';

import type { BaseProps, PropsWithoutRef, RadioVariablesType, SlotValue } from '../tools';

export type RadioProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, RadioVariablesType>;

type Props<T extends ElementType> = BaseProps<T, RadioVariablesType> & {
  /**
   * contentClasses.
   */
  contentClasses?: Partial<Record<SlotValueKeys, SlotValue>>;

  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * inline.
   */
  inline?: boolean;

  /**
   * isInvalid,
   */
  isInvalid?: boolean;

  /**
   * isValid.
   */
  isValid?: boolean;

  /**
   * reverse.
   */
  reverse?: boolean;

  /**
   * switch.
   */
  switch?: boolean;
};

type SlotValueKeys = 'component' | 'container' | 'label';
