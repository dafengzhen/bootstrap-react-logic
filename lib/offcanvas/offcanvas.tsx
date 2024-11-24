import { type ElementType, type MouseEvent, useCallback, useEffect, useState, useMemo, useRef } from 'react';

import type { OffcanvasProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';
import OffcanvasBackdrop from './offcanvas-backdrop.tsx';
import OffcanvasHeader from './offcanvas-header.tsx';
import OffcanvasTitle from './offcanvas-title.tsx';
import OffcanvasBody from './offcanvas-body.tsx';

const Offcanvas = function Offcanvas<T extends ElementType = 'div'>(props: OffcanvasProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    visible: visibleByDefault = false,
    onChange: onChangeByDefault,
    backdrop = true,
    dropOldClass,
    fade = true,
    headerProps,
    responsive,
    titleProps,
    bodyProps,
    className,
    placement,
    variables,
    header,
    scroll,
    style,
    title,
    body,
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
              data-bs-dismiss="offcanvas"
              className="btn-close"
              aria-label="Close"
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
          onChange={onChangeBackdrop}
          backdrop={backdrop}
          visible={visible}
          scroll={scroll}
          fade={fade}
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
