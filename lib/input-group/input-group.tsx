import { type ElementType, useMemo } from 'react';

import type { InputGroupProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';
import InputGroupText from './input-group-text.tsx';

const InputGroup = function InputGroup<T extends ElementType = 'div'>(props: InputGroupProps<T>) {
  const {
    as: Component = 'div' as ElementType,
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
    const finalClass = classx(
      !dropOldClass && 'input-group',
      nowrap && 'flex-nowrap',
      size && `input-group-${size}`,
      hasValidation && 'has-validation',
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, hasValidation, nowrap, size, style, variables]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

InputGroup.Text = InputGroupText;

InputGroup.displayName = 'BRL.InputGroup';

export default InputGroup;
