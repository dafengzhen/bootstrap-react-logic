import { type ElementType, useMemo } from 'react';
import type { SelectOptionProps } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  InputVariablesEnum,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';

const SelectOption = function SelectOption<T extends ElementType = 'option'>(props: SelectOptionProps<T>) {
  const { as: Component = 'option', variables, className, style, children, disabled, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(className);
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
        disabled,
      },
      isValueValid,
    );
  }, [className, variables, style, disabled]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

SelectOption.displayName = 'BRL.SelectOption';

export default SelectOption;
