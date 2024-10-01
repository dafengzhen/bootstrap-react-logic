import type {
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from 'react';

type ButtonGroupProps<T extends ElementType = 'div'> = T extends 'div'
  ? DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  : DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type RenderOptions = {
  className?: Props['className'];
  style?: Props['style'];
  role?: Props['role'];
  'aria-label'?: Props['aria-label'];
};

// Main props for the ButtonGroup component, extending ButtonGroupProps
export type Props<T extends ElementType = 'div'> = ButtonGroupProps<T> & {
  /**
   * Determines which element type to render as (e.g., div or other).
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
  options?: Omit<
    Props<T>,
    'as' | 'render' | 'options' | keyof ButtonGroupProps<T>
  >;

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
