import type { ElementType } from 'react';

import type { BaseProps, PropsWithoutRef, TextVariablesType } from '../tools';

type Props<T extends ElementType> = {
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
} & BaseProps<T, TextVariablesType>;

export type TextProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, TextVariablesType>;
