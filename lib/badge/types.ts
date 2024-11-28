import type { ElementType } from 'react';

import type { BadgeVariablesType, BaseProps, PropsWithoutRef, RoundedClassEnum } from '../tools';

export type BadgeProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, BadgeVariablesType>;

type Props<T extends ElementType> = BaseProps<T, BadgeVariablesType> & {
  /**
   * rounded.
   */
  rounded?: boolean | keyof typeof RoundedClassEnum;

  /**
   * variant.
   */
  variant?: 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning';

  /**
   * variantType.
   */
  variantType?: 'bg' | 'text';
};
