import type { ElementType } from 'react';

import type { BaseProps, PropsWithoutRef, SpinnerVariablesType } from '../tools';

type Props<T extends ElementType> = {
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
} & BaseProps<T, SpinnerVariablesType>;

export type SpinnerProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, SpinnerVariablesType>;
