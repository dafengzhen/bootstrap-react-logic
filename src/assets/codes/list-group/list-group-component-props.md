```ts
type VariantType = {
  primary?: string;
  secondary?: string;
  success?: string;
  info?: string;
  warning?: string;
  danger?: string;
  light?: string;
  dark?: string;
  link?: string;
};

interface IOption {
  id?: string | number;
  item?: ReactNode;
  active?: boolean;
  disabled?: boolean;
  props?: ListGroupItemProps<ElementType>;
  flexFill?: boolean;
  variant?: keyof VariantType;
  itemAction?: boolean;
}

type Props = {
  /**
   * options.
   */
  options?: IOption[];

  /**
   * flush.
   */
  flush?: boolean;

  /**
   * numbered.
   */
  numbered?: boolean;

  /**
   * horizontal.
   */
  horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

  /**
   * itemAction.
   */
  itemAction?: boolean;
};
```
