import { type ElementType, type MouseEvent, useCallback, useMemo, useState } from 'react';
import type { BreadcrumbOption, BreadcrumbProps } from './types.ts';
import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';
import BreadcrumbBasic from './breadcrumb-basic.tsx';
import BreadcrumbItem from './breadcrumb-item.tsx';

const Breadcrumb = function Breadcrumb<T extends ElementType = 'nav'>(props: BreadcrumbProps<T>) {
  const {
    as: Component = 'nav',
    dropOldClass,
    variables,
    className,
    style,
    options: defaultOptions,
    'aria-label': ariaLabel,
    onClick: onClickByDefault,
    ...rest
  } = props;
  const initialOptions = (defaultOptions ?? []).map((item, index) => ({
    ...item,
    id: item.id ?? index,
  }));
  const [options] = useState<({ id: string | number } & BreadcrumbOption)[]>(initialOptions);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && '', className);
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    const finalAriaLabel = ariaLabel ? ariaLabel : 'breadcrumb';

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
        'aria-label': finalAriaLabel,
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
              key={item.id}
              active={item.active}
              onClick={(event: MouseEvent<HTMLLIElement>) => onClick(index, event)}
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
