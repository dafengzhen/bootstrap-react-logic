import type {
  CSSProperties,
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from 'react';
import { IntrinsicElements, SelectVariablesEnum, SlotValue } from '../tools';

type Variables = {
  [key in keyof typeof SelectVariablesEnum]?: string | number;
} & CSSProperties;

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

export type ElementProps<T extends ElementType> =
  T extends keyof IntrinsicElements
    ? DetailedHTMLProps<
        T extends 'div'
          ? Omit<HTMLAttributes<IntrinsicElements[T]>, 'onChange'>
          : HTMLAttributes<IntrinsicElements[T]>,
        IntrinsicElements[T]
      >
    : never;

export interface IOption {
  id?: string | number;
  value?: string | number;
  active?: boolean;
  disabled?: boolean;
  divider?: 'top' | 'bottom';
  header?: string;
  label: string;
}

export type Props<T extends ElementType> = ElementProps<T> & {
  /**
   * Determines which element type to render as (e.g., input or other).
   */
  as?: T;

  /**
   * Custom render function to customize the rendering of the component.
   */
  render?: (renderOptions: ElementProps<T>) => ReactNode;

  /**
   * Flag to indicate whether to drop old class names.
   */
  dropOldClass?: boolean;

  /**
   * Flag to skip wrapping the component in an additional element.
   */
  skipCompWrap?: boolean;

  /**
   * variables.
   */
  variables?: Variables;

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
