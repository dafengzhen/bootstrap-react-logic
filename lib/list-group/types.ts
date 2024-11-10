import type { ElementType, ReactNode } from 'react';

import type {
  BaseProps,
  ListGroupItemVariablesType,
  ListGroupVariablesType,
  PropsWithoutRef,
  VariantType,
} from '../tools';

type Props<T extends ElementType> = {
  /**
   * flush.
   */
  flush?: boolean;

  /**
   * horizontal.
   */
  horizontal?: 'lg' | 'md' | 'sm' | 'xl' | 'xxl' | boolean;

  /**
   * itemAction.
   */
  itemAction?: boolean;

  /**
   * numbered.
   */
  numbered?: boolean;

  /**
   * options.
   */
  options?: ListGroupOption[];
} & BaseProps<T, ListGroupVariablesType>;

type ItemProps<T extends ElementType> = {
  /**
   * active.
   */
  active?: boolean;

  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * flexFill.
   */
  flexFill?: boolean;

  /**
   * itemAction.
   */
  itemAction?: boolean;

  /**
   * variant.
   */
  variant?: keyof VariantType;
} & BaseProps<T, ListGroupItemVariablesType>;

export interface ListGroupOption {
  active?: boolean;
  disabled?: boolean;
  flexFill?: boolean;
  id?: number | string;
  item?: ReactNode;
  itemAction?: boolean;
  props?: ListGroupItemProps<ElementType>;
  variant?: keyof VariantType;
}

export type ListGroupProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, ListGroupVariablesType>;

export type ListGroupItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, ListGroupItemVariablesType>;
