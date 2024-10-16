import { type ElementType, useMemo } from 'react';
import type { TextareaProps } from './types.ts';
import {
  clsxUnique,
  filterAndTransformProperties,
  filterOptions,
  isValueValid,
  TextareaVariablesEnum,
  VARIABLE_BS_PREFIX,
} from '../tools';

const Textarea = function Textarea<T extends ElementType = 'textarea'>(props: TextareaProps<T>) {
  const {
    as: Component = 'textarea',
    dropOldClass,
    variables,
    className,
    style,
    children,
    defaultValue,
    isValid,
    isInvalid,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'form-control',
      isValid && 'is-valid',
      isInvalid && 'is-invalid',
      className,
    );
    const finalStyle = {
      ...filterAndTransformProperties(variables, (_, key) => {
        const _value = TextareaVariablesEnum[key];
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
