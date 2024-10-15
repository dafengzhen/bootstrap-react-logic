import type { ElementType } from 'react';
import type { BaseProps, InputGroupTextVariablesEnum, InputGroupVariablesEnum, PropsWithoutRef } from '../tools';

type Props<T extends ElementType> = BaseProps<T, typeof InputGroupVariablesEnum> & {
  /**
   * nowrap.
   */
  nowrap?: boolean;

  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * hasValidation.
   */
  hasValidation?: boolean;
};

type TextProps<T extends ElementType> = BaseProps<T, typeof InputGroupTextVariablesEnum> & {};

export type InputGroupProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, typeof InputGroupVariablesEnum>;

export type InputGroupTextProps<T extends ElementType> = PropsWithoutRef<
  TextProps<T>,
  T,
  typeof InputGroupTextVariablesEnum
>;
