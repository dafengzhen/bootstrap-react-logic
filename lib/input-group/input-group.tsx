import { type ElementType, useMemo } from 'react';
import type { ElementProps, Props } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  InputVariablesEnum,
  type IntrinsicElements,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';

const InputGroup = function InputGroup<T extends ElementType = 'input'>(
  props: Props<T>,
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
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass &&
        (readonlyPlainText ? 'form-control-plaintext' : 'form-control'),
      color && 'form-control-color',
      size && `form-control-${size}`,
      className,
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

InputGroup.displayName = 'BRL.InputGroup';

export default InputGroup;
