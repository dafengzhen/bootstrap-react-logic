import { type ElementType, useCallback, useEffect, useMemo, useState } from 'react';

import type { AlertProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';
import AlertHeading from './alert-heading.tsx';
import AlertLink from './alert-link.tsx';

const Alert = function Alert<T extends ElementType = 'div'>(props: AlertProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    className,
    dismissible,
    dropOldClass,
    onVisibleChange: onVisibleChangeByDefault,
    style,
    variables,
    variant,
    visible: visibleByDefault = true,
    ...rest
  } = props;

  const [fade] = useState(true);
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);

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

  const handleVisibilityChange = useCallback(
    (isVisible = false) => {
      setVisible(isVisible);
      onVisibleChangeByDefault?.(isVisible);
    },
    [onVisibleChangeByDefault],
  );

  const onTransitionEnd = useCallback(() => {
    if (!visibleByDefault) {
      handleVisibilityChange();
    }
  }, [handleVisibilityChange, visibleByDefault]);

  useEffect(() => {
    if (visibleByDefault && !visible) {
      setVisible(true);
    }

    if (visible) {
      setShow(visibleByDefault);

      return () => {
        if (!visibleByDefault) {
          handleVisibilityChange();
        }
      };
    }
  }, [handleVisibilityChange, visible, visibleByDefault]);

  return visible && <Component {...rest} {...renderOptions} onTransitionEnd={onTransitionEnd} />;
};

Alert.Link = AlertLink;

Alert.Heading = AlertHeading;

Alert.displayName = 'BRL.Alert';

export default Alert;
