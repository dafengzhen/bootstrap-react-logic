import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ElementType,
  ReactNode,
} from 'react';
import type {
  OutlineEnum,
  RoundedClassEnum,
  VariableEnum,
  VariantEnum,
} from '@lib/tools';

type Variables = {
  [key in keyof typeof VariableEnum]?: string | number;
};

type ButtonProps<T extends ElementType = 'button'> = T extends 'a'
  ? DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    > & {
      disabled?: boolean | undefined;
    }
  : DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >;

export type RenderOptions = {
  className?: Props['className'];
  style?: Props['style'];
  role?: Props['role'];
  disabled?: Props['disabled'];
  'aria-disabled'?: Props['aria-disabled'];
  tabIndex?: Props['tabIndex'];
  'aria-pressed'?: Props['aria-pressed'];
};

// Main props for the button component, extending ButtonProps
export type Props<T extends ElementType = 'button'> = ButtonProps<T> & {
  /**
   * Determines which element type to render as (e.g., button or anchor).
   */
  as?: T;

  /**
   * Flag to indicate whether to drop old class names.
   */
  dropOldClass?: boolean;

  /**
   * Custom render function to customize the rendering of the component.
   */
  render?: (renderOptions: RenderOptions) => ReactNode;

  /**
   * Flag to skip wrapping the component in an additional element.
   */
  skipCompWrap?: boolean;

  /**
   * Options for additional props, excluding specific keys.
   */
  options?: Omit<Props<T>, 'as' | 'render' | 'options' | keyof ButtonProps<T>>;

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
        paddingY?: string; // Vertical padding
        paddingX?: string; // Horizontal padding
        fontSize?: string; // Font size
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
   * Additional variable properties based on the Variables type.
   */
  variables?: Variables;

  /**
   * Content to render at the start of the button.
   */
  startContent?: ReactNode;

  /**
   * Content to render at the end of the button.
   */
  endContent?: ReactNode;
};
