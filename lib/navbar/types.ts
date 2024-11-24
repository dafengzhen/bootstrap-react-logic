import type { ElementType, ReactNode } from 'react';

import type {
  NavbarTogglerIconVariablesType,
  NavbarContainerVariablesType,
  NavbarCollapseVariablesType,
  NavbarNavItemVariablesType,
  NavbarNavLinkVariablesType,
  NavbarTogglerVariablesType,
  NavbarBrandVariablesType,
  NavbarTextVariablesType,
  NavbarNavVariablesType,
  NavbarVariablesType,
  PropsWithoutRef,
  BaseProps,
} from '../tools';

export interface NavbarOption {
  itemProps?: NavbarNavItemProps<ElementType>;
  linkProps?: NavbarNavLinkProps<ElementType>;
  id?: number | string;
  disabled?: boolean;
  active?: boolean;
  item?: ReactNode;
  link?: ReactNode;
  href?: string;
}

export type NavbarTogglerIconProps<T extends ElementType> = PropsWithoutRef<
  TogglerIconProps<T>,
  T,
  NavbarTogglerIconVariablesType
>;

export type NavbarContainerProps<T extends ElementType> = PropsWithoutRef<
  ContainerProps<T>,
  T,
  NavbarContainerVariablesType
>;

export type NavbarCollapseProps<T extends ElementType> = PropsWithoutRef<
  CollapseProps<T>,
  T,
  NavbarCollapseVariablesType
>;

export type NavbarNavItemProps<T extends ElementType> = PropsWithoutRef<NavItemProps<T>, T, NavbarNavItemVariablesType>;

export type NavbarNavLinkProps<T extends ElementType> = PropsWithoutRef<NavLinkProps<T>, T, NavbarNavLinkVariablesType>;

export type NavbarTogglerProps<T extends ElementType> = PropsWithoutRef<TogglerProps<T>, T, NavbarTogglerVariablesType>;

export type NavbarBrandProps<T extends ElementType> = PropsWithoutRef<BrandProps<T>, T, NavbarBrandVariablesType>;

export type NavbarTextProps<T extends ElementType> = PropsWithoutRef<TextProps<T>, T, NavbarTextVariablesType>;

export type NavbarNavProps<T extends ElementType> = PropsWithoutRef<NavProps<T>, T, NavbarNavVariablesType>;

export type NavbarProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, NavbarVariablesType>;

type Props<T extends ElementType> = {
  /**
   * togglerIconProps.
   */
  togglerIconProps?: NavbarTogglerIconProps<ElementType>;

  /**
   * expand,
   */
  expand?: boolean | 'xxl' | 'lg' | 'md' | 'sm' | 'xl';

  /**
   * containerProps.
   */
  containerProps?: NavbarContainerProps<ElementType>;

  /**
   * collapseProps.
   */
  collapseProps?: NavbarCollapseProps<ElementType>;

  /**
   * togglerProps.
   */
  togglerProps?: NavbarTogglerProps<ElementType>;

  /**
   * brandPosition.
   */
  brandPosition?: 'hidden' | 'right' | 'left';

  /**
   * brandProps.
   */
  brandProps?: NavbarBrandProps<ElementType>;

  /**
   * togglerIconProps.
   */
  textProps?: NavbarTextProps<ElementType>;

  /**
   * navProps.
   */
  navProps?: NavbarNavProps<ElementType>;

  /**
   * externalContent.
   */
  externalContent?: ReactNode;

  /**
   * sticky.
   */
  sticky?: 'bottom' | 'top';

  /**
   * fixed.
   */
  fixed?: 'bottom' | 'top';

  /**
   * options.
   */
  options?: NavbarOption[];

  /**
   * container.
   */
  container?: ReactNode;

  /**
   * collapse.
   */
  collapse?: ReactNode;

  /**
   * toggler.
   */
  toggler?: ReactNode;

  /**
   * skipItem.
   */
  skipItem?: boolean;

  /**
   * brand.
   */
  brand?: ReactNode;

  /**
   * scroll.
   */
  scroll?: boolean;

  /**
   * text.
   */
  text?: ReactNode;

  /**
   * nav.
   */
  nav?: ReactNode;
} & BaseProps<T, NavbarVariablesType>;

type NavLinkProps<T extends ElementType> = {
  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * active.
   */
  active?: boolean;
} & BaseProps<T, NavbarNavLinkVariablesType>;

type NavProps<T extends ElementType> = {
  /**
   * scroll.
   */
  scroll?: boolean;
} & BaseProps<T, NavbarNavVariablesType>;

type TogglerIconProps<T extends ElementType> = BaseProps<T, NavbarTogglerIconVariablesType> & {};

type ContainerProps<T extends ElementType> = BaseProps<T, NavbarContainerVariablesType> & {};

type CollapseProps<T extends ElementType> = BaseProps<T, NavbarCollapseVariablesType> & {};

type NavItemProps<T extends ElementType> = BaseProps<T, NavbarNavItemVariablesType> & {};

type TogglerProps<T extends ElementType> = BaseProps<T, NavbarTogglerVariablesType> & {};

type BrandProps<T extends ElementType> = BaseProps<T, NavbarBrandVariablesType> & {};

type TextProps<T extends ElementType> = BaseProps<T, NavbarTextVariablesType> & {};
