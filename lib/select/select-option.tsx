import { type ElementType, useMemo } from 'react';

import type { SelectOptionProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const SelectOption = function SelectOption<T extends ElementType = 'option'>(props: SelectOptionProps<T>) {
  const { as: Component = 'option', className, variables, children, disabled, style, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(className);
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

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
