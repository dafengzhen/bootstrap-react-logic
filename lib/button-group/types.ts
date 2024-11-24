import type { ElementType } from 'react';

import type { ButtonGroupVariablesType, PropsWithoutRef, BaseProps } from '../tools';

export type ButtonGroupProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, ButtonGroupVariablesType>;

type Props<T extends ElementType> = {
  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * vertical.
   */
  vertical?: boolean;

  /**
   * toolbar.
   */
  toolbar?: boolean;
} & BaseProps<T, ButtonGroupVariablesType>;
