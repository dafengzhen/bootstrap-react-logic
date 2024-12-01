import { type ElementType, useMemo } from 'react';

import type { InputGroupTextProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';

const InputGroupText = function InputGroupText<T extends ElementType = 'span'>(props: InputGroupTextProps<T>) {
  const { as: Component = 'span' as ElementType, children, className, dropOldClass, style, variables, ...rest } = props;

  const renderOptions = useMemo(() => {
    const finalClass = classx(!dropOldClass && 'input-group-text', className);
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, dropOldClass, style, variables]);

  return (
    <Component {...rest} {...renderOptions}>
      {children}
    </Component>
  );
};

InputGroupText.displayName = 'BRL.InputGroupText';

export default InputGroupText;
