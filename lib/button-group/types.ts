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

export type Props<T extends ElementType = 'div'> = ButtonGroupProps<T> & {
  /**
   * The 'as' prop allows for specifying a different HTML element type (e.g., 'a' for anchor tag)
   */
  as?: T;

  /**
   * Optional 'dropOldClass' prop to specify if old CSS classes should be removed
   * (Clear original class names)
   */
  dropOldClass?: boolean;

  /**
   * Optional 'render' prop that allows for custom rendering logic of child elements.
   * This function can return any valid ReactNode, enabling flexible control over
   * the component's inner structure and content. Use this to define how children
   * should be rendered, allowing for dynamic layouts or conditional rendering
   * based on props.
   */
  render?: (renderOptions: RenderOptions) => ReactNode;

  /**
   * Optional 'options' prop that allows passing additional properties to the component.
   * This prop omits the 'as', 'render', 'options', and all properties from ButtonProps<T>
   * to prevent conflicts and ensure only custom properties are passed.
   */
  options?: Omit<
    Props<T>,
    'as' | 'render' | 'options' | keyof ButtonGroupProps<T>
  >;

  /**
   * toolbar.
   */
  toolbar?: boolean;

  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * vertical.
   */
  vertical?: boolean;
};
