import type { ElementType } from 'react';
import type { BaseProps, PropsWithoutRef, TextVariablesType } from '../tools';

type Props<T extends ElementType> = BaseProps<T, TextVariablesType> & {
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

export type TextProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, TextVariablesType>;
