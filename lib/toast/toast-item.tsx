import { type ElementType, useCallback, useEffect, useMemo, useState } from 'react';

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
    header,
    headerProps,
    onVisibleChange: onVisibleChangeByDefault,
    style,
    variables,
    visible: visibleByDefault = true,
    ...rest
  } = props;

  const [fade] = useState(true);
  const [showing, setShowing] = useState(true);
  const [visible, setVisible] = useState(true);

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'toast show', fade && 'fade', showing && 'showing', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, fade, showing, style, variables]);

  const handleVisibilityChange = useCallback(
    (isVisible = false) => {
      setVisible(isVisible);
      onVisibleChangeByDefault?.(isVisible);
    },
    [onVisibleChangeByDefault],
  );

  const onTransitionEnd = useCallback(() => {
    if ((autohide && showing) || !visibleByDefault) {
      handleVisibilityChange();
    }
  }, [autohide, handleVisibilityChange, showing, visibleByDefault]);

  useEffect(() => {
    let timeout: NodeJS.Timeout | number | string | undefined;
    if (autohide && !showing) {
      timeout = setTimeout(() => {
        setShowing(true);
      }, delay);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [autohide, delay, showing]);

  useEffect(() => {
    if (visibleByDefault && !visible && !autohide) {
      setVisible(true);
    }

    if (visible) {
      setShowing(!visibleByDefault);

      return () => {
        if (!visibleByDefault) {
          handleVisibilityChange();
        }
      };
    }
  }, [autohide, handleVisibilityChange, visible, visibleByDefault]);

  return (
    visible && (
      <Component {...rest} {...renderOptions} onTransitionEnd={onTransitionEnd}>
        {customContent ? (
          customContent
        ) : (
          <>
            {header && <ToastHeader {...headerProps}>{header}</ToastHeader>}
            {body && <ToastBody {...bodyProps}>{body}</ToastBody>}
          </>
        )}
      </Component>
    )
  );
};

ToastItem.Header = ToastHeader;

ToastItem.Body = ToastBody;

ToastItem.Container = ToastContainer;

ToastItem.displayName = 'BRL.ToastItem';

export default ToastItem;
