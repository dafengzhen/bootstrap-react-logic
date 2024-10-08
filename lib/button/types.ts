import type { ElementType, ReactNode } from 'react';
import type {
  BaseProps,
  ButtonVariableEnum,
  OutlineEnum,
  PropsWithoutRef,
  RoundedClassEnum,
  VariantEnum,
} from '../tools';

type Props<T extends ElementType> = BaseProps<T, typeof ButtonVariableEnum> & {
  /**
   * variant.
   */
  variant?: keyof typeof VariantEnum;

  /**
   * outline.
   */
  outline?: keyof typeof OutlineEnum;

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
};

export type ButtonProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, typeof ButtonVariableEnum>;
