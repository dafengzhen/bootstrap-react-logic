import { type ElementType, useMemo } from 'react';

import type { TextareaProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const Textarea = function Textarea<T extends ElementType = 'textarea'>(props: TextareaProps<T>) {
  const {
    as: Component = 'textarea' as ElementType,
    children,
    className,
    defaultValue,
    dropOldClass,
    isInvalid,
    isValid,
    style,
    variables,
    ...rest
  } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(
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
