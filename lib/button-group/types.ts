import type { ElementType } from 'react';

import type { BaseProps, ButtonGroupVariablesType, PropsWithoutRef } from '../tools';

export type ButtonGroupProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, ButtonGroupVariablesType>;

type Props<T extends ElementType> = BaseProps<T, ButtonGroupVariablesType> & {
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
};
