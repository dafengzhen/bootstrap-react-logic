import { type ElementType, type MouseEvent, useCallback, useMemo, useState } from 'react';

import type { PaginationProps } from './types.ts';

import {
  BiChevronDoubleLeft,
  BiChevronDoubleRight,
  BiThreeDots,
  clsxUnique,
  convertBsKeyToVar,
  generatePagination,
  mergeProps,
  stylex,
} from '../tools';
import PaginationBasic from './pagination-basic.tsx';
import PaginationItem from './pagination-item.tsx';
import PaginationLink from './pagination-link.tsx';
import PaginationNav from './pagination-nav.tsx';
import PaginationSpan from './pagination-span.tsx';

interface IOption {
  active: boolean;
  dots: boolean;
  hover: boolean;
  id: number | string;
  value: '<' | '>' | number;
}

const generateOptions = (
  currentPage: number,
  total: number,
  maxVisible: number,
  alwaysShowEllipsis: boolean,
): IOption[] =>
  generatePagination(currentPage, total, maxVisible, alwaysShowEllipsis).map((item, index) => ({
    active: currentPage === item,
    dots: typeof item === 'string',
    hover: false,
    id: index,
    value: item,
  }));

const Pagination = function Pagination<T extends ElementType = 'ul'>(props: PaginationProps<T>) {
  const {
    alignment,
    alwaysShowEllipsis = false,
    as: Component = 'ul',
    className,
    dropOldClass,
    maxVisible = 4,
    navProps,
    next: defaultNext = true,
    nextOption,
    onChange: defaultOnChange,
    option: defaultOption,
    page = 0,
    previous: defaultPrevious = true,
    previousOption,
    size,
    style,
    total = 0,
    variables,
    ...rest
  } = props;

  const [dynamicOptions, setDynamicOptions] = useState<IOption[]>(
    generateOptions(page, total, maxVisible, alwaysShowEllipsis),
  );

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'pagination',
      size && `pagination-${size}`,
      alignment && `justify-content-${alignment}`,
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return { className: finalClass, style: finalStyle };
  }, [alignment, className, dropOldClass, size, style, variables]);

  const handlePageClick = useCallback(
    (value: '<' | '>' | number, type: '<' | '>' | 'next' | 'page' | 'previous') => {
      const currentPage = (dynamicOptions.find((option) => option.active)?.value as number | undefined) ?? 0;

      let newPage: number;
      if (value === '<') {
        newPage = Math.max(currentPage - maxVisible, 0);
      } else if (value === '>') {
        newPage = Math.min(currentPage + maxVisible, total);
      } else {
        newPage = value as number;
      }

      setDynamicOptions(generateOptions(newPage, total, maxVisible, alwaysShowEllipsis));
      defaultOnChange?.(newPage, type);
    },
    [alwaysShowEllipsis, defaultOnChange, dynamicOptions, maxVisible, total],
  );

  const getCurrentPage = useCallback(() => {
    const activeOption = dynamicOptions.find((option) => option.active);
    return activeOption ? (activeOption.value as number) : 0;
  }, [dynamicOptions]);

  if (total <= 0) {
    return;
  }

  return (
    <PaginationNav {...navProps}>
      <Component {...rest} {...renderOptions}>
        {defaultPrevious && (
          <PaginationItem
            {...previousOption?.itemProps}
            disabled={previousOption?.disabled ?? getCurrentPage() === dynamicOptions[0].value}
          >
            <PaginationLink
              {...mergeProps(previousOption?.linkProps, { href: previousOption?.href ?? '' })}
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                handlePageClick(getCurrentPage() - 1, 'previous');
              }}
            >
              {previousOption?.link ?? 'Previous'}
            </PaginationLink>
          </PaginationItem>
        )}

        {dynamicOptions.map((item, index) => (
          <PaginationItem {...defaultOption?.itemProps} active={item.active} key={item.id}>
            {item.dots ? (
              <PaginationLink
                {...defaultOption?.linkProps}
                href=""
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  handlePageClick(item.value, item.value as '<' | '>');
                }}
                onMouseEnter={() =>
                  setDynamicOptions((prev) => {
                    prev[index].hover = true;
                    return [...prev];
                  })
                }
                onMouseLeave={() =>
                  setDynamicOptions((prev) => {
                    prev[index].hover = false;
                    return [...prev];
                  })
                }
              >
                {item.hover ? item.value === '<' ? <BiChevronDoubleLeft /> : <BiChevronDoubleRight /> : <BiThreeDots />}
              </PaginationLink>
            ) : item.active && !defaultOption?.clickableActive ? (
              <PaginationSpan {...defaultOption?.spanProps}>{item.value}</PaginationSpan>
            ) : (
              <PaginationLink
                {...defaultOption?.linkProps}
                href=""
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  handlePageClick(item.value, 'page');
                }}
              >
                {item.value}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        {defaultNext && (
          <PaginationItem
            {...nextOption?.itemProps}
            disabled={nextOption?.disabled ?? getCurrentPage() === dynamicOptions[dynamicOptions.length - 1].value}
          >
            <PaginationLink
              {...mergeProps(nextOption?.linkProps, { href: nextOption?.href ?? '' })}
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                handlePageClick(getCurrentPage() + 1, 'next');
              }}
            >
              {nextOption?.link ?? 'Next'}
            </PaginationLink>
          </PaginationItem>
        )}
      </Component>
    </PaginationNav>
  );
};

Pagination.Basic = PaginationBasic;

Pagination.Item = PaginationItem;

Pagination.Nav = PaginationNav;

Pagination.Link = PaginationLink;

Pagination.Span = PaginationSpan;

Pagination.displayName = 'BRL.Pagination';

export default Pagination;
