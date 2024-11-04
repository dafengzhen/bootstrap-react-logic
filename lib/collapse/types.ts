import type { ElementType } from 'react';
import type { BaseProps, CollapseVariablesType, PropsWithoutRef } from '../tools';

type Props<T extends ElementType> = BaseProps<T, CollapseVariablesType> & {
  /**
   * collapsing.
   */
  collapsing?: boolean;

  /**
   * visible.
   */
  visible?: boolean;

  /**
   * horizontal.
   */
  horizontal?: boolean;
};

export type CollapseProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, CollapseVariablesType>;
