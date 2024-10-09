import type { ElementType } from 'react';
import type { BaseProps, CheckboxVariablesEnum, PropsWithoutRef } from '../tools';

type Props<T extends ElementType> = BaseProps<T, typeof CheckboxVariablesEnum> & {
  /**
   * indeterminate.
   */
  indeterminate?: boolean;

  /**
   * disabled.
   */
  disabled?: boolean;
};

export type CheckboxProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, typeof CheckboxVariablesEnum>;
