import type { ElementType, ReactNode } from 'react';

import type {
  AlertHeadingVariablesType,
  AlertLinkVariablesType,
  AlertVariablesType,
  PropsWithoutRef,
  BaseProps,
} from '../tools';
import type { ButtonProps } from '../button';

export type AlertHeadingProps<T extends ElementType> = PropsWithoutRef<HeadingProps<T>, T, AlertHeadingVariablesType>;

export type AlertLinkProps<T extends ElementType> = PropsWithoutRef<LinkProps<T>, T, AlertLinkVariablesType>;

export type AlertProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, AlertVariablesType>;

type Props<T extends ElementType> = {
  /**
   * variant.
   */
  variant?: 'secondary' | 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'info';

  /**
   * closeButton.
   */
  closeButton?: ({ close }: { close: () => void }) => ReactNode;

  /**
   * closeButtonProps.
   */
  closeButtonProps?: ButtonProps<ElementType>;

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
   * visible.
   */
  visible?: boolean;

  /**
   * fade.
   */
  fade?: boolean;
} & BaseProps<T, AlertVariablesType>;

type HeadingProps<T extends ElementType> = BaseProps<T, AlertHeadingVariablesType> & {};

type LinkProps<T extends ElementType> = BaseProps<T, AlertLinkVariablesType> & {};
