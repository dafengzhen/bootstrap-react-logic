import {
  ElementRef,
  type ElementType,
  type HTMLInputTypeAttribute,
  LegacyRef,
  useMemo,
} from 'react';
import type { ElementProps, Props } from './types.ts';
import {
  clsxUnique,
  clsxWithOptions,
  filterAndTransformProperties,
  filterOptions,
  InputVariablesEnum,
  type IntrinsicElements,
  isValueValid,
  processClassName,
  processSlotClasses,
  VARIABLE_BS_PREFIX,
} from '../tools';
import inputStyles from './input.module.scss';

const Input = function Input<T extends ElementType = 'input'>(
  props: Props<T> & {
    type?: HTMLInputTypeAttribute | undefined;
  },
) {
  const {
    as: Component = 'input',
    render,
    skipCompWrap,
    dropOldClass,
    variables,
    className,
    style,
    children,
    size,
    nativeSize,
    readonlyPlainText,
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
    const finalClass = processClassName(
      clsxUnique(
        !dropOldClass &&
          (readonlyPlainText ? 'form-control-plaintext' : 'form-control'),
        color && 'form-control-color',
        size && `form-control-${size}`,
        className,
      ),
      [
        (classNames) => {
          if (type === 'checkbox' || type === 'radio') {
            return classNames.filter(
              (className) => className !== 'form-control',
            );
          }
        },
      ],
    );
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = InputVariablesEnum[key];
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
        size: nativeSize,
        color: nativeColor,
        type,
      },
      isValueValid,
    );
  }, [
    dropOldClass,
    readonlyPlainText,
    color,
    size,
    className,
    variables,
    style,
    nativeSize,
    nativeColor,
    type,
  ]);

  if (render && skipCompWrap) {
    return render({ ...rest, ...renderOptions } as ElementProps<T>);
  }

  const renderContent = render
    ? render({ ...rest, ...renderOptions } as ElementProps<T>)
    : children;

  if (startContent || endContent) {
    const slotClassName = processSlotClasses(startEndContentClasses, {
      container: 'd-inline-flex align-items-center position-relative',
      start: `position-absolute top-50 translate-middle-y ${inputStyles.brlInputStart3}`,
      end: `position-absolute top-50 translate-middle-y ${inputStyles.brlInputEnd3}`,
      component: clsxWithOptions(
        null,
        renderOptions.className,
        startContent && inputStyles.brlInputPs9,
        endContent && inputStyles.brlInputPe9,
      ),
    });

    return (
      <div data-slot-container="" className={slotClassName.container}>
        {startContent && (
          <div data-slot-prefix="" className={slotClassName.start}>
            {startContent}
          </div>
        )}
        <Component
          {...(rest as IntrinsicElements['input'])}
          {...renderOptions}
          data-slot-component=""
          className={slotClassName.component}
        >
          {renderContent}
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
    <Component
      {...(rest as IntrinsicElements['input'])}
      {...renderOptions}
      ref={onRef as LegacyRef<ElementRef<'input'>>}
    >
      {renderContent}
    </Component>
  );
};

Input.displayName = 'BRL.Input';

export default Input;
