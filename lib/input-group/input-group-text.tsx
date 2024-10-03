import { type ElementType, useMemo } from 'react';
import { InputGroupTextElementProps, InputGroupTextProps } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  InputVariablesEnum,
  type IntrinsicElements,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';

const InputGroupText = function InputGroupText<T extends ElementType = 'span'>(
  props: InputGroupTextProps<T>,
) {
  const {
    as: Component = 'span',
    render,
    skipCompWrap,
    dropOldClass,
    variables,
    className,
    style,
    children,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'input-group-text',
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
      },
      isValueValid,
    );
  }, [dropOldClass, className, variables, style]);

  if (render && skipCompWrap) {
    return render({
      ...rest,
      ...renderOptions,
    } as InputGroupTextElementProps<T>);
  }

  const renderContent = render
    ? render({ ...rest, ...renderOptions } as InputGroupTextElementProps<T>)
    : children;

  return (
    <Component {...(rest as IntrinsicElements['span'])} {...renderOptions}>
      {renderContent}
    </Component>
  );
};

InputGroupText.displayName = 'BRL.InputGroupText';

export default InputGroupText;
