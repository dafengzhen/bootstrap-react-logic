import type { ElementType } from 'react';

import type { BaseProps, CollapseVariablesType, PropsWithoutRef } from '../tools';

export type CollapseProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, CollapseVariablesType>;

type Props<T extends ElementType> = BaseProps<T, CollapseVariablesType> & {
  /**
   * collapsing.
   */
  collapsing?: boolean;

  /**
   * horizontal.
   */
  horizontal?: boolean;

  /**
   * visible.
   */
  visible?: boolean;
};
