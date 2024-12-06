import type { ElementType, ReactNode } from 'react';

import type { BaseProps, OmittedPropsWithoutRef, TreeNodeVariablesType, TreeVariablesType } from '../tools';

export type TreeActionHandler = (params: {
  metadata: Metadata;
  option: TreeOption;
  toggleNode: ToggleNode;
  treeMap: TreeMap;
}) => void;

export interface TreeBaseOption {
  _metadata?: {
    id: number | string;
    parentId?: null | number | string;
    path: string;
  };
}

export type TreeMap = Map<string, TreeBaseOption & TreeNodeOption>;

export type TreeNodeOption = TreeOption;

export type TreeNodeProps<T extends ElementType> = OmittedPropsWithoutRef<
  NodeProps<T>,
  T,
  TreeNodeVariablesType,
  'onSelect'
>;

export interface TreeOption {
  checked?: boolean;
  children?: TreeOption[];
  disabled?: boolean;
  expanded?: boolean;
  hidden?: boolean;
  highlighted?: boolean;
  id?: number | string;
  indeterminate?: boolean;
  label?: string;
  selectable?: boolean;
}

export type TreeProps<T extends ElementType> = OmittedPropsWithoutRef<Props<T>, T, TreeVariablesType, 'onSelect'>;

type Metadata = { nodeKey: string; parentKey?: string };

type NodeProps<T extends ElementType> = BaseProps<T, TreeNodeVariablesType> & {
  /**
   * checkbox.
   */
  checkbox?: boolean;

  /**
   * checkMode.
   */
  checkMode?: 'all' | 'child' | 'childFirst' | 'parent' | 'parentFirst';

  /**
   * label.
   */
  label?: (option: TreeOption) => ReactNode;

  /**
   * level.
   */
  level: number;

  /**
   * nodeKey.
   */
  nodeKey: string;

  /**
   * onCheck.
   */
  onCheck?: TreeActionHandler;

  /**
   * onOptionChange.
   */
  onOptionChange?: (options: TreeOption[]) => void;

  /**
   * onSelect.
   */
  onSelect?: TreeActionHandler;

  /**
   * onToggle.
   */
  onToggle?: TreeActionHandler;

  /**
   * option.
   */
  option: TreeBaseOption & TreeNodeOption;

  /**
   * options.
   */
  options: TreeOption[];

  /**
   * parentKey.
   */
  parentKey?: string;

  /**
   * treeMap.
   */
  treeMap: TreeMap;

  /**
   * useCustomSearch.
   */
  useCustomSearch?: boolean;
};

type Props<T extends ElementType> = BaseProps<T, TreeVariablesType> & {
  /**
   * checkbox.
   */
  checkbox?: boolean;

  /**
   * checkMode.
   */
  checkMode?: 'all' | 'child' | 'childFirst' | 'parent' | 'parentFirst';

  /**
   * label.
   */
  label?: (option: TreeOption) => ReactNode;

  /**
   * onCheck.
   */
  onCheck?: TreeActionHandler;

  /**
   * onOptionChange.
   */
  onOptionChange?: (options: TreeOption[]) => void;

  /**
   * onSearch.
   */
  onSearch?: (options: TreeOption[], searchTerm: string) => TreeOption[];

  /**
   * onSelect.
   */
  onSelect?: TreeActionHandler;

  /**
   * onToggle.
   */
  onToggle?: TreeActionHandler;

  /**
   * options.
   */
  options: TreeOption[];

  /**
   * searchTerm.
   */
  searchTerm?: string;

  /**
   * useCustomSearch.
   */
  useCustomSearch?: boolean;
};

type ToggleNode = () => TreeOption[];
