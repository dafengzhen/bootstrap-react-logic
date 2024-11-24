import type { ElementType } from 'react';

import type { SelectMultipleVariablesType, OmittedPropsWithoutRef, BaseProps, SlotValue } from '../tools';

export interface SelectMultipleOption {
  divider?: 'bottom' | 'top';
  id?: number | string;
  disabled?: boolean;
  active?: boolean;
  header?: string;
  text: string;
}

export type SelectMultipleProps<T extends ElementType> = OmittedPropsWithoutRef<
  Props<T>,
  T,
  SelectMultipleVariablesType,
  'onChange'
>;

type Props<T extends ElementType> = {
  /**
   * contentClasses.
   */
  contentClasses?: Partial<Record<SlotValueKeys, SlotValue>>;

  /**
   * onChange.
   */
  onChange?: (value: (number | string)[]) => void;

  /**
   * options.
   */
  options?: SelectMultipleOption[];

  /**
   * hideActiveOptions.
   */
  hideActiveOptions?: boolean;

  /**
   * selectableCount.
   */
  selectableCount?: number;

  /**
   * placeholder.
   */
  placeholder?: string;

  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * single.
   */
  single?: boolean;
} & BaseProps<T, SelectMultipleVariablesType>;

type SlotValueKeys =
  | 'optionsContainer'
  | 'bottomDivider'
  | 'mainContainer'
  | 'activeOption'
  | 'countDisplay'
  | 'floatingMenu'
  | 'selectButton'
  | 'placeholder'
  | 'optionItem'
  | 'topDivider'
  | 'clearIcon'
  | 'header';
