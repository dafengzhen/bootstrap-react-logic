```ts
interface IOption {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  id?: number | string;
  itemProps?: PaginationItemProps<'li'>;
  link?: ReactNode;
  linkProps?: PaginationLinkProps<'a'>;
}

type Props = {
  /**
   * alignment.
   */
  alignment?: 'center' | 'end' | 'start';

  /**
   * navProps.
   */
  navProps?: PaginationNavProps<'nav'>;

  /**
   * options.
   */
  options?: IOption[];

  /**
   * size.
   */
  size?: 'lg' | 'sm';
};
```
