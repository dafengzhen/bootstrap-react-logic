import type { ElementType } from 'react';
import type { BaseProps, FloatingLabelVariablesEnum, PropsWithoutRef } from '../tools';

type Props<T extends ElementType> = BaseProps<T, typeof FloatingLabelVariablesEnum> & {
  /**
   * isValid.
   */
  isValid?: boolean;

  /**
   * isInvalid,
   */
  isInvalid?: boolean;
};

export type FloatingLabelProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, typeof FloatingLabelVariablesEnum>;
