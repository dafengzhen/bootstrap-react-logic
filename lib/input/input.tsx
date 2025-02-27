import { type ElementType, useMemo } from 'react';

import type { InputProps } from './types.ts';

import { classx, classxWithOptions, convertBsKeyToVar, findTruthyClass, processSlotClasses, stylex } from '../tools';

const Input = function Input<T extends ElementType = 'input'>(props: InputProps<T>) {
  const {
    as: Component = 'input' as ElementType,
    children,
    className,
    color,
    dropOldClass,
    endContent,
    isInvalid,
    isValid,
    nativeColor,
    nativeSize,
    onRef,
    readonlyPlainText,
    size,
    startContent,
    startEndContentClasses,
    style,
    type,
    variables,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(
      !dropOldClass &&
        findTruthyClass(
          ['form-check-input', type === 'checkbox' || type === 'radio'],
          ['form-control-plaintext', readonlyPlainText],
          ['form-range', type === 'range'],
          ['form-control', true],
        ),
      color && 'form-control-color',
      size && `form-control-${size}`,
      isValid && 'is-valid',
      isInvalid && 'is-invalid',
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      color: nativeColor,
      size: nativeSize,
      style: finalStyle,
      type,
    };
  }, [
    className,
    color,
    dropOldClass,
    isInvalid,
    isValid,
    nativeColor,
    nativeSize,
    readonlyPlainText,
    size,
    style,
    type,
    variables,
  ]);

  if (startContent || endContent) {
    const slotClassName = processSlotClasses(startEndContentClasses, {
      component: classxWithOptions(null, renderOptions.className, startContent && 'brl-ps-9', endContent && 'brl-pe-9'),
      container: 'd-inline-flex align-items-center position-relative',
      end: `position-absolute top-50 translate-middle-y brl-end-3`,
      start: `position-absolute top-50 translate-middle-y brl-start-3`,
    });

    return (
      <div className={slotClassName.container} data-slot-container="">
        {startContent && (
          <div className={slotClassName.start} data-slot-prefix="">
            {startContent}
          </div>
        )}
        <Component {...rest} {...renderOptions} className={slotClassName.component} data-slot-component="">
          {children}
        </Component>
        {endContent && (
          <div className={slotClassName.end} data-slot-suffix="">
            {endContent}
          </div>
        )}
      </div>
    );
  }

  return (
    <Component {...rest} {...renderOptions} ref={onRef}>
      {children}
    </Component>
  );
};

Input.displayName = 'BRL.Input';

export default Input;
