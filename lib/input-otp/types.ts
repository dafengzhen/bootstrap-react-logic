import {
  type DetailedHTMLProps,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { InputOtpVariablesEnum, IntrinsicElements } from '../tools';
import type { InputProps } from '../input';

type Variables = {
  [key in keyof typeof InputOtpVariablesEnum]?: string | number;
};

export type ElementProps<T extends ElementType> =
  T extends keyof IntrinsicElements
    ? DetailedHTMLProps<
        T extends 'div'
          ? HTMLAttributes<IntrinsicElements[T]>
          : HTMLAttributes<IntrinsicElements[T]>,
        IntrinsicElements[T]
      >
    : never;

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
   * length.
   */
  length?: number;

  /**
   * defaultValue.
   */
  defaultValue?: (string | number)[];

  /**
   * inputProps.
   */
  inputProps?: Omit<InputProps<'input'>, 'key' | 'value' | 'defaultValue'>;
};
