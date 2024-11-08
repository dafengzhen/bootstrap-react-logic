import { type ElementType, useMemo, useState } from 'react';
import type { ListGroupOption, ListGroupProps } from './types.ts';
import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';
import ListGroupItem from './list-group-item.tsx';

interface IOption extends ListGroupOption {
  id: string | number;
}

const ListGroup = function ListGroup<T extends ElementType = 'ul' | 'ol' | 'div'>(props: ListGroupProps<T>) {
  const {
    as: Component = 'ul',
    dropOldClass,
    variables,
    className,
    style,
    options: defaultOptions,
    flush,
    numbered,
    horizontal,
    variant,
    itemAction,
    ...rest
  } = props;
  const initialOptions = (defaultOptions ?? []).map((item, index) => ({
    ...item,
    id: item.id ?? index,
  }));
  const [options] = useState<({ id: string | number } & IOption)[]>(initialOptions);

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
            key={item.id}
            active={item.active}
            itemAction={item.itemAction || isActive || itemAction}
            disabled={item.disabled}
            flexFill={item.flexFill}
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
