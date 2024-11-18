import type { ElementType, MouseEvent, ReactNode } from 'react';

import type {
  BaseProps,
  OmittedPropsWithoutRef,
  PropsWithoutRef,
  ToastBodyVariablesType,
  ToastContainerVariablesType,
  ToastHeaderVariablesType,
  ToastItemVariablesType,
  ToastVariablesType,
} from '../tools';

type Props<T extends ElementType> = {
  /**
   * autohide.
   */
  autohide?: boolean;

  /**
   * body.
   */
  body?: ReactNode;

  /**
   * bodyProps.
   */
  bodyProps?: ToastBodyProps<ElementType>;

  /**
   * container.
   */
  container?: boolean;

  /**
   * containerProps.
   */
  containerProps?: ToastContainerProps<ElementType>;

  /**
   * customContent.
   */
  customContent?: ReactNode;

  /**
   * delay.
   */
  delay?: number;

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
  headerProps?: ToastHeaderProps<ElementType>;

  /**
   * onChange.
   */
  onChange?: (visible: boolean, event?: MouseEvent<HTMLElement>) => void;

  /**
   * options.
   */
  options?: ToastOption[];

  /**
   * placement.
   */
  placement?:
    | 'bottom-center'
    | 'bottom-end'
    | 'bottom-start'
    | 'middle-center'
    | 'middle-left'
    | 'middle-right'
    | 'top-center'
    | 'top-end'
    | 'top-start';

  /**
   * position.
   */
  position?: 'fixed' | 'static';

  /**
   * visible.
   */
  visible?: boolean;
} & BaseProps<T, ToastVariablesType>;

type HeaderProps<T extends ElementType> = {} & BaseProps<T, ToastHeaderVariablesType>;

type BodyProps<T extends ElementType> = {} & BaseProps<T, ToastBodyVariablesType>;

type ContainerProps<T extends ElementType> = {
  /**
   * placement.
   */
  placement?:
    | 'bottom-center'
    | 'bottom-end'
    | 'bottom-start'
    | 'middle-center'
    | 'middle-left'
    | 'middle-right'
    | 'top-center'
    | 'top-end'
    | 'top-start';

  /**
   * position.
   */
  position?: 'fixed' | 'static';
} & BaseProps<T, ToastContainerVariablesType>;

type ItemProps<T extends ElementType> = {} & BaseProps<T, ToastItemVariablesType> & Props<T>;

export interface ToastOption
  extends Omit<ToastProps<ElementType>, 'container' | 'containerProps' | 'options' | 'position'> {
  id?: number | string;
}

export type ToastProps<T extends ElementType> = OmittedPropsWithoutRef<Props<T>, T, ToastVariablesType, 'onChange'>;

export type ToastHeaderProps<T extends ElementType> = PropsWithoutRef<HeaderProps<T>, T, ToastHeaderVariablesType>;

export type ToastBodyProps<T extends ElementType> = PropsWithoutRef<BodyProps<T>, T, ToastBodyVariablesType>;

export type ToastContainerProps<T extends ElementType> = PropsWithoutRef<
  ContainerProps<T>,
  T,
  ToastContainerVariablesType
>;

export type ToastItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, ToastItemVariablesType>;
