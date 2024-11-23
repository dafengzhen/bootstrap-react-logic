```ts
type Variant = 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning';

type Props = {
  /**
   * body.
   */
  body?: TableBodyOption[];

  /**
   * bodyProps.
   */
  bodyProps?: TableTbodyProps<ElementType>;

  /**
   * bordered.
   */
  bordered?: boolean;

  /**
   * borderless.
   */
  borderless?: boolean;

  /**
   * caption.
   */
  caption?: ReactNode;

  /**
   * captionProps.
   */
  captionProps?: TableCaptionProps<ElementType>;

  /**
   * foot.
   */
  foot?: TableFootOption[];

  /**
   * footProps.
   */
  footProps?: TableTfootProps<ElementType>;

  /**
   * head.
   */
  head?: TableHeadOption[];

  /**
   * headProps.
   */
  headProps?: TableTheadProps<ElementType>;

  /**
   * hover.
   */
  hover?: boolean;

  /**
   * middle.
   */
  middle?: boolean;

  /**
   * responsive.
   */
  responsive?: 'lg' | 'md' | 'sm' | 'xl' | 'xxl' | boolean;

  /**
   * responsiveProps.
   */
  responsiveProps?: TableResponsiveProps<ElementType>;

  /**
   * size.
   */
  size?: 'sm';

  /**
   * striped.
   */
  striped?: boolean;

  /**
   * stripedColumns.
   */
  stripedColumns?: boolean;

  /**
   * variant.
   */
  variant?: Variant;
};
```
