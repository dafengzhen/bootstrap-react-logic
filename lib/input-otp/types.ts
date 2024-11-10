import type { ElementType } from 'react';

import type { InputProps } from '../input';
import type { BaseProps, InputOtpVariablesType, PropsWithoutRef } from '../tools';

type Props<T extends ElementType> = {
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
} & BaseProps<T, InputOtpVariablesType>;

export type InputOtpProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, InputOtpVariablesType>;
