import { type ElementType, useMemo } from 'react';

import type { TableCaptionProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const TableCaption = function TableCaption<T extends ElementType = 'caption'>(props: TableCaptionProps<T>) {
  const { as: Component = 'caption' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && '', className);
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
