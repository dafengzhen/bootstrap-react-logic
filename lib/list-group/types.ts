import type { ElementType, ReactNode } from 'react';

import type {
  ListGroupItemVariablesType,
  ListGroupVariablesType,
  PropsWithoutRef,
  VariantType,
  BaseProps,
} from '../tools';

export interface ListGroupOption {
  props?: ListGroupItemProps<ElementType>;
  variant?: keyof VariantType;
  id?: number | string;
  itemAction?: boolean;
  disabled?: boolean;
  flexFill?: boolean;
  active?: boolean;
  item?: ReactNode;
}

export type ListGroupItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, ListGroupItemVariablesType>;

export type ListGroupProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, ListGroupVariablesType>;

type Props<T extends ElementType> = {
  /**
   * horizontal.
   */
  horizontal?: boolean | 'xxl' | 'lg' | 'md' | 'sm' | 'xl';

  /**
   * options.
   */
  options?: ListGroupOption[];

  /**
   * itemAction.
   */
  itemAction?: boolean;

  /**
   * numbered.
   */
  numbered?: boolean;

  /**
   * flush.
   */
  flush?: boolean;
} & BaseProps<T, ListGroupVariablesType>;

type ItemProps<T extends ElementType> = {
  /**
   * variant.
   */
  variant?: keyof VariantType;

  /**
   * itemAction.
   */
  itemAction?: boolean;

  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * flexFill.
   */
  flexFill?: boolean;

  /**
   * active.
   */
  active?: boolean;
} & BaseProps<T, ListGroupItemVariablesType>;
