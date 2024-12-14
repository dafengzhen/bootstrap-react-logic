import type { ElementType, ReactNode } from 'react';

import type { BaseProps, OmittedPropsWithoutRef, StepsVariablesType } from '../tools';

export interface StepOption {
  description?: ReactNode;
  icon?: ReactNode;
  id?: number | string;
  status?: 'complete' | 'current' | 'error' | 'upcoming';
  title?: ReactNode;
}

export type StepsProps<T extends ElementType> = OmittedPropsWithoutRef<Props<T>, T, StepsVariablesType, 'onClick'>;

type Props<T extends ElementType> = BaseProps<T, StepsVariablesType> & {
  /**
   * center.
   */
  center?: boolean;

  /**
   * current.
   */
  current?: number;

  /**
   * onClick.
   */
  onClick?: (index: number) => void;

  /**
   * options.
   */
  options?: StepOption[];

  /**
   * vertical.
   */
  vertical?: boolean;
};
