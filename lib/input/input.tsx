import { type HTMLInputTypeAttribute, type ElementType, type ElementRef, type LegacyRef, useMemo } from 'react';

import type { InputProps } from './types.ts';

import {
  processSlotClasses,
  convertBsKeyToVar,
  clsxWithOptions,
  findTruthyClass,
  filterOptions,
  isValueValid,
  clsxUnique,
  clsxStyle,
} from '../tools';
import inputStyles from './input.module.scss';

const Input = function Input<T extends ElementType = 'input'>(
  props: {
    type?: HTMLInputTypeAttribute | undefined;
  } & InputProps<T>,
) {
  const {
    as: Component = 'input',
    startEndContentClasses,
    readonlyPlainText,
    dropOldClass,
    startContent,
    nativeColor,
    endContent,
    nativeSize,
    className,
    isInvalid,
    variables,
    children,
    isValid,
    color,
    onRef,
    style,
    size,
    type,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
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
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    return filterOptions(
      {
        className: finalClass,
        color: nativeColor,
        style: finalStyle,
        size: nativeSize,
        type,
      },
      isValueValid,
    );
  }, [
    dropOldClass,
    type,
    readonlyPlainText,
    color,
    size,
    isValid,
    isInvalid,
    className,
    variables,
    style,
    nativeSize,
    nativeColor,
  ]);

  if (startContent || endContent) {
    const slotClassName = processSlotClasses(startEndContentClasses, {
      component: clsxWithOptions(
        null,
        renderOptions.className,
        startContent && inputStyles.brlPs9,
        endContent && inputStyles.brlPe9,
      ),
      start: `position-absolute top-50 translate-middle-y ${inputStyles.brlStart3}`,
      end: `position-absolute top-50 translate-middle-y ${inputStyles.brlEnd3}`,
      container: 'd-inline-flex align-items-center position-relative',
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
    <Component {...rest} {...renderOptions} ref={onRef as LegacyRef<ElementRef<'input'>>}>
      {children}
    </Component>
  );
};

Input.displayName = 'BRL.Input';

export default Input;
