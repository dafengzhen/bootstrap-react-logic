import { type ElementType, useEffect, useMemo, useRef, useState } from 'react';
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

const visibleByDefault = true;

const fadeByDefault = false;

const Alert = function Alert<T extends ElementType = 'div'>(props: AlertProps<T>) {
  const {
    as: Component = 'div',
    dropOldClass,
    variables,
    className,
    style,
    variant,
    show,
    dismissible,
    fade,
    ...rest
  } = props;
  const [isVisible, setIsVisible] = useState(visibleByDefault);
  const _fade = fade ?? fadeByDefault;
  const alertRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const value = show ?? visibleByDefault;
    setIsVisible(value);
  }, [show]);

  // useEffect(() => {
  //   const alertNode = alertRef.current;
  //   if (!alertNode) {
  //     return;
  //   }
  //
  //   const handleTransitionEnd = () => {
  //     console.log('end');
  //   };
  //
  //   alertNode.addEventListener('transitionrun', handleTransitionEnd);
  //   return () => {
  //     alertNode.removeEventListener('transitionend', handleTransitionEnd);
  //   };
  // }, []);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'alert',
      variant && `alert-${variant}`,
      dismissible && 'alert-dismissible',
      _fade && 'fade',
      className,
    );
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = AlertVariablesEnum[key];
        return {
          include: true,
          transformedKey: _value ? key : `${VARIABLE_BS_PREFIX}${_value}`,
        };
      }),
      ...style,
    };

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [dropOldClass, variant, dismissible, _fade, className, variables, style]);

  return isVisible && <Component {...rest} {...renderOptions} ref={alertRef}></Component>;
};

Alert.Link = AlertLink;

Alert.Heading = AlertHeading;

Alert.displayName = 'BRL.Alert';

export default Alert;
