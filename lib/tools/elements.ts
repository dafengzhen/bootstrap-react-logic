import type * as React from 'react';
import type { ComponentProps, ComponentPropsWithRef, CSSProperties, ElementType } from 'react';

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
  variables?: VariablesFromType<V>;
};

export type PropsWithoutRef<P, T extends ElementType, V extends object> = P &
  Omit<ComponentProps<T>, keyof BaseProps<T, V>>;

export type PropsWithRef<P, T extends ElementType, V extends object> = P &
  Omit<ComponentPropsWithRef<T>, keyof BaseProps<T, V>>;

export type PropsWithAs<P, T extends ElementType, V extends object> = P &
  (PropsWithoutRef<P, T, V> | PropsWithRef<P, T, V>);

export type OmittedPropsWithoutRef<P, T extends ElementType, V extends object, O extends keyof any> = P &
  Omit<Omit<ComponentProps<T>, O>, keyof BaseProps<T, V>>;

export type OmittedPropsWithRef<P, T extends ElementType, V extends object, O extends keyof any> = P &
  Omit<Omit<ComponentPropsWithRef<T>, O>, keyof BaseProps<T, V>>;

export type OmittedPropsWithAs<P, T extends ElementType, V extends object, O extends keyof any> = P &
  (OmittedPropsWithoutRef<P, T, V, O> | OmittedPropsWithRef<P, T, V, O>);

export type AddPrefixToKeys<T extends object, Prefix extends string> = {
  [K in keyof T as `${Prefix}${Capitalize<string & K>}`]: T[K];
};

export type VariablesFromType<T extends object> = AddPrefixToKeys<T, 'bs'> & CSSProperties;

export type SlotValue = string | ((originalClass: string) => string | undefined);
