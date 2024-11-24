import type { ElementType } from 'react';

import type { InputGroupTextVariablesType, InputGroupVariablesType, PropsWithoutRef, BaseProps } from '../tools';

export type InputGroupTextProps<T extends ElementType> = PropsWithoutRef<TextProps<T>, T, InputGroupTextVariablesType>;

export type InputGroupProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, InputGroupVariablesType>;

type Props<T extends ElementType> = {
  /**
   * hasValidation.
   */
  hasValidation?: boolean;

  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * nowrap.
   */
  nowrap?: boolean;
} & BaseProps<T, InputGroupVariablesType>;

type TextProps<T extends ElementType> = BaseProps<T, InputGroupTextVariablesType> & {};
