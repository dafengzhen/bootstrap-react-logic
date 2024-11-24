import { type ElementType, type MouseEvent, useCallback, useState, useMemo } from 'react';

import type { BreadcrumbOption, BreadcrumbProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';
import BreadcrumbBasic from './breadcrumb-basic.tsx';
import BreadcrumbItem from './breadcrumb-item.tsx';

const Breadcrumb = function Breadcrumb<T extends ElementType = 'nav'>(props: BreadcrumbProps<T>) {
  const {
    onClick: onClickByDefault,
    'aria-label': ariaLabel,
    options: defaultOptions,
    as: Component = 'nav',
    dropOldClass,
    className,
    variables,
    style,
    ...rest
  } = props;
  const initialOptions = (defaultOptions ?? []).map((item, index) => ({
    ...item,
    id: item.id ?? index,
  }));
  const [options] = useState<({ id: number | string } & BreadcrumbOption)[]>(initialOptions);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && '', className);
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    const finalAriaLabel = ariaLabel ? ariaLabel : 'breadcrumb';

    return filterOptions(
      {
        'aria-label': finalAriaLabel,
        className: finalClass,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [ariaLabel, className, dropOldClass, style, variables]);

  const onClick = useCallback(
    (index: number, e: MouseEvent<HTMLLIElement>) => {
      const option = options[index];
      onClickByDefault?.(option.id, e);
    },
    [onClickByDefault, options],
  );

  return (
    <Component {...rest} {...renderOptions}>
      <BreadcrumbBasic>
        {options.map((item, index) => {
          return (
            <BreadcrumbItem
              onClick={(event: MouseEvent<HTMLLIElement>) => onClick(index, event)}
              active={item.active}
              key={item.id}
            >
              {item.title}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbBasic>
    </Component>
  );
};

Breadcrumb.displayName = 'BRL.Breadcrumb';

export default Breadcrumb;
