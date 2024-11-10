import type { ElementType } from 'react';

import type { BaseProps, CollapseVariablesType, PropsWithoutRef } from '../tools';

type Props<T extends ElementType> = {
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
} & BaseProps<T, CollapseVariablesType>;

export type CollapseProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, CollapseVariablesType>;
