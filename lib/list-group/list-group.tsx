import { type ElementType, useMemo, useState } from 'react';

import type { ListGroupOption, ListGroupProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';
import ListGroupItem from './list-group-item.tsx';

interface IOption extends ListGroupOption {
  id: number | string;
}

const ListGroup = function ListGroup<T extends ElementType = 'div' | 'ol' | 'ul'>(props: ListGroupProps<T>) {
  const {
    as: Component = 'ul' as ElementType,
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
  const [options] = useState<(IOption & { id: number | string })[]>(initialOptions);

  const renderOptions = useMemo(() => {
    const finalClass = classx(
      !dropOldClass && 'list-group',
      flush && 'list-group-flush',
      numbered && 'list-group-numbered',
      horizontal && `list-group-horizontal${typeof horizontal === 'boolean' ? '' : '-' + horizontal}`,
      variant && `list-group-item-${variant}`,
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
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
