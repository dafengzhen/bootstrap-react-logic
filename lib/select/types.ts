import type {
  CSSProperties,
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  OptionHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
} from 'react';
import {
  IntrinsicElements,
  SelectOptionVariablesEnum,
  SelectVariablesEnum,
} from '../tools';

type Variables = {
  [key in keyof typeof SelectVariablesEnum]?: string | number;
} & CSSProperties;

type SelectOptionVariables = {
  [key in keyof typeof SelectOptionVariablesEnum]?: string | number;
} & CSSProperties;

export type ElementProps<T extends ElementType> =
  T extends keyof IntrinsicElements
    ? DetailedHTMLProps<
        T extends 'select'
          ? Omit<
              SelectHTMLAttributes<IntrinsicElements[T]>,
              'size' | 'disabled'
            >
          : HTMLAttributes<IntrinsicElements[T]>,
        IntrinsicElements[T]
      >
    : never;

export type SelectOptionElementProps<T extends ElementType> =
  T extends keyof IntrinsicElements
    ? DetailedHTMLProps<
        T extends 'option'
          ? Omit<OptionHTMLAttributes<IntrinsicElements[T]>, 'disabled'>
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
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * nativeSize.
   */
  nativeSize?: number | undefined;

  /**
   * disabled.
   */
  disabled?: boolean;
};

export type SelectOptionProps<T extends ElementType> =
  SelectOptionElementProps<T> & {
    /**
     * Determines which element type to render as (e.g., input or other).
     */
    as?: T;

    /**
     * Custom render function to customize the rendering of the component.
     */
    render?: (renderOptions: SelectOptionElementProps<T>) => ReactNode;

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
    variables?: SelectOptionVariables;

    /**
     * disabled,
     */
    disabled?: boolean;
  };
