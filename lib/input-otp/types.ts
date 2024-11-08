import type { ElementType } from 'react';
import type { BaseProps, InputOtpVariablesType, PropsWithoutRef } from '../tools';
import type { InputProps } from '../input';

type Props<T extends ElementType> = BaseProps<T, InputOtpVariablesType> & {
  /**
   * length.
   */
  length?: number;

  /**
   * defaultValue.
   */
  defaultValue?: (string | number)[];

  /**
   * inputProps.
   */
  inputProps?: InputProps<ElementType>;
};

export type InputOtpProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, InputOtpVariablesType>;
