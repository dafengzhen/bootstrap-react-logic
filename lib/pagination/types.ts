import type { ElementType, ReactNode } from 'react';

import type {
  BaseProps,
  PaginationItemVariablesType,
  PaginationLinkVariablesType,
  PaginationNavVariablesType,
  PaginationVariablesType,
  PropsWithoutRef,
} from '../tools';

type Props<T extends ElementType> = {
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
} & BaseProps<T, PaginationVariablesType>;

type ItemProps<T extends ElementType> = {
  /**
   * active.
   */
  active?: boolean;

  /**
   * disabled.
   */
  disabled?: boolean;
} & BaseProps<T, PaginationItemVariablesType>;

type NavProps<T extends ElementType> = {} & BaseProps<T, PaginationNavVariablesType>;

type LinkProps<T extends ElementType> = {} & BaseProps<T, PaginationLinkVariablesType>;

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

export type PaginationItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, PaginationItemVariablesType>;

export type PaginationNavProps<T extends ElementType> = PropsWithoutRef<NavProps<T>, T, PaginationNavVariablesType>;

export type PaginationLinkProps<T extends ElementType> = PropsWithoutRef<LinkProps<T>, T, PaginationLinkVariablesType>;
