import { type ElementType, type MouseEvent, useCallback, useEffect, useState, useMemo, useRef } from 'react';

import type { OffcanvasBackdropProps } from './types.ts';

import { convertBsKeyToVar, getScrollbarWidth, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const OffcanvasBackdrop = function OffcanvasBackdrop<T extends ElementType = 'div'>(props: OffcanvasBackdropProps<T>) {
  const {
    visible: visibleByDefault = false,
    onChange: onChangeByDefault,
    as: Component = 'div',
    dropOldClass,
    fade = true,
    className,
    variables,
    backdrop,
    scroll,
    style,
    ...rest
  } = props;

  const [visible, setVisible] = useState(visibleByDefault);
  const [show, setShow] = useState(false);
  const element = useRef<HTMLDivElement | null>(null);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'offcanvas-backdrop', fade && 'fade', show && 'show', className);
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
