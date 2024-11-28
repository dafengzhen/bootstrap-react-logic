import type { ElementType } from 'react';

import type { BaseProps, FloatingLabelVariablesType, PropsWithoutRef } from '../tools';

export type FloatingLabelProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, FloatingLabelVariablesType>;

type Props<T extends ElementType> = BaseProps<T, FloatingLabelVariablesType> & {
  /**
   * isInvalid,
   */
  isInvalid?: boolean;

  /**
   * isValid.
   */
  isValid?: boolean;
};
