import type { ElementType } from 'react';

import type { BaseProps, LabelVariablesType, PropsWithoutRef } from '../tools';

export type LabelProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, LabelVariablesType>;

type Props<T extends ElementType> = BaseProps<T, LabelVariablesType> & {
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
};
