import type { ElementType, MouseEvent, ReactNode } from 'react';

import type {
  BaseProps,
  NavItemVariablesType,
  NavLinkVariablesType,
  NavTabContentVariablesType,
  NavTabPaneVariablesType,
  NavVariablesType,
  OmittedPropsWithoutRef,
  PropsWithoutRef,
} from '../tools';

export type NavItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, NavItemVariablesType>;

export type NavLinkProps<T extends ElementType> = PropsWithoutRef<LinkProps<T>, T, NavLinkVariablesType>;

export interface NavOption {
  active?: boolean;
  disabled?: boolean;
  fade?: boolean;
  href?: string;
  id?: number | string;
  item?: ReactNode;
  itemProps?: NavItemProps<ElementType>;
  link?: ReactNode;
  linkProps?: NavLinkProps<ElementType>;
  pane?: ReactNode;
  paneProps?: NavTabPaneProps<ElementType>;
}

export type NavProps<T extends ElementType> = OmittedPropsWithoutRef<Props<T>, T, NavVariablesType, 'onChange'>;

export type NavTabContentProps<T extends ElementType> = PropsWithoutRef<
  TabContentProps<T>,
  T,
  NavTabContentVariablesType
>;

export type NavTabPaneProps<T extends ElementType> = PropsWithoutRef<TabPaneProps<T>, T, NavTabPaneVariablesType>;

type ItemProps<T extends ElementType> = BaseProps<T, NavItemVariablesType> & {};

type LinkProps<T extends ElementType> = BaseProps<T, NavLinkVariablesType> & {
  /**
   * active.
   */
  active?: boolean;

  /**
   * disabled.
   */
  disabled?: boolean;
};

type Props<T extends ElementType> = BaseProps<T, NavVariablesType> & {
  /**
   * contentProps.
   */
  contentProps?: NavTabContentProps<ElementType>;

  /**
   * fill.
   */
  fill?: boolean;

  /**
   * horizontal.
   */
  horizontal?: 'center' | 'end' | 'start';

  /**
   * justified.
   */
  justified?: boolean;

  /**
   * onChange.
   */
  onChange?: (id: number | string, event: MouseEvent<HTMLElement>) => void;

  /**
   * options.
   */
  options?: NavOption[];

  /**
   * pills.
   */
  pills?: boolean;

  /**
   * skipItem.
   */
  skipItem?: boolean;

  /**
   * tabs.
   */
  tabs?: boolean;

  /**
   * underline.
   */
  underline?: boolean;

  /**
   * vertical.
   */
  vertical?: boolean;
};

type TabContentProps<T extends ElementType> = BaseProps<T, NavTabContentVariablesType> & {};

type TabPaneProps<T extends ElementType> = BaseProps<T, NavTabPaneVariablesType> & {
  /**
   * active.
   */
  active?: boolean;

  /**
   * fade.
   */
  fade?: boolean;
};
