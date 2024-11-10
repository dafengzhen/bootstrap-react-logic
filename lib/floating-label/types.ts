import type { ElementType } from 'react';

import type { BaseProps, FloatingLabelVariablesType, PropsWithoutRef } from '../tools';

type Props<T extends ElementType> = {
  /**
   * isInvalid,
   */
  isInvalid?: boolean;

  /**
   * isValid.
   */
  isValid?: boolean;
} & BaseProps<T, FloatingLabelVariablesType>;

export type FloatingLabelProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, FloatingLabelVariablesType>;
