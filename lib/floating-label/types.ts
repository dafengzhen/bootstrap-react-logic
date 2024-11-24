import type { ElementType } from 'react';

import type { FloatingLabelVariablesType, PropsWithoutRef, BaseProps } from '../tools';

export type FloatingLabelProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, FloatingLabelVariablesType>;

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
