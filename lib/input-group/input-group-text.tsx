import { type ElementType, useMemo } from 'react';
import type { InputGroupTextProps } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  InputGroupTextVariablesEnum,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';

const InputGroupText = function InputGroupText<T extends ElementType = 'span'>(props: InputGroupTextProps<T>) {
  const { as: Component = 'span', dropOldClass, variables, className, style, children, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'input-group-text', className);
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = InputGroupTextVariablesEnum[key];
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

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

InputGroupText.displayName = 'BRL.InputGroupText';

export default InputGroupText;
