import type { ElementType, ReactNode } from 'react';

import type {
  AccordionHeaderVariablesType,
  AccordionBasicVariablesType,
  AccordionBodyVariablesType,
  AccordionItemVariablesType,
  AccordionVariablesType,
  OmittedPropsWithoutRef,
  PropsWithoutRef,
  BaseProps,
} from '../tools';
import type { ButtonProps } from '../button';

export type AccordionBodyProps<T extends ElementType> = OmittedPropsWithoutRef<
  BodyProps<T>,
  T,
  AccordionBodyVariablesType,
  'onChange'
>;

export interface AccordionOption {
  id?: number | string;
  collapsed?: boolean;
  body?: ReactNode;
  header?: string;
  show?: boolean;
}

export type AccordionProps<T extends ElementType> = OmittedPropsWithoutRef<
  Props<T>,
  T,
  AccordionVariablesType,
  'onChange'
>;

export type AccordionHeaderProps<T extends ElementType> = PropsWithoutRef<
  HeaderProps<T>,
  T,
  AccordionHeaderVariablesType
>;

export type AccordionBasicProps<T extends ElementType> = PropsWithoutRef<BasicProps<T>, T, AccordionBasicVariablesType>;

export type AccordionItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, AccordionItemVariablesType>;

type Props<T extends ElementType> = {
  /**
   * onChange.
   */
  onChange?: (id: number | string, visible: boolean) => void;

  /**
   * options.
   */
  options?: AccordionOption[];

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
} & BaseProps<T, AccordionVariablesType>;

type BodyProps<T extends ElementType> = {
  /**
   * onChange.
   */
  onChange?: (visible: boolean) => void;

  /**
   * collapsing.
   */
  collapsing?: boolean;

  /**
   * show.
   */
  show?: boolean;
} & BaseProps<T, AccordionBodyVariablesType>;

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

type BasicProps<T extends ElementType> = {
  /**
   * flush.
   */
  flush?: boolean;
} & BaseProps<T, AccordionBasicVariablesType>;

type ItemProps<T extends ElementType> = BaseProps<T, AccordionItemVariablesType> & {};
