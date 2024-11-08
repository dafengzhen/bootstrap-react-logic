import type { ElementRef, ElementType, ReactNode, RefCallback } from 'react';
import type {
  BaseProps,
  ButtonVariableType,
  CloseButtonVariableType,
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

  /**
   * show.
   */
  show?: boolean;

  /**
   * onRef.
   */
  onRef?: RefCallback<ElementRef<T>>;
};

type CloseProps<T extends ElementType> = BaseProps<T, CloseButtonVariableType> & {
  /**
   * disabled.
   */
  disabled?: boolean;
};

export type ButtonProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, ButtonVariableType>;

export type CloseButtonProps<T extends ElementType> = PropsWithoutRef<CloseProps<T>, T, CloseButtonVariableType>;
