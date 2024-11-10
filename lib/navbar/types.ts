import type { ElementType } from 'react';

import type {
  BaseProps,
  NavbarBrandVariablesType,
  NavbarCollapseVariablesType,
  NavbarContainerVariablesType,
  NavbarNavItemVariablesType,
  NavbarNavLinkVariablesType,
  NavbarNavVariablesType,
  NavbarTogglerIconVariablesType,
  NavbarTogglerVariablesType,
  NavbarVariablesType,
  PropsWithoutRef,
} from '../tools';

type Props<T extends ElementType> = {
  /**
   * container.
   */
  container?: 'fluid' | boolean;

  /**
   * expand,
   */
  expand?: 'lg' | 'md' | 'sm' | 'xl' | 'xxl' | boolean;
} & BaseProps<T, NavbarVariablesType>;

type ContainerProps<T extends ElementType> = {
  /**
   * container.
   */
  container?: 'fluid' | boolean;
} & BaseProps<T, NavbarContainerVariablesType>;

type BrandProps<T extends ElementType> = {} & BaseProps<T, NavbarBrandVariablesType>;

type TogglerProps<T extends ElementType> = {} & BaseProps<T, NavbarTogglerVariablesType>;

type TogglerIconProps<T extends ElementType> = {} & BaseProps<T, NavbarTogglerIconVariablesType>;

type CollapseProps<T extends ElementType> = {} & BaseProps<T, NavbarCollapseVariablesType>;

type NavProps<T extends ElementType> = {} & BaseProps<T, NavbarNavVariablesType>;

type NavItemProps<T extends ElementType> = {} & BaseProps<T, NavbarNavItemVariablesType>;

type NavLinkProps<T extends ElementType> = {} & BaseProps<T, NavbarNavLinkVariablesType>;

export type NavbarProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, NavbarVariablesType>;

export type NavbarContainerProps<T extends ElementType> = PropsWithoutRef<
  ContainerProps<T>,
  T,
  NavbarContainerVariablesType
>;

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
