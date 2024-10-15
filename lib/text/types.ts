import type { ElementType } from 'react';
import type { BaseProps, PropsWithoutRef, TextVariablesEnum } from '../tools';

type Props<T extends ElementType> = BaseProps<T, typeof TextVariablesEnum> & {
  /**
   * invalidFeedback.
   */
  invalidFeedback?: boolean;
};

export type TextProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, typeof TextVariablesEnum>;
