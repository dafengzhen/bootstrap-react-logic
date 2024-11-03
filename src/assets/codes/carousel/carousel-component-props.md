```ts
interface IOption {
  id?: string | number;
  item?: ReactNode;
  caption?: ReactNode;
  active?: boolean;
  interval?: number;
}

type Props = {
  /**
   * slide.
   */
  slide?: boolean;

  /**
   * fade.
   */
  fade?: boolean;

  /**
   * options.
   */
  options?: IOption[];

  /**
   * controls.
   */
  controls?: boolean;

  /**
   * indicators.
   */
  indicators?: boolean;

  /**
   * onChange.
   */
  onChange?: (id: string | number, type: 'prev' | 'next' | 'nextIndicator' | 'prevIndicator') => void;

  /**
   * ride.
   */
  ride?: 'carousel' | boolean;

  /**
   * pause.
   */
  pause?: boolean;

  /**
   * touch.
   */
  touch?: boolean;
};
```
