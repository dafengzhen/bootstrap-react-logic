import type { ElementType } from 'react';

import type { BaseProps, PropsWithoutRef, TextareaVariablesType } from '../tools';

type Props<T extends ElementType> = {
  /**
   * isInvalid,
   */
  isInvalid?: boolean;

  /**
   * isValid.
   */
  isValid?: boolean;
} & BaseProps<T, TextareaVariablesType>;

export type TextareaProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, TextareaVariablesType>;
