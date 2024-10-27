```ts
type Props = {
  /**
   * as.
   */
  as?: 'span';

  /**
   * variant.
   */
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';

  /**
   * variantType.
   */
  variantType?: 'text' | 'bg';

  /**
   * rounded.
   */
  rounded?: keyof typeof RoundedClassEnum | boolean;
};
```
