import { type ElementType, useMemo } from 'react';

import type { ListGroupItemProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, stylex } from '../tools';

const ListGroupItem = function ListGroupItem<T extends ElementType = 'button' | 'li' | 'a'>(
  props: ListGroupItemProps<T>,
) {
  const {
    as: Component = 'li' as ElementType,
    dropOldClass,
    itemAction,
    className,
    variables,
    disabled,
    flexFill,
    variant,
    active,
    style,
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
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return filterOptions(
      {
        disabled: Component === 'button' && disabled ? true : undefined,
        className: finalClass,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [Component, active, className, disabled, dropOldClass, flexFill, itemAction, style, variables, variant]);

  return <Component {...rest} {...renderOptions} />;
};

ListGroupItem.displayName = 'BRL.ListGroupItem';

export default ListGroupItem;
