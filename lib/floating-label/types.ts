import type { ElementType } from 'react';
import type { BaseProps, FloatingLabelVariablesEnum, PropsWithoutRef } from '../tools';

type Props<T extends ElementType> = BaseProps<T, typeof FloatingLabelVariablesEnum> & {
  /**
   * invalid.
   */
  invalid?: boolean;
};

export type FloatingLabelProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, typeof FloatingLabelVariablesEnum>;
