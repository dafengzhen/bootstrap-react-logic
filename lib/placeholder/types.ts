import type { ElementType } from 'react';

import type { PlaceholderVariablesType, PropsWithoutRef, BaseProps } from '../tools';

export type PlaceholderProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, PlaceholderVariablesType>;

type Props<T extends ElementType> = {
  /**
   * bg.
   */
  bg?: 'secondary' | 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'info';

  /**
   * animation.
   */
  animation?: 'glow' | 'wave';

  /**
   * size.
   */
  size?: 'lg' | 'sm' | 'xs';

  /**
   * col.
   */
  col?: number;
} & BaseProps<T, PlaceholderVariablesType>;
