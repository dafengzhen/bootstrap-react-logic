import { type ElementType, useEffect, useMemo, useRef, useState } from 'react';

import type { AccordionBodyProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';

const useAccordionBody = (showByDefault: boolean, isCollapsing: boolean, onChange?: (onChange: boolean) => void) => {
  const [show, setShow] = useState(showByDefault);
  const [visible, setVisible] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [collapsing, setCollapsing] = useState(false);
  const [collapseHeight, setCollapseHeight] = useState<number>(0);
  const collapseElement = useRef<HTMLDivElement | null>(null);
  const bodyElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setShow(showByDefault);
  }, [showByDefault]);

  useEffect(() => {
    if (!isCollapsing) {
      onChange?.(show);
      return;
    }

    const cElement = collapseElement.current;
    const bElement = bodyElement.current;
    if (cElement && bElement) {
      const onTransitionEnd = () => {
        setCollapsing(false);
        setCollapse(true);
        setVisible(show);
        onChange?.(show);
      };

      const offsetHeight = bElement.offsetHeight + '';
      const lastHeight = bElement.dataset.lastHeight;
      if (!lastHeight || (offsetHeight !== '0' && lastHeight !== offsetHeight)) {
        bElement.dataset.lastHeight = offsetHeight;
      }

      cElement.addEventListener('transitionend', onTransitionEnd);
      setCollapse(false);

      return () => cElement.removeEventListener('transitionend', onTransitionEnd);
    }
  }, [show, isCollapsing, onChange]);

  useEffect(() => {
    if (!isCollapsing) {
      return;
    }

    if (!collapse) {
      setVisible(false);
    }
  }, [collapse, isCollapsing]);

  useEffect(() => {
    if (!isCollapsing) {
      return;
    }

    if (!collapse && !visible) {
      const element = bodyElement.current;
      if (element) {
        const offsetHeight = element.offsetHeight;
        const lastHeight = element.dataset.lastHeight;
        const height = show ? (lastHeight ? Number(lastHeight) : offsetHeight) : 0;
        setCollapseHeight(height);
        setCollapsing(true);
      }
    }
  }, [collapse, visible, show, isCollapsing]);

  return {
    bodyElement,
    collapse,
    collapseElement,
    collapseHeight,
    collapsing,
    show,
    visible,
  };
};

const AccordionBody = function AccordionBody<T extends ElementType = 'div'>(props: AccordionBodyProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    children,
    className,
    collapsing: collapsingByDefault = true,
    dropOldClass,
    onChange,
    show: showByDefault = true,
    style,
    variables,
    ...rest
  } = props;

  const isCollapsing = collapsingByDefault === undefined || collapsingByDefault;
  const { bodyElement, collapse, collapseElement, collapseHeight, collapsing, show, visible } = useAccordionBody(
    showByDefault,
    isCollapsing,
    onChange,
  );

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'accordion-collapse',
      collapsing && 'collapsing',
      isCollapsing && collapse && 'collapse',
      isCollapsing && visible && 'show',
      !isCollapsing && (show ? 'collapse show' : 'collapse'),
      className,
    );
    const finalStyle = stylex(
      (_, key) => ({ tKey: convertBsKeyToVar(key) }),
      {
        height: isCollapsing && collapseHeight,
      },
      variables,
      style,
    );

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, collapse, collapseHeight, collapsing, dropOldClass, isCollapsing, show, style, variables, visible]);

  return (
    <Component {...rest} {...renderOptions} ref={collapseElement}>
      <div className="accordion-body" ref={bodyElement}>
        {children}
      </div>
    </Component>
  );
};

AccordionBody.displayName = 'BRL.AccordionBody';

export default AccordionBody;
