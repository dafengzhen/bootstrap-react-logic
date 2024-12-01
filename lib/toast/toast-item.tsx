import { type ElementType, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type { ToastItemProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';
import ToastBody from './toast-body.tsx';
import ToastContainer from './toast-container.tsx';
import ToastHeader from './toast-header.tsx';

const ToastItem = function ToastItem<T extends ElementType = 'div'>(props: ToastItemProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    autohide = true,
    body,
    bodyProps,
    className,
    customContent,
    delay = 5000,
    dropOldClass,
    fade = true,
    header,
    headerProps,
    onChange: onChangeByDefault,
    style,
    variables,
    visible: visibleByDefault = false,
    ...rest
  } = props;
  const [show, setShow] = useState(false);
  const [showing, setShowing] = useState(false);
  const element = useRef<HTMLDivElement | null>(null);

  const renderOptions = useMemo(() => {
    const finalClass = classx(
      !dropOldClass && 'toast',
      fade && 'fade',
      show && 'show',
      showing && 'showing',
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, fade, show, showing, style, variables]);

  const onChange = useCallback(
    (value: boolean) => {
      onChangeByDefault?.(value);
    },
    [onChangeByDefault],
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout | number | string | undefined;
    if (autohide && show) {
      timeout = setTimeout(() => {
        onChange(false);
      }, delay);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [autohide, delay, onChange, show]);

  useEffect(() => {
    if (!fade) {
      setShow(visibleByDefault);
      return;
    }

    const currentElement = element.current;
    if (!currentElement) {
      return;
    }

    const onTransitionend = () => {
      if (visibleByDefault) {
        setShowing(false);
      } else {
        setShowing(false);
        setShow(false);
      }
    };

    currentElement.addEventListener('transitionend', onTransitionend);

    let frame: number;
    if (visibleByDefault) {
      setShow(true);
      setShowing(true);
      frame = requestAnimationFrame(() => setShowing(false));
    } else if (show) {
      setShow(true);
      setShowing(true);
    }

    return () => {
      currentElement.removeEventListener('transitionend', onTransitionend);

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [fade, show, visibleByDefault]);

  return (
    <Component {...rest} {...renderOptions} ref={element}>
      {customContent ? (
        customContent
      ) : (
        <>
          {header && <ToastHeader {...headerProps}>{header}</ToastHeader>}
          {body && <ToastBody {...bodyProps}>{body}</ToastBody>}
        </>
      )}
    </Component>
  );
};

ToastItem.Header = ToastHeader;

ToastItem.Body = ToastBody;

ToastItem.Container = ToastContainer;

ToastItem.displayName = 'BRL.ToastItem';

export default ToastItem;
