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

export type AccordionBasicProps<T extends ElementType> = PropsWithoutRef<BasicProps<T>, T, AccordionBasicVariablesType>;

export type AccordionBodyProps<T extends ElementType> = OmittedPropsWithoutRef<
  BodyProps<T>,
  T,
  AccordionBodyVariablesType,
  'onChange'
>;

export type AccordionHeaderProps<T extends ElementType> = PropsWithoutRef<
  HeaderProps<T>,
  T,
  AccordionHeaderVariablesType
>;

export type AccordionItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, AccordionItemVariablesType>;

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

type BasicProps<T extends ElementType> = BaseProps<T, AccordionBasicVariablesType> & {
  /**
   * flush.
   */
  flush?: boolean;
};

type BodyProps<T extends ElementType> = BaseProps<T, AccordionBodyVariablesType> & {
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
};

type HeaderProps<T extends ElementType> = BaseProps<T, AccordionHeaderVariablesType> & {
  /**
   * buttonProps.
   */
  buttonProps?: ButtonProps<ElementType>;

  /**
   * collapsed.
   */
  collapsed?: boolean;
};

type ItemProps<T extends ElementType> = BaseProps<T, AccordionItemVariablesType> & {};

type Props<T extends ElementType> = BaseProps<T, AccordionVariablesType> & {
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
};
