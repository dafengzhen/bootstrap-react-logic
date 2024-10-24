import type { ElementType } from 'react';
import type {
  BaseProps,
  OmittedPropsWithoutRef,
  PropsWithoutRef,
  SelectOptionVariablesType,
  SelectVariablesType,
} from '../tools';

type Props<T extends ElementType> = BaseProps<T, SelectVariablesType> & {
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

  /**
   * isValid.
   */
  isValid?: boolean;

  /**
   * isInvalid,
   */
  isInvalid?: boolean;
};

type OptionProps<T extends ElementType> = BaseProps<T, SelectOptionVariablesType> & {
  /**
   * disabled,
   */
  disabled?: boolean;
};

export type SelectProps<T extends ElementType> = OmittedPropsWithoutRef<Props<T>, T, SelectVariablesType, 'size'>;

export type SelectOptionProps<T extends ElementType> = PropsWithoutRef<OptionProps<T>, T, SelectOptionVariablesType>;
