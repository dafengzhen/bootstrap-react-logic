import type { ElementType } from 'react';

import type { RangeVariablesType, PropsWithoutRef, BaseProps } from '../tools';

export type RangeProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, RangeVariablesType>;

type Props<T extends ElementType> = {
  /**
   * step.
   */
  step?: number | string;

  /**
   * max.
   */
  max?: number | string;

  /**
   * min.
   */
  min?: number | string;

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
} & BaseProps<T, RangeVariablesType>;
