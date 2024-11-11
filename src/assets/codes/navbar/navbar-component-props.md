```ts
interface IOption {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  id?: number | string;
  item?: ReactNode;
  itemProps?: NavbarNavItemProps<'li'>;
  link?: ReactNode;
  linkProps?: NavbarNavLinkProps<'a'>;
}

type Props = {
  /**
   * brand.
   */
  brand?: ReactNode;

  /**
   * brandPosition.
   */
  brandPosition?: 'hidden' | 'left' | 'right';

  /**
   * brandProps.
   */
  brandProps?: NavbarBrandProps<'a'>;

  /**
   * collapse.
   */
  collapse?: ReactNode;

  /**
   * collapseProps.
   */
  collapseProps?: NavbarCollapseProps<'div'>;

  /**
   * container.
   */
  container?: ReactNode;

  /**
   * containerProps.
   */
  containerProps?: NavbarContainerProps<'div'>;

  /**
   * expand,
   */
  expand?: 'lg' | 'md' | 'sm' | 'xl' | 'xxl' | boolean;

  /**
   * externalContent.
   */
  externalContent?: ReactNode;

  /**
   * fixed.
   */
  fixed?: 'bottom' | 'top';

  /**
   * nav.
   */
  nav?: ReactNode;

  /**
   * navProps.
   */
  navProps?: NavbarNavProps<'nav'>;

  /**
   * options.
   */
  options?: IOption[];

  /**
   * scroll.
   */
  scroll?: boolean;

  /**
   * skipItem.
   */
  skipItem?: boolean;

  /**
   * sticky.
   */
  sticky?: 'bottom' | 'top';

  /**
   * text.
   */
  text?: ReactNode;

  /**
   * togglerIconProps.
   */
  textProps?: NavbarTextProps<'span'>;

  /**
   * toggler.
   */
  toggler?: ReactNode;

  /**
   * togglerIconProps.
   */
  togglerIconProps?: NavbarTogglerIconProps<'span'>;

  /**
   * togglerProps.
   */
  togglerProps?: NavbarTogglerProps<'button'>;
};
```
