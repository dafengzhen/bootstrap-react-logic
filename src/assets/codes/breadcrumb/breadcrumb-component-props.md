```ts
export interface IOption {
  id?: string | number;
  title?: ReactNode;
  active?: boolean;
}

type Props = {
  /**
   * options.
   */
  options?: IOption[];

  /**
   * onClick.
   */
  onClick?: (id: string | number, event: MouseEvent<HTMLLIElement>) => void;
};
```
