import type { ElementType } from 'react';
import type { BaseProps, LabelVariablesEnum, PropsWithoutRef } from '../tools';

type Props<T extends ElementType> = BaseProps<T, typeof LabelVariablesEnum> & {
  /**
   * colFormLabel.
   */
  colFormLabel?: boolean;

  /**
   * inputGroupText.
   */
  inputGroupText?: boolean;
};

export type LabelProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, typeof LabelVariablesEnum>;
