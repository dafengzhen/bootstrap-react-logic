import { type ElementType, useMemo } from 'react';

import type { AccordionBasicProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';
import AccordionHeader from './accordion-header.tsx';
import AccordionBody from './accordion-body.tsx';
import AccordionItem from './accordion-item.tsx';

const AccordionBasic = function AccordionBasic<T extends ElementType = 'div'>(props: AccordionBasicProps<T>) {
  const { as: Component = 'div', dropOldClass, className, variables, flush, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'accordion', flush && 'accordion-flush', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, flush, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

AccordionBasic.Item = AccordionItem;

AccordionBasic.Header = AccordionHeader;

AccordionBasic.Body = AccordionBody;

AccordionBasic.displayName = 'BRL.AccordionBasic';

export default AccordionBasic;
