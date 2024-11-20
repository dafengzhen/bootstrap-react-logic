import type { ElementType } from 'react';

import type { BaseProps, InputGroupTextVariablesType, InputGroupVariablesType, PropsWithoutRef } from '../tools';

export type InputGroupProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, InputGroupVariablesType>;

export type InputGroupTextProps<T extends ElementType> = PropsWithoutRef<TextProps<T>, T, InputGroupTextVariablesType>;

type Props<T extends ElementType> = BaseProps<T, InputGroupVariablesType> & {
  /**
   * hasValidation.
   */
  hasValidation?: boolean;

  /**
   * nowrap.
   */
  nowrap?: boolean;

  /**
   * size.
   */
  size?: 'lg' | 'sm';
};

type TextProps<T extends ElementType> = BaseProps<T, InputGroupTextVariablesType> & {};
