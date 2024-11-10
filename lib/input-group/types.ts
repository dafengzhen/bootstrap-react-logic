import type { ElementType } from 'react';

import type { BaseProps, InputGroupTextVariablesType, InputGroupVariablesType, PropsWithoutRef } from '../tools';

type Props<T extends ElementType> = {
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
} & BaseProps<T, InputGroupVariablesType>;

type TextProps<T extends ElementType> = {} & BaseProps<T, InputGroupTextVariablesType>;

export type InputGroupProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, InputGroupVariablesType>;

export type InputGroupTextProps<T extends ElementType> = PropsWithoutRef<TextProps<T>, T, InputGroupTextVariablesType>;
