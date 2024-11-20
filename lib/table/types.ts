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
  variant?: Record<'td' | 'th' | 'tr', Variant> | Variant;
}

export interface TableBodyOption<Key extends string = string> extends TableBodyCells<Key>, TableBodyValues {}

export type TableBodyValueOption = ReactNode;

export interface TableBodyValues {
  colSpan?: Record<string, number>;
  id?: number | string;
  rowSpan?: Record<string, number>;
  scope?: 'col' | 'colgroup' | 'row' | 'rowgroup';
  values?: TableBodyValueOption[];
  variant?: Record<'td' | 'th' | 'tr', Variant> | Variant;
}

export interface TableHeadOption<Key extends string = string> {
  colSpan?: number;
  id?: number | string;
  key: Key;
  label: ReactNode;
  rowspan?: number;
  scope?: 'col' | 'colgroup' | 'row' | 'rowgroup';
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
   * variant.
   */
  variant?: Variant;
};

type TbodyProps<T extends ElementType> = BaseProps<T, TableTbodyVariablesType> & {};

type TdProps<T extends ElementType> = BaseProps<T, TableTdVariablesType> & {
  variant?: Variant;
};

type TheadProps<T extends ElementType> = BaseProps<T, TableTheadVariablesType> & {};

type ThProps<T extends ElementType> = BaseProps<T, TableThVariablesType> & {
  variant?: Variant;
};

type TrProps<T extends ElementType> = BaseProps<T, TableTrVariablesType> & {
  variant?: Variant;
};

type Variant = 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning';
