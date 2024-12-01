import type { ElementType, ReactNode } from 'react';

import type {
  BaseProps,
  OmittedPropsWithoutRef,
  TreeNodeBase,
  TreeNodeVariablesType,
  TreeVariablesType,
} from '../tools';

export type TreeActionHandler = (params: {
  metadata: Metadata;
  option: TreeOption;
  toggleNode: ToggleNode;
  treeMap: TreeMap;
}) => void;

export interface TreeBaseOption {
  metadata?: {
    nodeKey: string;
    parentId?: null | number | string;
    parentKey?: string;
    path: string;
    update: (option?: Partial<TreeBaseOption & TreeNodeOption>) => any[];
  };
}

export type TreeMap = Map<string, TreeNodeBase<TreeBaseOption & TreeNodeOption>>;

export type TreeNodeOption = TreeOption;

export type TreeNodeProps<T extends ElementType> = OmittedPropsWithoutRef<
  NodeProps<T>,
  T,
  TreeNodeVariablesType,
  'onSelect'
>;

export interface TreeOption {
  children?: TreeOption[];
  expanded?: boolean;
  id?: number | string;
  label?: string;
  selectable?: boolean;
}

export type TreeProps<T extends ElementType> = OmittedPropsWithoutRef<Props<T>, T, TreeVariablesType, 'onSelect'>;

type Metadata = { nodeKey: string; parentKey?: string };

type NodeProps<T extends ElementType> = BaseProps<T, TreeNodeVariablesType> & {
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
   * parentKey.
   */
  parentKey?: string;

  /**
   * treeMap.
   */
  treeMap: TreeMap;
};

type Props<T extends ElementType> = BaseProps<T, TreeVariablesType> & {
  /**
   * label.
   */
  label?: (option: TreeOption) => ReactNode;

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
   * options.
   */
  options: TreeOption[];
};

type ToggleNode = (option: Partial<TreeOption>) => any[];