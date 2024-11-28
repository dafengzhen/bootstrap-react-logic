import type { ElementType } from 'react';

import type { BaseProps, PropsWithoutRef, TextareaVariablesType } from '../tools';

export type TextareaProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, TextareaVariablesType>;

type Props<T extends ElementType> = BaseProps<T, TextareaVariablesType> & {
  /**
   * isInvalid,
   */
  isInvalid?: boolean;

  /**
   * isValid.
   */
  isValid?: boolean;
};
