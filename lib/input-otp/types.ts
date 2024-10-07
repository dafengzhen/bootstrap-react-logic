import type { ElementType } from 'react';
import type {
  BaseProps,
  InputOtpVariablesEnum,
  PropsWithoutRef,
} from '../tools';
import type { InputProps } from '../input';

type Props<T extends ElementType> = BaseProps<
  T,
  typeof InputOtpVariablesEnum
> & {
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
  inputProps?: Omit<InputProps<'input'>, 'key' | 'value' | 'defaultValue'>;
};

export type InputOtpProps<T extends ElementType> = PropsWithoutRef<
  Props<T>,
  T,
  typeof InputOtpVariablesEnum
>;
