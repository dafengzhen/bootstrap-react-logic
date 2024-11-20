import { type ElementRef, type ElementType, type HTMLInputTypeAttribute, type LegacyRef, useMemo } from 'react';

import type { InputProps } from './types.ts';

import {
  clsxStyle,
  clsxUnique,
  clsxWithOptions,
  convertBsKeyToVar,
  filterOptions,
  findTruthyClass,
  isValueValid,
  processSlotClasses,
} from '../tools';
import inputStyles from './input.module.scss';

const Input = function Input<T extends ElementType = 'input'>(
  props: InputProps<T> & {
    type?: HTMLInputTypeAttribute | undefined;
  },
) {
  const {
    as: Component = 'input',
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
        size: nativeSize,
        style: finalStyle,
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
      container: 'd-inline-flex align-items-center position-relative',
      end: `position-absolute top-50 translate-middle-y ${inputStyles.brlEnd3}`,
      start: `position-absolute top-50 translate-middle-y ${inputStyles.brlStart3}`,
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
