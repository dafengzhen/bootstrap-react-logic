import { type ElementType, type HTMLInputTypeAttribute, useMemo } from 'react';
import type { ElementProps, Props } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  InputVariablesEnum,
  type IntrinsicElements,
  isValueValid,
  processClassName,
  VARIABLE_BS_PREFIX,
} from '../tools';

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

  return (
    <Component {...(rest as IntrinsicElements['input'])} {...renderOptions}>
      {renderContent}
    </Component>
  );
};

Input.displayName = 'BRL.Input';

export default Input;
