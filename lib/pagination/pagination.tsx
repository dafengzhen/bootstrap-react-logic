import { type ElementType, useMemo, useState } from 'react';

import type { PaginationOption, PaginationProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';
import PaginationItem from './pagination-item.tsx';
import PaginationLink from './pagination-link.tsx';
import PaginationNav from './pagination-nav.tsx';

interface IOption extends PaginationOption {
  id: number | string;
}

const Pagination = function Pagination<T extends ElementType = 'ul'>(props: PaginationProps<T>) {
  const {
    alignment,
    as: Component = 'ul',
    className,
    dropOldClass,
    navProps,
    options: defaultOptions,
    size,
    style,
    variables,
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
            <PaginationItem {...item.itemProps} active={item.active} disabled={item.disabled} key={item.id}>
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
