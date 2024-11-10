import type { ElementType, ReactNode } from 'react';

import type { ButtonProps } from '../button';
import type {
  AlertHeadingVariablesType,
  AlertLinkVariablesType,
  AlertVariablesType,
  BaseProps,
  PropsWithoutRef,
} from '../tools';

type Props<T extends ElementType> = {
  /**
   * clickToClose.
   */
  clickToClose?: boolean;

  /**
   * closeButton.
   */
  closeButton?: ({ close }: { close: () => void }) => ReactNode;

  /**
   * closeButtonProps.
   */
  closeButtonProps?: ButtonProps<ElementType>;

  /**
   * dismissible.
   */
  dismissible?: boolean;

  /**
   * fade.
   */
  fade?: boolean;

  /**
   * onClose.
   */
  onClose?: (close?: () => void) => void;

  /**
   * variant.
   */
  variant?: 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning';

  /**
   * visible.
   */
  visible?: boolean;
} & BaseProps<T, AlertVariablesType>;

type LinkProps<T extends ElementType> = {} & BaseProps<T, AlertLinkVariablesType>;

type HeadingProps<T extends ElementType> = {} & BaseProps<T, AlertHeadingVariablesType>;

export type AlertProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, AlertVariablesType>;

export type AlertLinkProps<T extends ElementType> = PropsWithoutRef<LinkProps<T>, T, AlertLinkVariablesType>;

export type AlertHeadingProps<T extends ElementType> = PropsWithoutRef<HeadingProps<T>, T, AlertHeadingVariablesType>;
