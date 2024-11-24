import { type ElementType, useState, useMemo } from 'react';

import type { PaginationOption, PaginationProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';
import PaginationItem from './pagination-item.tsx';
import PaginationLink from './pagination-link.tsx';
import PaginationNav from './pagination-nav.tsx';

interface IOption extends PaginationOption {
  id: number | string;
}

const Pagination = function Pagination<T extends ElementType = 'ul'>(props: PaginationProps<T>) {
  const {
    options: defaultOptions,
    as: Component = 'ul',
    dropOldClass,
    alignment,
    className,
    variables,
    navProps,
    style,
    size,
    ...rest
  } = props;
  const initialOptions = (defaultOptions ?? []).map((item, index) => ({
    ...item,
    id: item.id ?? index,
  }));
  const [options] = useState<IOption[]>(initialOptions);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'pagination',
      size && `pagination-${size}`,
      alignment && `justify-content-${alignment}`,
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
  }, [alignment, className, dropOldClass, size, style, variables]);

  return (
    <PaginationNav {...navProps}>
      <Component {...rest} {...renderOptions}>
        {options.map((item) => {
          return (
            <PaginationItem {...item.itemProps} disabled={item.disabled} active={item.active} key={item.id}>
              <PaginationLink href={item.href} {...item.linkProps}>
                {item.link}
              </PaginationLink>
            </PaginationItem>
          );
        })}
      </Component>
    </PaginationNav>
  );
};

Pagination.Item = PaginationItem;

Pagination.Nav = PaginationNav;

Pagination.Link = PaginationLink;

Pagination.displayName = 'BRL.Pagination';

export default Pagination;
