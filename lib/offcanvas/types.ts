import type { ElementType, MouseEvent, ReactNode } from 'react';

import type {
  OffcanvasBackdropVariablesType,
  OffcanvasHeaderVariablesType,
  OffcanvasTitleVariablesType,
  OffcanvasBodyVariablesType,
  OffcanvasVariablesType,
  OmittedPropsWithoutRef,
  PropsWithoutRef,
  BaseProps,
} from '../tools';

export type OffcanvasBackdropProps<T extends ElementType> = OmittedPropsWithoutRef<
  BackdropProps<T>,
  T,
  OffcanvasBackdropVariablesType,
  'onChange'
>;

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

type Props<T extends ElementType> = {
  /**
   * onChange.
   */
  onChange?: (visible: boolean, event: MouseEvent<HTMLElement>) => void;

  /**
   * headerProps.
   */
  headerProps?: OffcanvasHeaderProps<ElementType>;

  /**
   * placement.
   */
  placement?: 'bottom' | 'start' | 'end' | 'top';

  /**
   * responsive.
   */
  responsive?: 'xxl' | 'lg' | 'md' | 'sm' | 'xl';

  /**
   * titleProps.
   */
  titleProps?: OffcanvasTitleProps<ElementType>;

  /**
   * bodyProps.
   */
  bodyProps?: OffcanvasBodyProps<ElementType>;

  /**
   * backdrop.
   */
  backdrop?: 'static' | boolean;

  /**
   * header.
   */
  header?: ReactNode;

  /**
   * title.
   */
  title?: ReactNode;

  /**
   * visible.
   */
  visible?: boolean;

  /**
   * body.
   */
  body?: ReactNode;

  /**
   * scroll.
   */
  scroll?: boolean;

  /**
   * fade.
   */
  fade?: boolean;
} & BaseProps<T, OffcanvasVariablesType>;

type BackdropProps<T extends ElementType> = {
  /**
   * onChange.
   */
  onChange?: (visible: boolean, event: MouseEvent<HTMLElement>) => void;

  /**
   * backdrop.
   */
  backdrop?: 'static' | boolean;

  /**
   * visible.
   */
  visible?: boolean;

  /**
   * scroll.
   */
  scroll?: boolean;

  /**
   * fade.
   */
  fade?: boolean;
} & BaseProps<T, OffcanvasBackdropVariablesType>;

type HeaderProps<T extends ElementType> = BaseProps<T, OffcanvasHeaderVariablesType> & {};

type TitleProps<T extends ElementType> = BaseProps<T, OffcanvasTitleVariablesType> & {};

type BodyProps<T extends ElementType> = BaseProps<T, OffcanvasBodyVariablesType> & {};
