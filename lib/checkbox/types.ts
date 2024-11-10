import type { ElementType } from 'react';

import type { BaseProps, CheckboxVariablesType, PropsWithoutRef, SlotValue } from '../tools';

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
} & BaseProps<T, CheckboxVariablesType>;

export type CheckboxProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, CheckboxVariablesType>;
