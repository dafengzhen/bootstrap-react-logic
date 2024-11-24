import type { ElementType, ReactNode } from 'react';

import type { OmittedPropsWithoutRef, ScrollspyVariablesType, BaseProps } from '../tools';

export type ScrollspyProps<T extends ElementType> = OmittedPropsWithoutRef<
  Props<T>,
  T,
  ScrollspyVariablesType,
  'children'
>;

type Props<T extends ElementType> = {
  /**
   * children.
   */
  children: (activeId: string | null) => ReactNode;

  /**
   * onActiveChange.
   */
  onActiveChange?: (id: string | null) => void;

  /**
   * number.
   */
  threshold?: number[] | number;

  /**
   * smoothScroll.
   */
  smoothScroll?: boolean;

  /**
   * sectionIds.
   */
  sectionIds?: string[];

  /**
   * offset.
   */
  rootMargin?: string;
} & BaseProps<T, ScrollspyVariablesType>;
