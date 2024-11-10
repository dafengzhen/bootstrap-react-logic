import type { ElementType, ReactNode } from 'react';

import type { ButtonProps } from '../button';
import type {
  AccordionBasicVariablesType,
  AccordionBodyVariablesType,
  AccordionHeaderVariablesType,
  AccordionItemVariablesType,
  AccordionVariablesType,
  BaseProps,
  OmittedPropsWithoutRef,
  PropsWithoutRef,
} from '../tools';

type Props<T extends ElementType> = {
  /**
   * alwaysOpen.
   */
  alwaysOpen?: boolean;

  /**
   * collapsing.
   */
  collapsing?: boolean;

  /**
   * flush.
   */
  flush?: boolean;

  /**
   * onChange.
   */
  onChange?: (id: number | string, visible: boolean) => void;

  /**
   * options.
   */
  options?: AccordionOption[];
} & BaseProps<T, AccordionVariablesType>;

type BasicProps<T extends ElementType> = {
  /**
   * flush.
   */
  flush?: boolean;
} & BaseProps<T, AccordionBasicVariablesType>;

type ItemProps<T extends ElementType> = {} & BaseProps<T, AccordionItemVariablesType>;

type HeaderProps<T extends ElementType> = {
  /**
   * buttonProps.
   */
  buttonProps?: ButtonProps<ElementType>;

  /**
   * collapsed.
   */
  collapsed?: boolean;
} & BaseProps<T, AccordionHeaderVariablesType>;

type BodyProps<T extends ElementType> = {
  /**
   * collapsing.
   */
  collapsing?: boolean;

  /**
   * onChange.
   */
  onChange?: (visible: boolean) => void;

  /**
   * show.
   */
  show?: boolean;
} & BaseProps<T, AccordionBodyVariablesType>;

export interface AccordionOption {
  body?: ReactNode;
  collapsed?: boolean;
  header?: string;
  id?: number | string;
  show?: boolean;
}

export type AccordionProps<T extends ElementType> = OmittedPropsWithoutRef<
  Props<T>,
  T,
  AccordionVariablesType,
  'onChange'
>;

export type AccordionBasicProps<T extends ElementType> = PropsWithoutRef<BasicProps<T>, T, AccordionBasicVariablesType>;

export type AccordionItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, AccordionItemVariablesType>;

export type AccordionHeaderProps<T extends ElementType> = PropsWithoutRef<
  HeaderProps<T>,
  T,
  AccordionHeaderVariablesType
>;

export type AccordionBodyProps<T extends ElementType> = OmittedPropsWithoutRef<
  BodyProps<T>,
  T,
  AccordionBodyVariablesType,
  'onChange'
>;
