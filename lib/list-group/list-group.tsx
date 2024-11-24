import { type ElementType, useState, useMemo } from 'react';

import type { ListGroupOption, ListGroupProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';
import ListGroupItem from './list-group-item.tsx';

interface IOption extends ListGroupOption {
  id: number | string;
}

const ListGroup = function ListGroup<T extends ElementType = 'div' | 'ol' | 'ul'>(props: ListGroupProps<T>) {
  const {
    as: Component = 'ul' as ElementType,
    options: defaultOptions,
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
