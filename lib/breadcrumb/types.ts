import type { ElementType, MouseEvent, ReactNode } from 'react';

import type {
  BreadcrumbBasicVariablesType,
  BreadcrumbItemVariablesType,
  BreadcrumbVariablesType,
  PropsWithoutRef,
  BaseProps,
} from '../tools';

export type BreadcrumbBasicProps<T extends ElementType> = PropsWithoutRef<
  BasicProps<T>,
  T,
  BreadcrumbBasicVariablesType
>;

export type BreadcrumbItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, BreadcrumbItemVariablesType>;

export type BreadcrumbProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, BreadcrumbVariablesType>;

export interface BreadcrumbOption {
  id?: number | string;
  title?: ReactNode;
  active?: boolean;
}

type Props<T extends ElementType> = {
  /**
   * onClick.
   */
  onClick?: (id: number | string, event: MouseEvent<HTMLLIElement>) => void;

  /**
   * options.
   */
  options?: BreadcrumbOption[];
} & BaseProps<T, BreadcrumbVariablesType>;

type ItemProps<T extends ElementType> = {
  /**
   * active.
   */
  active?: boolean;
} & BaseProps<T, BreadcrumbItemVariablesType>;

type BasicProps<T extends ElementType> = BaseProps<T, BreadcrumbBasicVariablesType> & {};
