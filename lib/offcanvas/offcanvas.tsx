import { type ElementType, type MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type { OffcanvasProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, stylex } from '../tools';
import OffcanvasBackdrop from './offcanvas-backdrop.tsx';
import OffcanvasBody from './offcanvas-body.tsx';
import OffcanvasHeader from './offcanvas-header.tsx';
import OffcanvasTitle from './offcanvas-title.tsx';

const Offcanvas = function Offcanvas<T extends ElementType = 'div'>(props: OffcanvasProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    backdrop = true,
    body,
    bodyProps,
    className,
    dropOldClass,
    fade = true,
    header,
    headerProps,
    onChange: onChangeByDefault,
    placement,
    responsive,
    scroll,
    style,
    title,
    titleProps,
    variables,
    visible: visibleByDefault = false,
    ...rest
  } = props;

  const [visible, setVisible] = useState(visibleByDefault);
  const element = useRef<HTMLDivElement | null>(null);
  const [showing, setShowing] = useState(false);
  const [hiding, setHiding] = useState(false);
  const [show, setShow] = useState(false);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && (responsive ? `offcanvas-${responsive}` : 'offcanvas'),
      placement && `offcanvas-${placement}`,
      showing && 'showing',
      hiding && 'hiding',
      show && 'show',
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, hiding, placement, responsive, show, showing, style, variables]);

  const onClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      setVisible(false);
      onChangeByDefault?.(false, e);
    },
    [onChangeByDefault],
  );

  const onChangeBackdrop = useCallback(
    (value: boolean, e: MouseEvent<HTMLElement>) => {
      setVisible(value);
      onChangeByDefault?.(value, e);
    },
    [onChangeByDefault],
  );

  useEffect(() => {
    const currentElement = element.current;
    if (!currentElement) {
      return;
    }

    const onTransitionend = () => {
      if (visible) {
        setShowing(false);
      } else {
        setHiding(false);
      }
    };

    currentElement.addEventListener('transitionend', onTransitionend);

    if (visible) {
      setShow(true);
      setShowing(true);
    } else if (show) {
      setShow(false);
      setHiding(true);
    }

    return () => currentElement.removeEventListener('transitionend', onTransitionend);
  }, [show, visible]);
  useEffect(() => {
    setVisible(visibleByDefault);
  }, [visibleByDefault]);

  return (
    <>
      <Component {...rest} {...renderOptions} ref={element}>
        {header ? (
          header
        ) : title ? (
          <OffcanvasHeader {...headerProps}>
            <OffcanvasTitle {...titleProps}>{title}</OffcanvasTitle>
            <button
              aria-label="Close"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              onClick={onClick}
              type="button"
            ></button>
          </OffcanvasHeader>
        ) : (
          <></>
        )}

        {body && <OffcanvasBody {...bodyProps}>{body}</OffcanvasBody>}
      </Component>

      {backdrop && (
        <OffcanvasBackdrop
          backdrop={backdrop}
          fade={fade}
          onChange={onChangeBackdrop}
          scroll={scroll}
          visible={visible}
        ></OffcanvasBackdrop>
      )}
    </>
  );
};

Offcanvas.Header = OffcanvasHeader;

Offcanvas.Title = OffcanvasTitle;

Offcanvas.Body = OffcanvasBody;

Offcanvas.Backdrop = OffcanvasBackdrop;

Offcanvas.displayName = 'BRL.Offcanvas';

export default Offcanvas;
