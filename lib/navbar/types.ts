import type { ElementType, ReactNode } from 'react';

import type {
  BaseProps,
  NavbarBrandVariablesType,
  NavbarCollapseVariablesType,
  NavbarContainerVariablesType,
  NavbarNavItemVariablesType,
  NavbarNavLinkVariablesType,
  NavbarNavVariablesType,
  NavbarTextVariablesType,
  NavbarTogglerIconVariablesType,
  NavbarTogglerVariablesType,
  NavbarVariablesType,
  PropsWithoutRef,
} from '../tools';

type Props<T extends ElementType> = {
  /**
   * brand.
   */
  brand?: ReactNode;

  /**
   * brandPosition.
   */
  brandPosition?: 'hidden' | 'left' | 'right';

  /**
   * brandProps.
   */
  brandProps?: NavbarBrandProps<ElementType>;

  /**
   * collapse.
   */
  collapse?: ReactNode;

  /**
   * collapseProps.
   */
  collapseProps?: NavbarCollapseProps<ElementType>;

  /**
   * container.
   */
  container?: ReactNode;

  /**
   * containerProps.
   */
  containerProps?: NavbarContainerProps<ElementType>;

  /**
   * expand,
   */
  expand?: 'lg' | 'md' | 'sm' | 'xl' | 'xxl' | boolean;

  /**
   * externalContent.
   */
  externalContent?: ReactNode;

  /**
   * fixed.
   */
  fixed?: 'bottom' | 'top';

  /**
   * nav.
   */
  nav?: ReactNode;

  /**
   * navProps.
   */
  navProps?: NavbarNavProps<ElementType>;

  /**
   * options.
   */
  options?: NavbarOption[];

  /**
   * scroll.
   */
  scroll?: boolean;

  /**
   * skipItem.
   */
  skipItem?: boolean;

  /**
   * sticky.
   */
  sticky?: 'bottom' | 'top';

  /**
   * text.
   */
  text?: ReactNode;

  /**
   * togglerIconProps.
   */
  textProps?: NavbarTextProps<ElementType>;

  /**
   * toggler.
   */
  toggler?: ReactNode;

  /**
   * togglerIconProps.
   */
  togglerIconProps?: NavbarTogglerIconProps<ElementType>;

  /**
   * togglerProps.
   */
  togglerProps?: NavbarTogglerProps<ElementType>;
} & BaseProps<T, NavbarVariablesType>;

type ContainerProps<T extends ElementType> = {} & BaseProps<T, NavbarContainerVariablesType>;

type TextProps<T extends ElementType> = {} & BaseProps<T, NavbarTextVariablesType>;

type BrandProps<T extends ElementType> = {} & BaseProps<T, NavbarBrandVariablesType>;

type TogglerProps<T extends ElementType> = {} & BaseProps<T, NavbarTogglerVariablesType>;

type TogglerIconProps<T extends ElementType> = {} & BaseProps<T, NavbarTogglerIconVariablesType>;

type CollapseProps<T extends ElementType> = {} & BaseProps<T, NavbarCollapseVariablesType>;

type NavProps<T extends ElementType> = {
  /**
   * scroll.
   */
  scroll?: boolean;
} & BaseProps<T, NavbarNavVariablesType>;

type NavItemProps<T extends ElementType> = {} & BaseProps<T, NavbarNavItemVariablesType>;

type NavLinkProps<T extends ElementType> = {
  /**
   * active.
   */
  active?: boolean;

  /**
   * disabled.
   */
  disabled?: boolean;
} & BaseProps<T, NavbarNavLinkVariablesType>;

export interface NavbarOption {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  id?: number | string;
  item?: ReactNode;
  itemProps?: NavbarNavItemProps<ElementType>;
  link?: ReactNode;
  linkProps?: NavbarNavLinkProps<ElementType>;
}

export type NavbarProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, NavbarVariablesType>;

export type NavbarContainerProps<T extends ElementType> = PropsWithoutRef<
  ContainerProps<T>,
  T,
  NavbarContainerVariablesType
>;

export type NavbarTextProps<T extends ElementType> = PropsWithoutRef<TextProps<T>, T, NavbarTextVariablesType>;

export type NavbarBrandProps<T extends ElementType> = PropsWithoutRef<BrandProps<T>, T, NavbarBrandVariablesType>;

export type NavbarTogglerProps<T extends ElementType> = PropsWithoutRef<TogglerProps<T>, T, NavbarTogglerVariablesType>;

export type NavbarTogglerIconProps<T extends ElementType> = PropsWithoutRef<
  TogglerIconProps<T>,
  T,
  NavbarTogglerIconVariablesType
>;

export type NavbarCollapseProps<T extends ElementType> = PropsWithoutRef<
  CollapseProps<T>,
  T,
  NavbarCollapseVariablesType
>;

export type NavbarNavProps<T extends ElementType> = PropsWithoutRef<NavProps<T>, T, NavbarNavVariablesType>;

export type NavbarNavItemProps<T extends ElementType> = PropsWithoutRef<NavItemProps<T>, T, NavbarNavItemVariablesType>;

export type NavbarNavLinkProps<T extends ElementType> = PropsWithoutRef<NavLinkProps<T>, T, NavbarNavLinkVariablesType>;
