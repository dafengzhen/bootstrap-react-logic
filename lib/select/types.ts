import type { ElementType } from 'react';

import type {
  BaseProps,
  OmittedPropsWithoutRef,
  PropsWithoutRef,
  SelectOptionVariablesType,
  SelectVariablesType,
} from '../tools';

export type SelectOptionProps<T extends ElementType> = PropsWithoutRef<OptionProps<T>, T, SelectOptionVariablesType>;

export type SelectProps<T extends ElementType> = OmittedPropsWithoutRef<Props<T>, T, SelectVariablesType, 'size'>;

type OptionProps<T extends ElementType> = BaseProps<T, SelectOptionVariablesType> & {
  /**
   * disabled,
   */
  disabled?: boolean;
};

type Props<T extends ElementType> = BaseProps<T, SelectVariablesType> & {
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
};
