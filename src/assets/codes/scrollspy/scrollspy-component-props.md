```ts
type Props = {
  /**
   * children.
   */
  children: (activeId: null | string) => ReactNode;

  /**
   * onActiveChange.
   */
  onActiveChange?: (id: null | string) => void;

  /**
   * offset.
   */
  rootMargin?: string;

  /**
   * sectionIds.
   */
  sectionIds: string[];

  /**
   * smoothScroll.
   */
  smoothScroll?: boolean;

  /**
   * number.
   */
  threshold?: number | number[];
};
```
