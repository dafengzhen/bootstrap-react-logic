import { type ElementType, type MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type { AlertProps } from './types.ts';

import Button from '../button/button.tsx';
import {
  clsxStyle,
  clsxUnique,
  convertBsKeyToVar,
  filterOptions,
  initializeLogger,
  isValueValid,
  mergeProps,
} from '../tools';
import AlertHeading from './alert-heading.tsx';
import AlertLink from './alert-link.tsx';

const { logWarning } = initializeLogger();

const DEFAULTS = {
  clickToClose: true,
};

const useAlertVisibility = (props: {
  clickToClose?: boolean;
  dismissible?: boolean;
  fade?: boolean;
  onClose?: (close?: () => void) => void;
  visible?: boolean;
}) => {
  const { clickToClose, dismissible, fade, onClose, visible } = props;
  const [isVisible, setIsVisible] = useState(!fade && typeof visible === 'boolean' ? visible : true);
  const [isShowing, setIsShowing] = useState(false);
  const alertElement = useRef<HTMLDivElement | null>(null);
  const isInit = useRef(false);

  if (!isInit.current) {
    isInit.current = true;
    if (typeof visible === 'boolean' && dismissible && clickToClose && typeof onClose !== 'function') {
      logWarning({
        component: 'Alert',
        message:
          "When using 'visible' and 'dismissible' to control the Alert component, please manually handle the close event of the dismissible close button to avoid inconsistencies with the 'visible' state.",
        param: 'visible',
      });
    }
  }

  const initiateClose = useCallback(() => {
    if (fade) {
      setIsShowing(false);
    } else {
      setIsVisible(false);
    }
  }, [fade]);

  const handleClose = useCallback(() => {
    if (typeof visible === 'boolean' && dismissible) {
      onClose?.();
    } else {
      if (clickToClose) {
        initiateClose();
        onClose?.();
      } else {
        onClose?.(initiateClose);
      }
    }
  }, [clickToClose, dismissible, initiateClose, onClose, visible]);

  useEffect(() => {
    if (typeof visible === 'boolean') {
      if (fade) {
        if (visible) {
          setIsVisible(true);
        } else {
          setIsShowing(false);
        }
      } else {
        setIsVisible(visible);
      }
    } else {
      if (fade) {
        setIsShowing(true);
      }
    }
  }, [fade, visible]);

  useEffect(() => {
    if (!fade) {
      return;
    }

    const element = alertElement.current;
    if (element) {
      const onTransitionEnd = () => {
        if (typeof visible === 'boolean') {
          if (!visible) {
            setIsVisible(false);
          }
        } else if (!isShowing && isVisible) {
          setIsVisible(false);
        }
      };

      element.addEventListener('transitionend', onTransitionEnd);

      if (typeof visible === 'boolean' && visible) {
        requestAnimationFrame(() => {
          setIsShowing(true);
        });
      }

      return () => element.removeEventListener('transitionend', onTransitionEnd);
    }
  }, [fade, visible, isVisible, isShowing]);

  return { alertElement, handleClose, isShowing, isVisible };
};

const Alert = function Alert<T extends ElementType = 'div'>(props: AlertProps<T>) {
  const {
    as: Component = 'div',
    className,
    clickToClose = DEFAULTS.clickToClose,
    closeButton,
    closeButtonProps,
    dismissible,
    dropOldClass,
    fade,
    onClose,
    style,
    variables,
    variant,
    visible,
    ...rest
  } = props;

  const { alertElement, handleClose, isShowing, isVisible } = useAlertVisibility({
    clickToClose,
    dismissible,
    fade,
    onClose,
    visible,
  });

  const onClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      handleClose();
      closeButtonProps?.onClick?.(e);
    },
    [closeButtonProps, handleClose],
  );

  const renderOptions = useMemo(() => {
    const finalClassName = clsxUnique(
      !dropOldClass && 'alert',
      variant && `alert-${variant}`,
      dismissible && 'alert-dismissible',
      fade && 'fade',
      isShowing && 'show',
      className,
    );
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    return filterOptions(
      {
        className: finalClassName,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [className, dismissible, dropOldClass, fade, isShowing, style, variables, variant]);

  return (
    isVisible && (
      <Component {...rest} {...renderOptions} ref={alertElement}>
        {props.children}
        {dismissible &&
          (closeButton ? (
            closeButton({ close: handleClose })
          ) : (
            <Button
              btnClose
              {...mergeProps(closeButtonProps, {
                onClick: (instance: MouseEvent<HTMLButtonElement>) => onClick(instance),
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
