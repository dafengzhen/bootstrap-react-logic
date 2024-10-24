import type { ElementType } from 'react';
import type { BaseProps, LabelVariablesType, PropsWithoutRef } from '../tools';

type Props<T extends ElementType> = BaseProps<T, LabelVariablesType> & {
  /**
   * colFormLabel.
   */
  colFormLabel?: boolean;

  /**
   * inputGroupText.
   */
  inputGroupText?: boolean;

  /**
   * formCheckLabel.
   */
  formCheckLabel?: boolean;
};

export type LabelProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, LabelVariablesType>;
