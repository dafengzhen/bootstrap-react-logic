import type { ElementType } from 'react';

import type { BaseProps, CheckboxVariablesType, PropsWithoutRef, SlotValue } from '../tools';

export type CheckboxProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, CheckboxVariablesType>;

type Props<T extends ElementType> = BaseProps<T, CheckboxVariablesType> & {
  /**
   * contentClasses.
   */
  contentClasses?: Partial<Record<SlotValueKeys, SlotValue>>;

  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * indeterminate.
   */
  indeterminate?: boolean;

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
