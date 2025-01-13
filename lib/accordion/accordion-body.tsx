import { type ElementType, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type { AccordionBodyProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const AccordionBody = function AccordionBody<T extends ElementType = 'div'>(props: AccordionBodyProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    children,
    className,
    dropOldClass,
    onChange,
    show: showByDefault = true,
    style,
    variables,
    ...rest
  } = props;

  const [show, setShow] = useState(false);
  const [collapse, setCollapse] = useState(true);
  const [collapsing, setCollapsing] = useState(false);
  const [collapseHeight, setCollapseHeight] = useState<'auto' | number>('auto');
  const bodyElement = useRef<HTMLDivElement | null>(null);

  const renderOptions = useMemo(() => {
    const finalClass = classx(
      !dropOldClass && 'accordion-collapse',
      collapsing && 'collapsing',
      collapse && 'collapse',
      show && 'show',
      className,
    );
    const finalStyle = stylex(
      (_, key) => ({ tKey: convertBsKeyToVar(key) }),
      {
        height: typeof collapseHeight === 'number' && collapseHeight,
      },
      variables,
      style,
    );

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, collapse, collapseHeight, collapsing, dropOldClass, show, style, variables]);

  const onTransitionEnd = useCallback(() => {
    setCollapsing(false);
    setCollapse(true);
    onChange?.(show);
  }, [onChange, show]);

  useEffect(() => {
    if (show) {
      setCollapseHeight(bodyElement.current?.offsetHeight || 'auto');
    } else {
      setCollapseHeight('auto');
    }
  }, [show]);

  useEffect(() => {
    if (showByDefault) {
      setCollapsing(true);
      setCollapse(true);
      setShow(true);
    } else {
      setCollapsing(true);
      setCollapse(false);
      setShow(false);
    }
  }, [showByDefault]);

  return (
    <Component {...rest} {...renderOptions} onTransitionEnd={onTransitionEnd}>
      <div className="accordion-body" ref={bodyElement}>
        {children}
      </div>
    </Component>
  );
};

AccordionBody.displayName = 'BRL.AccordionBody';

export default AccordionBody;
