import type { ElementType, ReactNode } from 'react';

import type {
  BaseProps,
  PropsWithoutRef,
  TableTbodyVariablesType,
  TableTdVariablesType,
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
  value?: ReactNode;
  variant?: Variant;
}

export interface TableBodyCells<Key extends string = string> {
  cells?: TableBodyCellOption<Key>[];
  id?: number | string;
  scope?: 'col' | 'colgroup' | 'row' | 'rowgroup';
  variant?: Variant;
}

export interface TableBodyOption extends TableBodyCells, TableBodyValues {}

export type TableBodyValueOption<Key extends string = string> =
  | ReactNode
  | (TableBodyCellOption<Key> & { value?: ReactNode });

export interface TableBodyValues<Key extends string = string> {
  active?: boolean;
  colSpan?: number;
  id?: number | string;
  rowSpan?: number;
  scope?: 'col' | 'colgroup' | 'row' | 'rowgroup';
  values?: TableBodyValueOption<Key>[];
  variant?: Variant;
}

export interface TableHeadOption<Key extends string = string> {
  active?: boolean;
  colSpan?: number;
  id?: number | string;
  key?: Key;
  label: ReactNode;
  rowspan?: number;
  scope?: 'col' | 'colgroup' | 'row' | 'rowgroup';
  variant?: Variant;
}

export type TableProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, TableVariablesType>;

export type TableTbodyProps<T extends ElementType> = PropsWithoutRef<TbodyProps<T>, T, TableTbodyVariablesType>;

export type TableTdProps<T extends ElementType> = PropsWithoutRef<TdProps<T>, T, TableTdVariablesType>;

export type TableTheadProps<T extends ElementType> = PropsWithoutRef<TheadProps<T>, T, TableTheadVariablesType>;

export type TableThProps<T extends ElementType> = PropsWithoutRef<ThProps<T>, T, TableThVariablesType>;

export type TableTrProps<T extends ElementType> = PropsWithoutRef<TrProps<T>, T, TableTrVariablesType>;

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

type TbodyProps<T extends ElementType> = BaseProps<T, TableTbodyVariablesType> & {};

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

type TheadProps<T extends ElementType> = BaseProps<T, TableTheadVariablesType> & {};

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
