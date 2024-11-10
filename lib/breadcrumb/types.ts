import type { ElementType, MouseEvent, ReactNode } from 'react';

import type {
  BaseProps,
  BreadcrumbBasicVariablesType,
  BreadcrumbItemVariablesType,
  BreadcrumbVariablesType,
  PropsWithoutRef,
} from '../tools';

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

type BasicProps<T extends ElementType> = {} & BaseProps<T, BreadcrumbBasicVariablesType>;

type ItemProps<T extends ElementType> = {
  /**
   * active.
   */
  active?: boolean;
} & BaseProps<T, BreadcrumbItemVariablesType>;

export interface BreadcrumbOption {
  active?: boolean;
  id?: number | string;
  title?: ReactNode;
}

export type BreadcrumbProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, BreadcrumbVariablesType>;

export type BreadcrumbBasicProps<T extends ElementType> = PropsWithoutRef<
  BasicProps<T>,
  T,
  BreadcrumbBasicVariablesType
>;

export type BreadcrumbItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, BreadcrumbItemVariablesType>;
