import type { ElementType } from 'react';

import type { SpinnerVariablesType, PropsWithoutRef, BaseProps } from '../tools';

export type SpinnerProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, SpinnerVariablesType>;

type Props<T extends ElementType> = {
  /**
   * variant.
   */
  variant?: 'secondary' | 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'info';

  /**
   * grow.
   */
  grow?: boolean;

  /**
   * size.
   */
  size?: 'sm';
} & BaseProps<T, SpinnerVariablesType>;
