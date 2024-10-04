import { type ElementType, useMemo } from 'react';
import { SelectOptionElementProps, SelectOptionProps } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  InputVariablesEnum,
  type IntrinsicElements,
  isValueValid,
  VARIABLE_BS_PREFIX,
} from '../tools';

const SelectOption = function SelectOption<T extends ElementType = 'option'>(
  props: SelectOptionProps<T>,
) {
  const {
    as: Component = 'option',
    render,
    skipCompWrap,
    variables,
    className,
    style,
    children,
    disabled,
    ...rest
  } = props;

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

  if (render && skipCompWrap) {
    return render({ ...rest, ...renderOptions } as SelectOptionElementProps<T>);
  }

  const renderContent = render
    ? render({ ...rest, ...renderOptions } as SelectOptionElementProps<T>)
    : children;

  return (
    <Component {...(rest as IntrinsicElements['option'])} {...renderOptions}>
      {renderContent}
    </Component>
  );
};

SelectOption.displayName = 'BRL.SelectOption';

export default SelectOption;
