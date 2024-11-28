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

export type ButtonProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, ButtonVariableType>;

export type CloseButtonProps<T extends ElementType> = PropsWithoutRef<CloseProps<T>, T, CloseButtonVariableType>;

type CloseProps<T extends ElementType> = BaseProps<T, CloseButtonVariableType> & {
  /**
   * disabled.
   */
  disabled?: boolean;
};

type Props<T extends ElementType> = BaseProps<T, ButtonVariableType> & {
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
  size?: 'lg' | 'sm';

  /**
   * startContent.
   */
  startContent?: ReactNode;

  /**
   * variant.
   */
  variant?: keyof VariantType;
};
