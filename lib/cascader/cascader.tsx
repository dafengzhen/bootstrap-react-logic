import {
  autoUpdate,
  FloatingPortal,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';
import { type ElementType, Fragment, type MouseEvent, useCallback, useMemo, useState } from 'react';

import type { CascaderOption, CascaderProps } from './types.ts';

import globalStyles from '../bootstrap-react-logic.module.css';
import { classx, classxWithOptions, convertBsKeyToVar, stylex } from '../tools';
import CascaderItem from './cascader-item.tsx';

interface IOption extends CascaderOption {
  id: number | string;
}

const setActiveStatus = (options: CascaderOption[]) => {
  return options.map((option) => {
    if (option.children && option.children.length > 0) {
      const newChildren = setActiveStatus(option.children);
      if (newChildren.some((child) => child.active === true)) {
        option.active = true;
        option.children = newChildren;
      }
    }

    return option;
  });
};

const generateInitialOptions = (
  options: CascaderOption[] = [],
  parentId?: number | string,
  level: number = 0,
): IOption[] => {
  return setActiveStatus(options).map((item, index) => {
    const id = item.id ?? (parentId !== undefined ? `${parentId}${index}` : `${index}`);
    const children = item.children ? generateInitialOptions(item.children, id, level + 1) : undefined;

    return {
      ...item,
      children,
      id,
      level,
      parentId,
    };
  });
};

const organizeByLevel = (options: IOption[]): IOption[][] => {
  const levels: IOption[][] = [];

  const traverse = (options: IOption[], level: number) => {
    if (!levels[level]) {
      levels[level] = [];
    }

    options.forEach((option) => {
      levels[level].push(option);
      if (option.children && option.children.length > 0) {
        traverse(option.children as IOption[], level + 1);
      }
    });
  };

  traverse(options, 0);

  const findActive = options.find((item) => item.active);
  if (findActive) {
    for (let i = 1; i < levels.length; i++) {
      levels[i] = levels[i].filter((option) => option.parentId === (i === 1 ? findActive.id : levels[i - 1][0].id));
    }
  }

  return levels;
};

const toggleActiveState = (options: IOption[], targetId?: number | string, parentId?: number | string): IOption[] => {
  return options.map((option) => {
    option.active = false;

    if (option.children && option.children.length > 0) {
      option.children = toggleActiveState(option.children as IOption[], targetId, option.id);
    }

    if (option.id === targetId || option.id === parentId || option.children?.some((child) => child.active)) {
      option.active = true;
    }

    return option;
  });
};

const getParentNodes = (options: IOption[], _item?: IOption | null): IOption[] => {
  let item: IOption | null | undefined = _item;

  if (!_item) {
    item = findActiveLeafNodes(options)[0];
  }

  if (!item) {
    return [];
  } else if (item.parentId === undefined) {
    return [item];
  }

  const findParentById = (nodes: IOption[], parentId?: number | string): IOption | null => {
    for (const node of nodes) {
      if (node.id === parentId) {
        return node;
      }

      if (node.children && node.children.length > 0) {
        const foundNode = findParentById(node.children as IOption[], parentId);
        if (foundNode) {
          return foundNode;
        }
      }
    }

    return null;
  };

  const parentNodes: IOption[] = [item];
  let currentParentId: number | string | undefined = item.parentId;
  while (currentParentId !== undefined) {
    const parentNode = findParentById(options, currentParentId);
    if (parentNode) {
      parentNodes.push(parentNode);
      currentParentId = parentNode.parentId;
    } else {
      break;
    }
  }

  return parentNodes.reverse();
};

const findActiveLeafNodes = (options: IOption[]): IOption[] => {
  let result: IOption[] = [];
  options.forEach((option) => {
    if (option.children && option.children.length > 0) {
      result = result.concat(findActiveLeafNodes(option.children as IOption[]));
    } else if (option.active === true) {
      result.push(option);
    }
  });
  return result;
};

const deactivateAll = (options: IOption[]) => {
  return options.reduce((acc, option) => {
    const newOption = { ...option };

    if (newOption.children && newOption.children.length > 0) {
      newOption.children = deactivateAll(newOption.children as IOption[]);
    }

    if (newOption.active) {
      newOption.active = false;
    }

    acc.push(newOption);
    return acc;
  }, [] as IOption[]);
};

const Cascader = function Cascader<T extends ElementType = 'div'>(props: CascaderProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    className,
    disabled,
    dropOldClass,
    onChange: onChangeByDefault,
    onClear: onClearByDefault,
    options: optionsByDefault,
    placeholder = 'Please select',
    style,
    variables,
    ...rest
  } = props;

  const initialOptions = generateInitialOptions(optionsByDefault);
  const [options, setOptions] = useState<IOption[]>(initialOptions);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(
    getParentNodes(initialOptions)
      .map((item) => item.text)
      .join(' / '),
  );

  const { context, floatingStyles, refs } = useFloating({
    middleware: [
      size({
        apply({ availableHeight, elements, rects }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${Math.max(0, availableHeight)}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
      }),
    ],
    onOpenChange: setIsOpen,
    open: isOpen,
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context, {
    enabled: !disabled,
    toggle: false,
  });
  const dismiss = useDismiss(context);
  const { getFloatingProps, getReferenceProps } = useInteractions([click, dismiss]);

  const renderOptions = useMemo(() => {
    const finalClass = classx(
      !dropOldClass && `form-select ${globalStyles.brlMinH38Px}`,
      disabled && 'bg-body-secondary',
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, disabled, dropOldClass, style, variables]);

  const levels = useMemo(() => organizeByLevel(options), [options]);

  const handleClick = useCallback(
    (item: CascaderOption) => {
      if (item.active) {
        return;
      }

      setOptions((prevState) => {
        if (!item.children || item.children.length === 0) {
          setText(
            getParentNodes(prevState, item as IOption)
              .map((item) => item.text)
              .join(' / '),
          );
        }

        return toggleActiveState(prevState, item.id, item.parentId);
      });

      if (!item.children || item.children.length === 0) {
        onChangeByDefault?.(item.id!);
        setIsOpen((prevState) => !prevState);
      }
    },
    [onChangeByDefault],
  );

  const handleClickX = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (disabled) {
        return;
      }

      e.stopPropagation();
      setOptions((prevState) => deactivateAll(prevState));
      setText('');
      onClearByDefault?.();
    },
    [disabled, onClearByDefault],
  );

  return (
    <>
      <Component {...rest} {...renderOptions} {...getReferenceProps()} ref={refs.setReference}>
        {placeholder && !text ? (
          <div className={classxWithOptions(null, 'text-secondary', globalStyles.brlCursorPointer)}>{placeholder}</div>
        ) : (
          <div className={classxWithOptions(null, disabled ? 'text-secondary' : globalStyles.brlCursorPointer)}>
            {text}
            <i className="bi bi-x" onClick={handleClickX} tabIndex={-1}></i>
          </div>
        )}
      </Component>

      {isOpen && (
        <FloatingPortal>
          <div
            className="card card-body shadow overflow-y-auto"
            {...getFloatingProps()}
            ref={refs.setFloating}
            style={floatingStyles}
          >
            <div className="d-flex gap-2">
              {levels.map((levelOptions, level) => {
                const hasActive = levelOptions.some((item) => item.children && item.children.length > 0);

                return (
                  <Fragment key={level}>
                    <CascaderItem onClick={handleClick} options={levelOptions} />
                    {hasActive && <div className={classxWithOptions(null, 'vr', globalStyles.brlVrBorderColor)}></div>}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </FloatingPortal>
      )}
    </>
  );
};

Cascader.Item = CascaderItem;

Cascader.displayName = 'BRL.Cascader';

export default Cascader;
