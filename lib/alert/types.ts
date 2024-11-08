import type { ElementType, ReactNode } from 'react';
import type {
  AlertHeadingVariablesType,
  AlertLinkVariablesType,
  AlertVariablesType,
  BaseProps,
  PropsWithoutRef,
} from '../tools';
import type { ButtonProps } from '../button';

type Props<T extends ElementType> = BaseProps<T, AlertVariablesType> & {
  /**
   * variant.
   */
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';

  /**
   * onClose.
   */
  onClose?: (close?: () => void) => void;

  /**
   * clickToClose.
   */
  clickToClose?: boolean;

  /**
   * dismissible.
   */
  dismissible?: boolean;

  /**
   * fade.
   */
  fade?: boolean;

  /**
   * closeButton.
   */
  closeButton?: ({ close }: { close: () => void }) => ReactNode;

  /**
   * closeButtonProps.
   */
  closeButtonProps?: ButtonProps<ElementType>;

  /**
   * visible.
   */
  visible?: boolean;
};

type LinkProps<T extends ElementType> = BaseProps<T, AlertLinkVariablesType> & {};

type HeadingProps<T extends ElementType> = BaseProps<T, AlertHeadingVariablesType> & {};

export type AlertProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, AlertVariablesType>;

export type AlertLinkProps<T extends ElementType> = PropsWithoutRef<LinkProps<T>, T, AlertLinkVariablesType>;

export type AlertHeadingProps<T extends ElementType> = PropsWithoutRef<HeadingProps<T>, T, AlertHeadingVariablesType>;
