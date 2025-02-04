import { type ElementType, useMemo } from 'react';

import type { CascaderItemProps } from './types.ts';

import { classx, classxWithOptions, convertBsKeyToVar, stylex } from '../tools';

const CascaderItem = function CascaderItem<T extends ElementType = 'ul'>(props: CascaderItemProps<T>) {
  const {
    as: Component = 'ul' as ElementType,
    className,
    dropOldClass,
    onClick: onClickByDefault,
    options: optionsByDefault = [],
    style,
    variables,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'list-group list-group-flush gap-1', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return (
    <Component {...rest} {...renderOptions}>
      {optionsByDefault.map((item) => (
        <li
          className={classxWithOptions(
            null,
            'list-group-item list-group-item-action rounded',
            'brl-cursor-pointer',
            item.disabled && 'disabled',
            item.active && 'active',
          )}
          key={item.id}
          onClick={() => onClickByDefault?.(item)}
        >
          {item.text}
        </li>
      ))}
    </Component>
  );
};

CascaderItem.displayName = 'BRL.CascaderItem';

export default CascaderItem;
