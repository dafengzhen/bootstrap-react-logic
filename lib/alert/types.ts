import type { ElementType } from 'react';
import type {
  AlertHeadingVariablesEnum,
  AlertLinkVariablesEnum,
  AlertVariablesEnum,
  BaseProps,
  PropsWithoutRef,
} from '../tools';

type Props<T extends ElementType> = BaseProps<T, typeof AlertVariablesEnum> & {
  /**
   * variant.
   */
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';

  /**
   * show.
   */
  show?: boolean;

  /**
   * dismissible.
   */
  dismissible?: boolean;

  /**
   * fade.
   */
  fade?: boolean;
};

type LinkProps<T extends ElementType> = BaseProps<T, typeof AlertLinkVariablesEnum> & {};

type HeadingProps<T extends ElementType> = BaseProps<T, typeof AlertHeadingVariablesEnum> & {};

export type AlertProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, typeof AlertVariablesEnum>;

export type AlertLinkProps<T extends ElementType> = PropsWithoutRef<LinkProps<T>, T, typeof AlertLinkVariablesEnum>;

export type AlertHeadingProps<T extends ElementType> = PropsWithoutRef<
  HeadingProps<T>,
  T,
  typeof AlertHeadingVariablesEnum
>;
