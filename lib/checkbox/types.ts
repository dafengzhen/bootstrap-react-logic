import type { ElementType } from 'react';

import type { CheckboxVariablesType, PropsWithoutRef, BaseProps, SlotValue } from '../tools';

export type CheckboxProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, CheckboxVariablesType>;

type Props<T extends ElementType> = {
  /**
   * contentClasses.
   */
  contentClasses?: Partial<Record<SlotValueKeys, SlotValue>>;

  /**
   * indeterminate.
   */
  indeterminate?: boolean;

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
} & BaseProps<T, CheckboxVariablesType>;

type SlotValueKeys = 'component' | 'container' | 'label';
