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

export type ToastBodyProps<T extends ElementType> = PropsWithoutRef<BodyProps<T>, T, ToastBodyVariablesType>;

export type ToastContainerProps<T extends ElementType> = PropsWithoutRef<
  ContainerProps<T>,
  T,
  ToastContainerVariablesType
>;

export type ToastHeaderProps<T extends ElementType> = PropsWithoutRef<HeaderProps<T>, T, ToastHeaderVariablesType>;

export type ToastItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, ToastItemVariablesType>;

export interface ToastOption
  extends Omit<ToastProps<ElementType>, 'container' | 'containerProps' | 'options' | 'position'> {
  id?: number | string;
}

export type ToastProps<T extends ElementType> = OmittedPropsWithoutRef<Props<T>, T, ToastVariablesType, 'onChange'>;

type BodyProps<T extends ElementType> = BaseProps<T, ToastBodyVariablesType> & {};

type ContainerProps<T extends ElementType> = BaseProps<T, ToastContainerVariablesType> & {
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
};

type HeaderProps<T extends ElementType> = BaseProps<T, ToastHeaderVariablesType> & {};

type ItemProps<T extends ElementType> = BaseProps<T, ToastItemVariablesType> & Props<T> & {};

type Props<T extends ElementType> = BaseProps<T, ToastVariablesType> & {
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
};
