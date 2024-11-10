import type { ElementType } from 'react';

import type { BaseProps, PropsWithoutRef, RadioVariablesType, SlotValue } from '../tools';

type SlotValueKeys = 'component' | 'container' | 'label';

type Props<T extends ElementType> = {
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
} & BaseProps<T, RadioVariablesType>;

export type RadioProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, RadioVariablesType>;
