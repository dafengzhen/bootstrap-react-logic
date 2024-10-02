import {
  type DetailedHTMLProps,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import type { ButtonGroupVariablesEnum, IntrinsicElements } from '../tools';

type Variables = {
  [key in keyof typeof ButtonGroupVariablesEnum]?: string | number;
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
   * Determines which element type to render as (e.g., div or other).
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
   * Flag to indicate if the button group should be displayed as a toolbar.
   */
  toolbar?: boolean;

  /**
   * Flag to indicate if the button group should be arranged vertically.
   */
  vertical?: boolean;

  /**
   * Size of the button group, can be large or small.
   */
  size?: 'lg' | 'sm';
};
