import type { ElementType } from 'react';

import type { BaseProps, PropsWithoutRef, SpinnerVariablesType } from '../tools';

export type SpinnerProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, SpinnerVariablesType>;

type Props<T extends ElementType> = BaseProps<T, SpinnerVariablesType> & {
  /**
   * grow.
   */
  grow?: boolean;

  /**
   * size.
   */
  size?: 'sm';

  /**
   * variant.
   */
  variant?: 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning';
};
