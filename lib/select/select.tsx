import { type ElementType, useMemo } from 'react';
import type { SelectProps } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  InputVariablesEnum,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';
import SelectOption from './select-option.tsx';

const Select = function Select<T extends ElementType = 'select'>(props: SelectProps<T>) {
  const {
    as: Component = 'select',
    dropOldClass,
    variables,
    className,
    style,
    children,
    size,
    nativeSize,
    disabled,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(!dropOldClass && 'form-select', size && `form-select-${size}`, className);
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
        disabled,
      },
      isValueValid,
    );
  }, [dropOldClass, size, className, variables, style, nativeSize, disabled]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

Select.Option = SelectOption;

Select.displayName = 'BRL.Select';

export default Select;
