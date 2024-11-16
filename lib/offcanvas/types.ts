import type { ElementType, MouseEvent, ReactNode } from 'react';

import type {
  BaseProps,
  OffcanvasBackdropVariablesType,
  OffcanvasBodyVariablesType,
  OffcanvasHeaderVariablesType,
  OffcanvasTitleVariablesType,
  OffcanvasVariablesType,
  OmittedPropsWithoutRef,
  PropsWithoutRef,
} from '../tools';

type Props<T extends ElementType> = {
  /**
   * backdrop.
   */
  backdrop?: 'static' | boolean;

  /**
   * body.
   */
  body?: ReactNode;

  /**
   * bodyProps.
   */
  bodyProps?: OffcanvasBodyProps<ElementType>;

  /**
   * fade.
   */
  fade?: boolean;

  /**
   * header.
   */
  header?: ReactNode;

  /**
   * headerProps.
   */
  headerProps?: OffcanvasHeaderProps<ElementType>;

  /**
   * onChange.
   */
  onChange?: (visible: boolean, event: MouseEvent<HTMLElement>) => void;

  /**
   * placement.
   */
  placement?: 'bottom' | 'end' | 'start' | 'top';

  /**
   * responsive.
   */
  responsive?: 'lg' | 'md' | 'sm' | 'xl' | 'xxl';

  /**
   * scroll.
   */
  scroll?: boolean;

  /**
   * title.
   */
  title?: ReactNode;

  /**
   * titleProps.
   */
  titleProps?: OffcanvasTitleProps<ElementType>;

  /**
   * visible.
   */
  visible?: boolean;
} & BaseProps<T, OffcanvasVariablesType>;

type HeaderProps<T extends ElementType> = {} & BaseProps<T, OffcanvasHeaderVariablesType>;

type TitleProps<T extends ElementType> = {} & BaseProps<T, OffcanvasTitleVariablesType>;

type BodyProps<T extends ElementType> = {} & BaseProps<T, OffcanvasBodyVariablesType>;

type BackdropProps<T extends ElementType> = {
  /**
   * backdrop.
   */
  backdrop?: 'static' | boolean;

  /**
   * fade.
   */
  fade?: boolean;

  /**
   * onChange.
   */
  onChange?: (visible: boolean, event: MouseEvent<HTMLElement>) => void;

  /**
   * scroll.
   */
  scroll?: boolean;

  /**
   * visible.
   */
  visible?: boolean;
} & BaseProps<T, OffcanvasBackdropVariablesType>;

export type OffcanvasProps<T extends ElementType> = OmittedPropsWithoutRef<
  Props<T>,
  T,
  OffcanvasVariablesType,
  'onChange'
>;

export type OffcanvasHeaderProps<T extends ElementType> = PropsWithoutRef<
  HeaderProps<T>,
  T,
  OffcanvasHeaderVariablesType
>;

export type OffcanvasTitleProps<T extends ElementType> = PropsWithoutRef<TitleProps<T>, T, OffcanvasTitleVariablesType>;

export type OffcanvasBodyProps<T extends ElementType> = PropsWithoutRef<BodyProps<T>, T, OffcanvasBodyVariablesType>;

export type OffcanvasBackdropProps<T extends ElementType> = OmittedPropsWithoutRef<
  BackdropProps<T>,
  T,
  OffcanvasBackdropVariablesType,
  'onChange'
>;