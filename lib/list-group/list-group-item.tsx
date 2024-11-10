import { type ElementType, useMemo } from 'react';

import type { ListGroupItemProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const ListGroupItem = function ListGroupItem<T extends ElementType = 'a' | 'button' | 'li'>(
  props: ListGroupItemProps<T>,
) {
  const {
    active,
    as: Component = 'li',
    className,
    disabled,
    dropOldClass,
    flexFill,
    itemAction,
    style,
    variables,
    variant,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'list-group-item',
      (active || itemAction) && 'list-group-item-action',
      active && 'active',
      Component !== 'button' && disabled && 'disabled',
      flexFill && 'flex-fill',
      variant && `list-group-item-${variant}`,
      className,
    );
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    return filterOptions(
      {
        className: finalClass,
        disabled: Component === 'button' && disabled ? true : undefined,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [Component, active, className, disabled, dropOldClass, flexFill, itemAction, style, variables, variant]);

  return <Component {...rest} {...renderOptions} />;
};

ListGroupItem.displayName = 'BRL.ListGroupItem';

export default ListGroupItem;
