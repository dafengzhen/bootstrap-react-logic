import { type ElementType, useCallback, useMemo, useState } from 'react';

import type { BreadcrumbOption, BreadcrumbProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';
import BreadcrumbBasic from './breadcrumb-basic.tsx';
import BreadcrumbItem from './breadcrumb-item.tsx';

interface IOption extends BreadcrumbOption {
  id: number | string;
}

const generateInitialOptions = (options: BreadcrumbOption[] = []): IOption[] =>
  options.map((item, index) => ({
    ...item,
    id: item.id ?? index,
  }));

const Breadcrumb = function Breadcrumb<T extends ElementType = 'nav'>(props: BreadcrumbProps<T>) {
  const {
    as: Component = 'nav' as ElementType,
    className,
    dropOldClass,
    onClick: onClickByDefault,
    options: defaultOptions,
    style,
    variables,
    ...rest
  } = props;

  const [options] = useState<IOption[]>(generateInitialOptions(defaultOptions));

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && '', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  const onClick = useCallback(
    (index: number) => {
      const option = options[index];
      onClickByDefault?.(option.id);
    },
    [onClickByDefault, options],
  );

  return (
    <Component {...rest} {...renderOptions}>
      <BreadcrumbBasic>
        {options.map((item, index) => {
          return (
            <BreadcrumbItem active={item.active} key={item.id} onClick={() => onClick(index)}>
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
