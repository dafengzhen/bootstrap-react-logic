import type { ElementType } from 'react';
import type { BaseProps, CheckboxVariablesType, PropsWithoutRef, SlotValue } from '../tools';

type SlotValueKeys = 'container' | 'component' | 'label';

type Props<T extends ElementType> = BaseProps<T, CheckboxVariablesType> & {
  /**
   * indeterminate.
   */
  indeterminate?: boolean;

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

  /**
   * isValid.
   */
  isValid?: boolean;

  /**
   * isInvalid,
   */
  isInvalid?: boolean;
};

export type CheckboxProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, CheckboxVariablesType>;
