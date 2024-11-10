import type { ElementType } from 'react';

import type { BaseProps, LabelVariablesType, PropsWithoutRef } from '../tools';

type Props<T extends ElementType> = {
  /**
   * colFormLabel.
   */
  colFormLabel?: boolean;

  /**
   * formCheckLabel.
   */
  formCheckLabel?: boolean;

  /**
   * inputGroupText.
   */
  inputGroupText?: boolean;
} & BaseProps<T, LabelVariablesType>;

export type LabelProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, LabelVariablesType>;
