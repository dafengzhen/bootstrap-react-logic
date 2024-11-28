import { type ElementType, useMemo, useState } from 'react';

import type { PaginationBasicProps, PaginationOption } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';
import PaginationItem from './pagination-item.tsx';
import PaginationLink from './pagination-link.tsx';
import PaginationNav from './pagination-nav.tsx';
import PaginationSpan from './pagination-span.tsx';

interface IOption extends PaginationOption {
  id: number | string;
}

const generateInitialOptions = (options: PaginationOption[] = []): IOption[] =>
  options.map((item, index) => ({
    ...item,
    id: item.id ?? index,
  }));

const PaginationBasic = function PaginationBasic<T extends ElementType = 'ul'>(props: PaginationBasicProps<T>) {
  const {
    alignment,
    as: Component = 'ul' as ElementType,
    className,
    dropOldClass,
    navProps,
    options: defaultOptions,
    size,
    style,
    variables,
    ...rest
  } = props;
  const [options] = useState<IOption[]>(generateInitialOptions(defaultOptions));

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'pagination',
      size && `pagination-${size}`,
      alignment && `justify-content-${alignment}`,
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
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

PaginationBasic.Item = PaginationItem;

PaginationBasic.Nav = PaginationNav;

PaginationBasic.Link = PaginationLink;

PaginationBasic.Span = PaginationSpan;

PaginationBasic.displayName = 'BRL.PaginationBasic';

export default PaginationBasic;
