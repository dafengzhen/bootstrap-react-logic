```ts
type Props = {
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
  titleProps?: ModalTitleProps<'div'>;

  /**
   * bodyProps.
   */
  bodyProps?: ModalBodyProps<'div'>;

  /**
   * contentProps.
   */
  contentProps?: ModalContentProps<'div'>;

  /**
   * backdropProps.
   */
  backdropProps?: BackdropProps<'div'>;

  /**
   * headerProps.
   */
  headerProps?: ModalHeaderProps<'div'>;

  /**
   * footerProps.
   */
  footerProps?: ModalFooterProps<'div'>;

  /**
   * dialogProps.
   */
  dialogProps?: ModalDialogProps<'div'>;

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
```
