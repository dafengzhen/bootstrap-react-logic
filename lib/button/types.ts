import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ElementType,
  ReactNode,
} from 'react';

interface Variables {
  color?: string;
  paddingY?: string;
  paddingX?: string;
  fontFamily?: string;
  fontSize?: string;
  lineHeight?: string;
  whiteSpace?: string;
  paddingYSm?: string;
  paddingXSm?: string;
  fontSizeSm?: string;
  paddingYLg?: string;
  paddingXLg?: string;
  fontSizeLg?: string;
  borderWidth?: string;
  fontWeight?: string;
  boxShadow?: string;
  focusWidth?: string;
  focusBoxShadow?: string;
  disabledOpacity?: number;
  activeBoxShadow?: string;
  linkColor?: string;
  linkHoverColor?: string;
  linkDisabledColor?: string;
  linkFocusShadowRgb?: string;
  borderRadius?: string;
  borderRadiusSm?: string;
  borderRadiusLg?: string;
  transition?: string;
  hoverBgShadeAmount?: string;
  hoverBgTintAmount?: string;
  hoverBorderShadeAmount?: string;
  hoverBorderTintAmount?: string;
  activeBgShadeAmount?: string;
  activeBgTintAmount?: string;
  activeBorderShadeAmount?: string;
  activeBorderTintAmount?: string;
  [key: string]: string | number | undefined;
}

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

export type Props<T extends ElementType = 'button'> = ButtonProps<T> & {
  /**
   * as.
   */
  as?: T;

  /**
   * variant.
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'light'
    | 'dark'
    | 'link';

  /**
   * outline.
   */
  outline?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'light'
    | 'dark';

  /**
   * size.
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
   * variables.
   */
  variables?: Variables;

  /**
   * The button start content.
   */
  startContent?: ReactNode;

  /**
   * The button end content.
   */
  endContent?: ReactNode;

  /**
   * Whether the button should display a loading spinner.
   * @default false
   */
  isLoading?: boolean;
};
