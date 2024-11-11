```ts
interface IOption {
  active?: boolean;
  disabled?: boolean;
  fade?: boolean;
  href?: string;
  id?: number | string;
  item?: ReactNode;
  itemProps?: NavItemProps<'li'>;
  link?: ReactNode;
  linkProps?: NavLinkProps<'a'>;
  pane?: ReactNode;
  paneProps?: NavTabPaneProps<'div'>;
}

type Props = {
  /**
   * contentProps.
   */
  contentProps?: NavTabContentProps<'div'>;

  /**
   * fill.
   */
  fill?: boolean;

  /**
   * horizontal.
   */
  horizontal?: 'center' | 'end' | 'start';

  /**
   * justified.
   */
  justified?: boolean;

  /**
   * onChange.
   */
  onChange?: (id: number | string, event: MouseEvent<HTMLElement>) => void;

  /**
   * options.
   */
  options?: IOption[];

  /**
   * pills.
   */
  pills?: boolean;

  /**
   * skipItem.
   */
  skipItem?: boolean;

  /**
   * tabs.
   */
  tabs?: boolean;

  /**
   * underline.
   */
  underline?: boolean;

  /**
   * vertical.
   */
  vertical?: boolean;
};
```
