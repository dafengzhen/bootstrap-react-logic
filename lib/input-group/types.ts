import {
  type DetailedHTMLProps,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import {
  InputGroupTextVariablesEnum,
  InputGroupVariablesEnum,
  IntrinsicElements,
} from '../tools';

type Variables = {
  [key in keyof typeof InputGroupVariablesEnum]?: string | number;
};

type InputGroupTextVariables = {
  [key in keyof typeof InputGroupTextVariablesEnum]?: string | number;
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

export type InputGroupTextElementProps<T extends ElementType> =
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
   * nowrap.
   */
  nowrap?: boolean;

  /**
   * size.
   */
  size?: 'lg' | 'sm';
};

export type InputGroupTextProps<T extends ElementType> =
  InputGroupTextElementProps<T> & {
    /**
     * Determines which element type to render as (e.g., input or other).
     */
    as?: T;

    /**
     * Custom render function to customize the rendering of the component.
     */
    render?: (renderOptions: InputGroupTextElementProps<T>) => ReactNode;

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
    variables?: InputGroupTextVariables;
  };
