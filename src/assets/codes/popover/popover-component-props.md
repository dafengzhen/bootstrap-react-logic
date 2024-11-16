```ts
type Props = {
  /**
   * arrowProps.
   */
  arrowProps?: PopoverArrowProps<'div'>;

  /**
   * body.
   */
  body?: ReactNode;

  /**
   * bodyProps.
   */
  bodyProps?: PopoverBodyProps<'div'>;

  /**
   * container.
   */
  container?: HTMLElement | string;

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
  headerProps?: PopoverHeaderProps<'div'>;

  /**
   * offset.
   */
  offset?:
    | {
        alignmentAxis?: null | number;
        crossAxis?: number;
        mainAxis?: number;
      }
    | number;

  /**
   * onChange.
   */
  onChange?: (visible: boolean, event?: MouseEvent<HTMLElement>) => void;

  /**
   * placement.
   */
  placement?: 'bottom' | 'end' | 'left' | 'right' | 'start' | 'top';

  /**
   * trigger.
   */
  trigger?: (
    setRef: RefCallback<HTMLElement>,
    getProps: (userProps?: HTMLProps<Element>) => Record<string, unknown>,
  ) => ReactNode;

  /**
   * triggerType.
   */
  triggerType?: 'focus' | 'hover' | ('focus' | 'hover')[];

  /**
   * visible.
   */
  visible?: boolean;
};
```
