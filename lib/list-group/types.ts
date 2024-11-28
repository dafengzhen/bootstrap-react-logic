import type { ElementType, ReactNode } from 'react';

import type {
  BaseProps,
  ListGroupItemVariablesType,
  ListGroupVariablesType,
  PropsWithoutRef,
  VariantType,
} from '../tools';

export type ListGroupItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, ListGroupItemVariablesType>;

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

type ItemProps<T extends ElementType> = BaseProps<T, ListGroupItemVariablesType> & {
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
};

type Props<T extends ElementType> = BaseProps<T, ListGroupVariablesType> & {
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
};
