import { AnimatePresence, motion } from 'motion/react';
import { type ElementType, useCallback, useMemo } from 'react';

import type { TreeActionHandler, TreeNodeProps, TreeOption } from './types.ts';

import {
  BiChevronDown,
  BiChevronRight,
  classx,
  classxWithOptions,
  convertBsKeyToVar,
  stylex,
  updateChildNodes,
  updateParentNodeIndeterminateStatus,
  updateParentNodes,
} from '../tools';
import treeStyles from './tree.module.scss';

const TreeNode = function TreeNode<T extends ElementType = 'div'>(props: TreeNodeProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    checkbox,
    checkMode,
    className,
    dropOldClass,
    label,
    level,
    nodeKey,
    onCheck: onCheckByDefault,
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

  const { checked = false, children: options, expanded = false, selectable = true } = optionByDefault;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && '', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return { className: finalClass, style: finalStyle };
  }, [className, dropOldClass, style, variables]);

  const handleAction = useCallback(
    (action: 'check' | 'select' | 'toggle') => {
      const metadata =
        nodeKey === parentKey
          ? { nodeKey: parentKey }
          : {
              nodeKey: `${parentKey}-${optionByDefault.id}`,
              parentKey,
            };

      const updateNodeCheckStatus = (checked: boolean) => {
        const update = (node: TreeOption) => (node.checked = checked);
        const updateParent = () => updateParentNodes(metadata.nodeKey, treeMap, update);
        const updateChild = () => updateChildNodes(metadata.nodeKey, treeMap, update);

        switch (checkMode) {
          case 'all':
            if (checked) {
              updateParent();
              updateChild();
            } else {
              updateParent();
              updateChild();
            }
            break;
          case 'child':
            if (checked) {
              updateChild();
            } else {
              updateParent();
            }
            break;
          case 'childFirst':
            if (checked) {
              updateChild();
              updateParent();
            } else {
              updateParent();
              updateChild();
            }
            break;
          case 'parent':
            if (checked) {
              updateParent();
            } else {
              updateChild();
            }
            break;
          case 'parentFirst':
            if (checked) {
              updateParent();
              updateChild();
            } else {
              updateChild();
              updateParent();
            }
            break;
        }
      };

      const item = treeMap.get(metadata.nodeKey);
      const option = { ...optionByDefault };
      const actionMap: Record<'check' | 'select' | 'toggle', TreeActionHandler | undefined> = {
        check: onCheckByDefault,
        select: onSelectByDefault,
        toggle: onToggleByDefault,
      };

      let data;
      actionMap[action]?.({
        metadata,
        option,
        toggleNode: (node) => {
          Object.assign(option, node);

          if (checkMode) {
            const checked = !!(node.checked ?? option.checked);
            updateNodeCheckStatus(checked);
            updateParentNodeIndeterminateStatus(checked, metadata.nodeKey, treeMap);
          }

          return (data = item?.metadata?.update(option) ?? []);
        },
        treeMap,
      });

      if (typeof onOptionChangeByDefault === 'function') {
        if (!data) {
          if (action === 'toggle') {
            option.expanded = !option.expanded;
          } else if (action === 'check') {
            const checked = !option.checked;
            option.checked = checked;

            if (checkMode) {
              updateNodeCheckStatus(checked);
              updateParentNodeIndeterminateStatus(checked, metadata.nodeKey, treeMap);
            }
          }
        }

        onOptionChangeByDefault(data || (item?.metadata?.update(option) ?? []));
      }

      data = null;
    },
    [
      checkMode,
      nodeKey,
      onCheckByDefault,
      onOptionChangeByDefault,
      onSelectByDefault,
      onToggleByDefault,
      optionByDefault,
      parentKey,
      treeMap,
    ],
  );

  const handleToggle = useCallback(() => handleAction('toggle'), [handleAction]);

  const handleSelect = useCallback(() => handleAction('select'), [handleAction]);

  const handleCheck = useCallback(() => handleAction('check'), [handleAction]);

  return (
    <Component {...rest} {...renderOptions}>
      <div
        className={classxWithOptions(
          null,
          'form-check form-check-inline',
          checkbox ? 'form-check-reverse pe-3' : 'ps-0 me-2',
        )}
      >
        <span
          className={classxWithOptions(null, treeStyles.brlCursorPointer, 'user-select-none')}
          onClick={handleToggle}
        >
          {expanded ? <BiChevronDown /> : <BiChevronRight />}
        </span>

        {checkbox && <input checked={checked} className="form-check-input" onChange={handleCheck} type="checkbox" />}
      </div>

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
                  checkbox={checkbox}
                  checkMode={checkMode}
                  className="ms-3"
                  key={item.id}
                  label={label}
                  level={level + 1}
                  nodeKey={_nodeKey}
                  onCheck={onCheckByDefault}
                  onOptionChange={onOptionChangeByDefault}
                  onSelect={onSelectByDefault}
                  onToggle={onToggleByDefault}
                  option={item}
                  parentKey={nodeKey}
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
