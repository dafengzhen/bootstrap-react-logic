import { type ElementType, type MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type { OffcanvasBackdropProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, getScrollbarWidth, stylex } from '../tools';

const OffcanvasBackdrop = function OffcanvasBackdrop<T extends ElementType = 'div'>(props: OffcanvasBackdropProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    backdrop,
    className,
    dropOldClass,
    fade = true,
    onChange: onChangeByDefault,
    scroll,
    style,
    variables,
    visible: visibleByDefault = false,
    ...rest
  } = props;

  const [visible, setVisible] = useState(visibleByDefault);
  const [show, setShow] = useState(false);
  const element = useRef<HTMLDivElement | null>(null);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'offcanvas-backdrop', fade && 'fade', show && 'show', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, fade, show, style, variables]);

  const onClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (backdrop === 'static') {
        return;
      }

      setShow(false);
      onChangeByDefault?.(false, e);
    },
    [backdrop, onChangeByDefault],
  );

  useEffect(() => {
    if (!fade) {
      setVisible(visibleByDefault);
      setShow(visibleByDefault);
      return;
    }

    if (visibleByDefault && !visible) {
      setVisible(true);
      return;
    }

    const currentElement = element.current;
    if (!currentElement) {
      return;
    }

    const onTransitionend = () => {
      if (!visibleByDefault) {
        if (!scroll) {
          document.body.classList.remove('overflow-hidden');
          document.body.style.removeProperty('padding-right');
        }
        setVisible(false);
      }
    };

    currentElement.addEventListener('transitionend', onTransitionend);

    let frame: number;
    if (visibleByDefault) {
      if (!scroll) {
        document.body.style.setProperty('padding-right', getScrollbarWidth('px') as string);
        document.body.classList.add('overflow-hidden');
      }
      frame = requestAnimationFrame(() => setShow(true));
    } else {
      setShow(false);
    }

    return () => {
      currentElement.removeEventListener('transitionend', onTransitionend);

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [fade, scroll, visible, visibleByDefault]);

  return visible && <Component {...rest} {...renderOptions} onClick={onClick} ref={element} />;
};

OffcanvasBackdrop.displayName = 'BRL.OffcanvasBackdrop';

export default OffcanvasBackdrop;
