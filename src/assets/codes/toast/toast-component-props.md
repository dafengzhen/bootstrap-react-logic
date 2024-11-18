```ts
interface IOption {
  autohide?: boolean;
  body?: ReactNode;
  bodyProps?: ToastBodyProps<ElementType>;
  customContent?: ReactNode;
  delay?: number;
  fade?: boolean;
  header?: ReactNode;
  headerProps?: ToastHeaderProps<ElementType>;
  onChange?: (visible: boolean, event?: MouseEvent<HTMLElement>) => void;
  visible?: boolean;
}

type Props = {
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
  options?: IOption[];

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
```
