import type { ElementType, RefCallback, ElementRef, ReactNode } from 'react';

import type {
  CloseButtonVariableType,
  ButtonVariableType,
  RoundedClassEnum,
  PropsWithoutRef,
  OutlineType,
  VariantType,
  BaseProps,
} from '../tools';

export type CloseButtonProps<T extends ElementType> = PropsWithoutRef<CloseProps<T>, T, CloseButtonVariableType>;

export type ButtonProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, ButtonVariableType>;

type Props<T extends ElementType> = {
  /**
   * rounded.
   */
  rounded?: keyof typeof RoundedClassEnum | boolean;

  /**
   * onRef.
   */
  onRef?: RefCallback<ElementRef<T>>;

  /**
   * outline.
   */
  outline?: keyof OutlineType;

  /**
   * variant.
   */
  variant?: keyof VariantType;

  /**
   * startContent.
   */
  startContent?: ReactNode;

  /**
   * endContent.
   */
  endContent?: ReactNode;

  /**
   * isLoading.
   */
  isLoading?: boolean;

  /**
   * btnClose.
   */
  btnClose?: boolean;

  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * active.
   */
  active?: boolean;

  /**
   * show.
   */
  show?: boolean;
} & BaseProps<T, ButtonVariableType>;

type CloseProps<T extends ElementType> = {
  /**
   * disabled.
   */
  disabled?: boolean;
} & BaseProps<T, CloseButtonVariableType>;
