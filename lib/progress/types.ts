import type { ElementType } from 'react';

import type {
  BaseProps,
  ProgressBarVariablesType,
  ProgressStackedVariablesType,
  ProgressVariablesType,
  PropsWithoutRef,
} from '../tools';

type Props<T extends ElementType> = {
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
} & BaseProps<T, ProgressVariablesType>;

type BarProps<T extends ElementType> = {
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
} & BaseProps<T, ProgressBarVariablesType>;

type StackedProps<T extends ElementType> = {} & BaseProps<T, ProgressStackedVariablesType>;

export interface ProgressStackedOption {
  animated?: boolean;
  barProps?: ProgressBarProps<ElementType>;
  bg?: 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning';
  id?: number | string;
  now?: number;
  props?: ProgressProps<ElementType>;
  striped?: boolean;
}

export type ProgressProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, ProgressVariablesType>;

export type ProgressBarProps<T extends ElementType> = PropsWithoutRef<BarProps<T>, T, ProgressBarVariablesType>;

export type ProgressStackedProps<T extends ElementType> = PropsWithoutRef<
  StackedProps<T>,
  T,
  ProgressStackedVariablesType
>;
