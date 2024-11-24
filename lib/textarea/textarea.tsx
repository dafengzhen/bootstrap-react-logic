import { type ElementType, useMemo } from 'react';

import type { TextareaProps } from './types.ts';

import { convertBsKeyToVar, clsxUnique, stylex } from '../tools';

const Textarea = function Textarea<T extends ElementType = 'textarea'>(props: TextareaProps<T>) {
  const {
    as: Component = 'textarea' as ElementType,
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
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
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
