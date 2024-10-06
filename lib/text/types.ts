import type {
  CSSProperties,
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from 'react';
import type { IntrinsicElements, TextVariablesEnum } from '../tools';

type Variables = {
  [key in keyof typeof TextVariablesEnum]?: string | number;
} & CSSProperties;

export type ElementProps<T extends ElementType> =
  T extends keyof IntrinsicElements
    ? DetailedHTMLProps<
        T extends 'div'
          ? HTMLAttributes<IntrinsicElements[T]>
          : T extends 'span'
            ? HTMLAttributes<IntrinsicElements[T]>
            : HTMLAttributes<IntrinsicElements[T]>,
        IntrinsicElements[T]
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

  /**
   * variables.
   */
  variables?: Variables;
};
