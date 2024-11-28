import type { ElementType } from 'react';

import type { BaseProps, PropsWithoutRef, TextVariablesType } from '../tools';

export type TextProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, TextVariablesType>;

type Props<T extends ElementType> = BaseProps<T, TextVariablesType> & {
  /**
   * invalidFeedback.
   */
  invalidFeedback?: boolean;

  /**
   * invalidTooltip.
   */
  invalidTooltip?: boolean;

  /**
   * validFeedback.
   */
  validFeedback?: boolean;

  /**
   * validTooltip.
   */
  validTooltip?: boolean;
};
