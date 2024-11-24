import type { ElementType, ReactNode } from 'react';

import type {
  PaginationItemVariablesType,
  PaginationLinkVariablesType,
  PaginationNavVariablesType,
  PaginationVariablesType,
  PropsWithoutRef,
  BaseProps,
} from '../tools';

export interface PaginationOption {
  itemProps?: PaginationItemProps<ElementType>;
  linkProps?: PaginationLinkProps<ElementType>;
  id?: number | string;
  disabled?: boolean;
  active?: boolean;
  link?: ReactNode;
  href?: string;
}

export type PaginationItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, PaginationItemVariablesType>;

export type PaginationLinkProps<T extends ElementType> = PropsWithoutRef<LinkProps<T>, T, PaginationLinkVariablesType>;

export type PaginationNavProps<T extends ElementType> = PropsWithoutRef<NavProps<T>, T, PaginationNavVariablesType>;

export type PaginationProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, PaginationVariablesType>;

type Props<T extends ElementType> = {
  /**
   * navProps.
   */
  navProps?: PaginationNavProps<ElementType>;

  /**
   * alignment.
   */
  alignment?: 'center' | 'start' | 'end';

  /**
   * options.
   */
  options?: PaginationOption[];

  /**
   * size.
   */
  size?: 'lg' | 'sm';
} & BaseProps<T, PaginationVariablesType>;

type ItemProps<T extends ElementType> = {
  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * active.
   */
  active?: boolean;
} & BaseProps<T, PaginationItemVariablesType>;

type LinkProps<T extends ElementType> = BaseProps<T, PaginationLinkVariablesType> & {};

type NavProps<T extends ElementType> = BaseProps<T, PaginationNavVariablesType> & {};
