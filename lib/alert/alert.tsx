import { type ElementType, type MouseEvent, useCallback, useEffect, useMemo, useState } from 'react';

import type { AlertProps } from './types.ts';

import Button from '../button/button.tsx';
import { classx, convertBsKeyToVar, mergeProps, stylex } from '../tools';
import AlertHeading from './alert-heading.tsx';
import AlertLink from './alert-link.tsx';

const Alert = function Alert<T extends ElementType = 'div'>(props: AlertProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    children,
    className,
    clickToClose: clickToCloseByDefault = true,
    closeButton,
    closeButtonProps,
    dismissible,
    dropOldClass,
    onVisibleChange,
    style,
    variables,
    variant,
    visible: visibleByDefault = true,
    ...rest
  } = props;

  const [fade] = useState(true);
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  const renderOptions = useMemo(() => {
    const finalClass = classx(
      !dropOldClass && 'alert',
      variant && `alert-${variant}`,
      dismissible && 'alert-dismissible',
      fade && 'fade',
      show && 'show',
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dismissible, dropOldClass, fade, show, style, variables, variant]);

  const handleClose = useCallback(() => {
    if (dismissible) {
      if (clickToCloseByDefault) {
        setShow(false);
      }

      onVisibleChange?.(!visibleByDefault);
    }
  }, [clickToCloseByDefault, dismissible, onVisibleChange, visibleByDefault]);

  const onTransitionEnd = useCallback(() => {
    if (dismissible && !show) {
      setVisible(false);
      setIsMounted(false);
    }
  }, [dismissible, show]);

  useEffect(() => {
    setVisible(true);

    if (visible) {
      setShow(visibleByDefault);
    }
  }, [visible, visibleByDefault]);

  return (
    isMounted && (
      <Component {...rest} {...renderOptions} onTransitionEnd={onTransitionEnd}>
        {children}
        {dismissible &&
          (closeButton ? (
            closeButton
          ) : (
            <Button
              btnClose
              {...mergeProps(closeButtonProps, {
                onClick: (e: MouseEvent<HTMLButtonElement>) => {
                  handleClose();
                  closeButtonProps?.onClick?.(e);
                },
              })}
            />
          ))}
      </Component>
    )
  );
};

Alert.Link = AlertLink;

Alert.Heading = AlertHeading;

Alert.displayName = 'BRL.Alert';

export default Alert;
