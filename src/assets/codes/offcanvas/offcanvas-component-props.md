```ts
type Props = {
  /**
   * backdrop.
   */
  backdrop?: 'static' | boolean;

  /**
   * body.
   */
  body?: ReactNode;

  /**
   * bodyProps.
   */
  bodyProps?: OffcanvasBodyProps<'div'>;

  /**
   * fade.
   */
  fade?: boolean;

  /**
   * header.
   */
  header?: ReactNode;

  /**
   * headerProps.
   */
  headerProps?: OffcanvasHeaderProps<'div'>;

  /**
   * onChange.
   */
  onChange?: (visible: boolean, event: MouseEvent<HTMLElement>) => void;

  /**
   * placement.
   */
  placement?: 'bottom' | 'end' | 'start' | 'top';

  /**
   * responsive.
   */
  responsive?: 'lg' | 'md' | 'sm' | 'xl' | 'xxl';

  /**
   * scroll.
   */
  scroll?: boolean;

  /**
   * title.
   */
  title?: ReactNode;

  /**
   * titleProps.
   */
  titleProps?: OffcanvasTitleProps<'div'>;

  /**
   * visible.
   */
  visible?: boolean;
};
```
