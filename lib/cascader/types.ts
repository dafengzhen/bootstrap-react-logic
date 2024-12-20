import type { ElementType } from 'react';

import type { BaseProps, CascaderItemVariablesType, CascaderVariablesType, OmittedPropsWithoutRef } from '../tools';

export type CascaderItemProps<T extends ElementType> = OmittedPropsWithoutRef<
  ItemProps<T>,
  T,
  CascaderVariablesType,
  'onClick'
>;

export interface CascaderOption {
  active?: boolean;
  children?: CascaderOption[];
  disabled?: boolean;
  id?: number | string;
  level?: number;
  parentId?: number | string;
  text: string;
}

export type CascaderProps<T extends ElementType> = OmittedPropsWithoutRef<
  Props<T>,
  T,
  CascaderVariablesType,
  'onChange'
>;

type ItemProps<T extends ElementType> = BaseProps<T, CascaderItemVariablesType> & {
  /**
   * onClick.
   */
  onClick?: (option: CascaderOption) => void;

  /**
   * options.
   */
  options?: CascaderOption[];
};

type Props<T extends ElementType> = BaseProps<T, CascaderVariablesType> & {
  /**
   * disabled.
   */
  disabled?: boolean;

  /**
   * onChange.
   */
  onChange?: (id: number | string) => void;

  /**
   * onClear.
   */
  onClear?: () => void;

  /**
   * options.
   */
  options?: CascaderOption[];

  /**
   * placeholder.
   */
  placeholder?: string;
};
