import type { ElementType } from 'react';

import type {
  BaseProps,
  OmittedPropsWithoutRef,
  PropsWithoutRef,
  SelectOptionVariablesType,
  SelectVariablesType,
} from '../tools';

type Props<T extends ElementType> = {
  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * isInvalid,
   */
  isInvalid?: boolean;

  /**
   * isValid.
   */
  isValid?: boolean;

  /**
   * nativeSize.
   */
  nativeSize?: number | undefined;

  /**
   * size.
   */
  size?: 'lg' | 'sm';
} & BaseProps<T, SelectVariablesType>;

type OptionProps<T extends ElementType> = {
  /**
   * disabled,
   */
  disabled?: boolean;
} & BaseProps<T, SelectOptionVariablesType>;

export type SelectProps<T extends ElementType> = OmittedPropsWithoutRef<Props<T>, T, SelectVariablesType, 'size'>;

export type SelectOptionProps<T extends ElementType> = PropsWithoutRef<OptionProps<T>, T, SelectOptionVariablesType>;
