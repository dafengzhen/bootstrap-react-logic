import type { ElementType, ReactNode } from 'react';

import type {
  BaseProps,
  PropsWithoutRef,
  TableCaptionVariablesType,
  TableResponsiveVariablesType,
  TableTbodyVariablesType,
  TableTdVariablesType,
  TableTfootVariablesType,
  TableTheadVariablesType,
  TableThVariablesType,
  TableTrVariablesType,
  TableVariablesType,
} from '../tools';

export interface TableBodyCellOption<Key extends string = string> {
  active?: boolean;
  colSpan?: number;
  key?: Key;
  rowSpan?: number;
  tdProps?: TableTdProps<ElementType>;
  thProps?: TableThProps<ElementType>;
  value?: ReactNode;
  variant?: Variant;
}

export interface TableBodyOption<Key extends string = string> {
  active?: boolean;
  cells?: TableBodyCellOption<Key>[];
  colSpan?: number;
  id?: number | string;
  props?: TableTrProps<ElementType>;
  rowSpan?: number;
  scope?: 'col' | 'colgroup' | 'row' | 'rowgroup';
  tdProps?: TableTdProps<ElementType>;
  thProps?: TableThProps<ElementType>;
  values?: TableBodyValueOption<Key>[];
  variant?: Variant;
}

export type TableBodyValueOption<Key extends string = string> =
  | ReactNode
  | (TableBodyCellOption<Key> & { value?: ReactNode });

export type TableCaptionProps<T extends ElementType> = PropsWithoutRef<CaptionProps<T>, T, TableCaptionVariablesType>;

export type TableFootOption<Key extends string = string> = TableBodyOption<Key>;

export interface TableHeadOption<Key extends string = string> {
  active?: boolean;
  colSpan?: number;
  id?: number | string;
  key?: Key;
  label: ReactNode;
  props?: TableThProps<ElementType>;
  rowspan?: number;
  scope?: 'col' | 'colgroup' | 'row' | 'rowgroup';
  variant?: Variant;
}

export type TableProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, TableVariablesType>;

export type TableResponsiveProps<T extends ElementType> = PropsWithoutRef<
  ResponsiveProps<T>,
  T,
  TableResponsiveVariablesType
>;

export type TableTbodyProps<T extends ElementType> = PropsWithoutRef<TbodyProps<T>, T, TableTbodyVariablesType>;

export type TableTdProps<T extends ElementType> = PropsWithoutRef<TdProps<T>, T, TableTdVariablesType>;

export type TableTfootProps<T extends ElementType> = PropsWithoutRef<TfootProps<T>, T, TableTfootVariablesType>;

export type TableTheadProps<T extends ElementType> = PropsWithoutRef<TheadProps<T>, T, TableTheadVariablesType>;

export type TableThProps<T extends ElementType> = PropsWithoutRef<ThProps<T>, T, TableThVariablesType>;

export type TableTrProps<T extends ElementType> = PropsWithoutRef<TrProps<T>, T, TableTrVariablesType>;

type CaptionProps<T extends ElementType> = BaseProps<T, TableCaptionVariablesType> & {};

type Props<T extends ElementType> = BaseProps<T, TableVariablesType> & {
  /**
   * body.
   */
  body?: TableBodyOption[];

  /**
   * bodyProps.
   */
  bodyProps?: TableTbodyProps<ElementType>;

  /**
   * bordered.
   */
  bordered?: boolean;

  /**
   * borderless.
   */
  borderless?: boolean;

  /**
   * caption.
   */
  caption?: ReactNode;

  /**
   * captionProps.
   */
  captionProps?: TableCaptionProps<ElementType>;

  /**
   * foot.
   */
  foot?: TableFootOption[];

  /**
   * footProps.
   */
  footProps?: TableTfootProps<ElementType>;

  /**
   * head.
   */
  head?: TableHeadOption[];

  /**
   * headProps.
   */
  headProps?: TableTheadProps<ElementType>;

  /**
   * hover.
   */
  hover?: boolean;

  /**
   * middle.
   */
  middle?: boolean;

  /**
   * responsive.
   */
  responsive?: 'lg' | 'md' | 'sm' | 'xl' | 'xxl' | boolean;

  /**
   * responsiveProps.
   */
  responsiveProps?: TableResponsiveProps<ElementType>;

  /**
   * size.
   */
  size?: 'sm';

  /**
   * striped.
   */
  striped?: boolean;

  /**
   * stripedColumns.
   */
  stripedColumns?: boolean;

  /**
   * variant.
   */
  variant?: Variant;
};

type ResponsiveProps<T extends ElementType> = BaseProps<T, TableResponsiveVariablesType> & {
  /**
   * responsive.
   */
  responsive?: 'lg' | 'md' | 'sm' | 'xl' | 'xxl' | boolean;
};

type TbodyProps<T extends ElementType> = BaseProps<T, TableTbodyVariablesType> & {
  /**
   * divider.
   */
  divider?: boolean;
};

type TdProps<T extends ElementType> = BaseProps<T, TableTdVariablesType> & {
  /**
   * active.
   */
  active?: boolean;

  /**
   * variant.
   */
  variant?: Variant;
};

type TfootProps<T extends ElementType> = BaseProps<T, TableTfootVariablesType> & {
  /**
   * divider.
   */
  divider?: boolean;
};

type TheadProps<T extends ElementType> = BaseProps<T, TableTheadVariablesType> & {
  /**
   * divider.
   */
  divider?: boolean;

  /**
   * variant.
   */
  variant?: Variant;
};

type ThProps<T extends ElementType> = BaseProps<T, TableThVariablesType> & {
  /**
   * active.
   */
  active?: boolean;

  /**
   * variant.
   */
  variant?: Variant;
};

type TrProps<T extends ElementType> = BaseProps<T, TableTrVariablesType> & {
  /**
   * active.
   */
  active?: boolean;

  /**
   * variant.
   */
  variant?: Variant;
};

type Variant = 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning';
