```ts
type SlotValueKeys = 'container' | 'start' | 'end' | 'component';

type Props = {
  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * nativeSize.
   */
  nativeSize?: number | undefined;

  /**
   * readonlyPlainText.
   */
  readonlyPlainText?: boolean;

  /**
   * isValid.
   */
  isValid?: boolean;

  /**
   * isInvalid,
   */
  isInvalid?: boolean;

  /**
   * color
   */
  color?: boolean;

  /**
   * nativeColor.
   */
  nativeColor?: string | undefined;

  /**
   * startContent.
   */
  startContent?: ReactNode;

  /**
   * endContent.
   */
  endContent?: ReactNode;

  /**
   * startEndContentClasses.
   */
  startEndContentClasses?: Partial<Record<SlotValueKeys, SlotValue>>;

  /**
   * onRef.
   */
  onRef?: LegacyRef<ElementRef<T>>;
};
```
