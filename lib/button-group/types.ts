import type { ElementType } from 'react';
import type { BaseProps, ButtonGroupVariablesType, PropsWithoutRef } from '../tools';

type Props<T extends ElementType> = BaseProps<T, ButtonGroupVariablesType> & {
  /**
   * toolbar.
   */
  toolbar?: boolean;

  /**
   * vertical.
   */
  vertical?: boolean;

  /**
   * size.
   */
  size?: 'lg' | 'sm';
};

export type ButtonGroupProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, ButtonGroupVariablesType>;
