import { type ElementType, useMemo } from 'react';

import type { InputGroupProps } from './types.ts';

import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';
import InputGroupText from './input-group-text.tsx';

const InputGroup = function InputGroup<T extends ElementType = 'div'>(props: InputGroupProps<T>) {
  const {
    as: Component = 'div',
    children,
    className,
    dropOldClass,
    hasValidation,
    nowrap,
    size,
    style,
    variables,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'input-group',
      nowrap && 'flex-nowrap',
      size && `input-group-${size}`,
      hasValidation && 'has-validation',
      className,
    );
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [dropOldClass, nowrap, size, hasValidation, className, variables, style]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

InputGroup.Text = InputGroupText;

InputGroup.displayName = 'BRL.InputGroup';

export default InputGroup;
