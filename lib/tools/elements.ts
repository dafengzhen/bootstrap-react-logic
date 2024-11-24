import type { ComponentPropsWithoutRef, ComponentPropsWithRef, CSSProperties, ElementType } from 'react';
import type * as React from 'react';

export type BaseProps<T extends ElementType, V extends object> = {
  /**
   * variables.
   */
  variables?: VariablesFromType<V>;

  /**
   * dropOldClass.
   */
  dropOldClass?: boolean;

  /**
   * as.
   */
  as?: T;
};

export type OmittedPropsWithAs<P, T extends ElementType, V extends object, O extends keyof any> = (
  | OmittedPropsWithoutRef<P, T, V, O>
  | OmittedPropsWithRef<P, T, V, O>
) &
  P;

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

export type PropsWithoutRef<P, T extends ElementType, V extends object> = Omit<
  ComponentPropsWithoutRef<T>,
  keyof BaseProps<T, V>
> &
  P;

export type AddPrefixToKeys<T extends object, Prefix extends string> = {
  [K in keyof T as `${Prefix}${Capitalize<string & K>}`]: T[K];
};

export type PropsWithRef<P, T extends ElementType, V extends object> = Omit<
  ComponentPropsWithRef<T>,
  keyof BaseProps<T, V>
> &
  P;

export type PropsWithAs<P, T extends ElementType, V extends object> = (
  | PropsWithoutRef<P, T, V>
  | PropsWithRef<P, T, V>
) &
  P;

export type VariablesFromType<T extends object> = AddPrefixToKeys<T, 'bs'> & CSSProperties;

export type SlotValue = ((originalClass: string) => undefined | string) | string;

export type IntrinsicElements = React.JSX.IntrinsicElements;
