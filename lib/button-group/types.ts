import type { ElementType } from 'react';

import type { BaseProps, ButtonGroupVariablesType, PropsWithoutRef } from '../tools';

type Props<T extends ElementType> = {
  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * toolbar.
   */
  toolbar?: boolean;

  /**
   * vertical.
   */
  vertical?: boolean;
} & BaseProps<T, ButtonGroupVariablesType>;

export type ButtonGroupProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, ButtonGroupVariablesType>;
