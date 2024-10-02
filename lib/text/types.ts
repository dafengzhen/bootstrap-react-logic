import React, {
  type DetailedHTMLProps,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from 'react';

export type ElementProps<T extends ElementType> =
  T extends keyof React.JSX.IntrinsicElements
    ? DetailedHTMLProps<
        T extends 'div'
          ? HTMLAttributes<React.JSX.IntrinsicElements[T]>
          : T extends 'span'
            ? HTMLAttributes<React.JSX.IntrinsicElements[T]>
            : HTMLAttributes<React.JSX.IntrinsicElements[T]>,
        React.JSX.IntrinsicElements[T]
      >
    : never;

export type Props<T extends ElementType> = ElementProps<T> & {
  /**
   * Determines which element type to render as (e.g., div or other).
   */
  as?: T;

  /**
   * Custom render function to customize the rendering of the component.
   */
  render?: (renderOptions: ElementProps<T>) => ReactNode;

  /**
   * Flag to skip wrapping the component in an additional element.
   */
  skipCompWrap?: boolean;

  /**
   * Flag to indicate whether to drop old class names.
   */
  dropOldClass?: boolean;
};
