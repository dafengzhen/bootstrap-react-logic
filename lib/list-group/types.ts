import type { ElementType, ReactNode } from 'react';
import type {
  BaseProps,
  ListGroupItemVariablesType,
  ListGroupVariablesType,
  PropsWithoutRef,
  VariantType,
} from '../tools';

type Props<T extends ElementType> = BaseProps<T, ListGroupVariablesType> & {
  /**
   * options.
   */
  options?: ListGroupOption[];

  /**
   * flush.
   */
  flush?: boolean;

  /**
   * numbered.
   */
  numbered?: boolean;

  /**
   * horizontal.
   */
  horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

  /**
   * itemAction.
   */
  itemAction?: boolean;
};

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
   * itemAction.
   */
  itemAction?: boolean;

  /**
   * flexFill.
   */
  flexFill?: boolean;

  /**
   * variant.
   */
  variant?: keyof VariantType;
};

export interface ListGroupOption {
  id?: string | number;
  item?: ReactNode;
  active?: boolean;
  disabled?: boolean;
  props?: ListGroupItemProps<ElementType>;
  flexFill?: boolean;
  variant?: keyof VariantType;
  itemAction?: boolean;
}

export type ListGroupProps<T extends ElementType> = PropsWithoutRef<Props<T>, T, ListGroupVariablesType>;

export type ListGroupItemProps<T extends ElementType> = PropsWithoutRef<ItemProps<T>, T, ListGroupItemVariablesType>;
