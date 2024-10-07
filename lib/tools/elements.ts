import type * as React from 'react';
import type {
  ComponentProps,
  ComponentPropsWithRef,
  CSSProperties,
  ElementType,
} from 'react';

export type IntrinsicElements = React.JSX.IntrinsicElements;

export type BaseProps<T extends ElementType, V extends object> = {
  /**
   * as.
   */
  as?: T;

  /**
   * dropOldClass.
   */
  dropOldClass?: boolean;

  /**
   * variables.
   */
  variables?: VariablesFromEnum<V>;
};

export type PropsWithoutRef<P, T extends ElementType, V extends object> = P &
  Omit<ComponentProps<T>, keyof BaseProps<T, V>>;

export type PropsWithRef<P, T extends ElementType, V extends object> = P &
  Omit<ComponentPropsWithRef<T>, keyof BaseProps<T, V>>;

export type PropsWithAs<P, T extends ElementType, V extends object> = P &
  (PropsWithoutRef<P, T, V> | PropsWithRef<P, T, V>);

export type VariablesFromEnum<T extends object> = {
  [key in keyof T]?: string | number;
} & CSSProperties;

export type SlotValue =
  | string
  | ((originalClass: string) => string | undefined);
