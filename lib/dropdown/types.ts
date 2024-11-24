import type { ElementType, RefCallback, ElementRef, ReactNode } from 'react';

import type {
  DropdownItemTextVariablesType,
  DropdownDividerVariablesType,
  DropdownHeaderVariablesType,
  DropdownToggleVariablesType,
  DropdownItemVariablesType,
  DropdownMenuVariablesType,
  DropdownVariablesType,
  PropsWithoutRef,
  BaseProps,
} from '../tools';
import type { ButtonProps } from '../button';

export interface DropdownOption {
  id?: number | string;
  itemText?: ReactNode;
  as?: 'button' | 'a';
  disabled?: boolean;
  header?: ReactNode;
  divider?: boolean;
  active?: boolean;
  item?: ReactNode;
  href?: string;
}

export type DropdownItemTextProps<T extends ElementType> = PropsWithoutRef<
  ItemTextProps<T>,
  T,
  DropdownItemTextVariablesType
>;

export type DropdownDividerProps<T extends ElementType> = PropsWithoutRef<
  DividerProps<T>,
  T,
  DropdownDividerVariablesType
>;

export type DropdownHeaderProps<T extends ElementType> = PropsWithoutRef<
  HeaderProps<T>,
  T,
  DropdownHeaderVariablesType
>;

export type DropdownToggleProps<T extends ElementType> = PropsWithoutRef<
  ToggleProps<T>,
  T,
  DropdownToggleVariablesType
>;

export type DropdownItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, DropdownItemVariablesType>;

export type DropdownMenuProps<T extends ElementType> = PropsWithoutRef<MenuProps<T>, T, DropdownMenuVariablesType>;

export type DropdownProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, DropdownVariablesType>;

type Props<T extends ElementType> = {
  /**
   * offset.
   */
  offset?:
    | {
        alignmentAxis?: number | null;
        crossAxis?: number;
        mainAxis?: number;
      }
    | number;

  /**
   * autoClose.
   */
  autoClose?: 'outside' | 'inside' | boolean;

  /**
   * menuProps.
   */
  menuProps?: DropdownMenuProps<ElementType>;

  /**
   * buttonProps.
   */
  buttonProps?: ButtonProps<ElementType>;

  /**
   * toggleProps.
   */
  toggleProps?: ButtonProps<ElementType>;

  /**
   * strategy.
   */
  strategy?: 'absolute' | 'fixed';

  /**
   * options.
   */
  options?: DropdownOption[];

  /**
   * dropupCenter.
   */
  dropupCenter?: boolean;

  /**
   * customMenu.
   */
  customMenu?: boolean;

  /**
   * dropstart.
   */
  dropstart?: boolean;

  /**
   * btnGroup.
   */
  btnGroup?: boolean;

  /**
   * toggle.
   */
  toggle?: ReactNode;

  /**
   * dropend.
   */
  dropend?: boolean;

  /**
   * visible.
   */
  visible?: boolean;

  /**
   * center.
   */
  center?: boolean;

  /**
   * dropup.
   */
  dropup?: boolean;

  /**
   * split.
   */
  split?: boolean;
} & BaseProps<T, DropdownVariablesType>;

type MenuProps<T extends ElementType> = {
  /**
   * onRef.
   */
  onRef?: RefCallback<ElementRef<T>>;

  /**
   * show.
   */
  show?: boolean;
} & BaseProps<T, DropdownMenuVariablesType>;

type ItemProps<T extends ElementType> = {
  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * active.
   */
  active?: boolean;
} & BaseProps<T, DropdownItemVariablesType>;

type ToggleProps<T extends ElementType> = {
  /**
   * onRef.
   */
  onRef?: RefCallback<ElementRef<T>>;
} & BaseProps<T, DropdownToggleVariablesType>;

type ItemTextProps<T extends ElementType> = BaseProps<T, DropdownItemTextVariablesType> & {};

type DividerProps<T extends ElementType> = BaseProps<T, DropdownDividerVariablesType> & {};

type HeaderProps<T extends ElementType> = BaseProps<T, DropdownHeaderVariablesType> & {};
