import type { ElementType } from 'react';

import type {
  ProgressStackedVariablesType,
  ProgressBarVariablesType,
  ProgressVariablesType,
  PropsWithoutRef,
  BaseProps,
} from '../tools';

export interface ProgressStackedOption {
  bg?: 'secondary' | 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'info';
  barProps?: ProgressBarProps<ElementType>;
  props?: ProgressProps<ElementType>;
  id?: number | string;
  animated?: boolean;
  striped?: boolean;
  now?: number;
}

export type ProgressStackedProps<T extends ElementType> = PropsWithoutRef<
  StackedProps<T>,
  T,
  ProgressStackedVariablesType
>;

export type ProgressBarProps<T extends ElementType> = PropsWithoutRef<BarProps<T>, T, ProgressBarVariablesType>;

export type ProgressProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, ProgressVariablesType>;

type Props<T extends ElementType> = {
  /**
   * bg.
   */
  bg?: 'secondary' | 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'info';

  /**
   * stackedProps.
   */
  stackedProps?: ProgressStackedProps<ElementType>;

  /**
   * barProps.
   */
  barProps?: ProgressBarProps<ElementType>;

  /**
   * options.
   */
  options?: ProgressStackedOption[];

  /**
   * animated.
   */
  animated?: boolean;

  /**
   * stacked.
   */
  stacked?: boolean;

  /**
   * striped.
   */
  striped?: boolean;

  /**
   * now.
   */
  now?: number;
} & BaseProps<T, ProgressVariablesType>;

type BarProps<T extends ElementType> = {
  /**
   * bg.
   */
  bg?: 'secondary' | 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'info';

  /**
   * animated.
   */
  animated?: boolean;

  /**
   * striped.
   */
  striped?: boolean;

  /**
   * now.
   */
  now?: number;
} & BaseProps<T, ProgressBarVariablesType>;

type StackedProps<T extends ElementType> = BaseProps<T, ProgressStackedVariablesType> & {};
