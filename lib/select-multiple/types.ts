import type { ElementType } from 'react';
import type {
  BaseProps,
  PropsWithoutRef,
  SelectMultipleVariablesEnum,
  SlotValue,
} from '../tools';

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

export interface IOption {
  id?: string | number;
  value?: string | number;
  active?: boolean;
  disabled?: boolean;
  divider?: 'top' | 'bottom';
  header?: string;
  label: string;
}

type Props<T extends ElementType> = BaseProps<
  T,
  typeof SelectMultipleVariablesEnum
> & {
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
  options?: IOption[];

  /**
   * contentClasses.
   */
  contentClasses?: Partial<Record<SlotValueKeys, SlotValue>>;

  /**
   * onChange.
   */
  onChange?: (value: (string | number)[]) => void;
};

export type SelectMultipleProps<T extends ElementType> = PropsWithoutRef<
  Props<T>,
  T,
  typeof SelectMultipleVariablesEnum
>;
