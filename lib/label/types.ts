import {
  type DetailedHTMLProps,
  type ElementType,
  type HTMLAttributes,
  type LabelHTMLAttributes,
  type ReactNode,
} from 'react';
import type { IntrinsicElements, LabelVariablesEnum } from '../tools';

type Variables = {
  [key in keyof typeof LabelVariablesEnum]?: string | number;
};

export type ElementProps<T extends ElementType> =
  T extends keyof IntrinsicElements
    ? DetailedHTMLProps<
        T extends 'label'
          ? LabelHTMLAttributes<IntrinsicElements[T]>
          : HTMLAttributes<IntrinsicElements[T]>,
        IntrinsicElements[T]
      >
    : never;

export type Props<T extends ElementType> = ElementProps<T> & {
  /**
   * Determines which element type to render as (e.g., label or other).
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
   * colFormLabel.
   */
  colFormLabel?: boolean;
};
