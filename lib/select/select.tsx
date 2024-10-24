import { type ElementType, useMemo } from 'react';
import type { SelectProps } from './types.ts';
import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';
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
    isValid,
    isInvalid,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'form-select',
      isValid && 'is-valid',
      isInvalid && 'is-invalid',
      size && `form-select-${size}`,
      className,
    );
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
        size: nativeSize,
        disabled,
      },
      isValueValid,
    );
  }, [dropOldClass, isValid, isInvalid, size, className, variables, style, nativeSize, disabled]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

Select.Option = SelectOption;

Select.displayName = 'BRL.Select';

export default Select;
