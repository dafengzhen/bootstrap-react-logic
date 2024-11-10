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

type Props<T extends ElementType> = {
  /**
   * active.
   */
  active?: boolean;

  /**
   * btnClose.
   */
  btnClose?: boolean;

  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * endContent.
   */
  endContent?: ReactNode;

  /**
   * isLoading.
   */
  isLoading?: boolean;

  /**
   * onRef.
   */
  onRef?: RefCallback<ElementRef<T>>;

  /**
   * outline.
   */
  outline?: keyof OutlineType;

  /**
   * rounded.
   */
  rounded?: boolean | keyof typeof RoundedClassEnum;

  /**
   * show.
   */
  show?: boolean;

  /**
   * size.
   */
  size?:
    | 'lg'
    | 'sm'
    | {
        fontSize?: string;
        paddingX?: string;
        paddingY?: string;
      };

  /**
   * startContent.
   */
  startContent?: ReactNode;

  /**
   * variant.
   */
  variant?: keyof VariantType;
} & BaseProps<T, ButtonVariableType>;

type CloseProps<T extends ElementType> = {
  /**
   * disabled.
   */
  disabled?: boolean;
} & BaseProps<T, CloseButtonVariableType>;

export type ButtonProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, ButtonVariableType>;

export type CloseButtonProps<T extends ElementType> = PropsWithoutRef<CloseProps<T>, T, CloseButtonVariableType>;
