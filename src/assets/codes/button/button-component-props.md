```ts
type Props = {
  /**
   * as.
   */
  as?: 'button' | 'a';

  /**
   * variant.
   */
  variant?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';

  /**
   * outline.
   */
  outline?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';

  /**
   * rounded.
   */
  rounded?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'circle' | 'pill' | boolean;

  /**
   * size.
   */
  size?: 'lg' | 'sm';

  /**
   * active.
   */
  active?: boolean;

  /**
   * show.
   */
  show?: boolean;

  /**
   * isLoading.
   */
  isLoading?: boolean;

  /**
   * startContent.
   */
  startContent?: ReactNode;

  /**
   * endContent.
   */
  endContent?: ReactNode;

  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * btnClose.
   */
  btnClose?: boolean;

  /**
   * onRef.
   */
  onRef?: RefCallback;
};
```
