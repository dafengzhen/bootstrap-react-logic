import type { ElementType } from 'react';
import type { BaseProps, PropsWithoutRef, TextVariablesEnum } from '../tools';

type Props<T extends ElementType> = BaseProps<T, typeof TextVariablesEnum> & {
  /**
   * validFeedback.
   */
  validFeedback?: boolean;

  /**
   * invalidFeedback.
   */
  invalidFeedback?: boolean;

  /**
   * validTooltip.
   */
  validTooltip?: boolean;

  /**
   * invalidTooltip.
   */
  invalidTooltip?: boolean;
};

export type TextProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, typeof TextVariablesEnum>;
