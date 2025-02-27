import {
  arrow,
  autoUpdate,
  flip,
  type FlipOptions,
  offset,
  type Placement,
  shift,
  type ShiftOptions,
  size,
  type SizeOptions,
  useFloating,
} from '@floating-ui/react';
import { type ElementType, type HTMLProps, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import type { PopoverProps } from './types.ts';

import { classx, convertBsKeyToVar, findTruthyClassOrDefault, isArray, mergeProps, stylex } from '../tools';
import PopoverArrow from './popover-arrow.tsx';
import PopoverBody from './popover-body.tsx';
import PopoverHeader from './popover-header.tsx';

const Popover = function Popover<T extends ElementType = 'div'>(props: PopoverProps<T>) {
  const {
    arrowProps,
    as: Component = 'div' as ElementType,
    body,
    bodyProps,
    className,
    container: containerByDefault,
    dropOldClass,
    fade = true,
    header,
    headerProps,
    offset: offsetByDefault,
    onChange: onChangeByDefault,
    placement = 'end',
    style,
    trigger,
    triggerType,
    triggerWrapper,
    variables,
    visible: visibleByDefault = false,
    ...rest
  } = props;

  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const arrowElement = useRef<HTMLDivElement | null>(null);
  const [container, setContainer] = useState<HTMLElement | null | undefined>(
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
    onOpenChange: setShow,
    open: show,
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
  });

  const handleChange = useCallback(
    (value: boolean) => {
      onChangeByDefault?.(value);
    },
    [onChangeByDefault],
  );

  const triggerTypes = useMemo(() => (isArray(triggerType) ? triggerType : [triggerType]), [triggerType]);
  const renderOptions = useMemo(() => {
    const finalClass = classx(
      !dropOldClass && 'popover',
      fade && 'fade',
      show && 'show',
      placement && {
        'bs-popover-bottom': placement === 'bottom',
        'bs-popover-end': placement === 'end' || placement === 'right',
        'bs-popover-start': placement === 'start' || placement === 'left',
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

    const newTriggerTypes: { fn: () => void; type: 'focus' | 'hover' | 'mouseenter' | 'mouseleave' }[] = [];
    if (triggerTypes.includes('focus')) {
      newTriggerTypes.push({
        fn: onFocus,
        type: 'focus',
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
        fn: onMouseEnter,
        type: 'mouseenter',
      });
      newTriggerTypes.push({
        fn: onMouseLeave,
        type: 'mouseleave',
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
        newTriggerTypes.forEach(({ fn, type }) => currentElement.addEventListener(type, fn));
      }

      return () => {
        document.body.removeEventListener('click', onClick);

        if (currentElement) {
          newTriggerTypes.forEach(({ fn, type }) => currentElement.removeEventListener(type, fn));
        }
      };
    }
  }, [mouseEnter, handleChange, refs.reference, triggerTypes]);

  return (
    <>
      {trigger &&
        (triggerWrapper ? (
          <span className="d-inline-block" ref={hoverContainerElement} tabIndex={0}>
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
            ref={refs.setFloating}
            style={{ ...renderOptions.style, ...floatingStyles }}
          >
            <PopoverArrow
              {...mergeProps(arrowProps, {
                style: {
                  ...arrowProps?.style,
                  left: middlewareData.arrow?.x,
                  top: middlewareData.arrow?.y,
                },
              })}
              onRef={(instance: HTMLDivElement | null) => {
                arrowElement.current = instance;
              }}
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
