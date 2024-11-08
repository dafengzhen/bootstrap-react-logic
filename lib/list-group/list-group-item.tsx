import { type ElementType, useMemo } from 'react';
import type { ListGroupItemProps } from './types.ts';
import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const ListGroupItem = function ListGroupItem<T extends ElementType = 'li' | 'a' | 'button'>(
  props: ListGroupItemProps<T>,
) {
  const {
    as: Component = 'li',
    dropOldClass,
    variables,
    className,
    style,
    active,
    disabled,
    itemAction,
    flexFill,
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
        style: finalStyle,
        disabled: Component === 'button' && disabled ? true : undefined,
      },
      isValueValid,
    );
  }, [Component, active, className, disabled, dropOldClass, flexFill, itemAction, style, variables, variant]);

  return <Component {...rest} {...renderOptions} />;
};

ListGroupItem.displayName = 'BRL.ListGroupItem';

export default ListGroupItem;
