import type { ElementType } from 'react';
import type { BadgeVariablesType, BaseProps, PropsWithoutRef, RoundedClassEnum } from '../tools';

type Props<T extends ElementType> = BaseProps<T, BadgeVariablesType> & {
  /**
   * variant.
   */
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';

  /**
   * variantType.
   */
  variantType?: 'text' | 'bg';

  /**
   * rounded.
   */
  rounded?: keyof typeof RoundedClassEnum | boolean;
};

export type BadgeProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, BadgeVariablesType>;
