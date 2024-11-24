import type { ElementType, ReactNode } from 'react';

import type {
  TableResponsiveVariablesType,
  TableCaptionVariablesType,
  TableTbodyVariablesType,
  TableTfootVariablesType,
  TableTheadVariablesType,
  TableTdVariablesType,
  TableThVariablesType,
  TableTrVariablesType,
  TableVariablesType,
  PropsWithoutRef,
  BaseProps,
} from '../tools';

export interface TableBodyOption<Key extends string = string> {
  scope?: 'colgroup' | 'rowgroup' | 'col' | 'row';
  values?: TableBodyValueOption<Key>[];
  tdProps?: TableTdProps<ElementType>;
  thProps?: TableThProps<ElementType>;
  cells?: TableBodyCellOption<Key>[];
  props?: TableTrProps<ElementType>;
  id?: number | string;
  variant?: Variant;
  active?: boolean;
  colSpan?: number;
  rowSpan?: number;
}

export interface TableHeadOption<Key extends string = string> {
  scope?: 'colgroup' | 'rowgroup' | 'col' | 'row';
  props?: TableThProps<ElementType>;
  id?: number | string;
  variant?: Variant;
  active?: boolean;
  colSpan?: number;
  label: ReactNode;
  rowspan?: number;
  key?: Key;
}

export interface TableBodyCellOption<Key extends string = string> {
  tdProps?: TableTdProps<ElementType>;
  thProps?: TableThProps<ElementType>;
  value?: ReactNode;
  variant?: Variant;
  active?: boolean;
  colSpan?: number;
  rowSpan?: number;
  key?: Key;
}

export type TableResponsiveProps<T extends ElementType> = PropsWithoutRef<
  ResponsiveProps<T>,
  T,
  TableResponsiveVariablesType
>;

export type TableBodyValueOption<Key extends string = string> =
  | (TableBodyCellOption<Key> & { value?: ReactNode })
  | ReactNode;

export type TableCaptionProps<T extends ElementType> = PropsWithoutRef<CaptionProps<T>, T, TableCaptionVariablesType>;

export type TableTbodyProps<T extends ElementType> = PropsWithoutRef<TbodyProps<T>, T, TableTbodyVariablesType>;

export type TableTfootProps<T extends ElementType> = PropsWithoutRef<TfootProps<T>, T, TableTfootVariablesType>;

export type TableTheadProps<T extends ElementType> = PropsWithoutRef<TheadProps<T>, T, TableTheadVariablesType>;

export type TableTdProps<T extends ElementType> = PropsWithoutRef<TdProps<T>, T, TableTdVariablesType>;

export type TableThProps<T extends ElementType> = PropsWithoutRef<ThProps<T>, T, TableThVariablesType>;

export type TableTrProps<T extends ElementType> = PropsWithoutRef<TrProps<T>, T, TableTrVariablesType>;

export type TableProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, TableVariablesType>;

export type TableFootOption<Key extends string = string> = TableBodyOption<Key>;

type Props<T extends ElementType> = {
  /**
   * responsive.
   */
  responsive?: boolean | 'xxl' | 'lg' | 'md' | 'sm' | 'xl';

  /**
   * responsiveProps.
   */
  responsiveProps?: TableResponsiveProps<ElementType>;

  /**
   * captionProps.
   */
  captionProps?: TableCaptionProps<ElementType>;

  /**
   * bodyProps.
   */
  bodyProps?: TableTbodyProps<ElementType>;

  /**
   * footProps.
   */
  footProps?: TableTfootProps<ElementType>;

  /**
   * headProps.
   */
  headProps?: TableTheadProps<ElementType>;

  /**
   * body.
   */
  body?: TableBodyOption[];

  /**
   * foot.
   */
  foot?: TableFootOption[];

  /**
   * head.
   */
  head?: TableHeadOption[];

  /**
   * stripedColumns.
   */
  stripedColumns?: boolean;

  /**
   * borderless.
   */
  borderless?: boolean;

  /**
   * caption.
   */
  caption?: ReactNode;

  /**
   * bordered.
   */
  bordered?: boolean;

  /**
   * striped.
   */
  striped?: boolean;

  /**
   * variant.
   */
  variant?: Variant;

  /**
   * middle.
   */
  middle?: boolean;

  /**
   * hover.
   */
  hover?: boolean;

  /**
   * size.
   */
  size?: 'sm';
} & BaseProps<T, TableVariablesType>;

type ResponsiveProps<T extends ElementType> = {
  /**
   * responsive.
   */
  responsive?: boolean | 'xxl' | 'lg' | 'md' | 'sm' | 'xl';
} & BaseProps<T, TableResponsiveVariablesType>;

type TheadProps<T extends ElementType> = {
  /**
   * divider.
   */
  divider?: boolean;

  /**
   * variant.
   */
  variant?: Variant;
} & BaseProps<T, TableTheadVariablesType>;

type TdProps<T extends ElementType> = {
  /**
   * variant.
   */
  variant?: Variant;

  /**
   * active.
   */
  active?: boolean;
} & BaseProps<T, TableTdVariablesType>;

type ThProps<T extends ElementType> = {
  /**
   * variant.
   */
  variant?: Variant;

  /**
   * active.
   */
  active?: boolean;
} & BaseProps<T, TableThVariablesType>;

type TrProps<T extends ElementType> = {
  /**
   * variant.
   */
  variant?: Variant;

  /**
   * active.
   */
  active?: boolean;
} & BaseProps<T, TableTrVariablesType>;

type TbodyProps<T extends ElementType> = {
  /**
   * divider.
   */
  divider?: boolean;
} & BaseProps<T, TableTbodyVariablesType>;

type TfootProps<T extends ElementType> = {
  /**
   * divider.
   */
  divider?: boolean;
} & BaseProps<T, TableTfootVariablesType>;

type Variant = 'secondary' | 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'info';

type CaptionProps<T extends ElementType> = BaseProps<T, TableCaptionVariablesType> & {};
