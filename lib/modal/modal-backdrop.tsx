import { type ElementType, useEffect, useMemo, useRef, useState } from 'react';

import type { ModalBackdropProps } from './types.ts';

import { clsxUnique, convertBsKeyToVar, getScrollbarWidth, stylex } from '../tools';

const ModalBackdrop = function ModalBackdrop<T extends ElementType = 'div'>(props: ModalBackdropProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    className,
    dropOldClass,
    fade,
    style,
    toggle,
    variables,
    visible: visibleByDefault,
    ...rest
  } = props;

  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const element = useRef<HTMLDivElement | null>(null);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'modal-backdrop', fade && 'fade', show && 'show', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, fade, show, style, variables]);

  useEffect(() => {
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
        if (!toggle) {
          document.body.classList.remove('overflow-hidden');
          document.body.style.removeProperty('padding-right');
        }

        setVisible(false);
      }
    };

    currentElement.addEventListener('transitionend', onTransitionend);

    let frame: number;
    if (visibleByDefault) {
      document.body.style.setProperty('padding-right', getScrollbarWidth('px') as string);
      document.body.classList.add('overflow-hidden');
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
  }, [toggle, visible, visibleByDefault]);

  return visible && <Component {...rest} {...renderOptions} ref={element} />;
};

ModalBackdrop.displayName = 'BRL.ModalBackdrop';

export default ModalBackdrop;
