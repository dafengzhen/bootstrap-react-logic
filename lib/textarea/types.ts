import type { ElementType } from 'react';
import type { BaseProps, PropsWithoutRef, TextareaVariablesType } from '../tools';

type Props<T extends ElementType> = BaseProps<T, TextareaVariablesType> & {
  /**
   * isValid.
   */
  isValid?: boolean;

  /**
   * isInvalid,
   */
  isInvalid?: boolean;
};

export type TextareaProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, TextareaVariablesType>;
