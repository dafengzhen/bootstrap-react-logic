import type { ElementType } from 'react';

import type { CollapseVariablesType, PropsWithoutRef, BaseProps } from '../tools';

export type CollapseProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, CollapseVariablesType>;

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
