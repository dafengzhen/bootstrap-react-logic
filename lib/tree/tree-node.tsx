import { AnimatePresence, motion } from 'motion/react';
import { type ElementType, useCallback, useMemo } from 'react';

import type { TreeActionHandler, TreeNodeProps } from './types.ts';

import { BiChevronDown, BiChevronRight, classx, classxWithOptions, convertBsKeyToVar, stylex } from '../tools';
import treeStyles from './tree.module.scss';

const TreeNode = function TreeNode<T extends ElementType = 'div'>(props: TreeNodeProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    className,
    dropOldClass,
    label,
    level,
    nodeKey,
    onOptionChange: onOptionChangeByDefault,
    onSelect: onSelectByDefault,
    onToggle: onToggleByDefault,
    option: optionByDefault,
    parentKey,
    style,
    treeMap,
    variables,
    ...rest
  } = props;

  const { children: options, expanded = false, selectable = true } = optionByDefault;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && '', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return { className: finalClass, style: finalStyle };
  }, [className, dropOldClass, style, variables]);

  const handleAction = useCallback(
    (action: 'select' | 'toggle') => {
      const metadata = { nodeKey, parentKey };
      const item = treeMap.get(nodeKey);
      const option = { ...optionByDefault };
      const actionMap: Record<'select' | 'toggle', TreeActionHandler> = {
        select: onSelectByDefault!,
        toggle: onToggleByDefault!,
      };

      let data;
      actionMap[action]?.({
        metadata,
        option,
        toggleNode: (node) => {
          Object.assign(option, node);
          data = item?.metadata?.update(option) ?? [];
          return data;
        },
        treeMap,
      });

      if (typeof onOptionChangeByDefault === 'function') {
        if (!data && action === 'toggle') {
          option.expanded = !option.expanded;
        }

        onOptionChangeByDefault(data ?? item?.metadata?.update(option) ?? []);
      }
    },
    [nodeKey, onOptionChangeByDefault, onSelectByDefault, onToggleByDefault, optionByDefault, parentKey, treeMap],
  );

  const handleToggle = useCallback(() => handleAction('toggle'), [handleAction]);

  const handleSelect = useCallback(() => handleAction('select'), [handleAction]);

  return (
    <Component {...rest} {...renderOptions}>
      <span
        className={classxWithOptions(null, treeStyles.brlCursorPointer, 'user-select-none me-1')}
        onClick={handleToggle}
      >
        {expanded ? <BiChevronDown /> : <BiChevronRight />}
      </span>

      <span
        className={classxWithOptions(null, selectable ? treeStyles.brlCursorPointer : treeStyles.brlCursorNotAllowed)}
        onClick={handleSelect}
      >
        {typeof label === 'function' ? label({ ...optionByDefault }) : label}
      </span>

      <AnimatePresence>
        {expanded && (
          <motion.div
            animate={{ height: expanded ? 'auto' : 0 }}
            className="overflow-hidden"
            exit={{ height: 0 }}
            initial={{ height: 0 }}
            transition={{ duration: 0.35 }}
          >
            {options?.map((item) => {
              const _nodeKey = parentKey ? `${parentKey}-${item.id}` : `${item.id}`;
              return (
                <TreeNode
                  className="ms-3"
                  key={item.id}
                  label={label}
                  level={level + 1}
                  nodeKey={_nodeKey}
                  onOptionChange={onOptionChangeByDefault}
                  onSelect={onSelectByDefault}
                  onToggle={onToggleByDefault}
                  option={item}
                  parentKey={_nodeKey}
                  treeMap={treeMap}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </Component>
  );
};

TreeNode.displayName = 'BRL.TreeNode';

export default TreeNode;
