import type { ElementType } from 'react';

import type { BadgeVariablesType, RoundedClassEnum, PropsWithoutRef, BaseProps } from '../tools';

export type BadgeProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, BadgeVariablesType>;

type Props<T extends ElementType> = {
  /**
   * variant.
   */
  variant?: 'secondary' | 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'info';

  /**
   * rounded.
   */
  rounded?: keyof typeof RoundedClassEnum | boolean;

  /**
   * variantType.
   */
  variantType?: 'text' | 'bg';
} & BaseProps<T, BadgeVariablesType>;
