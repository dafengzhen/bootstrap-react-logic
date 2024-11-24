import { type ElementType, useState, useMemo } from 'react';

import type { ListGroupOption, ListGroupProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';
import ListGroupItem from './list-group-item.tsx';

interface IOption extends ListGroupOption {
  id: number | string;
}

const ListGroup = function ListGroup<T extends ElementType = 'div' | 'ol' | 'ul'>(props: ListGroupProps<T>) {
  const {
    options: defaultOptions,
    as: Component = 'ul',
    dropOldClass,
    horizontal,
    itemAction,
    className,
    variables,
    numbered,
    variant,
    flush,
    style,
    ...rest
  } = props;
  const initialOptions = (defaultOptions ?? []).map((item, index) => ({
    ...item,
    id: item.id ?? index,
  }));
  const [options] = useState<({ id: number | string } & IOption)[]>(initialOptions);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'list-group',
      flush && 'list-group-flush',
      numbered && 'list-group-numbered',
      horizontal && `list-group-horizontal${typeof horizontal === 'boolean' ? '' : '-' + horizontal}`,
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
      },
      isValueValid,
    );
  }, [className, dropOldClass, flush, horizontal, numbered, style, variables, variant]);

  const isActive = useMemo(() => options.some((item) => item.active), [options]);

  return (
    <Component {...rest} {...renderOptions}>
      {options.map((item) => {
        return (
          <ListGroupItem
            {...item.props}
            itemAction={item.itemAction || isActive || itemAction}
            disabled={item.disabled}
            flexFill={item.flexFill}
            variant={item.variant}
            active={item.active}
            key={item.id}
          >
            {item.item}
          </ListGroupItem>
        );
      })}
    </Component>
  );
};

ListGroup.Item = ListGroupItem;

ListGroup.displayName = 'BRL.ListGroup';

export default ListGroup;
