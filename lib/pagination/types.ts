import type { ElementType, ReactNode } from 'react';

import type {
  BaseProps,
  PaginationItemVariablesType,
  PaginationLinkVariablesType,
  PaginationNavVariablesType,
  PaginationVariablesType,
  PropsWithoutRef,
} from '../tools';

export type PaginationItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, PaginationItemVariablesType>;

export type PaginationLinkProps<T extends ElementType> = PropsWithoutRef<LinkProps<T>, T, PaginationLinkVariablesType>;

export type PaginationNavProps<T extends ElementType> = PropsWithoutRef<NavProps<T>, T, PaginationNavVariablesType>;

export interface PaginationOption {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  id?: number | string;
  itemProps?: PaginationItemProps<ElementType>;
  link?: ReactNode;
  linkProps?: PaginationLinkProps<ElementType>;
}

export type PaginationProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, PaginationVariablesType>;

type ItemProps<T extends ElementType> = BaseProps<T, PaginationItemVariablesType> & {
  /**
   * active.
   */
  active?: boolean;

  /**
   * disabled.
   */
  disabled?: boolean;
};

type LinkProps<T extends ElementType> = BaseProps<T, PaginationLinkVariablesType> & {};

type NavProps<T extends ElementType> = BaseProps<T, PaginationNavVariablesType> & {};

type Props<T extends ElementType> = BaseProps<T, PaginationVariablesType> & {
  /**
   * alignment.
   */
  alignment?: 'center' | 'end' | 'start';

  /**
   * navProps.
   */
  navProps?: PaginationNavProps<ElementType>;

  /**
   * options.
   */
  options?: PaginationOption[];

  /**
   * size.
   */
  size?: 'lg' | 'sm';
};
