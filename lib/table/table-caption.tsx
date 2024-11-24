import { type ElementType, useMemo } from 'react';

import type { TableCaptionProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const TableCaption = function TableCaption<T extends ElementType = 'caption'>(props: TableCaptionProps<T>) {
  const { as: Component = 'caption' as ElementType, dropOldClass, className, variables, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && '', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

TableCaption.displayName = 'BRL.TableCaption';

export default TableCaption;
