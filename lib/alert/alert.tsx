import { type ElementType, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { AlertProps } from './types.ts';
import {
  AlertVariablesEnum,
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';
import AlertLink from './alert-link.tsx';
import AlertHeading from './alert-heading.tsx';

const DEFAULTS = {
  clickToClose: true,
};

const Alert = function Alert<T extends ElementType = 'div'>(props: AlertProps<T>) {
  const {
    as: AlertComponent = 'div',
    dropOldClass,
    variables,
    className,
    style,
    variant,
    dismissible,
    fade,
    onClose,
    clickToClose = DEFAULTS.clickToClose,
    ...rest
  } = props;

  const [isVisible, setIsVisible] = useState(true);
  const [isShowing, setIsShowing] = useState(false);
  const alertElement = useRef<HTMLDivElement | null>(null);
  const wasClosedByClick = useRef(false);

  const initiateClose = useCallback(() => {
    if (fade) {
      setIsShowing(false);
      wasClosedByClick.current = true;
    } else {
      setIsVisible(false);
    }
  }, [fade]);

  const handleClose = useCallback(() => {
    if (clickToClose) {
      initiateClose();

      if (!fade) {
        onClose?.();
      }
    } else {
      onClose?.(initiateClose);
    }
  }, [clickToClose, fade, initiateClose, onClose]);

  useEffect(() => {
    if (!fade) {
      return;
    }

    const element = alertElement.current;
    if (element) {
      const onTransitionEnd = () => {
        if (dismissible && wasClosedByClick.current) {
          setIsVisible(false);

          if (clickToClose) {
            onClose?.();
          }
        }
      };

      element.addEventListener('transitionend', onTransitionEnd);
      setIsShowing(true);

      return () => element.removeEventListener('transitionend', onTransitionEnd);
    }
  }, [clickToClose, dismissible, fade, onClose]);

  const renderOptions = useMemo(() => {
    const finalClassName = clsxUnique(
      !dropOldClass && 'alert',
      variant && `alert-${variant}`,
      dismissible && 'alert-dismissible',
      fade && 'fade',
      isShowing && 'show',
      className,
    );
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        return {
          include: true,
          transformedKey: AlertVariablesEnum[key] ? `${VARIABLE_BS_PREFIX}${AlertVariablesEnum[key]}` : key,
        };
      }),
      ...style,
    };

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
      <AlertComponent {...rest} {...renderOptions} ref={alertElement}>
        {props.children}
        {dismissible && <button type="button" className="btn-close" aria-label="Close" onClick={handleClose} />}
      </AlertComponent>
    )
  );
};

Alert.Link = AlertLink;

Alert.Heading = AlertHeading;

Alert.displayName = 'BRL.Alert';

export default Alert;
