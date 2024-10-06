import type {
  CSSProperties,
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react';
import type { IntrinsicElements, TextareaVariablesEnum } from '../tools';

type Variables = {
  [key in keyof typeof TextareaVariablesEnum]?: string | number;
} & CSSProperties;

export type ElementProps<T extends ElementType> =
  T extends keyof IntrinsicElements
    ? DetailedHTMLProps<
        T extends 'textarea'
          ? TextareaHTMLAttributes<IntrinsicElements[T]>
          : HTMLAttributes<IntrinsicElements[T]>,
        IntrinsicElements[T]
      >
    : never;

export type Props<T extends ElementType> = ElementProps<T> & {
  /**
   * Determines which element type to render as (e.g., textarea or other).
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
};
