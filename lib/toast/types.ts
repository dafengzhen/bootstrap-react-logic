import type { ElementType, MouseEvent, ReactNode } from 'react';

import type {
  ToastContainerVariablesType,
  ToastHeaderVariablesType,
  OmittedPropsWithoutRef,
  ToastBodyVariablesType,
  ToastItemVariablesType,
  ToastVariablesType,
  PropsWithoutRef,
  BaseProps,
} from '../tools';

export interface ToastOption
  extends Omit<ToastProps<ElementType>, 'containerProps' | 'container' | 'position' | 'options'> {
  id?: number | string;
}

export type ToastContainerProps<T extends ElementType> = PropsWithoutRef<
  ContainerProps<T>,
  T,
  ToastContainerVariablesType
>;

export type ToastProps<T extends ElementType> = OmittedPropsWithoutRef<Props<T>, T, ToastVariablesType, 'onChange'>;

export type ToastHeaderProps<T extends ElementType> = PropsWithoutRef<HeaderProps<T>, T, ToastHeaderVariablesType>;

export type ToastBodyProps<T extends ElementType> = PropsWithoutRef<BodyProps<T>, T, ToastBodyVariablesType>;

export type ToastItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, ToastItemVariablesType>;

type Props<T extends ElementType> = {
  /**
   * placement.
   */
  placement?:
    | 'bottom-center'
    | 'middle-center'
    | 'bottom-start'
    | 'middle-right'
    | 'middle-left'
    | 'bottom-end'
    | 'top-center'
    | 'top-start'
    | 'top-end';

  /**
   * onChange.
   */
  onChange?: (visible: boolean, event?: MouseEvent<HTMLElement>) => void;

  /**
   * containerProps.
   */
  containerProps?: ToastContainerProps<ElementType>;

  /**
   * headerProps.
   */
  headerProps?: ToastHeaderProps<ElementType>;

  /**
   * bodyProps.
   */
  bodyProps?: ToastBodyProps<ElementType>;

  /**
   * position.
   */
  position?: 'static' | 'fixed';

  /**
   * customContent.
   */
  customContent?: ReactNode;

  /**
   * options.
   */
  options?: ToastOption[];

  /**
   * container.
   */
  container?: boolean;

  /**
   * autohide.
   */
  autohide?: boolean;

  /**
   * header.
   */
  header?: ReactNode;

  /**
   * visible.
   */
  visible?: boolean;

  /**
   * body.
   */
  body?: ReactNode;

  /**
   * delay.
   */
  delay?: number;

  /**
   * fade.
   */
  fade?: boolean;
} & BaseProps<T, ToastVariablesType>;

type ContainerProps<T extends ElementType> = {
  /**
   * placement.
   */
  placement?:
    | 'bottom-center'
    | 'middle-center'
    | 'bottom-start'
    | 'middle-right'
    | 'middle-left'
    | 'bottom-end'
    | 'top-center'
    | 'top-start'
    | 'top-end';

  /**
   * position.
   */
  position?: 'static' | 'fixed';
} & BaseProps<T, ToastContainerVariablesType>;

type ItemProps<T extends ElementType> = BaseProps<T, ToastItemVariablesType> & Props<T> & {};

type HeaderProps<T extends ElementType> = BaseProps<T, ToastHeaderVariablesType> & {};

type BodyProps<T extends ElementType> = BaseProps<T, ToastBodyVariablesType> & {};
