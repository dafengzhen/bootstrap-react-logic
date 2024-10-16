import type { ElementType } from 'react';
import type { BaseProps, PropsWithoutRef, RangeVariablesEnum } from '../tools';

type Props<T extends ElementType> = BaseProps<T, typeof RangeVariablesEnum> & {
  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * min.
   */
  min?: string | number;

  /**
   * max.
   */
  max?: string | number;

  /**
   * step.
   */
  step?: string | number;

  /**
   * isValid.
   */
  isValid?: boolean;

  /**
   * isInvalid,
   */
  isInvalid?: boolean;
};

export type RangeProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, typeof RangeVariablesEnum>;
