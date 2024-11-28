import type { ElementType, ReactNode } from 'react';

import type {
  BaseProps,
  OmittedPropsWithoutRef,
  PaginationBasicVariablesType,
  PaginationItemVariablesType,
  PaginationLinkVariablesType,
  PaginationNavVariablesType,
  PaginationSpanVariablesType,
  PaginationVariablesType,
  PropsWithoutRef,
} from '../tools';

export type PaginationBasicProps<T extends ElementType> = PropsWithoutRef<
  BasicProps<T>,
  T,
  PaginationBasicVariablesType
>;

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

export type PaginationProps<T extends ElementType> = OmittedPropsWithoutRef<
  Props<T>,
  T,
  PaginationVariablesType,
  'onChange'
>;

export type PaginationSpanProps<T extends ElementType> = PropsWithoutRef<SpanProps<T>, T, PaginationSpanVariablesType>;

type BasicProps<T extends ElementType> = BaseProps<T, PaginationBasicVariablesType> & {
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
   * alwaysShowEllipsis.
   */
  alwaysShowEllipsis?: boolean;

  /**
   * maxVisible.
   */
  maxVisible?: number;

  /**
   * navProps.
   */
  navProps?: PaginationNavProps<ElementType>;

  /**
   * next.
   */
  next?: boolean;

  /**
   * nextOption.
   */
  nextOption?: Omit<PaginationOption, 'active' | 'id'>;

  /**
   * onChange.
   */
  onChange?: (page: number, type: '<' | '>' | 'next' | 'page' | 'previous') => void;

  /**
   * option.
   */
  option?: Omit<PaginationOption, 'active' | 'disabled' | 'href' | 'id' | 'link'> & {
    clickableActive?: boolean;
    spanProps?: PaginationSpanProps<ElementType>;
  };

  /**
   * page.
   */
  page?: number;

  /**
   * previous.
   */
  previous?: boolean;

  /**
   * previousOption.
   */
  previousOption?: Omit<PaginationOption, 'active' | 'id'>;

  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * total.
   */
  total?: number;
};

type SpanProps<T extends ElementType> = BaseProps<T, PaginationSpanVariablesType> & {};
