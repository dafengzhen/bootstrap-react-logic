import type { ElementType } from 'react';

import type { BaseProps, OmittedPropsWithoutRef, SelectMultipleVariablesType, SlotValue } from '../tools';

export interface SelectMultipleOption {
  active?: boolean;
  disabled?: boolean;
  divider?: 'bottom' | 'top';
  header?: string;
  id?: number | string;
  text: string;
}

export type SelectMultipleProps<T extends ElementType> = OmittedPropsWithoutRef<
  Props<T>,
  T,
  SelectMultipleVariablesType,
  'onChange'
>;

type Props<T extends ElementType> = BaseProps<T, SelectMultipleVariablesType> & {
  /**
   * contentClasses.
   */
  contentClasses?: Partial<Record<SlotValueKeys, SlotValue>>;

  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * hideActiveOptions.
   */
  hideActiveOptions?: boolean;

  /**
   * onChange.
   */
  onChange?: (value: (number | string)[]) => void;

  /**
   * options.
   */
  options?: SelectMultipleOption[];

  /**
   * placeholder.
   */
  placeholder?: string;

  /**
   * selectableCount.
   */
  selectableCount?: number;

  /**
   * single.
   */
  single?: boolean;
};

type SlotValueKeys =
  | 'activeOption'
  | 'bottomDivider'
  | 'clearIcon'
  | 'countDisplay'
  | 'floatingMenu'
  | 'header'
  | 'mainContainer'
  | 'optionItem'
  | 'optionsContainer'
  | 'placeholder'
  | 'selectButton'
  | 'topDivider';
