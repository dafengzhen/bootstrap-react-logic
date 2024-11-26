import { type ElementType, type MouseEvent, useCallback, useEffect, useState, useMemo, useRef } from 'react';

import type { AlertProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, mergeProps, stylex } from '../tools';
import AlertHeading from './alert-heading.tsx';
import Button from '../button/button.tsx';
import AlertLink from './alert-link.tsx';

const DEFAULTS = {
  clickToClose: true,
};

const useAlertVisibility = (props: {
  onVisibleChange?: (visible: boolean) => void;
  clickToClose?: boolean;
  dismissible?: boolean;
  visible?: boolean;
  fade?: boolean;
}) => {
  const { onVisibleChange, clickToClose, dismissible, visible, fade } = props;
  const [isVisible, setIsVisible] = useState(!fade && typeof visible === 'boolean' ? visible : true);
  const [isShowing, setIsShowing] = useState(false);
  const alertElement = useRef<HTMLDivElement | null>(null);

  const initiateClose = useCallback(() => {
    if (fade) {
      setIsShowing(false);
    } else {
      setIsVisible(false);
    }
  }, [fade]);

  const handleClose = useCallback(() => {
    if (typeof visible === 'boolean' && dismissible) {
      onVisibleChange?.(!visible);
    } else {
      if (clickToClose) {
        initiateClose();
        onVisibleChange?.(!visible);
      } else {
        onVisibleChange?.(!visible);
      }
    }
  }, [clickToClose, dismissible, initiateClose, onVisibleChange, visible]);

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
    clickToClose = DEFAULTS.clickToClose,
    as: Component = 'div' as ElementType,
    closeButtonProps,
    onVisibleChange,
    dropOldClass,
    closeButton,
    dismissible,
    className,
    variables,
    variant,
    visible,
    style,
    fade,
    ...rest
  } = props;

  const { alertElement, handleClose, isShowing, isVisible } = useAlertVisibility({
    onVisibleChange,
    clickToClose,
    dismissible,
    visible,
    fade,
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
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClassName,
      style: finalStyle,
    };
  }, [className, dismissible, dropOldClass, fade, isShowing, style, variables, variant]);

  return (
    isVisible && (
      <Component {...rest} {...renderOptions} ref={alertElement}>
        {props.children}
        {dismissible &&
          (closeButton ? (
            closeButton
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
