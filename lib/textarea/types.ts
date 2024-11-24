import type { ElementType } from 'react';

import type { TextareaVariablesType, PropsWithoutRef, BaseProps } from '../tools';

export type TextareaProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, TextareaVariablesType>;

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
