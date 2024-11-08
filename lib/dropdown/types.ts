import type { ElementRef, ElementType, ReactNode, RefCallback } from 'react';
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
import type { ButtonProps } from '../button';

type Props<T extends ElementType> = BaseProps<T, DropdownVariablesType> & {
  /**
   * options.
   */
  options?: DropdownOption[];

  /**
   * toggle.
   */
  toggle?: ReactNode;

  /**
   * toggleProps.
   */
  toggleProps?: ButtonProps<ElementType>;

  /**
   * buttonProps.
   */
  buttonProps?: ButtonProps<ElementType>;

  /**
   * split.
   */
  split?: boolean;

  /**
   * btnGroup.
   */
  btnGroup?: boolean;

  /**
   * center.
   */
  center?: boolean;

  /**
   * dropup.
   */
  dropup?: boolean;

  /**
   * dropupCenter.
   */
  dropupCenter?: boolean;

  /**
   * dropend.
   */
  dropend?: boolean;

  /**
   * dropstart.
   */
  dropstart?: boolean;

  /**
   * strategy.
   */
  strategy?: 'fixed' | 'absolute';

  /**
   * menuProps.
   */
  menuProps?: DropdownMenuProps<ElementType>;

  /**
   * customMenu.
   */
  customMenu?: boolean;

  /**
   * offset.
   */
  offset?:
    | number
    | {
        mainAxis?: number;
        crossAxis?: number;
        alignmentAxis?: number | null;
      };

  /**
   * autoClose.
   */
  autoClose?: boolean | 'inside' | 'outside';

  /**
   * visible.
   */
  visible?: boolean;
};

type ToggleProps<T extends ElementType> = BaseProps<T, DropdownToggleVariablesType> & {
  /**
   * onRef.
   */
  onRef?: RefCallback<ElementRef<T>>;
};

type ItemProps<T extends ElementType> = BaseProps<T, DropdownItemVariablesType> & {
  /**
   * active.
   */
  active?: boolean;

  /**
   * disabled.
   */
  disabled?: boolean;
};

type ItemTextProps<T extends ElementType> = BaseProps<T, DropdownItemTextVariablesType> & {};

type MenuProps<T extends ElementType> = BaseProps<T, DropdownMenuVariablesType> & {
  /**
   * show.
   */
  show?: boolean;

  /**
   * onRef.
   */
  onRef?: RefCallback<ElementRef<T>>;
};

type DividerProps<T extends ElementType> = BaseProps<T, DropdownDividerVariablesType> & {};

type HeaderProps<T extends ElementType> = BaseProps<T, DropdownHeaderVariablesType> & {};

export interface DropdownOption {
  id?: string | number;
  item?: ReactNode;
  itemText?: ReactNode;
  href?: string;
  divider?: boolean;
  active?: boolean;
  as?: 'button' | 'a';
  disabled?: boolean;
  header?: ReactNode;
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
