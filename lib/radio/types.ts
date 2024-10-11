import type { ElementType } from 'react';
import type { BaseProps, PropsWithoutRef, RadioVariablesEnum, SlotValue } from '../tools';

type SlotValueKeys = 'container' | 'component' | 'label';

type Props<T extends ElementType> = BaseProps<T, typeof RadioVariablesEnum> & {
  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * contentClasses.
   */
  contentClasses?: Partial<Record<SlotValueKeys, SlotValue>>;

  /**
   * switch.
   */
  switch?: boolean;

  /**
   * inline.
   */
  inline?: boolean;

  /**
   * reverse.
   */
  reverse?: boolean;
};

export type RadioProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, typeof RadioVariablesEnum>;
