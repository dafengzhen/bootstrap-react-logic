import { type ElementType, useMemo } from 'react';

import type { TableCaptionProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const TableCaption = function TableCaption<T extends ElementType = 'caption'>(props: TableCaptionProps<T>) {
  const { as: Component = 'caption', dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && '', className);
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
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

TableCaption.displayName = 'BRL.TableCaption';

export default TableCaption;
