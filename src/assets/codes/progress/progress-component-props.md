```ts
export interface IOption {
  animated?: boolean;
  barProps?: ProgressBarProps<'div'>;
  bg?: 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning';
  id?: number | string;
  now?: number;
  props?: ProgressProps<'div'>;
  striped?: boolean;
}

type Props = {
  /**
   * animated.
   */
  animated?: boolean;

  /**
   * barProps.
   */
  barProps?: ProgressBarProps<'div'>;

  /**
   * bg.
   */
  bg?: 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning';

  /**
   * now.
   */
  now?: number;

  /**
   * options.
   */
  options?: IOption[];

  /**
   * stacked.
   */
  stacked?: boolean;

  /**
   * stackedProps.
   */
  stackedProps?: ProgressStackedProps<'div'>;

  /**
   * striped.
   */
  striped?: boolean;
};
```
