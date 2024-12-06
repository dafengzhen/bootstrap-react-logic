import { type ElementType, useMemo } from 'react';

import type { TreeOption, TreeProps } from './types.ts';

import { classx, convertBsKeyToVar, generateTreeNodeMap, stylex } from '../tools';
import TreeNode from './tree-node.tsx';

interface IOption extends TreeOption {
  children?: IOption[];
  id: number | string;
}

const generateInitialOptions = (options: TreeOption[] = [], optionId?: number | string): IOption[] =>
  options.map((item, index) => {
    const id = item.id !== undefined ? item.id : optionId !== undefined ? `${optionId}${index}` : `${index}`;
    return {
      ...item,
      children: item.children ? generateInitialOptions(item.children, id) : undefined,
      id,
    };
  });

const defaultSearch = (treeData: TreeOption[], searchTerm: string): TreeOption[] => {
  const lowerCaseTerm = searchTerm.toLowerCase();

  const searchTree = (nodes: TreeOption[]): TreeOption[] => {
    const result: TreeOption[] = [];

    for (const node of nodes) {
      const labelLower = node.label?.toLowerCase();
      const match = labelLower?.includes(lowerCaseTerm) || false;

      let hidden = !match;
      const highlighted = match;
      let filteredChildren: TreeOption[] | undefined;

      if (node.children && node.children.length > 0) {
        filteredChildren = searchTree(node.children);
        const hasVisibleChildren = filteredChildren.some((child) => !child.hidden);
        hidden = !match && !hasVisibleChildren;
      }

      if (!hidden || filteredChildren) {
        result.push({
          ...node,
          children: filteredChildren,
          hidden,
          highlighted,
        });
      }
    }

    return result;
  };

  return searchTree(treeData);
};

const Tree = function Tree<T extends ElementType = 'div'>(props: TreeProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    checkbox,
    checkMode,
    className,
    dropOldClass,
    label: labelByDefault,
    onCheck: onCheckByDefault,
    onOptionChange: onOptionChangeByDefault,
    onSearch: onSearchByDefault,
    onSelect: onSelectByDefault,
    onToggle: onToggleByDefault,
    options: optionsByDefault,
    searchTerm,
    style,
    useCustomSearch,
    variables,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && '', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  const options = useMemo<IOption[]>(() => {
    let updatedOptions;
    const searchValue = searchTerm?.trim();
    if (searchValue) {
      const searchFn = onSearchByDefault || defaultSearch;
      updatedOptions = searchFn(optionsByDefault, searchValue);
    } else {
      updatedOptions = optionsByDefault;
    }

    return generateInitialOptions(updatedOptions);
  }, [onSearchByDefault, optionsByDefault, searchTerm]);

  const treeMap = useMemo(() => generateTreeNodeMap<IOption>(options), [options]);

  return (
    <Component {...rest} {...renderOptions}>
      {options
        .filter((item) => !item.hidden)
        .map((item) => {
          const parentKey = '';
          const nodeKey = parentKey ? `${parentKey}-${item.id}` : `${item.id}`;

          return (
            <TreeNode
              checkbox={checkbox}
              checkMode={checkMode}
              key={item.id}
              label={labelByDefault}
              level={0}
              nodeKey={nodeKey}
              onCheck={onCheckByDefault}
              onOptionChange={onOptionChangeByDefault}
              onSelect={onSelectByDefault}
              onToggle={onToggleByDefault}
              option={item}
              options={options}
              parentKey={nodeKey}
              treeMap={treeMap}
              useCustomSearch={useCustomSearch}
            />
          );
        })}
    </Component>
  );
};

Tree.Node = TreeNode;

Tree.displayName = 'BRL.Tree';

export default Tree;
