import type { ElementType } from 'react';

import type { BaseProps, PlaceholderVariablesType, PropsWithoutRef } from '../tools';

type Props<T extends ElementType> = {
  /**
   * animation.
   */
  animation?: 'glow' | 'wave';

  /**
   * bg.
   */
  bg?: 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning';

  /**
   * col.
   */
  col?: number;

  /**
   * size.
   */
  size?: 'lg' | 'sm' | 'xs';
} & BaseProps<T, PlaceholderVariablesType>;

export type PlaceholderProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, PlaceholderVariablesType>;
