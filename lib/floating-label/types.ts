import type { ElementType } from 'react';
import type { BaseProps, FloatingLabelVariablesType, PropsWithoutRef } from '../tools';

type Props<T extends ElementType> = BaseProps<T, FloatingLabelVariablesType> & {
  /**
   * isValid.
   */
  isValid?: boolean;

  /**
   * isInvalid,
   */
  isInvalid?: boolean;
};

export type FloatingLabelProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, FloatingLabelVariablesType>;
