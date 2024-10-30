import type { ElementType, MouseEvent, ReactNode } from 'react';
import type {
  BaseProps,
  BreadcrumbBasicVariablesType,
  BreadcrumbItemVariablesType,
  BreadcrumbVariablesType,
  PropsWithoutRef,
} from '../tools';

type Props<T extends ElementType> = BaseProps<T, BreadcrumbVariablesType> & {
  /**
   * options.
   */
  options?: BreadcrumbOption[];

  /**
   * onClick.
   */
  onClick?: (id: string | number, event: MouseEvent<HTMLLIElement>) => void;
};

type BasicProps<T extends ElementType> = BaseProps<T, BreadcrumbBasicVariablesType> & {};

type ItemProps<T extends ElementType> = BaseProps<T, BreadcrumbItemVariablesType> & {
  /**
   * active.
   */
  active?: boolean;
};

export interface BreadcrumbOption {
  id?: string | number;
  title?: ReactNode;
  active?: boolean;
}

export type BreadcrumbProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, BreadcrumbVariablesType>;

export type BreadcrumbBasicProps<T extends ElementType> = PropsWithoutRef<
  BasicProps<T>,
  T,
  BreadcrumbBasicVariablesType
>;

export type BreadcrumbItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, BreadcrumbItemVariablesType>;
