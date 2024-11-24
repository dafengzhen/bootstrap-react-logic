import { type ElementType, useMemo } from 'react';

import type { SelectProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';
import SelectOption from './select-option.tsx';

const Select = function Select<T extends ElementType = 'select'>(props: SelectProps<T>) {
  const {
    as: Component = 'select' as ElementType,
    dropOldClass,
    nativeSize,
    className,
    isInvalid,
    variables,
    children,
    isValid,
    style,
    size,
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
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
      size: nativeSize,
    };
  }, [className, dropOldClass, isInvalid, isValid, nativeSize, size, style, variables]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

Select.Option = SelectOption;

Select.displayName = 'BRL.Select';

export default Select;
