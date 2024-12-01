import { type ElementType, useMemo } from 'react';

import type { AccordionItemProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const AccordionItem = function AccordionItem<T extends ElementType = 'div'>(props: AccordionItemProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'accordion-item', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

AccordionItem.displayName = 'BRL.AccordionItem';

export default AccordionItem;
