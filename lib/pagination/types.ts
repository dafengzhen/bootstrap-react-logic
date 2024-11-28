import type { ElementType, ReactNode } from 'react';

import type {
  PaginationBasicVariablesType,
  PaginationItemVariablesType,
  PaginationLinkVariablesType,
  PaginationSpanVariablesType,
  PaginationNavVariablesType,
  PaginationVariablesType,
  OmittedPropsWithoutRef,
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

export type PaginationProps<T extends ElementType> = OmittedPropsWithoutRef<
  Props<T>,
  T,
  PaginationVariablesType,
  'onChange'
>;

export type PaginationBasicProps<T extends ElementType> = PropsWithoutRef<
  BasicProps<T>,
  T,
  PaginationBasicVariablesType
>;

export type PaginationItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, PaginationItemVariablesType>;

export type PaginationLinkProps<T extends ElementType> = PropsWithoutRef<LinkProps<T>, T, PaginationLinkVariablesType>;

export type PaginationSpanProps<T extends ElementType> = PropsWithoutRef<SpanProps<T>, T, PaginationSpanVariablesType>;

export type PaginationNavProps<T extends ElementType> = PropsWithoutRef<NavProps<T>, T, PaginationNavVariablesType>;

type Props<T extends ElementType> = {
  /**
   * option.
   */
  option?: {
    spanProps?: PaginationSpanProps<ElementType>;
    clickableActive?: boolean;
  } & Omit<PaginationOption, 'disabled' | 'active' | 'href' | 'link' | 'id'>;

  /**
   * onChange.
   */
  onChange?: (page: number, type: 'previous' | 'next' | 'page' | '<' | '>') => void;

  /**
   * previousOption.
   */
  previousOption?: Omit<PaginationOption, 'active' | 'id'>;

  /**
   * nextOption.
   */
  nextOption?: Omit<PaginationOption, 'active' | 'id'>;

  /**
   * navProps.
   */
  navProps?: PaginationNavProps<ElementType>;

  /**
   * alignment.
   */
  alignment?: 'center' | 'start' | 'end';

  /**
   * alwaysShowEllipsis.
   */
  alwaysShowEllipsis?: boolean;

  /**
   * maxVisible.
   */
  maxVisible?: number;

  /**
   * previous.
   */
  previous?: boolean;

  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * next.
   */
  next?: boolean;

  /**
   * total.
   */
  total?: number;

  /**
   * page.
   */
  page?: number;
} & BaseProps<T, PaginationVariablesType>;

type BasicProps<T extends ElementType> = {
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
} & BaseProps<T, PaginationBasicVariablesType>;

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

type SpanProps<T extends ElementType> = BaseProps<T, PaginationSpanVariablesType> & {};

type NavProps<T extends ElementType> = BaseProps<T, PaginationNavVariablesType> & {};
