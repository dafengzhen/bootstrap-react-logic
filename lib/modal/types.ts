import type { ElementType, ReactNode } from 'react';
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

type Props<T extends ElementType> = BaseProps<T, ModalVariablesType> & {
  /**
   * header.
   */
  header?: ReactNode;

  /**
   * footer.
   */
  footer?: ReactNode;

  /**
   * title.
   */
  title?: ReactNode;

  /**
   * body.
   */
  body?: ReactNode;

  /**
   * fade.
   */
  fade?: boolean;

  /**
   * visible.
   */
  visible?: boolean;

  /**
   * container.
   */
  container?: HTMLElement | string;

  /**
   * static.
   */
  static?: boolean;

  /**
   * onVisibleChange.
   */
  onVisibleChange?: (visible: boolean) => void;

  /**
   * titleProps.
   */
  titleProps?: ModalTitleProps<ElementType>;

  /**
   * bodyProps.
   */
  bodyProps?: ModalBodyProps<ElementType>;

  /**
   * contentProps.
   */
  contentProps?: ModalContentProps<ElementType>;

  /**
   * backdropProps.
   */
  backdropProps?: BackdropProps<ElementType>;

  /**
   * headerProps.
   */
  headerProps?: ModalHeaderProps<ElementType>;

  /**
   * footerProps.
   */
  footerProps?: ModalFooterProps<ElementType>;

  /**
   * dialogProps.
   */
  dialogProps?: ModalDialogProps<ElementType>;

  /**
   * scrollable.
   */
  scrollable?: boolean;

  /**
   * centered.
   */
  centered?: boolean;

  /**
   * toggle.
   */
  toggle?: boolean;

  /**
   * size.
   */
  size?: 'sm' | 'lg' | 'xl';

  /**
   * fullscreen.
   */
  fullscreen?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

type DialogProps<T extends ElementType> = BaseProps<T, ModalDialogVariablesType> & {
  /**
   * scrollable.
   */
  scrollable?: boolean;

  /**
   * centered.
   */
  centered?: boolean;

  /**
   * size.
   */
  size?: 'sm' | 'lg' | 'xl';

  /**
   * fullscreen.
   */
  fullscreen?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

type ContentProps<T extends ElementType> = BaseProps<T, ModalContentVariablesType> & {};

type HeaderProps<T extends ElementType> = BaseProps<T, ModalHeaderVariablesType> & {};

type FooterProps<T extends ElementType> = BaseProps<T, ModalFooterVariablesType> & {};

type TitleProps<T extends ElementType> = BaseProps<T, ModalTitleVariablesType> & {};

type BodyProps<T extends ElementType> = BaseProps<T, ModalBodyVariablesType> & {};

type BackdropProps<T extends ElementType> = BaseProps<T, ModalBackdropVariablesType> & {
  /**
   * fade.
   */
  fade?: boolean;

  /**
   * visible.
   */
  visible?: boolean;

  /**
   * toggle.
   */
  toggle?: boolean;
};

export type ModalProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, ModalVariablesType>;

export type ModalDialogProps<T extends ElementType> = PropsWithoutRef<DialogProps<T>, T, ModalDialogVariablesType>;

export type ModalContentProps<T extends ElementType> = PropsWithoutRef<ContentProps<T>, T, ModalContentVariablesType>;

export type ModalHeaderProps<T extends ElementType> = PropsWithoutRef<HeaderProps<T>, T, ModalHeaderVariablesType>;

export type ModalFooterProps<T extends ElementType> = PropsWithoutRef<FooterProps<T>, T, ModalFooterVariablesType>;

export type ModalTitleProps<T extends ElementType> = PropsWithoutRef<TitleProps<T>, T, ModalTitleVariablesType>;

export type ModalBodyProps<T extends ElementType> = PropsWithoutRef<BodyProps<T>, T, ModalBodyVariablesType>;

export type ModalBackdropProps<T extends ElementType> = PropsWithoutRef<
  BackdropProps<T>,
  T,
  ModalBackdropVariablesType
>;
