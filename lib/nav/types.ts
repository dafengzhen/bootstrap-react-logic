import type { ElementType, MouseEvent, ReactNode } from 'react';

import type {
  NavTabContentVariablesType,
  NavTabPaneVariablesType,
  OmittedPropsWithoutRef,
  NavItemVariablesType,
  NavLinkVariablesType,
  NavVariablesType,
  PropsWithoutRef,
  BaseProps,
} from '../tools';

export interface NavOption {
  paneProps?: NavTabPaneProps<ElementType>;
  itemProps?: NavItemProps<ElementType>;
  linkProps?: NavLinkProps<ElementType>;
  id?: number | string;
  disabled?: boolean;
  active?: boolean;
  item?: ReactNode;
  link?: ReactNode;
  pane?: ReactNode;
  fade?: boolean;
  href?: string;
}

export type NavTabContentProps<T extends ElementType> = PropsWithoutRef<
  TabContentProps<T>,
  T,
  NavTabContentVariablesType
>;

export type NavTabPaneProps<T extends ElementType> = PropsWithoutRef<TabPaneProps<T>, T, NavTabPaneVariablesType>;

export type NavProps<T extends ElementType> = OmittedPropsWithoutRef<Props<T>, T, NavVariablesType, 'onChange'>;

export type NavItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, NavItemVariablesType>;

export type NavLinkProps<T extends ElementType> = PropsWithoutRef<LinkProps<T>, T, NavLinkVariablesType>;

type Props<T extends ElementType> = {
  /**
   * onChange.
   */
  onChange?: (id: number | string, event: MouseEvent<HTMLElement>) => void;

  /**
   * contentProps.
   */
  contentProps?: NavTabContentProps<ElementType>;

  /**
   * horizontal.
   */
  horizontal?: 'center' | 'start' | 'end';

  /**
   * options.
   */
  options?: NavOption[];

  /**
   * justified.
   */
  justified?: boolean;

  /**
   * underline.
   */
  underline?: boolean;

  /**
   * skipItem.
   */
  skipItem?: boolean;

  /**
   * vertical.
   */
  vertical?: boolean;

  /**
   * pills.
   */
  pills?: boolean;

  /**
   * fill.
   */
  fill?: boolean;

  /**
   * tabs.
   */
  tabs?: boolean;
} & BaseProps<T, NavVariablesType>;

type LinkProps<T extends ElementType> = {
  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * active.
   */
  active?: boolean;
} & BaseProps<T, NavLinkVariablesType>;

type TabPaneProps<T extends ElementType> = {
  /**
   * active.
   */
  active?: boolean;

  /**
   * fade.
   */
  fade?: boolean;
} & BaseProps<T, NavTabPaneVariablesType>;

type TabContentProps<T extends ElementType> = BaseProps<T, NavTabContentVariablesType> & {};

type ItemProps<T extends ElementType> = BaseProps<T, NavItemVariablesType> & {};
