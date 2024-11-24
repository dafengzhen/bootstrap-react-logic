import type { ElementType } from 'react';

import type { TextVariablesType, PropsWithoutRef, BaseProps } from '../tools';

export type TextProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, TextVariablesType>;

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
