import type { ElementType } from 'react';
import type { BaseProps, PropsWithoutRef, RangeVariablesType } from '../tools';

type Props<T extends ElementType> = BaseProps<T, RangeVariablesType> & {
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

export type RangeProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, RangeVariablesType>;
