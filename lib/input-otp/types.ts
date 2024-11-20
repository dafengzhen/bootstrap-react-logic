import type { ElementType } from 'react';

import type { InputProps } from '../input';
import type { BaseProps, InputOtpVariablesType, PropsWithoutRef } from '../tools';

export type InputOtpProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, InputOtpVariablesType>;

type Props<T extends ElementType> = BaseProps<T, InputOtpVariablesType> & {
  /**
   * defaultValue.
   */
  defaultValue?: (number | string)[];

  /**
   * inputProps.
   */
  inputProps?: InputProps<ElementType>;

  /**
   * length.
   */
  length?: number;
};
