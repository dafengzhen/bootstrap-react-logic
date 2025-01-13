import { type ElementType, useMemo } from 'react';

import type { AccordionBasicProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';
import AccordionBody from './accordion-body.tsx';
import AccordionHeader from './accordion-header.tsx';
import AccordionItem from './accordion-item.tsx';

const AccordionBasic = function AccordionBasic<T extends ElementType = 'div'>(props: AccordionBasicProps<T>) {
  const { as: Component = 'div' as ElementType, className, dropOldClass, flush, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'accordion', flush && 'accordion-flush', className);
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
