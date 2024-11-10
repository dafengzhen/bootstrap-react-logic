import { type ElementType, useMemo } from 'react';

import type { SelectOptionProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';

const SelectOption = function SelectOption<T extends ElementType = 'option'>(props: SelectOptionProps<T>) {
  const { as: Component = 'option', children, className, disabled, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(className);
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    return filterOptions(
      {
        className: finalClass,
        disabled,
        style: finalStyle,
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
