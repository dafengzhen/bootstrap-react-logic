import type { ElementType, MouseEvent, ReactNode } from 'react';

import type { BaseProps, PropsWithoutRef, SidebarItemVariablesType, SidebarVariablesType } from '../tools';

export type SidebarHeader = ReactNode | SidebarHeaderObject;

export type SidebarHeaderObject = {
  end?: ReactNode;
  icon?: ReactNode;
  name?: ReactNode;
};

export type SidebarItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, SidebarItemVariablesType>;

export interface SidebarOption {
  active?: boolean;
  children?: SidebarOption[];
  disabled?: boolean;
  href?: string;
  icon?: ReactNode;
  id?: number | string;
  isLeaf?: boolean;
  name?: ReactNode;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  parentId?: number | string;
}

export type SidebarProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, SidebarVariablesType>;

type ItemProps<T extends ElementType> = BaseProps<T, SidebarItemVariablesType> & {
  /**
   * collapsible.
   */
  collapsible?: boolean;

  /**
   * dark.
   */
  dark?: boolean;

  /**
   * onOptionChange.
   */
  onOptionChange?: (options: SidebarOption[]) => void;

  /**
   * option.
   */
  option: SidebarOption;

  /**
   * options.
   */
  options?: SidebarOption[];
};

type Props<T extends ElementType> = BaseProps<T, SidebarVariablesType> & {
  /**
   * body.
   */
  body?: ReactNode;

  /**
   * collapsible.
   */
  collapsible?: boolean;

  /**
   * dark.
   */
  dark?: boolean;

  /**
   * footer.
   */
  footer?: ReactNode;

  /**
   * header.
   */
  header?: SidebarHeader;

  /**
   * onCollapse.
   */
  onCollapse?: () => void;

  /**
   * onOptionChange.
   */
  onOptionChange?: (options: SidebarOption[]) => void;

  /**
   * options.
   */
  options?: SidebarOption[];
};
