import type { ElementType, ReactNode } from 'react';
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
import type { ButtonProps } from '../button';

type Props<T extends ElementType> = BaseProps<T, AccordionVariablesType> & {
  /**
   * flush.
   */
  flush?: boolean;

  /**
   * alwaysOpen.
   */
  alwaysOpen?: boolean;

  /**
   * options.
   */
  options?: AccordionOption[];

  /**
   * onChange.
   */
  onChange?: (id: string | number, visible: boolean) => void;

  /**
   * collapsing.
   */
  collapsing?: boolean;
};

type BasicProps<T extends ElementType> = BaseProps<T, AccordionBasicVariablesType> & {
  /**
   * flush.
   */
  flush?: boolean;
};

type ItemProps<T extends ElementType> = BaseProps<T, AccordionItemVariablesType> & {};

type HeaderProps<T extends ElementType> = BaseProps<T, AccordionHeaderVariablesType> & {
  /**
   * collapsed.
   */
  collapsed?: boolean;

  /**
   * buttonProps.
   */
  buttonProps?: ButtonProps<'button'>;
};

type BodyProps<T extends ElementType> = BaseProps<T, AccordionBodyVariablesType> & {
  /**
   * show.
   */
  show?: boolean;

  /**
   * collapsing.
   */
  collapsing?: boolean;

  /**
   * onChange.
   */
  onChange?: (visible: boolean) => void;
};

export interface AccordionOption {
  id?: string | number;
  header?: string;
  body?: ReactNode;
  collapsed?: boolean;
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
