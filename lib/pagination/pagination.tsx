import { type ElementType, type MouseEvent, useCallback, useState, useMemo } from 'react';

import type { PaginationProps } from './types.ts';

import {
  BiChevronDoubleRight,
  BiChevronDoubleLeft,
  generatePagination,
  convertBsKeyToVar,
  BiThreeDots,
  clsxUnique,
  mergeProps,
  stylex,
} from '../tools';
import PaginationBasic from './pagination-basic.tsx';
import PaginationItem from './pagination-item.tsx';
import PaginationLink from './pagination-link.tsx';
import PaginationSpan from './pagination-span.tsx';
import PaginationNav from './pagination-nav.tsx';

interface IOption {
  value: number | '<' | '>';
  id: number | string;
  active: boolean;
  hover: boolean;
  dots: boolean;
}

const generateOptions = (
  currentPage: number,
  total: number,
  maxVisible: number,
  alwaysShowEllipsis: boolean,
): IOption[] =>
  generatePagination(currentPage, total, maxVisible, alwaysShowEllipsis).map((item, index) => ({
    dots: typeof item === 'string',
    active: currentPage === item,
    hover: false,
    value: item,
    id: index,
  }));

const Pagination = function Pagination<T extends ElementType = 'ul'>(props: PaginationProps<T>) {
  const {
    previous: defaultPrevious = true,
    alwaysShowEllipsis = false,
    onChange: defaultOnChange,
    next: defaultNext = true,
    option: defaultOption,
    as: Component = 'ul',
    maxVisible = 4,
    previousOption,
    dropOldClass,
    nextOption,
    alignment,
    className,
    variables,
    total = 0,
    navProps,
    page = 0,
    style,
    size,
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
    (value: number | '<' | '>', type: 'previous' | 'next' | 'page' | '<' | '>') => {
      const currentPage = (dynamicOptions.find((option) => option.active)?.value as undefined | number) ?? 0;

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
                onMouseLeave={() =>
                  setDynamicOptions((prev) => {
                    prev[index].hover = false;
                    return [...prev];
                  })
                }
                onMouseEnter={() =>
                  setDynamicOptions((prev) => {
                    prev[index].hover = true;
                    return [...prev];
                  })
                }
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  handlePageClick(item.value, item.value as '<' | '>');
                }}
                href=""
              >
                {item.hover ? item.value === '<' ? <BiChevronDoubleLeft /> : <BiChevronDoubleRight /> : <BiThreeDots />}
              </PaginationLink>
            ) : item.active && !defaultOption?.clickableActive ? (
              <PaginationSpan {...defaultOption?.spanProps}>{item.value}</PaginationSpan>
            ) : (
              <PaginationLink
                {...defaultOption?.linkProps}
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  handlePageClick(item.value, 'page');
                }}
                href=""
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
