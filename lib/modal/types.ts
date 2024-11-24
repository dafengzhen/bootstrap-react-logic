import type { ElementType, ReactNode } from 'react';

import type {
  ModalBackdropVariablesType,
  ModalContentVariablesType,
  ModalDialogVariablesType,
  ModalFooterVariablesType,
  ModalHeaderVariablesType,
  ModalTitleVariablesType,
  ModalBodyVariablesType,
  ModalVariablesType,
  PropsWithoutRef,
  BaseProps,
} from '../tools';

export type ModalBackdropProps<T extends ElementType> = PropsWithoutRef<
  BackdropProps<T>,
  T,
  ModalBackdropVariablesType
>;

export type ModalContentProps<T extends ElementType> = PropsWithoutRef<ContentProps<T>, T, ModalContentVariablesType>;

export type ModalDialogProps<T extends ElementType> = PropsWithoutRef<DialogProps<T>, T, ModalDialogVariablesType>;

export type ModalFooterProps<T extends ElementType> = PropsWithoutRef<FooterProps<T>, T, ModalFooterVariablesType>;

export type ModalHeaderProps<T extends ElementType> = PropsWithoutRef<HeaderProps<T>, T, ModalHeaderVariablesType>;

export type ModalTitleProps<T extends ElementType> = PropsWithoutRef<TitleProps<T>, T, ModalTitleVariablesType>;

export type ModalBodyProps<T extends ElementType> = PropsWithoutRef<BodyProps<T>, T, ModalBodyVariablesType>;

export type ModalProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, ModalVariablesType>;

type Props<T extends ElementType> = {
  /**
   * fullscreen.
   */
  fullscreen?: boolean | 'xxl' | 'lg' | 'md' | 'sm' | 'xl';

  /**
   * contentProps.
   */
  contentProps?: ModalContentProps<ElementType>;

  /**
   * onVisibleChange.
   */
  onVisibleChange?: (visible: boolean) => void;

  /**
   * dialogProps.
   */
  dialogProps?: ModalDialogProps<ElementType>;

  /**
   * footerProps.
   */
  footerProps?: ModalFooterProps<ElementType>;

  /**
   * headerProps.
   */
  headerProps?: ModalHeaderProps<ElementType>;

  /**
   * backdropProps.
   */
  backdropProps?: BackdropProps<ElementType>;

  /**
   * titleProps.
   */
  titleProps?: ModalTitleProps<ElementType>;

  /**
   * bodyProps.
   */
  bodyProps?: ModalBodyProps<ElementType>;

  /**
   * container.
   */
  container?: HTMLElement | string;

  /**
   * size.
   */
  size?: 'lg' | 'sm' | 'xl';

  /**
   * scrollable.
   */
  scrollable?: boolean;

  /**
   * centered.
   */
  centered?: boolean;

  /**
   * footer.
   */
  footer?: ReactNode;

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
   * static.
   */
  static?: boolean;

  /**
   * toggle.
   */
  toggle?: boolean;

  /**
   * fade.
   */
  fade?: boolean;
} & BaseProps<T, ModalVariablesType>;

type DialogProps<T extends ElementType> = {
  /**
   * fullscreen.
   */
  fullscreen?: boolean | 'xxl' | 'lg' | 'md' | 'sm' | 'xl';

  /**
   * size.
   */
  size?: 'lg' | 'sm' | 'xl';

  /**
   * scrollable.
   */
  scrollable?: boolean;

  /**
   * centered.
   */
  centered?: boolean;
} & BaseProps<T, ModalDialogVariablesType>;

type BackdropProps<T extends ElementType> = {
  /**
   * visible.
   */
  visible?: boolean;

  /**
   * toggle.
   */
  toggle?: boolean;

  /**
   * fade.
   */
  fade?: boolean;
} & BaseProps<T, ModalBackdropVariablesType>;

type ContentProps<T extends ElementType> = BaseProps<T, ModalContentVariablesType> & {};

type FooterProps<T extends ElementType> = BaseProps<T, ModalFooterVariablesType> & {};

type HeaderProps<T extends ElementType> = BaseProps<T, ModalHeaderVariablesType> & {};

type TitleProps<T extends ElementType> = BaseProps<T, ModalTitleVariablesType> & {};

type BodyProps<T extends ElementType> = BaseProps<T, ModalBodyVariablesType> & {};
