import { type ElementType, useMemo, useState } from 'react';

import type { ListGroupOption, ListGroupProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';
import ListGroupItem from './list-group-item.tsx';

interface IOption extends ListGroupOption {
  id: number | string;
}

const ListGroup = function ListGroup<T extends ElementType = 'div' | 'ol' | 'ul'>(props: ListGroupProps<T>) {
  const {
    as: Component = 'ul',
    className,
    dropOldClass,
    flush,
    horizontal,
    itemAction,
    numbered,
    options: defaultOptions,
    style,
    variables,
    variant,
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
            active={item.active}
            disabled={item.disabled}
            flexFill={item.flexFill}
            itemAction={item.itemAction || isActive || itemAction}
            key={item.id}
            variant={item.variant}
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
