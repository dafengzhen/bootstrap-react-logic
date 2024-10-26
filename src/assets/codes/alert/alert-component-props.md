```ts
type Props = {
  /**
   * variant.
   */
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';

  /**
   * onClose.
   */
  onClose?: (close?: () => void) => void;

  /**
   * clickToClose.
   */
  clickToClose?: boolean;

  /**
   * dismissible.
   */
  dismissible?: boolean;

  /**
   * fade.
   */
  fade?: boolean;

  /**
   * closeButton.
   */
  closeButton?: ({ close }: { close: () => void }) => ReactNode;

  /**
   * closeButtonProps.
   */
  closeButtonProps?: ButtonProps<'button'>;

  /**
   * visible.
   */
  visible?: boolean;
};
```
