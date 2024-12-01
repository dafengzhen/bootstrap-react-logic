import { type ElementType, useEffect, useMemo, useRef, useState } from 'react';

import type { NavTabPaneProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const NavTabPane = function NavTabPane<T extends ElementType = 'div'>(props: NavTabPaneProps<T>) {
  const {
    active: activeByDefault = false,
    as: Component = 'div' as ElementType,
    className,
    dropOldClass,
    fade = true,
    style,
    variables,
    ...rest
  } = props;

  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const element = useRef<HTMLDivElement | null>(null);

  const renderOptions = useMemo(() => {
    const finalClass = classx(
      !dropOldClass && 'tab-pane',
      fade && 'fade',
      active && 'active',
      show && 'show',
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
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
