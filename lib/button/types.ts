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

export type Props<T extends ElementType = 'button'> = ButtonProps<T> & {
  /**
   * The 'as' prop allows for specifying a different HTML element type (e.g., 'a' for anchor tag)
   */
  as?: T;

  /**
   * Optional 'variant' prop based on 'VariantEnum'
   */
  variant?: keyof typeof VariantEnum;

  /**
   * Optional 'outline' prop based on 'OutlineEnum'
   */
  outline?: keyof typeof OutlineEnum;

  /**
   * Optional 'rounded' prop, either from 'RoundedClassEnum' or a boolean value
   */
  rounded?: keyof typeof RoundedClassEnum | boolean;

  /**
   * Optional 'size' prop for setting predefined sizes ('lg', 'sm') or custom size properties
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
   * Optional 'active' prop for indicating if the button is in an active state
   */
  active?: boolean;

  /**
   * Optional 'variables' prop for dynamic variable support using the 'Variables' type
   */
  variables?: Variables;

  /**
   * Optional 'isLoading' prop to indicate a loading state
   */
  isLoading?: boolean;

  /**
   * Optional 'startContent' prop for placing content (e.g., icon) at the beginning of the button
   */
  startContent?: ReactNode;

  /**
   * Optional 'endContent' prop for placing content at the end of the button
   */
  endContent?: ReactNode;

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
  options?: Omit<Props<T>, 'as' | 'render' | 'options' | keyof ButtonProps<T>>;
};
