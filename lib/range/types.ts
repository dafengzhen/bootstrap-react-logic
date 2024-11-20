import type { ElementType } from 'react';

import type { BaseProps, PropsWithoutRef, RangeVariablesType } from '../tools';

export type RangeProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, RangeVariablesType>;

type Props<T extends ElementType> = BaseProps<T, RangeVariablesType> & {
  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * isInvalid,
   */
  isInvalid?: boolean;

  /**
   * isValid.
   */
  isValid?: boolean;

  /**
   * max.
   */
  max?: number | string;

  /**
   * min.
   */
  min?: number | string;

  /**
   * step.
   */
  step?: number | string;
};
