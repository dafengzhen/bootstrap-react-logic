import { type ElementType, useMemo, useState } from 'react';

import type { TreeBaseOption, TreeMap, TreeOption, TreeProps } from './types.ts';

import { classx, convertBsKeyToVar, generateNodeMap, stylex, type TreeNodeBase } from '../tools';
import TreeNode from './tree-node.tsx';

interface IOption extends TreeNodeBase<TreeBaseOption & TreeOption> {
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

const Tree = function Tree<T extends ElementType = 'div'>(props: TreeProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    className,
    dropOldClass,
    label: labelByDefault,
    onOptionChange: onOptionChangeByDefault,
    onSelect: onSelectByDefault,
    onToggle: onToggleByDefault,
    options: optionsByDefault,
    style,
    variables,
    ...rest
  } = props;

  const [options] = useState<IOption[]>(generateInitialOptions(optionsByDefault));
  const [treeMap] = useState<TreeMap>(generateNodeMap<IOption>(options));

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && '', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return (
    <Component {...rest} {...renderOptions}>
      {options.map((item) => {
        const parentKey = '';
        const nodeKey = parentKey ? `${parentKey}-${item.id}` : `${item.id}`;

        return (
          <TreeNode
            key={item.id}
            label={labelByDefault}
            level={0}
            nodeKey={nodeKey}
            onOptionChange={onOptionChangeByDefault}
            onSelect={onSelectByDefault}
            onToggle={onToggleByDefault}
            option={item}
            parentKey={nodeKey}
            treeMap={treeMap}
          />
        );
      })}
    </Component>
  );
};

Tree.Node = TreeNode;

Tree.displayName = 'BRL.Tree';

export default Tree;
