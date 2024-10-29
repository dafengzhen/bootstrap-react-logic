import { type ElementType, useMemo } from 'react';
import type { AccordionBasicProps } from './types.ts';
import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';
import AccordionItem from './accordion-item.tsx';
import AccordionHeader from './accordion-header.tsx';
import AccordionBody from './accordion-body.tsx';

const AccordionBasic = function AccordionBasic<T extends ElementType = 'div'>(props: AccordionBasicProps<T>) {
  const { as: Component = 'div', dropOldClass, variables, className, style, flush, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'accordion', flush && 'accordion-flush', className);
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
  }, [className, dropOldClass, flush, style, variables]);

  return <Component {...rest} {...renderOptions} />;
};

AccordionBasic.Item = AccordionItem;

AccordionBasic.Header = AccordionHeader;

AccordionBasic.Body = AccordionBody;

AccordionBasic.displayName = 'BRL.AccordionBasic';

export default AccordionBasic;