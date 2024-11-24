import type { ElementType } from 'react';

import type {
  SelectOptionVariablesType,
  OmittedPropsWithoutRef,
  SelectVariablesType,
  PropsWithoutRef,
  BaseProps,
} from '../tools';

export type SelectOptionProps<T extends ElementType> = PropsWithoutRef<OptionProps<T>, T, SelectOptionVariablesType>;

export type SelectProps<T extends ElementType> = OmittedPropsWithoutRef<Props<T>, T, SelectVariablesType, 'size'>;

type Props<T extends ElementType> = {
  /**
   * nativeSize.
   */
  nativeSize?: undefined | number;

  /**
   * isInvalid,
   */
  isInvalid?: boolean;

  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * isValid.
   */
  isValid?: boolean;
} & BaseProps<T, SelectVariablesType>;

type OptionProps<T extends ElementType> = {
  /**
   * disabled,
   */
  disabled?: boolean;
} & BaseProps<T, SelectOptionVariablesType>;
