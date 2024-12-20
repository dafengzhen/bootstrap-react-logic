import type { ElementType, ReactNode } from 'react';

import type {
  BaseProps,
  BreadcrumbBasicVariablesType,
  BreadcrumbItemVariablesType,
  BreadcrumbVariablesType,
  PropsWithoutRef,
} from '../tools';

export type BreadcrumbBasicProps<T extends ElementType> = PropsWithoutRef<
  BasicProps<T>,
  T,
  BreadcrumbBasicVariablesType
>;

export type BreadcrumbItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, BreadcrumbItemVariablesType>;

export interface BreadcrumbOption {
  active?: boolean;
  id?: number | string;
  title?: ReactNode;
}

export type BreadcrumbProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, BreadcrumbVariablesType>;

type BasicProps<T extends ElementType> = BaseProps<T, BreadcrumbBasicVariablesType> & {};

type ItemProps<T extends ElementType> = BaseProps<T, BreadcrumbItemVariablesType> & {
  /**
   * active.
   */
  active?: boolean;
};

type Props<T extends ElementType> = BaseProps<T, BreadcrumbVariablesType> & {
  /**
   * onClick.
   */
  onClick?: (id: number | string) => void;

  /**
   * options.
   */
  options?: BreadcrumbOption[];
};
