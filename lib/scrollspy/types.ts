import type { ElementType, ReactNode } from 'react';

import type { BaseProps, OmittedPropsWithoutRef, ScrollspyVariablesType } from '../tools';

type Props<T extends ElementType> = {
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
  sectionIds?: string[];

  /**
   * smoothScroll.
   */
  smoothScroll?: boolean;

  /**
   * number.
   */
  threshold?: number | number[];
} & BaseProps<T, ScrollspyVariablesType>;

export type ScrollspyProps<T extends ElementType> = OmittedPropsWithoutRef<
  Props<T>,
  T,
  ScrollspyVariablesType,
  'children'
>;
