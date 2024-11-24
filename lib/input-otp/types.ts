import type { ElementType } from 'react';

import type { InputOtpVariablesType, PropsWithoutRef, BaseProps } from '../tools';
import type { InputProps } from '../input';

export type InputOtpProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, InputOtpVariablesType>;

type Props<T extends ElementType> = {
  /**
   * inputProps.
   */
  inputProps?: InputProps<ElementType>;

  /**
   * defaultValue.
   */
  defaultValue?: (number | string)[];

  /**
   * length.
   */
  length?: number;
} & BaseProps<T, InputOtpVariablesType>;
