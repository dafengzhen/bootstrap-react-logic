import { type ElementType, useEffect, useState, useMemo, useRef } from 'react';

import type { NavTabPaneProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const NavTabPane = function NavTabPane<T extends ElementType = 'div'>(props: NavTabPaneProps<T>) {
  const {
    active: activeByDefault = false,
    as: Component = 'div',
    dropOldClass,
    fade = true,
    className,
    variables,
    style,
    ...rest
  } = props;

  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const element = useRef<HTMLDivElement | null>(null);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'tab-pane',
      fade && 'fade',
      active && 'active',
      show && 'show',
      className,
    );
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [active, className, dropOldClass, fade, show, style, variables]);

  useEffect(() => {
    if (!fade) {
      setActive(activeByDefault);
      setShow(activeByDefault);
      return;
    }

    if (activeByDefault) {
      if (!active) {
        setActive(true);
        return;
      }

      const currentElement = element.current;
      if (!currentElement) {
        return;
      }

      const onTransitionend = () => {
        if (activeByDefault) {
          setShow(true);
        } else {
          setActive(false);
        }
      };

      currentElement.addEventListener('transitionend', onTransitionend);
      setActive(true);
      const frame = requestAnimationFrame(() => {
        setShow(true);
      });

      return () => {
        currentElement.removeEventListener('transitionend', onTransitionend);

        if (frame) {
          cancelAnimationFrame(frame);
        }
      };
    } else {
      setShow(false);
      setActive(false);
    }
  }, [active, activeByDefault, fade]);

  return <Component {...rest} {...renderOptions} ref={element} />;
};

NavTabPane.displayName = 'BRL.NavTabPane';

export default NavTabPane;
