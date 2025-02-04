import type { ComponentRef, ElementType, ReactNode, RefCallback } from 'react';

import type {
  BaseProps,
  ModalBackdropVariablesType,
  ModalBodyVariablesType,
  ModalContentVariablesType,
  ModalDialogVariablesType,
  ModalFooterVariablesType,
  ModalHeaderVariablesType,
  ModalTitleVariablesType,
  ModalVariablesType,
  PropsWithoutRef,
} from '../tools';

export type ModalBackdropProps<T extends ElementType> = PropsWithoutRef<
  BackdropProps<T>,
  T,
  ModalBackdropVariablesType
>;

export type ModalBodyProps<T extends ElementType> = PropsWithoutRef<BodyProps<T>, T, ModalBodyVariablesType>;

export type ModalContentProps<T extends ElementType> = PropsWithoutRef<ContentProps<T>, T, ModalContentVariablesType>;

export type ModalDialogProps<T extends ElementType> = PropsWithoutRef<DialogProps<T>, T, ModalDialogVariablesType>;

export type ModalFooterProps<T extends ElementType> = PropsWithoutRef<FooterProps<T>, T, ModalFooterVariablesType>;

export type ModalHeaderProps<T extends ElementType> = PropsWithoutRef<HeaderProps<T>, T, ModalHeaderVariablesType>;

export type ModalProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, ModalVariablesType>;

export type ModalTitleProps<T extends ElementType> = PropsWithoutRef<TitleProps<T>, T, ModalTitleVariablesType>;

type BackdropProps<T extends ElementType> = BaseProps<T, ModalBackdropVariablesType> & {
  /**
   * toggle.
   */
  toggle?: boolean;

  /**
   * visible.
   */
  visible?: boolean;
};

type BodyProps<T extends ElementType> = BaseProps<T, ModalBodyVariablesType> & {};

type ContentProps<T extends ElementType> = BaseProps<T, ModalContentVariablesType> & {
  /**
   * onRef.
   */
  onRef?: RefCallback<ComponentRef<T>>;
};

type DialogProps<T extends ElementType> = BaseProps<T, ModalDialogVariablesType> & {
  /**
   * centered.
   */
  centered?: boolean;

  /**
   * fullscreen.
   */
  fullscreen?: 'lg' | 'md' | 'sm' | 'xl' | 'xxl' | boolean;

  /**
   * scrollable.
   */
  scrollable?: boolean;

  /**
   * size.
   */
  size?: 'lg' | 'sm' | 'xl';
};

type FooterProps<T extends ElementType> = BaseProps<T, ModalFooterVariablesType> & {};

type HeaderProps<T extends ElementType> = BaseProps<T, ModalHeaderVariablesType> & {};

type Props<T extends ElementType> = BaseProps<T, ModalVariablesType> & {
  /**
   * backdrop.
   */
  backdrop?: boolean;

  /**
   * backdropProps.
   */
  backdropProps?: BackdropProps<ElementType>;

  /**
   * body.
   */
  body?: ReactNode;

  /**
   * bodyProps.
   */
  bodyProps?: ModalBodyProps<ElementType>;

  /**
   * centered.
   */
  centered?: boolean;

  /**
   * container.
   */
  container?: HTMLElement | string;

  /**
   * contentProps.
   */
  contentProps?: ModalContentProps<ElementType>;

  /**
   * dialogProps.
   */
  dialogProps?: ModalDialogProps<ElementType>;

  /**
   * footer.
   */
  footer?: ReactNode;

  /**
   * footerProps.
   */
  footerProps?: ModalFooterProps<ElementType>;

  /**
   * fullscreen.
   */
  fullscreen?: 'lg' | 'md' | 'sm' | 'xl' | 'xxl' | boolean;

  /**
   * header.
   */
  header?: ReactNode;

  /**
   * headerProps.
   */
  headerProps?: ModalHeaderProps<ElementType>;

  /**
   * onVisibleChange.
   */
  onVisibleChange?: (visible: boolean) => void;

  /**
   * scrollable.
   */
  scrollable?: boolean;

  /**
   * size.
   */
  size?: 'lg' | 'sm' | 'xl';

  /**
   * static.
   */
  static?: boolean;

  /**
   * title.
   */
  title?: ReactNode;

  /**
   * titleProps.
   */
  titleProps?: ModalTitleProps<ElementType>;

  /**
   * toggle.
   */
  toggle?: boolean;

  /**
   * visible.
   */
  visible?: boolean;
};

type TitleProps<T extends ElementType> = BaseProps<T, ModalTitleVariablesType> & {};
