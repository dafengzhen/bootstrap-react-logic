import { AnimatePresence, motion } from 'motion/react';
import { type ElementType, useCallback, useMemo } from 'react';

import type { TreeActionHandler, TreeNodeProps, TreeOption } from './types.ts';

import treeStyles from '../global.module.scss';
import {
  BiChevronDown,
  BiChevronRight,
  classx,
  classxWithOptions,
  convertBsKeyToVar,
  findTreeNodeChildKeys,
  findTreeNodeParentKeys,
  stylex,
  updateTreeNodeIndeterminateStatus,
  updateTreeNodeStatus,
  updateTreeNodesUsingMap,
  updateTreeNodeUsingMap,
} from '../tools';

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
    options,
    parentKey,
    style,
    treeMap,
    useCustomSearch,
    variables,
    ...rest
  } = props;

  const {
    checked = false,
    children,
    disabled = false,
    expanded = false,
    highlighted = false,
    indeterminate,
    selectable = true,
  } = optionByDefault;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && '', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return { className: finalClass, style: finalStyle };
  }, [className, dropOldClass, style, variables]);

  const handleAction = useCallback(
    (action: 'check' | 'select' | 'toggle') => {
      const option = { ...optionByDefault };
      const metadata =
        nodeKey === parentKey
          ? { nodeKey: parentKey }
          : {
              nodeKey: `${parentKey}-${optionByDefault.id}`,
              parentKey,
            };

      let _options = options;

      const updateNode = () => {
        _options = updateTreeNodeUsingMap(_options, treeMap, metadata.nodeKey, (n) => {
          Object.assign(n, option);
          return n;
        });
      };

      const updateNodes = (keys?: string[]) => {
        _options = updateTreeNodesUsingMap(_options, treeMap, keys ?? Array.from(treeMap.keys()), (n) => n);
      };

      const updateNodeCheckStatus = () => {
        const checked = !option.checked;
        const update = (node: TreeOption) => {
          node.checked = checked;
          return node;
        };
        const updateParentChild = () => {
          const keys = [
            metadata.nodeKey,
            ...findTreeNodeParentKeys(metadata.nodeKey, treeMap),
            ...findTreeNodeChildKeys(metadata.nodeKey, treeMap),
          ];
          _options = updateTreeNodesUsingMap(_options, treeMap, keys, update);
          updateTreeNodeIndeterminateStatus(_options);
          updateNodes(keys);
        };
        const updateParent = () => {
          const keys = [metadata.nodeKey, ...findTreeNodeParentKeys(metadata.nodeKey, treeMap)];
          _options = updateTreeNodesUsingMap(_options, treeMap, keys, update);
          updateTreeNodeIndeterminateStatus(_options);
          updateNodes(keys);
        };
        const updateChild = () => {
          const keys = [metadata.nodeKey, ...findTreeNodeChildKeys(metadata.nodeKey, treeMap)];
          _options = updateTreeNodesUsingMap(_options, treeMap, keys, update);
          updateNodes(keys);
        };

        switch (checkMode) {
          case 'all':
          case 'parentFirst':
            updateParentChild();
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
          default:
            break;
        }
      };

      const actionMap: Record<'check' | 'select' | 'toggle', TreeActionHandler | undefined> = {
        check: onCheckByDefault,
        select: onSelectByDefault,
        toggle: onToggleByDefault,
      };

      let toggleNode = false;
      actionMap[action]?.({
        metadata,
        option,
        toggleNode: () => {
          toggleNode = true;
          updateNode();

          if (checkMode) {
            updateNodeCheckStatus();
          }

          return _options;
        },
        treeMap,
      });

      if (toggleNode) {
        return;
      }

      if (typeof onOptionChangeByDefault === 'function') {
        if (action === 'toggle') {
          option.expanded = !option.expanded;
          updateNode();
        } else if (action === 'check') {
          if (checkMode) {
            updateNodeCheckStatus();
          } else {
            option.checked = !option.checked;
            updateTreeNodeStatus(_options, option);
            updateNodes();
          }
        }

        onOptionChangeByDefault(_options);
      }
    },
    [
      checkMode,
      nodeKey,
      onCheckByDefault,
      onOptionChangeByDefault,
      onSelectByDefault,
      onToggleByDefault,
      optionByDefault,
      options,
      parentKey,
      treeMap,
    ],
  );

  const handleToggle = useCallback(() => handleAction('toggle'), [handleAction]);

  const handleSelect = useCallback(() => handleAction('select'), [handleAction]);

  const handleCheck = useCallback(() => handleAction('check'), [handleAction]);

  return (
    <Component {...rest} {...renderOptions}>
      <div className="d-inline-flex align-items-center align-middle gap-2 mb-1">
        <div
          className={classxWithOptions(null, treeStyles.brlCursorPointer, 'user-select-none d-inline-flex')}
          onClick={handleToggle}
        >
          {expanded ? <BiChevronDown /> : <BiChevronRight />}
        </div>

        {checkbox && (
          <div className="d-inline-block">
            <input
              checked={checked}
              className="form-check-input"
              disabled={disabled}
              onChange={handleCheck}
              ref={(instance) => {
                if (instance && typeof indeterminate === 'boolean') {
                  instance.indeterminate = indeterminate;
                }
              }}
              type="checkbox"
            />
          </div>
        )}

        <div
          className={classxWithOptions(
            null,
            selectable ? treeStyles.brlCursorPointer : treeStyles.brlCursorNotAllowed,
            disabled && `${treeStyles.brlCursorDefault} opacity-50`,
            !useCustomSearch && highlighted && 'px-1 text-bg-warning rounded',
          )}
          onClick={handleSelect}
        >
          {typeof label === 'function' ? label({ ...optionByDefault }) : label}
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            animate={{ height: expanded ? 'auto' : 0 }}
            className="overflow-hidden"
            exit={{ height: 0 }}
            initial={{ height: 0 }}
            transition={{ duration: 0.35 }}
          >
            {children
              ?.filter((item) => !item.hidden)
              .map((item) => {
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
                    options={options}
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
