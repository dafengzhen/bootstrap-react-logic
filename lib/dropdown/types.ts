import type { ElementRef, ElementType, ReactNode, RefCallback } from 'react';

import type { ButtonProps } from '../button';
import type {
  BaseProps,
  DropdownDividerVariablesType,
  DropdownHeaderVariablesType,
  DropdownItemTextVariablesType,
  DropdownItemVariablesType,
  DropdownMenuVariablesType,
  DropdownToggleVariablesType,
  DropdownVariablesType,
  PropsWithoutRef,
} from '../tools';

type Props<T extends ElementType> = {
  /**
   * autoClose.
   */
  autoClose?: 'inside' | 'outside' | boolean;

  /**
   * btnGroup.
   */
  btnGroup?: boolean;

  /**
   * buttonProps.
   */
  buttonProps?: ButtonProps<ElementType>;

  /**
   * center.
   */
  center?: boolean;

  /**
   * customMenu.
   */
  customMenu?: boolean;

  /**
   * dropend.
   */
  dropend?: boolean;

  /**
   * dropstart.
   */
  dropstart?: boolean;

  /**
   * dropup.
   */
  dropup?: boolean;

  /**
   * dropupCenter.
   */
  dropupCenter?: boolean;

  /**
   * menuProps.
   */
  menuProps?: DropdownMenuProps<ElementType>;

  /**
   * offset.
   */
  offset?:
    | {
        alignmentAxis?: null | number;
        crossAxis?: number;
        mainAxis?: number;
      }
    | number;

  /**
   * options.
   */
  options?: DropdownOption[];

  /**
   * split.
   */
  split?: boolean;

  /**
   * strategy.
   */
  strategy?: 'absolute' | 'fixed';

  /**
   * toggle.
   */
  toggle?: ReactNode;

  /**
   * toggleProps.
   */
  toggleProps?: ButtonProps<ElementType>;

  /**
   * visible.
   */
  visible?: boolean;
} & BaseProps<T, DropdownVariablesType>;

type ToggleProps<T extends ElementType> = {
  /**
   * onRef.
   */
  onRef?: RefCallback<ElementRef<T>>;
} & BaseProps<T, DropdownToggleVariablesType>;

type ItemProps<T extends ElementType> = {
  /**
   * active.
   */
  active?: boolean;

  /**
   * disabled.
   */
  disabled?: boolean;
} & BaseProps<T, DropdownItemVariablesType>;

type ItemTextProps<T extends ElementType> = {} & BaseProps<T, DropdownItemTextVariablesType>;

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

type DividerProps<T extends ElementType> = {} & BaseProps<T, DropdownDividerVariablesType>;

type HeaderProps<T extends ElementType> = {} & BaseProps<T, DropdownHeaderVariablesType>;

export interface DropdownOption {
  active?: boolean;
  as?: 'a' | 'button';
  disabled?: boolean;
  divider?: boolean;
  header?: ReactNode;
  href?: string;
  id?: number | string;
  item?: ReactNode;
  itemText?: ReactNode;
}

export type DropdownProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, DropdownVariablesType>;

export type DropdownItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, DropdownItemVariablesType>;

export type DropdownItemTextProps<T extends ElementType> = PropsWithoutRef<
  ItemTextProps<T>,
  T,
  DropdownItemTextVariablesType
>;

export type DropdownToggleProps<T extends ElementType> = PropsWithoutRef<
  ToggleProps<T>,
  T,
  DropdownToggleVariablesType
>;

export type DropdownMenuProps<T extends ElementType> = PropsWithoutRef<MenuProps<T>, T, DropdownMenuVariablesType>;

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
