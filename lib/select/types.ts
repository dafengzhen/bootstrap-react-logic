import type { ElementType } from 'react';
import type {
  BaseProps,
  PropsWithoutRef,
  SelectOptionVariablesEnum,
  SelectVariablesEnum,
} from '../tools';

type Props<T extends ElementType> = BaseProps<T, typeof SelectVariablesEnum> & {
  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * nativeSize.
   */
  nativeSize?: number | undefined;

  /**
   * disabled.
   */
  disabled?: boolean;
};

type OptionProps<T extends ElementType> = BaseProps<
  T,
  typeof SelectOptionVariablesEnum
> & {
  /**
   * disabled,
   */
  disabled?: boolean;
};

export type SelectProps<T extends ElementType> = PropsWithoutRef<
  Props<T>,
  T,
  typeof SelectVariablesEnum
>;

export type SelectOptionProps<T extends ElementType> = PropsWithoutRef<
  OptionProps<T>,
  T,
  typeof SelectOptionVariablesEnum
>;
