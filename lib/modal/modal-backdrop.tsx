import { type ElementType, useEffect, useMemo, useState } from 'react';

import type { ModalBackdropProps } from './types.ts';

import { classx, convertBsKeyToVar, getScrollbarWidth, stylex } from '../tools';

const ModalBackdrop = function ModalBackdrop<T extends ElementType = 'div'>(props: ModalBackdropProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    className,
    dropOldClass,
    style,
    toggle,
    variables,
    visible: visibleByDefault = false,
    ...rest
  } = props;

  const [fade] = useState(true);
  const [show, setShow] = useState(false);

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'modal-backdrop', fade && 'fade', show && 'show', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, fade, show, style, variables]);

  useEffect(() => {
    if (visibleByDefault) {
      document.body.style.setProperty('padding-right', getScrollbarWidth('px') as string);
      document.body.classList.add('overflow-hidden');
    }

    setShow(visibleByDefault);

    return () => {
      if (!toggle) {
        document.body.classList.remove('overflow-hidden');
        document.body.style.removeProperty('padding-right');
      }
    };
  }, [toggle, visibleByDefault]);

  return (
    <Component
      {...rest}
      {...renderOptions}
      onTransitionEnd={() => {
        if (!visibleByDefault) {
          if (!toggle) {
            document.body.classList.remove('overflow-hidden');
            document.body.style.removeProperty('padding-right');
          }

          setShow(false);
        }
      }}
    />
  );
};

ModalBackdrop.displayName = 'BRL.ModalBackdrop';

export default ModalBackdrop;
