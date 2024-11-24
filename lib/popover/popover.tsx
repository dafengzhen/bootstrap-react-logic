import {
  type ShiftOptions,
  type FlipOptions,
  type SizeOptions,
  type Placement,
  useFloating,
  autoUpdate,
  offset,
  arrow,
  shift,
  flip,
  size,
} from '@floating-ui/react';
import { type ElementType, type HTMLProps, useCallback, useEffect, useState, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';

import type { PopoverProps } from './types.ts';

import { findTruthyClassOrDefault, convertBsKeyToVar, clsxUnique, mergeProps, isArray, stylex } from '../tools';
import PopoverHeader from './popover-header.tsx';
import PopoverArrow from './popover-arrow.tsx';
import PopoverBody from './popover-body.tsx';

const Popover = function Popover<T extends ElementType = 'div'>(props: PopoverProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    visible: visibleByDefault = false,
    container: containerByDefault,
    onChange: onChangeByDefault,
    offset: offsetByDefault,
    placement = 'end',
    triggerWrapper,
    dropOldClass,
    fade = true,
    headerProps,
    triggerType,
    arrowProps,
    bodyProps,
    className,
    variables,
    trigger,
    header,
    style,
    body,
    ...rest
  } = props;

  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const arrowElement = useRef<HTMLDivElement | null>(null);
  const [container, setContainer] = useState<HTMLElement | undefined | null>(
    typeof containerByDefault !== 'string' ? containerByDefault : null,
  );
  const [mouseEnter, setMouseEnter] = useState(false);
  const onFocusFn = useRef(() => {
    handleChange(true);
  });
  const onHoverMouseEnterFn = useRef(() => {
    handleChange(true);
  });
  const onHoverMouseLeaveFn = useRef(() => {
    handleChange(false);
  });
  const onMouseEnterFn = useRef(() => {
    setMouseEnter(true);
  });
  const onMouseLeaveFn = useRef(() => {
    setMouseEnter(false);
  });
  const hoverContainerElement = useRef<HTMLSpanElement | null>(null);

  const { floatingStyles, middlewareData, refs } = useFloating({
    middleware: [
      offset(() => offsetByDefault ?? 8, [show]),
      shift((state) => state as ShiftOptions, [show]),
      flip((state) => state as FlipOptions, [show]),
      size((state) => state as SizeOptions, [show]),
      arrow(
        (state) => ({
          ...state,
          element: arrowElement,
        }),
        [show],
      ),
    ],
    placement: findTruthyClassOrDefault(
      [
        ['bottom', placement === 'bottom'],
        ['left', placement === 'start' || placement === 'left'],
        ['right', placement === 'end' || placement === 'right'],
        ['top', placement === 'top'],
      ],
      'right',
    ) as Placement,
    whileElementsMounted: autoUpdate,
    onOpenChange: setShow,
    open: show,
  });

  const handleChange = useCallback(
    (value: boolean) => {
      onChangeByDefault?.(value);
    },
    [onChangeByDefault],
  );

  const triggerTypes = useMemo(() => (isArray(triggerType) ? triggerType : [triggerType]), [triggerType]);
  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'popover',
      fade && 'fade',
      show && 'show',
      placement && {
        'bs-popover-start': placement === 'start' || placement === 'left',
        'bs-popover-end': placement === 'end' || placement === 'right',
        'bs-popover-bottom': placement === 'bottom',
        'bs-popover-top': placement === 'top',
      },
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, fade, placement, show, style, variables]);
  const getReferenceProps = useMemo(() => {
    return (userProps?: HTMLProps<Element>) => ({ ...userProps });
  }, []);

  useEffect(() => {
    if (visibleByDefault && !visible) {
      setVisible(true);
      return;
    }

    const currentElement = refs.floating.current;
    if (!currentElement) {
      return;
    }

    const onTransitionend = () => {
      if (visibleByDefault) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    currentElement.addEventListener('transitionend', onTransitionend);

    let frame: number;
    if (visibleByDefault) {
      frame = requestAnimationFrame(() => setShow(true));
    } else {
      setShow(false);
    }

    return () => {
      currentElement.removeEventListener('transitionend', onTransitionend);

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [refs.floating, visible, visibleByDefault]);
  useEffect(() => {
    if (typeof containerByDefault === 'string') {
      const selector: HTMLElement | null = containerByDefault.startsWith('#')
        ? document.getElementById(containerByDefault.slice(1))
        : document.querySelector(containerByDefault);

      setContainer(selector);
    } else {
      setContainer(containerByDefault);
    }
  }, [containerByDefault]);
  useEffect(() => {
    const onFocus = onFocusFn.current;
    const onHoverMouseEnter = onHoverMouseEnterFn.current;
    const onHoverMouseLeave = onHoverMouseLeaveFn.current;
    const onMouseEnter = onMouseEnterFn.current;
    const onMouseLeave = onMouseLeaveFn.current;
    const currentHoverContainerElement = hoverContainerElement.current;

    const newTriggerTypes: { type: 'mouseenter' | 'mouseleave' | 'focus' | 'hover'; fn: () => void }[] = [];
    if (triggerTypes.includes('focus')) {
      newTriggerTypes.push({
        type: 'focus',
        fn: onFocus,
      });
    }

    if (triggerTypes.includes('hover')) {
      newTriggerTypes.push({
        fn: onHoverMouseEnter,
        type: 'mouseenter',
      });
      newTriggerTypes.push({
        fn: onHoverMouseLeave,
        type: 'mouseleave',
      });
    } else {
      newTriggerTypes.push({
        type: 'mouseenter',
        fn: onMouseEnter,
      });
      newTriggerTypes.push({
        type: 'mouseleave',
        fn: onMouseLeave,
      });
    }

    if (newTriggerTypes.length) {
      let currentElement = refs.reference.current as HTMLElement | null;
      if (currentHoverContainerElement) {
        currentElement = currentHoverContainerElement;
      }

      const onClick = () => {
        if (!mouseEnter) {
          setShow(false);
          handleChange(false);
        }
      };

      document.body.addEventListener('click', onClick);

      if (currentElement) {
        newTriggerTypes.forEach(({ type, fn }) => currentElement.addEventListener(type, fn));
      }

      return () => {
        document.body.removeEventListener('click', onClick);

        if (currentElement) {
          newTriggerTypes.forEach(({ type, fn }) => currentElement.removeEventListener(type, fn));
        }
      };
    }
  }, [mouseEnter, handleChange, refs.reference, triggerTypes]);

  return (
    <>
      {trigger &&
        (triggerWrapper ? (
          <span ref={hoverContainerElement} className="d-inline-block" tabIndex={0}>
            {trigger(refs.setReference, getReferenceProps)}
          </span>
        ) : (
          trigger(refs.setReference, getReferenceProps)
        ))}
      {createPortal(
        visible && (
          <Component
            {...rest}
            {...renderOptions}
            style={{ ...renderOptions.style, ...floatingStyles }}
            ref={refs.setFloating}
          >
            <PopoverArrow
              {...mergeProps(arrowProps, {
                style: {
                  ...arrowProps?.style,
                  left: middlewareData.arrow?.x,
                  top: middlewareData.arrow?.y,
                },
              })}
              onRef={(instance: HTMLDivElement | null) => (arrowElement.current = instance)}
            ></PopoverArrow>
            <PopoverHeader {...headerProps}>{header}</PopoverHeader>
            <PopoverBody {...bodyProps}>{body}</PopoverBody>
          </Component>
        ),
        container ? container : document.body,
      )}
    </>
  );
};

Popover.Arrow = PopoverArrow;

Popover.Header = PopoverHeader;

Popover.Body = PopoverBody;

Popover.displayName = 'BRL.Popover';

export default Popover;
