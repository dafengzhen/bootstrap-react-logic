import type { ElementType } from 'react';

import type { BaseProps, PropsWithoutRef, RangeVariablesType } from '../tools';

type Props<T extends ElementType> = {
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
} & BaseProps<T, RangeVariablesType>;

export type RangeProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, RangeVariablesType>;
