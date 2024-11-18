```ts
type Props = {
  /**
   * arrowProps.
   */
  arrowProps?: TooltipArrowProps<'div'>;

  /**
   * container.
   */
  container?: HTMLElement | string;

  /**
   * fade.
   */
  fade?: boolean;

  /**
   * html.
   */
  html?: string;

  /**
   * inner.
   */
  inner?: ReactNode;

  /**
   * innerProps.
   */
  innerProps?: TooltipInnerProps<'div'>;

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
  onChange?: (visible: boolean) => void;

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
   * triggerWrapper.
   */
  triggerWrapper?: boolean;

  /**
   * visible.
   */
  visible?: boolean;
};
```
