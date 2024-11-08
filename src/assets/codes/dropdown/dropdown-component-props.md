```ts
interface IOption {
  id?: string | number;
  item?: ReactNode;
  itemText?: ReactNode;
  href?: string;
  divider?: boolean;
  active?: boolean;
  as?: 'button' | 'a';
  disabled?: boolean;
  header?: ReactNode;
}

type Props = {
  /**
   * options.
   */
  options?: IOption[];

  /**
   * toggle.
   */
  toggle?: ReactNode;

  /**
   * toggleProps.
   */
  toggleProps?: ButtonProps<'button' | 'a'>;

  /**
   * buttonProps.
   */
  buttonProps?: ButtonProps<'button' | 'a'>;

  /**
   * split.
   */
  split?: boolean;

  /**
   * btnGroup.
   */
  btnGroup?: boolean;

  /**
   * center.
   */
  center?: boolean;

  /**
   * dropup.
   */
  dropup?: boolean;

  /**
   * dropupCenter.
   */
  dropupCenter?: boolean;

  /**
   * dropend.
   */
  dropend?: boolean;

  /**
   * dropstart.
   */
  dropstart?: boolean;

  /**
   * strategy.
   */
  strategy?: 'fixed' | 'absolute';

  /**
   * menuProps.
   */
  menuProps?: DropdownMenuProps<'ul'>;

  /**
   * customMenu.
   */
  customMenu?: boolean;

  /**
   * offset.
   */
  offset?:
    | number
    | {
        mainAxis?: number;
        crossAxis?: number;
        alignmentAxis?: number | null;
      };

  /**
   * autoClose.
   */
  autoClose?: boolean | 'inside' | 'outside';

  /**
   * visible.
   */
  visible?: boolean;
};
```
