import { type ElementRef, type ElementType, type HTMLInputTypeAttribute, type LegacyRef, useMemo } from 'react';
import type { InputProps } from './types.ts';
import {
  clsxStyle,
  clsxUnique,
  clsxWithOptions,
  convertBsKeyToVar,
  filterOptions,
  getFirstNonEmptyClass,
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
    dropOldClass,
    variables,
    className,
    style,
    children,
    size,
    nativeSize,
    readonlyPlainText,
    isValid,
    isInvalid,
    color,
    nativeColor,
    type,
    startContent,
    endContent,
    startEndContentClasses,
    onRef,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass &&
        getFirstNonEmptyClass({
          'form-range': type === 'range',
          'form-check-input': type === 'checkbox' || type === 'radio',
          'form-control-plaintext': readonlyPlainText,
          'form-control': true,
        }),
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
        style: finalStyle,
        size: nativeSize,
        color: nativeColor,
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
      container: 'd-inline-flex align-items-center position-relative',
      start: `position-absolute top-50 translate-middle-y ${inputStyles.brlStart3}`,
      end: `position-absolute top-50 translate-middle-y ${inputStyles.brlEnd3}`,
      component: clsxWithOptions(
        null,
        renderOptions.className,
        startContent && inputStyles.brlPs9,
        endContent && inputStyles.brlPe9,
      ),
    });

    return (
      <div data-slot-container="" className={slotClassName.container}>
        {startContent && (
          <div data-slot-prefix="" className={slotClassName.start}>
            {startContent}
          </div>
        )}
        <Component {...rest} {...renderOptions} data-slot-component="" className={slotClassName.component}>
          {children}
        </Component>
        {endContent && (
          <div data-slot-suffix="" className={slotClassName.end}>
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
