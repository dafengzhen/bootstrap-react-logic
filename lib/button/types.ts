import type { ElementType, ReactNode } from 'react';
import type {
  BaseProps,
  ButtonVariableType,
  OutlineType,
  PropsWithoutRef,
  RoundedClassEnum,
  VariantType,
} from '../tools';

type Props<T extends ElementType> = BaseProps<T, ButtonVariableType> & {
  /**
   * variant.
   */
  variant?: keyof VariantType;

  /**
   * outline.
   */
  outline?: keyof OutlineType;

  /**
   * rounded.
   */
  rounded?: keyof typeof RoundedClassEnum | boolean;

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
   * active.
   */
  active?: boolean;

  /**
   * isLoading.
   */
  isLoading?: boolean;

  /**
   * startContent.
   */
  startContent?: ReactNode;

  /**
   * endContent.
   */
  endContent?: ReactNode;

  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * btnClose.
   */
  btnClose?: boolean;
};

export type ButtonProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, ButtonVariableType>;
