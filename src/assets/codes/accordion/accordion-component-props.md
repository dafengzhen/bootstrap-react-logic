```ts
interface IOption {
  id?: string | number;
  header?: string;
  body?: ReactNode;
  collapsed?: boolean;
  show?: boolean;
}

type Props = {
  /**
   * flush.
   */
  flush?: boolean;

  /**
   * alwaysOpen.
   */
  alwaysOpen?: boolean;

  /**
   * options.
   */
  options?: IOption[];

  /**
   * onChange.
   */
  onChange?: (id: string | number, visible: boolean) => void;

  /**
   * collapsing.
   */
  collapsing?: boolean;
};
```
