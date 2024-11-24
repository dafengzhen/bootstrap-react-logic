import { type ElementType, useMemo } from 'react';

import type { TextareaProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';

const Textarea = function Textarea<T extends ElementType = 'textarea'>(props: TextareaProps<T>) {
  const {
    as: Component = 'textarea',
    defaultValue,
    dropOldClass,
    className,
    isInvalid,
    variables,
    children,
    isValid,
    style,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'form-control',
      isValid && 'is-valid',
      isInvalid && 'is-invalid',
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
  }, [dropOldClass, isValid, isInvalid, className, variables, style]);

  return (
    <Component
      {...rest}
      {...renderOptions}
      defaultValue={
        defaultValue ?? (typeof children === 'string' || typeof children === 'number' ? children : undefined)
      }
    ></Component>
  );
};

Textarea.displayName = 'BRL.Textarea';

export default Textarea;
