import type { ComponentPropsWithoutRef, ComponentPropsWithRef, CSSProperties, ElementType } from 'react';
import type * as React from 'react';

export type AddPrefixToKeys<T extends object, Prefix extends string> = {
  [K in keyof T as `${Prefix}${Capitalize<K & string>}`]: T[K];
};

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
  variables?: VariablesFromType<V>;
};

export type IntrinsicElements = React.JSX.IntrinsicElements;

export type OmittedPropsWithAs<P, T extends ElementType, V extends object, O extends keyof any> = P &
  (OmittedPropsWithoutRef<P, T, V, O> | OmittedPropsWithRef<P, T, V, O>);

export type OmittedPropsWithoutRef<P, T extends ElementType, V extends object, O extends keyof any> = Omit<
  Omit<ComponentPropsWithoutRef<T>, O>,
  keyof BaseProps<T, V>
> &
  P;

export type OmittedPropsWithRef<P, T extends ElementType, V extends object, O extends keyof any> = Omit<
  Omit<ComponentPropsWithRef<T>, O>,
  keyof BaseProps<T, V>
> &
  P;

export type PropsWithAs<P, T extends ElementType, V extends object> = P &
  (PropsWithoutRef<P, T, V> | PropsWithRef<P, T, V>);

export type PropsWithoutRef<P, T extends ElementType, V extends object> = Omit<
  ComponentPropsWithoutRef<T>,
  keyof BaseProps<T, V>
> &
  P;

export type PropsWithRef<P, T extends ElementType, V extends object> = Omit<
  ComponentPropsWithRef<T>,
  keyof BaseProps<T, V>
> &
  P;

export type SlotValue = ((originalClass: string) => string | undefined) | string;

export type VariablesFromType<T extends object> = AddPrefixToKeys<T, 'bs'> & CSSProperties;
