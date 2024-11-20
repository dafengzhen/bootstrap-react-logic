import type { ElementType } from 'react';

import type {
  BaseProps,
  ProgressBarVariablesType,
  ProgressStackedVariablesType,
  ProgressVariablesType,
  PropsWithoutRef,
} from '../tools';

export type ProgressBarProps<T extends ElementType> = PropsWithoutRef<BarProps<T>, T, ProgressBarVariablesType>;

export type ProgressProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, ProgressVariablesType>;

export interface ProgressStackedOption {
  animated?: boolean;
  barProps?: ProgressBarProps<ElementType>;
  bg?: 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning';
  id?: number | string;
  now?: number;
  props?: ProgressProps<ElementType>;
  striped?: boolean;
}

export type ProgressStackedProps<T extends ElementType> = PropsWithoutRef<
  StackedProps<T>,
  T,
  ProgressStackedVariablesType
>;

type BarProps<T extends ElementType> = BaseProps<T, ProgressBarVariablesType> & {
  /**
   * animated.
   */
  animated?: boolean;

  /**
   * bg.
   */
  bg?: 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning';

  /**
   * now.
   */
  now?: number;

  /**
   * striped.
   */
  striped?: boolean;
};

type Props<T extends ElementType> = BaseProps<T, ProgressVariablesType> & {
  /**
   * animated.
   */
  animated?: boolean;

  /**
   * barProps.
   */
  barProps?: ProgressBarProps<ElementType>;

  /**
   * bg.
   */
  bg?: 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning';

  /**
   * now.
   */
  now?: number;

  /**
   * options.
   */
  options?: ProgressStackedOption[];

  /**
   * stacked.
   */
  stacked?: boolean;

  /**
   * stackedProps.
   */
  stackedProps?: ProgressStackedProps<ElementType>;

  /**
   * striped.
   */
  striped?: boolean;
};

type StackedProps<T extends ElementType> = BaseProps<T, ProgressStackedVariablesType> & {};
