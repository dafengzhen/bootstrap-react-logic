import type { ElementType } from 'react';
import type { BaseProps, OmittedPropsWithoutRef, SelectMultipleVariablesType, SlotValue } from '../tools';

type SlotValueKeys =
  | 'mainContainer'
  | 'optionsContainer'
  | 'placeholder'
  | 'activeOption'
  | 'clearIcon'
  | 'countDisplay'
  | 'floatingMenu'
  | 'header'
  | 'topDivider'
  | 'optionItem'
  | 'selectButton'
  | 'bottomDivider';

type Props<T extends ElementType> = BaseProps<T, SelectMultipleVariablesType> & {
  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * single.
   */
  single?: boolean;

  /**
   * hideActiveOptions.
   */
  hideActiveOptions?: boolean;

  /**
   * placeholder.
   */
  placeholder?: string;

  /**
   * selectableCount.
   */
  selectableCount?: number;

  /**
   * options.
   */
  options?: SelectMultipleOption[];

  /**
   * contentClasses.
   */
  contentClasses?: Partial<Record<SlotValueKeys, SlotValue>>;

  /**
   * onChange.
   */
  onChange?: (value: (string | number)[]) => void;
};

export interface SelectMultipleOption {
  id?: string | number;
  active?: boolean;
  disabled?: boolean;
  divider?: 'top' | 'bottom';
  header?: string;
  text: string;
}

export type SelectMultipleProps<T extends ElementType> = OmittedPropsWithoutRef<
  Props<T>,
  T,
  SelectMultipleVariablesType,
  'onChange'
>;
