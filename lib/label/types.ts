import type { ElementType } from 'react';

import type { LabelVariablesType, PropsWithoutRef, BaseProps } from '../tools';

export type LabelProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, LabelVariablesType>;

type Props<T extends ElementType> = {
  /**
   * formCheckLabel.
   */
  formCheckLabel?: boolean;

  /**
   * inputGroupText.
   */
  inputGroupText?: boolean;

  /**
   * colFormLabel.
   */
  colFormLabel?: boolean;
} & BaseProps<T, LabelVariablesType>;
