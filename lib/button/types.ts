import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import type {
  ButtonVariableEnum,
  IntrinsicElements,
  OutlineEnum,
  RoundedClassEnum,
  VariantEnum,
} from '../tools';

type Variables = {
  [key in keyof typeof ButtonVariableEnum]?: string | number;
};

export type ElementProps<T extends ElementType> =
  T extends keyof IntrinsicElements
    ? DetailedHTMLProps<
        T extends 'button'
          ? ButtonHTMLAttributes<IntrinsicElements[T]>
          : T extends 'a'
            ? AnchorHTMLAttributes<IntrinsicElements[T]>
            : HTMLAttributes<IntrinsicElements[T]>,
        IntrinsicElements[T]
      >
    : never;

export type Props<T extends ElementType> = ElementProps<T> & {
  /**
   * Determines which element type to render as (e.g., button or anchor).
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
   * Additional variable properties based on the Variables type.
   */
  variables?: Variables;

  /**
   * Button variant type based on keys in VariantEnum.
   */
  variant?: keyof typeof VariantEnum;

  /**
   * Outline style based on keys in OutlineEnum.
   */
  outline?: keyof typeof OutlineEnum;

  /**
   * Rounded style based on keys in RoundedClassEnum or boolean.
   */
  rounded?: keyof typeof RoundedClassEnum | boolean;

  /**
   * Size of the button, can be large, small, or an object specifying padding and font size.
   */
  size?:
    | 'lg'
    | 'sm'
    | {
        paddingY?: string;
        paddingX?: string;
        fontSize?: string;
      };

  /**
   * Indicates if the button is currently active.
   */
  active?: boolean;

  /**
   * Indicates if the button is in a loading state.
   */
  isLoading?: boolean;

  /**
   * Content to render at the start of the button.
   */
  startContent?: ReactNode;

  /**
   * Content to render at the end of the button.
   */
  endContent?: ReactNode;

  /**
   * disabled.
   */
  disabled?: boolean;
};
