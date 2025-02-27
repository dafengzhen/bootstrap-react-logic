import type { ElementType } from 'react';

import type {
  AlertHeadingVariablesType,
  AlertLinkVariablesType,
  AlertVariablesType,
  BaseProps,
  PropsWithoutRef,
} from '../tools';

export type AlertHeadingProps<T extends ElementType> = PropsWithoutRef<HeadingProps<T>, T, AlertHeadingVariablesType>;

export type AlertLinkProps<T extends ElementType> = PropsWithoutRef<LinkProps<T>, T, AlertLinkVariablesType>;

export type AlertProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, AlertVariablesType>;

type HeadingProps<T extends ElementType> = BaseProps<T, AlertHeadingVariablesType> & {};

type LinkProps<T extends ElementType> = BaseProps<T, AlertLinkVariablesType> & {};

type Props<T extends ElementType> = BaseProps<T, AlertVariablesType> & {
  /**
   * dismissible.
   */
  dismissible?: boolean;

  /**
   * onVisibleChange.
   */
  onVisibleChange?: (visible: boolean) => void;

  /**
   * variant.
   */
  variant?: 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning';

  /**
   * visible.
   */
  visible?: boolean;
};
